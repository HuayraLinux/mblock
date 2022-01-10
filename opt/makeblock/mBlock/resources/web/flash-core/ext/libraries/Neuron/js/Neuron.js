// Neuron.js

(function(ext) {
  var _neuronsEngine = null;
  var device = null;
  var _rxBuf = [];

  // Sensor states:
  var TRANSFER = {
    "Slot1": 1,
    "Slot2": 2,
    "Slot3": 3,
    "Slot4": 4,
    "Clockwise": 1,
    "Counter-Clockwise": -1,
    "Light On": 1,
    "Light Off": 0,
    "humidity": 0,
    "temperature": 1,
    "X-Axis": 1,
    "Y-Axis": 2,
    "Z-Axis": 3,
    "left": 1,
    "right": 2,
    "all": 3,
    "none": 0,
    "FACEID": {'Angry':1,'Drowsy':2,'Enlarged':3,'Fixed':4,'Happy':5,'Mini':6,'Normal':7,'Sad':8},
    'gyroSubandCancelCommands': {
      'shake':   [[0x01], [0x01,0x01,100]],
      'x_angle': [[0x08], [0x01,0x08,40]],
      'y_angle': [[0x09], [0x01,0x09,40]],
      'z_angle': [[0x0a], [0x01,0x0a,40]],
      'x_acceleration': [[0x02], [0x01,0x02,40]],
      'y_acceleration': [[0x03], [0x01,0x03,40]],
      'z_acceleration': [[0x04], [0x01,0x04,40]]
    },
    getRGBIndex: function (type){
      var map_ = { 'Red': 0, 'Green': 1, 'Blue': 2}
      return map_[type];
    },
    threaholdNumber(number, min, max){
      if (number > max){
        number = max;
      }
      if (number < min){
        number = min;
      }
      return number;
    }
  }

  var LED_PANEL = {
    "clear display": [
      0, 64,
      0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0
    ],
    "smile face": [
      0, 64,
      0, 0, 0, 0, 0, 0, 0, 0,
      0, 4, 0, 0, 0, 0, 4, 0,
      4, 0, 4, 0, 0, 4, 0, 4,
      0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0,
      0, 4, 0, 0, 0, 0, 4, 0,
      0, 0, 4, 4, 4, 4, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0
    ],
     "sad face": [
      0, 64,
      0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0,
      2, 2, 2, 0, 0, 2, 2, 2,
      0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 2, 2, 2, 2, 0, 0,
      0, 2, 0, 0, 0, 0, 2, 0,
      0, 0, 0, 0, 0, 0, 0, 0
    ],
    "angry face": [
      0, 64,
      0, 0, 0, 0, 0, 0, 0, 0,
      1, 0, 0, 0, 0, 0, 0, 1,
      0, 1, 1, 0, 0, 1, 1, 0,
      0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 1, 1, 0, 0,
      0, 0, 1, 1, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0
    ],
    "show heart": [
      0, 64,
      0, 0, 0, 0, 0, 0, 0, 0,
      0, 1, 1, 0, 0, 1, 1, 0,
      1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1,
      0, 1, 1, 1, 1, 1, 1, 0,
      0, 0, 1, 1, 1, 1, 0, 0,
      0, 0, 0, 1, 1, 0, 0, 0
    ]
  }

  var EL_WIRES_STATUS = {};
  var EL_WIRES_COUNT = 0;

  ext.resetAll = function() {
    device.send([0xff, 0x55, 2, 0, 4]);
  };
  ext.runArduino = function() {
    responseValue();
  };
  //逻辑引擎没有做范围限制，所以需要在此设置范围，其他块亦然
  ext.runDCMotor = function(id, slot, direction, power) {
    power = TRANSFER.threaholdNumber(power, -100, 100);
    _neuronsEngine.sendBlockCommand('MOTORS', 'SET_PORT' + TRANSFER[slot], [TRANSFER[direction] * power], id);
  };

  ext.runServo = function(id, slot, angle) {
    angle = TRANSFER.threaholdNumber(angle, 0, 180);
    _neuronsEngine.sendBlockCommand('SERVO', 'SET_SERVO' + TRANSFER[slot] + '_ANGLE', [angle], id);
  };

  ext.runRGBLight = function(id, r, g, b) {
    //因固件问题值为31及以下时led不亮，故将输入值 1 ~ 255 映射成 32 ~ 255
    function shim(x){
      //范围 0-255
      x = TRANSFER.threaholdNumber(x, 0, 255);
      return Math.floor(0.88*x+ 31.12);
    }
    // _neuronsEngine.sendBlockCommand('LED', 'SET_COLOUR', [shim(r), shim(g), shim(b)], id);
    _neuronsEngine.sendBlockCommand('LED', 'SET_COLOUR', [r, g, b], id);
  };

  // 8 * 8 LED panel
  ext.runLEDPanelSingle = function(id, x, y, r, g, b) {
    _neuronsEngine.sendBlockCommand('LEDPANEL', 'DISPLAY_SINGLE_LED', [(y-1) * 8 + x, r, g, b], id);
  };

  ext.runLEDPanel = function(id, panel) {
    _neuronsEngine.sendBlockCommand('LEDPANEL', 'DISPLAY_IMAGE', LED_PANEL[panel], id);
  };

  ext.runLightStrip = function(id, position, r, g, b) {
    position = position == 'All' ? 0 : position;
    _neuronsEngine.sendBlockCommand('LEDSTRIP', 'SET_SINGLE_LED', [position, r, g, b], id);
  };

  // OLED_DISPLAY
  ext.runDisplayText = function(id, text) {
    var str = text.toString();
    _neuronsEngine.sendBlockCommand('OLED_DISPLAY', 'DISPLAY_STRING', [2, str], id);
  };

  // OLED_DISPLAY
  ext.runDisplayFace = function(id, face) {
    _neuronsEngine.sendBlockCommand('OLED_DISPLAY', 'DISPLAY_FACE', [TRANSFER.FACEID[face], 1], id);
  };

  ext.runELWires = function (id, slot, handles) {
    if(!EL_WIRES_STATUS[id]) {
      EL_WIRES_STATUS[id] = [0, 0, 0, 0];
    }
    EL_WIRES_STATUS[id][4 - TRANSFER[slot]] = TRANSFER[handles];
    _neuronsEngine.sendBlockCommand('ELWIRES', 'DISPLAY', [parseInt(EL_WIRES_STATUS[id].join(''), 2)], id);
  };

  ext.getButtonStatus = function(id) {
    var val = _neuronsEngine.getBlockSubStatus('BUTTON', 'press', id)[0];
    device.responseValue(0, val);
    return val;
  };

  ext.getKnob = function(id) {
    var val = _neuronsEngine.getBlockSubStatus('KNOB', 'potentio', id)[0];
    //结果为 null, 0、1、2、3
    device.responseValue(0, val);
    return val;
  };

  ext.getHumiture = function(id, type) {
    var val = _neuronsEngine.getBlockSubStatus('HUMITURE', 'temperature_humidity', id)[1 - TRANSFER[type]];
    device.responseValue(0, val);
    return val;
  };

  ext.getTemperature = function(id) {
    var val = _neuronsEngine.getBlockSubStatus('TEMPERATURE', 'temperature', id)[0];
    device.responseValue(0, val);
    return val;
  };

  //布尔值
  //向左为黑包含：左边为黑、全部为黑
  ext.getLineFollowStatus = function(id, foot) {
    var val = _neuronsEngine.getBlockSubStatus('LINEFOLLOWER', 'state', id)[0];
    var bool =  TRANSFER[foot] == val || (val == 3 && TRANSFER[foot] != 0 )? 1 : 0;
    device.responseValue(0, bool);
    return bool;
  };

  ext.getLight = function(id) {
    var val = _neuronsEngine.getBlockSubStatus("LIGHTSENSOR", 'light', id)[0];
    device.responseValue(0, val);
    return val;
  };

  //布尔值
  //返回值 1、2、4、8 分别对应 slot 1、2、3、4
  //返回值是 5 --> ["1", "0", "1"] 说明同时握住了 1 和 3
  ext.getFunny = function(id, slot) {
    var bool;
    var selected = TRANSFER[slot];
    var val = _neuronsEngine.getBlockSubStatus("FUNNYTOUCH", 'state', id)[0];
    var bits = parseInt(val,10).toString(2).split('').reverse();
    bool = bits[selected - 1] === '1' ? 1 : 0;
    device.responseValue(0, bool);
    return bool;
  };

  ext.getSound = function(id) {
    var val =  _neuronsEngine.getBlockSubStatus("SOUNDSENSOR", 'volume', id)[0];
    device.responseValue(0, val);
    return val;
  };

  ext.getUltrasonic = function(id) {
    var val = _neuronsEngine.getBlockSubStatus("ULTRASONIC", 'distance', id)[0];
    device.responseValue(0, val);
    return val;
  };

  ext.getGyro = function(id, coordinate, type) {
    var type_ = (coordinate + '_' + type).toLowerCase();
    var commands = TRANSFER.gyroSubandCancelCommands[type_];
    //订阅
    _neuronsEngine.sendBlockCommand('ACCELEROMETER_GYRO','SUBSCRIBE',commands[1], id);
    var val = _neuronsEngine.getBlockSubStatus("ACCELEROMETER_GYRO", type_, id)[0];
    device.responseValue(0, val);
    // 取消订阅
    _neuronsEngine.sendBlockCommand('ACCELEROMETER_GYRO','CANCLE_SUBSCRIBE',commands[0], id);
    return val;
  };

  //布尔值
  ext.getGyroShaked = function(id) {
    var commands = TRANSFER.gyroSubandCancelCommands['shake'];
    // 订阅
    _neuronsEngine.sendBlockCommand('ACCELEROMETER_GYRO','SUBSCRIBE',commands[1], id);
    var val = _neuronsEngine.getBlockSubStatus("ACCELEROMETER_GYRO", 'shake', id)[0];
    device.responseValue(0, val);
    // 取消订阅
    _neuronsEngine.sendBlockCommand('ACCELEROMETER_GYRO','CANCLE_SUBSCRIBE', commands[0], id);
    return val != 0 ? 1 : 0;
  };

  //TODO: 暂时不做
  ext.getGyroAmplitude = function(id) {
    return _neuronsEngine.getBlockSubStatus("ACCELEROMETER_GYRO", 'shake', id)[0];
  };

  //TODO: 固件及需求未定稿，暂时不做
  //布尔值
  ext.getColorDetected = function(id, type) {
    var rgb = _neuronsEngine.getBlockSubStatus("COLORSENSOR", 'color', id);
    //1 or 0
    var reuslt = (rgb && rgb[TRANSFER.getRGBIndex(type)])? rgb[TRANSFER.getRGBIndex(type)] : 0;
    device.responseValue(0, reuslt);
    return reuslt;
  };

  ext.getColorReading = function(id, type) {
    var index = TRANSFER.getRGBIndex(type);
    var val = _neuronsEngine.getBlockSubStatus("COLORSENSOR", 'color', id)[index];
    device.responseValue(0, val);
    return val;
  };

  //布尔值
  //接口 _neuronsEngine.getVoiceCommand()
  ext.getVoiceRecognized  = function(id, message) {
    var val = _neuronsEngine.getBlockSubStatus("VOISERECOGNITION", 'recognition', id)[0];
    var bool = (val == _neuronsEngine.getVoiceCommand()[message.replace(/\s$/,'')]? 1 : 0);
    device.responseValue(0, bool);
    return bool;
  };

  ext.getJoystick = function(id, key) {
    var val = _neuronsEngine.getBlockSubStatus("JOYSTICK", 'state' , id)[TRANSFER[key]-1];
    device.responseValue(0, val);
    return val;
  };

  //布尔值
  ext.getPIRDetected = function(id) {
    var val = _neuronsEngine.getBlockSubStatus("PIR", 'state', id)[0];
    var bool = val > 0 ? 1 : 0;
    device.responseValue(0, bool);
    return bool;
  };

  ext.getSoilHumidity = function(id) {
    var val = _neuronsEngine.getBlockSubStatus("SOIL_HUMIDITY", 'humidity', id)[0];
    device.responseValue(0, val);
    return val;
  };

  // Extension API interactions
  var potentialDevices = [];
  ext._deviceConnected = function (dev, util, mainboard) {
    device = dev;
    _neuronsEngine = mainboard;
    potentialDevices.push(mainboard);
    _neuronsEngine.on("blockListChanges", function (blockList) {
      let ELWIRES = 'ELWIRES';
      if (ELWIRES in blockList) {
        if (blockList[ELWIRES].length > EL_WIRES_COUNT) {
          EL_WIRES_COUNT = blockList[ELWIRES].length;
          EL_WIRES_STATUS[EL_WIRES_COUNT] = [0, 0, 0, 0];
        } else if(blockList[ELWIRES].length < EL_WIRES_COUNT) {
          EL_WIRES_COUNT = blockList[ELWIRES].length;
          for (var key in EL_WIRES_STATUS) {
            if (parseInt(key) > EL_WIRES_COUNT) {
              delete EL_WIRES_STATUS[key];
            }
          }
        }
      } else {
        EL_WIRES_STATUS = {};
      }
      console.log(EL_WIRES_COUNT)
      console.log(EL_WIRES_STATUS)
    });
    // if (!device) {
    //   tryNextDevice();
    // }
  }

  function tryNextDevice() {
    // If potentialDevices is empty, device will be undefined.
    // That will get us back here next time a device is connected.
    device = potentialDevices.shift();
    if (device) {
      device.open({
        stopBits: 0,
        bitRate: 115200,
        ctsFlowControl: 0
      }, deviceOpened);
    }
  }

  var watchdog = null;

  function deviceOpened(dev) {
    if (!dev) {
      // Opening the port failed.
      tryNextDevice();
      return;
    }
    device.set_receive_handler('Neuron', processData);
  };

  ext._deviceRemoved = function (dev) {
    if (device != dev) return;
    _neuronsEngine.stop();
    _neuronsEngine = null;
    device = null;
  };

  ext._shutdown = function() {
    if (device) device.close();
    device = null;
  };

  ext._getStatus = function() {
    if (!device) return {
      status: 1,
      msg: 'mBot disconnected'
    };
    if (watchdog) return {
      status: 1,
      msg: 'Probing for mBot'
    };
    return {
      status: 2,
      msg: 'mBot connected'
    };
  }
  var descriptor = {};
  ScratchExtensions.makeblockRegister('Neuron', descriptor, ext, {
    type: 'serial'
  });
})({});