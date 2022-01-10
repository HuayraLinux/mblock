(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * block type definition.
 */

var block = {
  name: 'BUTTON',
  type: 0x64,
  subtype: 0x02,
  status: {
    press: {
      subid: 0x01,
      datatype: ['BYTE']
    }
  },
  commands: {
    GET_STATE: {
      commandid: 0x01
    },
    SET_REPORT_MODE: {
      commandid: 0x7F,
      datatype: ['BYTE','long'] //report mode; report period
    }
  } 
};

module.exports = block;

},{}],2:[function(require,module,exports){
/**
 * block type definition.
 */

var block = {
  name: 'SEGDISPLAY',
  type: 0x65,
  subtype: 0x01,
  commands: {
    DISPLAY: {
      commandid: 0x01,
      datatype: ['float'] 
    }
  }
};

module.exports = block;

},{}],3:[function(require,module,exports){
/**
 * block type definition.
 */

var block = {
  name: 'ACCELEROMETER_GYRO',
  type: 0x63,
  subtype: 0x06,
  status: {
    shake: {
      subid: 0x01,
      datatype: ['BYTE']
    },
    x_acceleration: {
      subid: 0x02,
      datatype: ['float']
    },
    y_acceleration: {
      subid: 0x03,
      datatype: ['float']
    },
    z_acceleration: {
      subid: 0x04,
      datatype: ['float']
    },    
     x_angle: {
      subid: 0x08,
      datatype: ['short']
    },
    y_angle: {
      subid: 0x09,
      datatype: ['short']
    },
    z_angle: {
      subid: 0x0a,
      datatype: ['short']
    },   
  },
  commands: {
    SUBSCRIBE: {
      commandid: 0x01,
      datatype: ['BYTE','BYTE','long']
    }, 
    GET_STATE: {
      commandid: 0x01,
      datatype: ['BYTE','BYTE']
    },     
    CANCLE_SUBSCRIBE: {
      commandid: 0x02,
      datatype: ['BYTE']
    }
  }
};

module.exports = block;

},{}],4:[function(require,module,exports){
/**
 * block type definition.
 */

var block = {
  name: 'AIR_QUALITY',
  type: 0x63,
  subtype: 0x0b,
  status: {
    "PM2.5": {
      subid: 0x01,
      datatype: ['SHORT']
    },
    "PM1.0": {
      subid: 0x02,
      datatype: ['SHORT']
    },
    "PM10": {
      subid: 0x03,
      datatype: ['SHORT']
    }
  },
  commands: {
    "GET_PM2.5": {
      commandid: 0x01
    },
    "GET_PM1.0": {
      commandid: 0x02
    },
    "GET_PM10": {
      commandid: 0x03
    },
    "SET_OUTPUT_TYPE": {
      commandid: 0x04,
      datatype: ['BYTE']
    },
    "SET_REPORT_MODE": {
      commandid: 0x7F,
      datatype: ['BYTE','long'] //report mode; report period
    }
  }
};

module.exports = block;

},{}],5:[function(require,module,exports){
/**
 * block type definition.
 */

var block = {
  name: 'BUZZER',
  type: 0x66,
  subtype: 0x02,
  commands: {
    DISPLAY: {
      commandid: 0x01,
      datatype: ['short','BYTE'] //frequency, volume: 0--100
    }
  }
};

module.exports = block;

},{}],6:[function(require,module,exports){
/**
 * block type definition.
 */

var block = {
  name: 'COLORSENSOR',
  type: 0x63,
  subtype: 0x05,
  status: {
    color: {
      subid: 0x01,
      datatype: ['SHORT','SHORT','SHORT'] // R,G,B
    }
  },
  commands: {
    GET_COLOR: {
      commandid: 0x01
    },
    SET_REPORT_MODE: {
      commandid: 0x7F,
      datatype: ['BYTE','long'] //report mode; report period
    }
  } 
};

module.exports = block;

},{}],7:[function(require,module,exports){
/**
 * block type definition.
 */

var block = {
  name: 'LED',
  type: 0x65,
  subtype: 0x02,
  commands: {
    SET_COLOUR: {
      commandid: 0x01,
      datatype: ['SHORT','SHORT','SHORT'] // r,g,b
    }
  } 
};

module.exports = block;

},{}],8:[function(require,module,exports){
/**
 * block type definition.
 */

var block = {
  name: 'DISPLAY_SCREEN_LCD_144',
  type: 0x44,
  status: ['string'] 
};

module.exports = block;

},{}],9:[function(require,module,exports){
/**
 * block type definition.
 */

var block = {
  name: 'MOTORS',
  type: 0x62,
  subtype: 0x02,
  commands: {
    SET_SPEED: {
      commandid: 0x01,
      datatype: ['byte','byte'] // port1_speed, port2_speed
    },
    SET_PORT1: {
      commandid: 0x02,
      datatype: ['byte'] // speed
    }, 
    SET_PORT2: {
      commandid: 0x03,
      datatype: ['byte'] // speed
    }     
  } 
};

module.exports = block;

},{}],10:[function(require,module,exports){
/**
 * block type definition.
 */

var block = {
  name: 'ELWIRES',
  type: 0x65,
  subtype: 0x06,
  commands: {
    DISPLAY: {
      commandid: 0x01,
      datatype: ['BYTE'] 
    }
  }
};

module.exports = block;

},{}],11:[function(require,module,exports){
/**
 * block type definition.
 */

var block = {
  name: 'FORCE_SENSOR',
  type: 0x47,
  status: ['SHORT'] 
};

module.exports = block;

},{}],12:[function(require,module,exports){
/**
 * block type definition.
 */

var block = {
  name: 'FUNNYTOUCH',
  type: 0x64,
  subtype: 0x04,
  status: {
    state: {
      subid: 0x01,
      datatype: ['BYTE']
    }
  },
  commands: {
    GET_STATE: {
      commandid: 0x01
    },
    SET_REPORT_MODE: {
      commandid: 0x7F,
      datatype: ['BYTE','long'] //report mode; report period
    }
  } 
};

module.exports = block;

},{}],13:[function(require,module,exports){
/**
 * block type definition.
 */

var block = {
  name: 'HUMITURE',
  type: 0x63,
  subtype: 0x07,
  status: {
    temperature_humidity: {
      subid: 0x01,
      datatype: ['byte','BYTE']
    }
  },
  commands: {
    GET_STATE: {
      commandid: 0x01
    },
    SET_REPORT_MODE: {
      commandid: 0x7F,
      datatype: ['BYTE','long'] //report mode; report period
    }
  }   
};

module.exports = block;

},{}],14:[function(require,module,exports){
module.exports = [
  require('./1_key_button'),
  require('./funny_touch'),
  require('./7_seg_display'),
  require('./single_dc_motor'),
  require('./double_dc_motor'),
  require('./knob'),
  require('./humiture'),
  require('./temperature'),
  require('./soil_humidity'),
  require('./ultrasonic_sensor'),
  require('./accelerometer_gyro'),
  require('./color_sensor'),
  require('./light_chain'),
  require('./infrared_receiver'),
  require('./colour_led'),
  require('./sound_sensor'),
  require('./limit_switch'),
  require('./switch'),
  require('./light_sensor'),
  require('./buzzer'),
  require('./pir_motion_sensor'),
  require('./touch_sensor'),
  require('./smart_servo'),
  require('./servo_9g'),
  require('./stepper_motor'),
  require('./line_follower'),
  require('./force_sensor'),
  require('./led_matrix'),
  require('./display_screen_lcd_144'),
  require('./mp3'),
  require('./usb_audio'),
  require('./usb_camera'),
  require('./led_matrix_8x16'),
  require('./led_panel'),
  require('./oled_display'),
  require('./self_lock_switch'),
  require('./touch_button'),
  require('./joystick'),
  require('./wind_speed_sensor'),
  require('./rain_sensor'),
  require('./air_quality'),
  require('./elWires'),
  require('./touch_button'),
  require('./pir'),
  require('./voiseRecognition')
];

},{"./1_key_button":1,"./7_seg_display":2,"./accelerometer_gyro":3,"./air_quality":4,"./buzzer":5,"./color_sensor":6,"./colour_led":7,"./display_screen_lcd_144":8,"./double_dc_motor":9,"./elWires":10,"./force_sensor":11,"./funny_touch":12,"./humiture":13,"./infrared_receiver":15,"./joystick":16,"./knob":17,"./led_matrix":18,"./led_matrix_8x16":19,"./led_panel":20,"./light_chain":21,"./light_sensor":22,"./limit_switch":23,"./line_follower":24,"./mp3":25,"./oled_display":26,"./pir":27,"./pir_motion_sensor":28,"./rain_sensor":29,"./self_lock_switch":30,"./servo_9g":31,"./single_dc_motor":32,"./smart_servo":33,"./soil_humidity":34,"./sound_sensor":35,"./stepper_motor":36,"./switch":37,"./temperature":38,"./touch_button":39,"./touch_sensor":40,"./ultrasonic_sensor":41,"./usb_audio":42,"./usb_camera":43,"./voiseRecognition":44,"./wind_speed_sensor":45}],15:[function(require,module,exports){
/**
 * block type definition.
 */

var block = {
  name: 'INFRARED_RECEIVER',
  type: 0x39,
  status: ['short', 'SHORT'] // address, code
};

module.exports = block;

},{}],16:[function(require,module,exports){
/**
 * block type definition.
 */

var block = {
  name:'JOYSTICK',
  type: 0x64,
  subtype: 0x07,
  status: {
    state: {
      subid: 0x01,
      datatype: ['byte','byte']
    }
  },
  commands: {
    GET_STATE: {
      commandid: 0x01
    },
    SET_REPORT_MODE: {
      commandid: 0x7F,
      datatype: ['BYTE','long'] //report mode; report period
    }
  } 
};

module.exports = block;

},{}],17:[function(require,module,exports){
/**
 * block type definition.
 */

var block = {
  name: 'KNOB',
  type: 0x64,
  subtype: 0x01,
  status: {
    potentio: {
      subid: 0x01,
      datatype: ['BYTE']
    }
  },
  commands: {
    GET_STATE: {
      commandid: 0x01
    },
    SET_REPORT_MODE: {
      commandid: 0x7F,
      datatype: ['BYTE','long'] //report mode; report period
    }
  } 
};

module.exports = block;

},{}],18:[function(require,module,exports){
/**
 * block type definition.
 */

var block = {
  name: 'LED_MATRIX',
  type: 0x48,
  status: ['long', 'long'] // 8*4, 8*4 MATRIX
};

module.exports = block;

},{}],19:[function(require,module,exports){
/**
 * block type definition.
 */

var block = {
  name: 'LED_MATRIX_8*16',
  type: 0x4A,
  commands: {
    DISPLAY_BITMAP: {
      commandid: 0x01,
      datatype: ['long','long','long','long']  
    },
    DISPLAY_STRING: {
      commandid: 0x02,
      datatype: ['string']  
    },
    DISPLAY_TIME: {
      commandid: 0x03,
      datatype: ['BYTE','BYTE'] //hour, minute
    },

  }
};

module.exports = block;

},{}],20:[function(require,module,exports){
/**
 * block type definition.
 */

var block = {
  name: 'LEDPANEL',
  type: 0x65,
  subtype: 0x04,
  commands: {
    DISPLAY_BITMAP: {
      commandid: 0x01,
      datatype: ['long','long','SHORT','SHORT','SHORT']  //8*4,8*4,R,G,B
    },
    DISPLAY_SINGLE_LED: {
      commandid: 0x02,
      datatype: ['BYTE','SHORT','SHORT','SHORT']  //LED NO, R,G,B
    },
    DISPLAY_IMAGE: {
      commandid: 0x03,
      variableParams: ['BYTE'] // [mode,led number,color1, color2...]
    },
    UPLOAD_IMAGE: {
      commandid: 0x04,
      variableParams: ['BYTE']  // [frame number,led number,color1, color2...]
    },
    DISPLAY_IMAGES: {
      commandid: 0x05,
      datatype: ['BYTE','BYTE'] // speed, mode
    }
  }
};

module.exports = block;

},{}],21:[function(require,module,exports){
/**
 * block type definition.
 */

var block = {
  name: 'LEDSTRIP',
  type: 0x65,
  subtype: 0x03,
  commands: {
    SET_SINGLE_LED: {
      commandid: 0x01,
      datatype: ['BYTE','SHORT','SHORT','SHORT']  //  led no,R,G,B
    },
    DISPLAY_PATTERN: {
      commandid: 0x02,
      variableParams: ['BYTE']  //datatype of params    
    }
  }
};

module.exports = block;

},{}],22:[function(require,module,exports){
/**
 * block type definition.
 */

var block = {
  name: 'LIGHTSENSOR',
  type: 0x63,
  subtype: 0x02,
  status: {
    light: {
      subid: 0x01,
      datatype: ['BYTE']
    }
  },
  commands: {
    GET_INTENSITY: {
      commandid: 0x01
    },
    SET_REPORT_MODE: {
      commandid: 0x7F,
      datatype: ['BYTE','long'] //report mode; report period
    }
  }  
};

module.exports = block;

},{}],23:[function(require,module,exports){
/**
 * block type definition.
 */

var block = {
  name: 'LIMIT_SWITCH',
  type: 0x3f,
  status: {
    limit: {
      subid: 0x01,
      datatype: ['BYTE']
    }
  },
};

module.exports = block;

},{}],24:[function(require,module,exports){
/**
 * block type definition.
 */

var block = {
  name: 'LINEFOLLOWER',
  type: 0x63,
  subtype: 0x04,
  status: {
    state: {
      subid: 0x01,
      datatype: ['BYTE']
    }
  },
  commands: {
    GET_STATE: {
      commandid: 0x01
    },
    SET_REPORT_MODE: {
      commandid: 0x7F,
      datatype: ['BYTE','long'] //report mode; report period
    }
  }  
};

module.exports = block;

},{}],25:[function(require,module,exports){
/**
 * block type definition.
 */

var block = {
  name: 'MP3',
  type: 0x66,
  subtype: 0x01,
  commands: {
    PLAY: {
      commandid: 0x01,
      datatype: ['BYTE']  // song no   
    },
    DELETE_SONG: {
      commandid: 0x02,
      datatype: ['BYTE']  // song no  
    },
    PLAY_PREVIOUS: {
      commandid: 0x03
    },
    PLAY_NEXT: {
      commandid: 0x04
    },
    PLAY_PAUSE: {
      commandid: 0x05
    },
    stop: {
      commandid: 0x06
    },
    PLAY_MODE: {
      commandid: 0x08,
      datatype: ['BYTE']  // mode
    },
  }
};

module.exports = block;

},{}],26:[function(require,module,exports){
/**
 * block type definition.
 */

var block = {
  name: 'OLED_DISPLAY',
  type: 0x65,
  subtype: 0x05,
  commands: {
    DISPLAY_STRING: {
      commandid: 0x01,
      datatype: ['BYTE','string'] //display position; display content
    },
    DISPLAY_FACE: {
      commandid: 0x02,
      datatype: ['BYTE','BYTE'] //face no; 0: don't blink, 1: blink
    },
  }
};

module.exports = block;

},{}],27:[function(require,module,exports){
/**
 * block type definition.
 */

var block = {
  name: 'PIR',
  type: 0x63,
  subtype: 0x0c,
  status: {
    state: {
      subid: 0x01,
      datatype: ['BYTE']
    }
  },
  commands: {
    GET_STATE: {
      commandid: 0x01
    },
    SET_REPORT_MODE: {
      commandid: 0x7F,
      datatype: ['BYTE','long'] //report mode; report period
    }
  } 
};

module.exports = block;

},{}],28:[function(require,module,exports){
/**
 * block type definition.
 */

var block = {
  name: 'PIR_MOTION_SENSOR',
  type: 0x42,
  status: ['BYTE'] 
};

module.exports = block;

},{}],29:[function(require,module,exports){
/**
 * block type definition.
 */

var block = {
  name: 'RAIN_SENSOR',
  type: 0x63,
  subtype: 0x09,
  status: {
    rain: {
      subid: 0x01,
      datatype: ['BYTE']
    }
  },
  commands: {
    GET_STATE: {
      commandid: 0x01
    },
    SET_REPORT_MODE: {
      commandid: 0x7F,
      datatype: ['BYTE','long'] //report mode; report period
    }
  } 
};

module.exports = block;

},{}],30:[function(require,module,exports){
/**
 * block type definition.
 */

var block = {
  name: 'SELF_LOCK_SWITCH',
  type: 0x64,
  subtype: 0x06,
  status: {
    state: {
      subid: 0x01,
      datatype: ['BYTE']
    }
  },
  commands: {
    GET_STATE: {
      commandid: 0x01
    },
    SET_REPORT_MODE: {
      commandid: 0x7F,
      datatype: ['BYTE','long'] //report mode; report period
    }
  } 
};

module.exports = block;

},{}],31:[function(require,module,exports){
/**
 * block type definition.
 */

var block = {
  name: 'SERVO',
  type: 0x62,
  subtype: 0x03,
  commands: {
    SET_ALL_ANGLE: {
      commandid: 0x01,
      datatype: ['SHORT'] // servo angle
    },
    SET_SERVO1_ANGLE: {
      commandid: 0x02,
      datatype: ['SHORT'] // servo angle
    }, 
    SET_SERVO2_ANGLE: {
      commandid: 0x03,
      datatype: ['SHORT'] // servo angle
    }, 
    CLOSE_ALL_SERVO: {
      commandid: 0x04
    },       
  } 
};

module.exports = block;

},{}],32:[function(require,module,exports){
/**
 * block type definition.
 */

var block = {
  name: 'SINGLE_DC_MOTOR',
  type: 0x62,
  subtype: 0x01,
  commands: {
    SET_SPEED: {
      commandid: 0x01,
      datatype: ['byte'] // speed
    }
  } 
};

module.exports = block;

},{}],33:[function(require,module,exports){
/**
 * block type definition.
 */

var block = {
  name: 'SMART_SERVO',
  type: 0x60,
  status: {
    ANGLE: {
      subid: 0x36,
      datatype: ['long']
    },
    POS: {
      subid: 0x22,
      datatype: ['SHORT']
    },
    SPEED: {
      subid: 0x23,
      datatype: ['float']
    },
    TEMPERATURE: {
      subid: 0x25,
      datatype: ['float']
    },
    CURRENT: {
      subid: 0x26,
      datatype: ['float']
    },
    VOLTAGE: {
      subid: 0x27,
      datatype: ['float']
    }
  },
  commands: {
    GET_CUR_POS: {
      commandid: 0x22,
      datatype: ['BYTE']
    },
    GET_CUR_SPEED: {
      commandid: 0x23,
      datatype: ['BYTE']
    },
    GET_TEMPERATURE: {
      commandid: 0x25,
      datatype: ['BYTE']
    },
    GET_CURRENT: {
      commandid: 0x26,
      datatype: ['BYTE']
    },
    GET_VOLTAGE: {
      commandid: 0x27,
      datatype: ['BYTE']
    },
    SET_ABSOLUTE_POS: {
      commandid: 0x11,
      datatype: ['SHORT', 'SHORT']  // POS,SPEED
    },
    SET_RELATIVE_POS : {
      commandid: 0x12,
      datatype: ['SHORT', 'SHORT']  // POS,SPEED
    },
    SET_RGB_LED: {
      commandid: 0x17,
      datatype: ['SHORT','SHORT','SHORT']  //  R,G,B
    },
    SET_BREAK: {
      commandid: 0x16,
      datatype: ['BYTE']  // 1 : release; 0 : lock    
    },
    SET_HAND_SHAKE: {
      commandid: 0x18
    },
    SET_ANGLE_AS_ZERO: {
      commandid: 0x30
    },
    SET_ABSOLUTE_SHORT_ANGLE: {
      commandid: 0x31,
      datatype: ['short', 'SHORT']  // ANGLE,SPEED
    },
    SET_RELATIVE_SHORT_ANGLE: {
      commandid: 0x32,
      datatype: ['short', 'SHORT']  // ANGLE,SPEED
    },
    SET_ABSOLUTE_LONG_ANGLE: {
      commandid: 0x33,
      datatype: ['long', 'SHORT']  // ANGLE,SPEED
    },
    SET_RELATIVE_LONG_ANGLE: {
      commandid: 0x34,
      datatype: ['long', 'SHORT']  // ANGLE,SPEED
    },
    SET_PWM: {
      commandid: 0x35,  //move like DC MOTOER
      datatype: ['short'] //PWM
    },
    GET_CUR_ANGLE: {
      commandid: 0x36,
      datatype: ['BYTE']
    },
    SET_BACKTO_INITIAL_POS: {
      commandid: 0x37,
      datatype: ['BYTE','SHORT'] //BACK MODE(0: RELATIVE POS, 1: ABSOLUTE POS), SPEED
    }
  }
};

module.exports = block;

},{}],34:[function(require,module,exports){
/**
 * block type definition.
 */

var block = {
  name: 'SOIL_HUMIDITY',
  type: 0x63,
  subtype: 0x08,
  status: {
    humidity: {
      subid: 0x01,
      datatype: ['BYTE']
    }
  },
  commands: {
    GET_STATE: {
      commandid: 0x01
    },
    SET_REPORT_MODE: {
      commandid: 0x7F,
      datatype: ['BYTE','long'] //report mode; report period
    }
  } 
};

module.exports = block;

},{}],35:[function(require,module,exports){
/**
 * block type definition.
 */

var block = {
  name: 'SOUNDSENSOR',
  type: 0x63,
  subtype: 0x0D,
  status: {
    volume: {
      subid: 0x01,
      datatype: ['BYTE']
    }
  },
  commands: {
    GET_STATE: {
      commandid: 0x01
    },
    SET_REPORT_MODE: {
      commandid: 0x7F,
      datatype: ['BYTE','long'] //report mode; report period
    }
  }   
};

module.exports = block;

},{}],36:[function(require,module,exports){
/**
 * block type definition.
 */

var block = {
  name: 'STEPPER_MOTOR',
  type: 0x3A,
  status: ['long'], // position
  commands: {
    SET_POS: {
      commandid: 0x01,
      datatype: ['SHORT', 'long'] // speed, position
    }
  }
};

module.exports = block;

},{}],37:[function(require,module,exports){
/**
 * block type definition.
 */

var block = {
  name: 'SWITCH',
  type: 0x40,
  status: {
    switch: {
      subid: 0x01,
      datatype: ['BYTE']
    }
  },
};

module.exports = block;

},{}],38:[function(require,module,exports){
/**
 * block type definition.
 */

var block = {
  name: 'TEMPERATURE',
  type: 0x63,
  subtype: 0x01,
  status: {
    temperature: {
      subid: 0x01,
      datatype: ['float']
    }
  },
  commands: {
    GET_TEMPERATURE: {
      commandid: 0x01
    },
    SET_REPORT_MODE: {
      commandid: 0x7F,
      datatype: ['BYTE','long'] //report mode; report period
    }
  } 
};

module.exports = block;

},{}],39:[function(require,module,exports){
/**
 * block type definition.
 */

var block = {
  name: 'TOUCH_BUTTON',
  type: 0x64,
  subtype: 0x08,
  status: {
    press: {
      subid: 0x01,
      datatype: ['BYTE']
    }
  },
  commands: {
    GET_STATE: {
      commandid: 0x01
    },
    SET_LED: {
      commandid: 0x02,
      datatype: ['SHORT'] //12 LED, a bit set a led,eg: set led1 and led2: 0x03;all led: 0xfff
    },    
    SET_REPORT_MODE: {
      commandid: 0x7F,
      datatype: ['BYTE','long'] //report mode; report period
    }
  } 
};

module.exports = block;

},{}],40:[function(require,module,exports){
/**
 * block type definition.
 */

var block = {
  name: 'TOUCH_SENSOR',
  type: 0x43,
  status: {
    touch: {
      subid: 0x01,
      datatype: ['BYTE']
    }
  },
};

module.exports = block;

},{}],41:[function(require,module,exports){
/**
 * block type definition.
 */

var block = {
  name: 'ULTRASONIC',
  type: 0x63,
  subtype: 0x03,
  status: {
    distance: {
      subid: 0x01,
      datatype: ['float'] // distance
    }
  },
  commands: {
    GET_DISTANCE: {
      commandid: 0x01
    },
    SET_REPORT_MODE: {
      commandid: 0x7F,
      datatype: ['BYTE','long'] //report mode; report period
    }
  } 
};

module.exports = block;

},{}],42:[function(require,module,exports){
/**
 * block type definition.
 */

var block = {
  name: 'USB_AUDIO',
  type: 0x66,
  subtype: 0x04,
  commands: {
    PLAY: {
      commandid: 0x01,
      datatype: ['BYTE']  // song no   
    },
    DELETE_SONG: {
      commandid: 0x02,
      datatype: ['BYTE']  // song no  
    },
    PLAY_PREVIOUS: {
      commandid: 0x03
    },
    PLAY_NEXT: {
      commandid: 0x04
    },
    PLAY_PAUSE: {
      commandid: 0x05
    },
    stop: {
      commandid: 0x06
    },
    PLAY_MODE: {
      commandid: 0x08,
      datatype: ['BYTE']  // mode
    },
  }
};

module.exports = block;

},{}],43:[function(require,module,exports){
/**
 * block type definition.
 */

var block = {
  name: 'USB_CAMERA',
  type: 0x67,
  subtype: 0x01,
  commands: {
    PLAY: {
      commandid: 0x01
    },
    stop: {
      commandid: 0x06
    }
  }
};

module.exports = block;

},{}],44:[function(require,module,exports){
/**
 * block type definition.
 */

var block = {
  name: 'VOISERECOGNITION',
  type: 0x66,
  subtype: 0x03,
  status: {
    recognition: {
      subid: 0x01,
      datatype: ['BYTE']
    }
  },  
};

module.exports = block;

},{}],45:[function(require,module,exports){
/**
 * block type definition.
 */

var block = {
  name: 'WIND_SPEED_SENSOR',
  type: 0x63,
  subtype: 0x0a,
  status: {
    speed: {
      subid: 0x01,
      datatype: ['BYTE']
    }
  },
  commands: {
    GET_STATE: {
      commandid: 0x01
    },
    SET_REPORT_MODE: {
      commandid: 0x7F,
      datatype: ['BYTE','long'] //report mode; report period
    }
  } 
};

module.exports = block;

},{}],46:[function(require,module,exports){
var _ = require('underscore');

var config = null;

var DEFAULT_CONF = {
  driver: 'mock', 
  loglevel: 'ERROR',
  serverIP: '192.168.100.1',
  tcpsocketPort: 8082,
  websocketPort: 8084,
  localTcpsocketPort: 8085,
  userKey: '',
  uuid: '',
  device: '',
  runtime: '',
};

function setConfig (conf) {
  if (config === null) {
    config = _.extend(DEFAULT_CONF, conf || {});
  } else {
    config = _.extend(config, conf || {});
  }
}

function getConfig () {
  return config;
}


exports.setConfig = setConfig;
exports.getConfig = getConfig;

},{"underscore":99}],47:[function(require,module,exports){
(function (Buffer){
/**
 * [checksum implementation.]
 */
var utils = require('../protocol/utils');

var REC_BUF_LENGTH = 1024;
var recvBuf = new ArrayBuffer(REC_BUF_LENGTH);
var recvView = new Uint8Array(recvBuf);
var recvLength = 0;
var beginRecv = false;
var logger = require('../log/log4js').logger;
/**
 * [checksumRcvbuf checksum Rcvbuf]
 * @param  {array} data [the Rcvbuf to be checksum]
 * @param {Driver} driver [the driver instance,driver._on_data(buf) was uesed to process the checksumed buf]
 */
 function checksumRcvbuf(data,driver) {
  try {
    // parse buffer data
    for (var i = 0; i < data.length; i++) {
      if (data[i] === 0xf0) {
            // start flag
            recvLength = 0;
            beginRecv = true;
          } else if (data[i] === 0xf7) {
            // end flag
            beginRecv = false;
            var checksum = 0;
            for (var j = 0; j < recvLength - 1; j++) {
              checksum += recvView[j];
            }
            if ((checksum & 0x7f) === recvView[recvLength - 1]) {
              var buf = recvBuf.slice(0, recvLength - 1);
              logger.log("received new package:", utils.hexBuf(buf));
              if (driver._on_data) {
                driver._on_data(buf);
              } else {
                logger.warn("driver data callback not found!");
              }
            } else {
              logger.warn("buffer ignored because of checksum error: ", utils.hexBuf(recvBuf.slice(0, recvLength)));
              logger.warn("checksum is :", (checksum & 0x7f));
              logger.warn("recv checksum is :", recvView[recvLength - 1]);
            }
          } else {
            // normal
            if (beginRecv) {
              if (recvLength >= REC_BUF_LENGTH) {
                logger.warn("receive buffer overflow!");
              }
              recvView[recvLength++] = data[i];
            }
          }
        }
      } catch(e) {
        logger.warn("checksumRcvbuf error:" + e);
      }
    }

/**
 * [checksumSendbuf add checksum for Sendbuf]
 * @param  {array} buf [the buf to be add checksum]
 * @return {array} tempBuf [the buf after add checksum.]
 */
function checksumSendbuf(buf) {
    var view = new Uint8Array(buf);
    var tempBuf = new Buffer(buf.byteLength + 3);
    var idx = 0;

    tempBuf[idx++] = 0xf0;

    var checksum = 0;
    for (var i = 0; i < view.length; i++) {
      tempBuf[idx++] = view[i];
      checksum += view[i];
    }
    tempBuf[idx++] = checksum & 0x7f;
    tempBuf[idx++] = 0xf7;
    return tempBuf;
}

exports.checksumRcvbuf = checksumRcvbuf;
exports.checksumSendbuf = checksumSendbuf;


}).call(this,require("buffer").Buffer)
},{"../log/log4js":72,"../protocol/utils":77,"buffer":81}],48:[function(require,module,exports){
(function (Buffer){
/**
 * driver for makeblockHD APP(cordova ble bridge)
 */

var Driver = require('./driver');
var checksum = require('./checksum');
var logger = require('../log/log4js').logger;

var MAX_LENGTH = 20;

var bufferToArrayBuffer = function(buffer) {
  var ab = new ArrayBuffer(buffer.length);
  var view = new Uint8Array(ab);
  for (var i = 0; i < buffer.length; ++i) {
    view[i] = buffer[i];
  }
  return ab;
};

var driver = new Driver();

function CordovaBle() {
  'use strict';

  var self = this;
  var isConnected = false;
  var commServiceID = 'FFE1';
  var writeCharacteristicID = 'FFE3';
  var readCharacteristicID = 'FFE2';

  this._init = function() {
    if (ble && ble.connectedDeviceID) {
      ble.startNotification(ble.connectedDeviceID, commServiceID, readCharacteristicID, function(data) {
        // read success
        checksum.checksumRcvbuf(new Uint8Array(data), driver);
      }, function(err) {
        // read failure
        logger.warn('read error, ', err);
      });
    } else {
      // connection may lost
    }
  };

  this._bleWrite = function(buffer){
    ble.writeWithoutResponse(ble.connectedDeviceID, commServiceID,writeCharacteristicID, buffer,
      function() {
        if(!isConnected) {
          self._init();
        }
        isConnected = true;
      },
      function(err) {
        logger.warn('write error, ', err);
        ble.stopNotification(ble.connectedDeviceID, commServiceID, readCharacteristicID);
        isConnected = false;
      }
    );
  };

  /**
   * [_send sends array buffer to driver]
   * @param  {[ArrayBuffer]} buf [the buffer to send]
   * @return {[integer]}     [the actual byte length sent. -1 if send fails.]
   */
  this._send = function(buf) {
    var tempBuf = new Buffer(buf.byteLength + 3);
    tempBuf = checksum.checksumSendbuf(buf);

    if (ble && ble.connectedDeviceID) {
      var sendBuffer = bufferToArrayBuffer(tempBuf); 
      var byteLength = sendBuffer.byteLength; 
      // apple ble can only send 20 bytes once  
      if (byteLength > MAX_LENGTH){
        var newBuffer;
        var start,end;
        var leftLength = byteLength;
        var count = Math.ceil(byteLength/MAX_LENGTH);
        for (var i=0; i < count; i++){
          start = MAX_LENGTH*i;
          if (leftLength > MAX_LENGTH){
            end = MAX_LENGTH*i + MAX_LENGTH;
          } else {
            end = MAX_LENGTH*i + leftLength +1;
          }
          newBuffer = sendBuffer.slice(start,end);
          self._bleWrite(newBuffer);
          leftLength = leftLength - MAX_LENGTH;
        }
      } else {
        self._bleWrite(sendBuffer);
      }
    } else{
      isConnected = false;
    }
    return tempBuf.length;
  };

  /**
   * [close interface]
   */
  this._close = function() {
    if (ble && ble.connectedDeviceID) {
      ble.stopNotification(ble.connectedDeviceID, commServiceID, readCharacteristicID);
      ble.connectedDeviceID = null;
      isConnected = false;
    }
  };
}

CordovaBle.prototype = driver;

module.exports = CordovaBle;

}).call(this,require("buffer").Buffer)
},{"../log/log4js":72,"./checksum":47,"./driver":50,"buffer":81}],49:[function(require,module,exports){
(function (Buffer){
/**
 * driver for tcp socket( with plugin cordova-plugin-chrome-apps-sockets-tcp )
 */

var Driver = require('./driver');
var checksum = require('./checksum');
var net = require('net');
var config = require('../config/config');
var logger = require('../log/log4js').logger;
var avblock = require('../engine/logic/avblock');
var SPtcp = require('./sptcp/sptcp').SPtcp;

var driver = new Driver();

var socketId = 0;
var isConnect = false;
var connectFlag = false;
var checkInterval = null;

var bufferToArrayBuffer = function(buffer) {
  var ab = new ArrayBuffer(buffer.length);
  var view = new Uint8Array(ab);
  for (var i = 0; i < buffer.length; ++i) {
    view[i] = buffer[i];
  }
  return ab;
};

var arrayBufferToBuffer = function (ab) {
    var buffer = new Buffer(ab.byteLength);
    var view = new Uint8Array(ab);
    for (var i = 0; i < buffer.length; ++i) {
        buffer[i] = view[i];
    }
    return buffer;
  };

/**
 * [buffer2string converts array buffer to string format]
 * @param  {ArrayBuffer} buf [the input array buffer]
 * @return {String}     [the output string]
 */
function buffer2string(buf) {
  var buffer = new Uint8Array(buf);
  return Array.prototype.join.call(buffer, " ");
}

/**
 * [string2buffer converts string to array buffer format]
 * @param  {String} str [the input string]
 * @return {Uint8Array}     [the output uint8 array buffer]
 */
function string2buffer(str) {
  var buffer = new Uint8Array(str.split(" "));
  return buffer;
}

function checkConnect() {
  if (connectFlag === true) {
    connectFlag = false;
  } else {
    logger.warn('disconnect, closeSocket');
    closeSocket();
    if (driver._on_disconnect) {
      driver._on_disconnect('tcpsocket');
    }
    avblock.resetAVState();   
  }
}

function closeSocket() {
    chrome.sockets.tcp.close(socketId);
    socketId = 0;
    isConnect = false;
    if (checkInterval) {
      clearInterval(checkInterval);
      checkInterval = null;
    }
}

function initSocket() {
  var _config = config.getConfig();
  var serverIP = _config.serverIP;
  var port = _config.tcpsocketPort;
  var socketClient = {remoteAddress: serverIP + port};

  chrome.sockets.tcp.create({}, function (sockInfo) {
    var socket = sockInfo.socketId;
    chrome.sockets.tcp.connect(socket, serverIP, port, function () {
      logger.warn('CONNECTED TO: ' + serverIP + ':' + port);
      logger.warn("client connected");
      isConnect = true;
      connectFlag = true;
      if (driver._on_connectResult) {
        driver._on_connectResult({ result: 'success', errMsg: '' });
      }
      checkConnect();
      checkInterval = setInterval(checkConnect, 6000);
      socketId = socket;
      SPtcp.call(socketClient, socketClient);

      chrome.sockets.tcp.onReceive.addListener(function (info) {
        if (info.socketId == socketId && info.data) {
          socketClient.spReceiveData(arrayBufferToBuffer(info.data), function (message) {
            if (message.type === 'block') {
              var buffer = string2buffer(message.data);
              checksum.checksumRcvbuf(buffer, driver);
            } else if (message.type === 'ping') {
              connectFlag = true;
            } else if (message.type === 'avblock') {
              avblock.processConnectState(message.device, message.state);
            }
          });
        }
      });

      chrome.sockets.tcp.onReceiveError.addListener(function (info) {
        logger.warn('onReceiveError :' + JSON.stringify(info));
        if (isConnect) {
          if (driver._on_disconnect) {
            driver._on_disconnect('tcp');
          }
          chrome.sockets.tcp.close(socketId);
          avblock.resetAVState();   
          isConnect = false;
          socketId = 0;
          if (checkInterval) {
            clearInterval(checkInterval);
            checkInterval = null;
          }
        }
      });      
    });
  });
}

function CordovaTcp() {
  'use strict';

  var self = this;

  this._init = function () {
    initSocket();
  };

  /**
   * [_send sends array buffer to driver]
   * @param  {[ArrayBuffer]} buf [the buffer to send]
   * @return {[integer]}     [the actual byte length sent. -1 if send fails.]
   */
  this._send = function (buf) {
    try {
      var tempBuf = new Buffer(buf.byteLength + 3);
      tempBuf = checksum.checksumSendbuf(buf);

      if (socketId) {
        chrome.sockets.tcp.send(socketId, bufferToArrayBuffer(tempBuf), function(){

        });
      }
    } catch (e) {
      logger.error('TcpSocket._send error:' + e);
    }

  };

  /**
   * [close interface]
   */
  this._close = function () {
    closeSocket();
  };
}

CordovaTcp.prototype = driver;

module.exports = CordovaTcp;

}).call(this,require("buffer").Buffer)
},{"../config/config":46,"../engine/logic/avblock":59,"../log/log4js":72,"./checksum":47,"./driver":50,"./sptcp/sptcp":55,"buffer":81,"net":79}],50:[function(require,module,exports){
/**
 * the driver base class
 */
var logger = require('../log/log4js').logger;

function Driver() {
  var self = this;

  this._on_data = null;
  this._on_error = null;
  this._on_connectResult = null;
  this._on_disconnect = null;
  this.state = null;

  /**
   * [send interface]
   * @param  {[ArrayBuffer]} buf [the buffer to send]
   * @return {[integer]}     [the actual byte length sent. -1 if send fails.]
   */
  this.send = function(buf) {
    if (this._send) {
      return this._send(buf);
    }
  };

  /**
   * [close interface]
   */
  this.close = function() {
    if (this._close) {
      return this._close();
    }
    this.state = 'CLOSED';
  };

  this.on = function(event, callback) {
    switch (event) {
      case 'data':
        self._on_data = callback;
        break;
      case 'error':
        self._on_error = callback;
        break;
      case 'connectResult':
        self._on_connectResult = callback;
        break; 
      case 'disconnect':
        self._on_disconnect = callback;
        break;      
      default:
        logger.warn('unsupported event: ', event);
        break;
    }
  };
}

module.exports = Driver;

},{"../log/log4js":72}],51:[function(require,module,exports){
(function (Buffer){
/**
 * driver for makeblockHD APP(cordova ble bridge)
 */

var Driver = require('./driver');
var checksum = require('./checksum');

var driver = new Driver();

function Electron() {

  this._init = function() {
    if(electron){
      electron.ipcRenderer.on('serial-data', function(event, arg) {
        checksum.checksumRcvbuf(arg,driver);
      });
    }
  };

  /**
   * [_send sends array buffer to driver]
   * @param  {[ArrayBuffer]} buf [the buffer to send]
   * @return {[integer]}     [the actual byte length sent. -1 if send fails.]
   */
  this._send = function(buf) {
    var tempBuf = new Buffer(buf.byteLength + 3);
    tempBuf = checksum.checksumSendbuf(buf);

    if(electron){
      electron.ipcRenderer.send('serial-send', tempBuf);
    }
    return tempBuf.length;
  };

  /**
   * [_close close driver]
   */
  this._close = function(buf) {
    if(electron){
      electron.ipcRenderer.send('serial-close');
    }
  };

}

Electron.prototype = driver;

module.exports = Electron;

}).call(this,require("buffer").Buffer)
},{"./checksum":47,"./driver":50,"buffer":81}],52:[function(require,module,exports){
/**
 * package driver implements a variety of communicate drivers, eg serial, bluetooth ...
 */
var Serial = require('./serial');
var Mock = require('./mock');
var MakeBlockHD = require('./makeblock_hd');
var CordovaBle = require('./cordova_ble');
var Electron = require('./electron');
var Websocket = require('./websocket');
var TcpSocket = require('./tcpsocket');
var CordovaTcp = require('./cordova_tcp');
var Transport = require('./transport');
var logger = require('../log/log4js').logger;
/**
 * [create the the driver factory method]
 * @param  {[string]} connection [the driver type, 'serial', 'bluetooth', 'mock', Object] ('mock is only used for test')
 * @return {[driver object]}      [the driver object]
 */
function create(connection) {
  'use strict';

  var driver = null;
  var type = connection;

  if(typeof connection == "object") {
    type = "transport";
  }

  switch (type) {
    case 'transport':
      driver = new Transport(connection);
      break;
    case 'mock':
      driver = new Mock();
      break;
    case 'serial':
      driver = new Serial();
      break;
    case 'makeblockhd':
      driver = new MakeBlockHD();
      break;
    case 'cordovable':
      driver = new CordovaBle();
      break;
    case 'electron':
      driver = new Electron();
      break;
    case 'websocket':
      driver = new Websocket();
      break;
     case 'tcpsocket':
      driver = new TcpSocket();
      break;
    case 'cordovatcp':
      driver = new CordovaTcp();
      break;
    default:
      logger.warn('unsupported driver: ', type);
      logger.warn('used mock driver');
      driver = new Mock();
      break;
  }
  if (driver._init) {
    driver._init();
  }

  return driver;
}

exports.create = create;

},{"../log/log4js":72,"./cordova_ble":48,"./cordova_tcp":49,"./electron":51,"./makeblock_hd":53,"./mock":54,"./serial":79,"./tcpsocket":56,"./transport":57,"./websocket":58}],53:[function(require,module,exports){
(function (Buffer){
/**
 * driver for makeblockHD APP( js bridge)
 */

var Driver = require('./driver');
var checksum = require('./checksum');

var driver = new Driver();

/**
 * [buffer2string converts array buffer to string format]
 * @param  {ArrayBuffer} buf [the input array buffer]
 * @return {String}     [the output string]
 */
function buffer2string(buf) {
  var buffer = new Uint8Array(buf);
  return Array.prototype.join.call(buffer, " ");
}

/**
 * [string2buffer converts string to array buffer format]
 * @param  {String} str [the input string]
 * @return {Uint8Array}     [the output uint8 array buffer]
 */
function string2buffer(str) {
  var buffer = new Uint8Array(str.split(" "));
  return buffer;
}

function MakeblockHD() {
  'use strict';

  var self = this;

  this._init = function() {
    if (window) {
      window.receiveBluetoothData = function(str) {
        var data = string2buffer(str);

        // parse buffer data
        checksum.checksumRcvbuf(data,driver);
      };
    }
  };

  /**
   * [_send sends array buffer to driver]
   * @param  {[ArrayBuffer]} buf [the buffer to send]
   * @return {[integer]}     [the actual byte length sent. -1 if send fails.]
   */
  this._send = function(buf) {
    var tempBuf = new Buffer(buf.byteLength + 3);
    tempBuf = checksum.checksumSendbuf(buf);

    return TellNative.sendViaBluetooth(buffer2string(tempBuf));
  };


}

MakeblockHD.prototype = driver;

module.exports = MakeblockHD;

}).call(this,require("buffer").Buffer)
},{"./checksum":47,"./driver":50,"buffer":81}],54:[function(require,module,exports){
/**
 * mock communication driver implementation. used only for test.
 */
utils = require('../../lib/protocol/utils');
Driver = require('./driver');
var driver = new Driver();
var logger = require('../log/log4js').logger;
/**
 * [Mock driver constructor.]
 */
function Mock() {
  'use strict';

  var self = this;

  /**
   * [_send sends array buffer to driver]
   * @param  {[ArrayBuffer]} buf [the buffer to send]
   * @return {[integer]}     [the actual byte length sent. -1 if send fails.]
   */
  this._send = function(buf) {
    var view = new Uint8Array(buf);
    var tempBuf = new ArrayBuffer(buf.byteLength + 3);
    var idx = 0;
    var checksum = 0;
    var tempView = new Uint8Array(tempBuf);
    tempView[idx++] = 0xf0;
    for (var i = 0; i < view.length; i++) {
      tempView[idx++] = view[i];
      checksum += view[i];
    }
    tempView[idx++] = checksum & 0x7f;
    tempView[idx++] = 0xf7;

    //logger.debug('sending buffer: ' + utils.hexBuf(tempBuf));
    return tempBuf.byteLength;
  };

  /**
   * [_generate generate mock received buffer]
   * @param  {[ArrayBuffer]} buf [the buffer received]
   */
  this._generate = function (buf) {
    self._on_data(buf);
  };

}

Mock.prototype = driver;

module.exports = Mock;

},{"../../lib/protocol/utils":77,"../log/log4js":72,"./driver":50}],55:[function(require,module,exports){
(function (Buffer){
var util = require('util');  
  
function SPtcp(socket) {  
    //解析所处的阶段  
    var _sp_parse_step = SPtcp.SP_PARSE_STEP.HEADER;  
    //接收缓存  
    var _sp_rcv_buf = new Buffer(0);  
    //包头  
    var _sp_header = null;  
    //包体  
    var _sp_body = null;  
    //套接字  
    this.socket = socket;  
  
    //解析整包方法  
    function _spParseSPPacket(func){  
        if (_sp_rcv_buf.length >= SPtcp.SP_HEADER_LENGTH) {  
            //解析包头  
            _sp_header = {bodyLength: _sp_rcv_buf.readUInt16LE(0, true)};  
            //裁剪接收缓存  
            _sp_rcv_buf = _sp_rcv_buf.slice(SPtcp.SP_HEADER_LENGTH);  
            //解析包体  
            _sp_parse_step = SPtcp.SP_PARSE_STEP.BODY;  
            _spParseBody(func);  
        }  
    }  
  
    //解析包体方法  
    function _spParseBody(func){  
        if (_sp_rcv_buf.length >= _sp_header.bodyLength) {  
            var packet = _sp_rcv_buf.toString('utf8', 0, _sp_header.bodyLength);  
            // util.log('['+socket.remoteAddress+']->['+socket.localAddress+'] receive: '+packet);  
            //裁剪接收缓存  
            _sp_rcv_buf = _sp_rcv_buf.slice(_sp_header.bodyLength);  
            //处理消息  
            try {  
                var msg = JSON.parse(packet);  
                func(msg);  
            } catch(e) {  
                util.log(e);  
            }  
            //清空包头和包体  
            _sp_header = null;  
            _sp_body = null;  
            //解析下一个包  
            _sp_parse_step = SPtcp.SP_PARSE_STEP.HEADER;  
            _spParseSPPacket(func);  
        }  
    } 
  
    //接收数据  
    this.spReceiveData = function(data, func){  
        //合并新旧数据  
        _sp_rcv_buf = Buffer.concat([_sp_rcv_buf, data]);  
        //解析处理数据  
        if (_sp_parse_step == SPtcp.SP_PARSE_STEP.HEADER) {  
            _spParseSPPacket(func);  
        } else if (_sp_parse_step == SPtcp.SP_PARSE_STEP.BODY) {  
            _spParseBody(func);  
        }  
    };  
  
    //发送数据  
    this.spSendData = function(msg){  
        var packet = JSON.stringify(msg);  
        var body_buf = new Buffer(packet);  
        var head_buf = new Buffer(SPtcp.SP_HEADER_LENGTH);  
        head_buf.writeUInt16LE(body_buf.length);  
        var snd_buf = Buffer.concat([head_buf, body_buf]); 
        if (this.socket && (this.socket.readyState === 'open')) { 
          this.socket.write(snd_buf);  
        } 
    };  
  
    //销毁方法  
    this.spDestroy = function() {  
        delete this.socket;  
    };  
}  
  
//包头长度，单位字节  
SPtcp.SP_HEADER_LENGTH = 4;  
//解析所处的阶段  
SPtcp.SP_PARSE_STEP = {  
    HEADER: 0,  //解析包头阶段  
    BODY: 1,    //解析包体阶段  
};  
  
exports.SPtcp = SPtcp; 
}).call(this,require("buffer").Buffer)
},{"buffer":81,"util":90}],56:[function(require,module,exports){
(function (Buffer){
/**
 * driver for Websocket APP( js bridge)
 */

var Driver = require('./driver');
var checksum = require('./checksum');
var net = require('net');
var config = require('../config/config');
var logger = require('../log/log4js').logger;
var avblock = require('../engine/logic/avblock');
var SPtcp = require('./sptcp/sptcp').SPtcp; 

var driver = new Driver();

var socketClient = null;
var isConnect = false;
var connectFlag = false;
var checkInterval = null;

/**
 * [buffer2string converts array buffer to string format]
 * @param  {ArrayBuffer} buf [the input array buffer]
 * @return {String}     [the output string]
 */
function buffer2string(buf) {
  var buffer = new Uint8Array(buf);
  return Array.prototype.join.call(buffer, " ");
}

/**
 * [string2buffer converts string to array buffer format]
 * @param  {String} str [the input string]
 * @return {Uint8Array}     [the output uint8 array buffer]
 */
function string2buffer(str) {
  var buffer = new Uint8Array(str.split(" "));
  return buffer;
}

function checkConnect(){
  if (connectFlag === true){
    connectFlag = false;
  } else {
    logger.warn('disconnect, closeSocket');
    closeSocket();
    if (driver._on_disconnect) {
      driver._on_disconnect('websocket');
    } 
    avblock.resetAVState();   
  }
}

function closeSocket(){
  if (isConnect) {
    socketClient.destroy();
    socketClient = null;
    isConnect = false;
    if (checkInterval){
      clearInterval(checkInterval);
      checkInterval = null;
    } 
  } 
}

function initSocket() {
  var _config = config.getConfig();
  var serverIP = _config.serverIP;
  var port = _config.localTcpsocketPort;

  var client = new net.Socket(); 
  client.connect(port, serverIP, function() {
    logger.warn('CONNECTED TO: ' + serverIP + ':' + port);
     logger.warn("client connected"); 
     isConnect = true;
     connectFlag = true;
     if (driver._on_connectResult) {
       driver._on_connectResult({result: 'success', errMsg: ''});
     }
     checkConnect();
     checkInterval = setInterval(checkConnect, 6000); 
     socketClient = client;
     SPtcp.call(socketClient, socketClient);
  });

  client.on('data', function(data) {
        client.spReceiveData(data, function (message){
            if (message.type === 'block'){
              var buffer = string2buffer(message.data);
              checksum.checksumRcvbuf(buffer,driver);
            } else if (message.type === 'ping'){
              connectFlag = true; 
            } else if  (message.type === 'avblock'){
              avblock.processConnectState(message.device,message.state);
            }            
        });    
  });

  client.on('close', function() {
      logger.warn("socket closed");
      if (isConnect){
        client.destroy();
        client.spDestroy();  
        if (driver._on_disconnect) {
          driver._on_disconnect('tcp');
        }  
        avblock.resetAVState();         
        isConnect = false;
        if (checkInterval){
          clearInterval(checkInterval);
          checkInterval = null;
        }
      }
  });
}

function TcpSocket() {
  'use strict';

  var self = this;

  this._init = function() {
    initSocket();
  };

  /**
   * [_send sends array buffer to driver]
   * @param  {[ArrayBuffer]} buf [the buffer to send]
   * @return {[integer]}     [the actual byte length sent. -1 if send fails.]
   */
  this._send = function(buf) {
    try {
      var tempBuf = new Buffer(buf.byteLength + 3);
      tempBuf = checksum.checksumSendbuf(buf);

      if (socketClient) {
         //socketClient.spSendData({data: tempBuf});
         return socketClient.write(tempBuf);
      } 
    } catch(e) {
      logger.error('TcpSocket._send error:' + e);
    }
    
  };

  /**
   * [close interface]
   */
  this._close = function() {
    closeSocket();
  };
}

TcpSocket.prototype = driver;

module.exports = TcpSocket;

}).call(this,require("buffer").Buffer)
},{"../config/config":46,"../engine/logic/avblock":59,"../log/log4js":72,"./checksum":47,"./driver":50,"./sptcp/sptcp":55,"buffer":81,"net":79}],57:[function(require,module,exports){
(function (Buffer){
/**
 * driver for makeblockHD APP( js bridge)
 */

var Driver = require('./driver');
var parse = require('./checksum');

var driver = new Driver();

function Transport(connection) {
  'use strict';

  var self = this;
  this.connection = connection;

  this._init = function() {
    // 注册接收数据的接口
    this.connection && this.connection.onReceived(parse, driver);
  };

  /**
   * [_send sends array buffer to driver]
   * @param  {[ArrayBuffer]} buf [the buffer to send]
   * @return {[integer]}     [the actual byte length sent. -1 if send fails.]
   */
  this._send = function(buf) {
    var tempBuf = new Buffer(buf.byteLength + 3);
    tempBuf = parse.checksumSendbuf(buf);
    this.connection && this.connection.send(tempBuf);
  };
}

Transport.prototype = driver;

module.exports = Transport;

}).call(this,require("buffer").Buffer)
},{"./checksum":47,"./driver":50,"buffer":81}],58:[function(require,module,exports){
(function (Buffer){
/**
 * driver for Websocket APP( js bridge)
 */

var Driver = require('./driver');
var checksum = require('./checksum');
var WebSocket = require('ws');
var config = require('../config/config');
var logger = require('../log/log4js').logger;
var avblock = require('../engine/logic/avblock');

var driver = new Driver();

var socketClient = null;
var isConnect = false;
var SOCKETOPEN = 1;
var connectFlag = false;
var checkInterval = null;

/**
 * [buffer2string converts array buffer to string format]
 * @param  {ArrayBuffer} buf [the input array buffer]
 * @return {String}     [the output string]
 */
function buffer2string(buf) {
  var buffer = new Uint8Array(buf);
  return Array.prototype.join.call(buffer, " ");
}

/**
 * [string2buffer converts string to array buffer format]
 * @param  {String} str [the input string]
 * @return {Uint8Array}     [the output uint8 array buffer]
 */
function string2buffer(str) {
  var buffer = new Uint8Array(str.split(" "));
  return buffer;
}

function checkConnect(){
  if (connectFlag === true){
    connectFlag = false;
  } else {
    logger.warn('disconnect, closeSocket');
    closeSocket();
    if (driver._on_disconnect) {
      driver._on_disconnect('websocket');
    } 
    avblock.resetAVState();
  }
}

function closeSocket(){
  if (isConnect) {
    socketClient.close();
    socketClient = null;
    isConnect = false;
    if (checkInterval){
      clearInterval(checkInterval);
      checkInterval = null;
    } 
  } 
}

function initSocket() {
  var _config = config.getConfig();
  var serverIP = _config.serverIP;
  var port = _config.websocketPort;
  var socketConf = "ws://" + serverIP + ":" + port + "/";

  socketClient = new WebSocket(socketConf);

  if(socketClient) {
    socketClient.onopen = function() {
     logger.debug("socketClient Opened");
     isConnect = true;
     connectFlag = true;
     if (driver._on_connectResult) {
       driver._on_connectResult({result: 'success', errMsg: ''});
     }
     checkConnect();
     checkInterval = setInterval(checkConnect, 6000);     
    };

    socketClient.onmessage = function (evt) {
      try {
        var message = evt.data;
        message = JSON.parse(message);
        if (message.type === 'block'){
          var data = string2buffer(message.data);
          checksum.checksumRcvbuf(data,driver);
        } else if (message.type === 'ping'){
          connectFlag = true; 
        } else if  (message.type === 'avblock'){
          avblock.processConnectState(message.device,message.state);
        }
      } catch(e) {
        logger.error('socketClient.onmessage error:' + e);
      }
    };

    socketClient.onclose = function() {
      logger.warn("socket closed");
      if (isConnect){
        if (driver._on_disconnect) {
          driver._on_disconnect('websocket');
        }    
        avblock.resetAVState();    
        isConnect = false;
        if (checkInterval){
          clearInterval(checkInterval);
          checkInterval = null;
        }
      }
    };  

    socketClient.onerror = function(err) {
     logger.warn("Error: " + err);
    };

  }
}

function Websocket() {
  'use strict';

  var self = this;

  this._init = function() {
    initSocket();
  };

  /**
   * [_send sends array buffer to driver]
   * @param  {[ArrayBuffer]} buf [the buffer to send]
   * @return {[integer]}     [the actual byte length sent. -1 if send fails.]
   */
  this._send = function(buf) {
    try {
      var tempBuf = new Buffer(buf.byteLength + 3);
      tempBuf = checksum.checksumSendbuf(buf);

      if (socketClient && (socketClient.readyState === SOCKETOPEN)) {
         return socketClient.send(buffer2string(tempBuf));
      } 
    } catch(e) {
      logger.error('Websocket._send error:' + e);
    }
    
  };

  /**
   * [close interface]
   */
  this._close = function() {
    closeSocket();
  };
}

Websocket.prototype = driver;

module.exports = Websocket;

}).call(this,require("buffer").Buffer)
},{"../config/config":46,"../engine/logic/avblock":59,"../log/log4js":72,"./checksum":47,"./driver":50,"buffer":81,"ws":118}],59:[function(require,module,exports){
var event = require('../../event/event');
var events = require('./events');

/**
 * [processConnectState]
 * @param  {string} device  
 * @param  {string} state 
 */
function processConnectState(device,state){
  event.emit(events.AVBLOCKCHANGE,{device: device, state: state});
}

function resetAVState(){
  event.emit(events.RESETAVSTATE);
}

exports.processConnectState = processConnectState;
exports.resetAVState = resetAVState;
},{"../../event/event":71,"./events":64}],60:[function(require,module,exports){
/**
 * eletronic block management.
 */

var protocol = require('../../protocol');
var logger = require('../../log/log4js').logger;

var _blockTypes = {};

/**
 * registerBlockType adds a new type of block to the engine.
 * @param {object} option [block configuration and implementation.]
 */
function registerBlockType(option) {
  'use strict';

  _blockTypes[option.name] = option;
}

/**
 * unregisterBlockType remove block type by name.
 * @param {string} type [the name of the block type]
 */
function unregisterBlockType(name) {
  'use strict';

  delete _blockTypes[name];
}

/**
 * [_getBlockOption search for block type definition in _blockTypes]
 * @param  {integer | string} type    [block type id or name]
 * @param  {integer} subtype [optional, block subtype id]
 * @return {object}     [block option]
 */
function getBlockOption(type, subtype) {
  'use strict';

  var opt = null;

  if (typeof type === 'string') {
    if (type in _blockTypes) {
      opt = _blockTypes[type];
    }
  } else {
    for (var name in _blockTypes) {
      if (_blockTypes[name].type === type && ((!subtype) || _blockTypes[name].subtype === subtype)) {
        opt = _blockTypes[name];
        break;
      }
    }
  }

  return opt;
}

/**
 * [checkSubStatus checks if block has sub status]
 * @param  {object} option [the block option]
 * @return {bool}        true of false
 */
function checkSubStatus(option) {
  'use strict';

  return !(option.status instanceof Array);
}

/**
 * [checkStatusParams check StatusParam's number]
 * @param  {object}     [block option]
 * @param  {array} status [the values to be checked]
 * @return {Integer} ret [if Number-of-params not correct,return -1;otherwise,return 0]
 */
function checkStatusParams(opt, status) {
  'use strict';

  if (opt.hasOwnProperty('status')) {
    if (opt.status.length != status.length) {
      logger.warn('the needed Number-of-params is: ', opt.status.length);
      logger.warn('but your Number-of-params is: ', status.length);
      return -1;
    } else {
      return 0;
    }
  }

  return 0;
}

/**
 * [checkCommandParams check CommandParam's number]
 * @param  {object}     [block option]
 * @param  {string} command [the name of command]
 * @param  {array} values [the values to be checked]
 * @return {Integer} ret [if Number-of-params not correct,return -1;otherwise,return 0]
 */
function checkCommandParams(opt, command, values) {
  'use strict';

  if (opt.hasOwnProperty('commands')) {
    var found = false;
    for (var cmd in opt.commands) {
      if (cmd == command) {
        found = true;
        break;
      }
    }
    if (!found) {
      logger.warn('block command not found:', command);
      return -2;
    }
    var commandObj = opt.commands[command];
    if (commandObj.hasOwnProperty('datatype')) {
      if (commandObj.datatype.length != values.length) {
        logger.warn('the needed Number-of-params is: ', commandObj.datatype.length);
        logger.warn('but your Number-of-params is: ', values.length);
        return -1;
      } else {
        return 0;
      }
    }
    return 0;   
  }
}

/**
 * createStatusPackage create a block pakage (without block number)
 * @param  {string} name [the name of the block type]
 * @param  {array} values [optional. if values is provided, will set data to provided value in package.]
 * @return {package object}      [the created package object.]
 */
function createStatusPackage(name, values) {
  'use strict';

  var pkg = {};

  var opt = _blockTypes[name];
  if (!opt) {
    return logger.warn('unknown block type: ', name);
  }

  pkg.type = opt.type;
  if (opt.subtype) {
    pkg.subtype = opt.subtype;
  }

  if (opt.hasOwnProperty('status')) {
    var withSubStatus = checkSubStatus(opt);
    pkg.data = [];
    var one;
    for (var i = 0; i < opt.status.length; i++) {
      one = {};
      if (values) {
        one[opt.status[i]] = values[i];
      } else {
        one[opt.status[i]] = null;
      }
      pkg.data.push(one);
    }
  }

  return pkg;
}

/**
 * [createSubStatusPackage creates a package with sub status id]
 * @param  {string} name [the name of the block type]
 * @param  {integer} subid  [the sub status id]
 * @param  {array} values [optional. if values is provided, will set data to provided value in package.]
 * @return {package object}      [the created package object.]
 */
function createSubStatusPackage(name, subid, values) {
  'use strict';

  var pkg = {};

  var opt = _blockTypes[name];
  if (!opt) {
    return logger.warn('unknown block type: ', name);
  }

  pkg.type = opt.type;
  if (opt.subtype) {
    pkg.subtype = opt.subtype;
  }

  var status = opt.status;
  var substatus = null;
  for (var subname in status) {
    if (status[subname].subid == subid) {
      substatus = status[subname];
      break;
    }
  }

  pkg.data = [];
  pkg.data[0] = {
    'BYTE': subid
  };

  if (substatus) {
    for (var i = 0; i < substatus.datatype.length; i++) {
      var one = {};
      if (values) {
        one[substatus.datatype[i]] = values[i];
      } else {
        one[substatus.datatype[i]] = null;
      }
      pkg.data.push(one);
    }
  }
  return pkg;
}

/**
 * createCommandPackage create a block pakage with command (without block number)
 * @param  {string} name [the name of the block type]
 * @param  {string} command [the name of command]
 * @param  {array} values [optional. if values is provided, will set data to provided value in package.]
 * @return {package object}      [the created package object.]
 */
function createCommandPackage(name, command, values) {
  'use strict';

  var pkg = {};

  var opt = _blockTypes[name];
  if (!opt) {
    return logger.warn('unknown block type: ', name);
  }

  pkg.type = opt.type;
  if (opt.subtype) {
    pkg.subtype = opt.subtype;
  }

  if (opt.hasOwnProperty('commands')) {
    var found = false;
    for (var cmd in opt.commands) {
      if (cmd == command) {
        found = true;
        break;
      }
    }
    if (!found) {
      return logger.warn('block command not found:', command);
    }
    pkg.data = [];
    var commandObj = opt.commands[command];
    pkg.data[0] = {
      'BYTE': commandObj.commandid
    };

    if (commandObj.hasOwnProperty('datatype')) {
      for (var i = 0; i < commandObj.datatype.length; i++) {
        var one = {};
        if (values) {
          one[commandObj.datatype[i]] = values[i];
        } else {
          one[commandObj.datatype[i]] = null;
        }
        pkg.data.push(one);
      }
    } else if (commandObj.hasOwnProperty('variableParams')) {
      for (var j = 0; j < values.length; j++) {
        var data = {};
        if (values) {
          data[commandObj.variableParams[0]] = values[j];
        } else {
          data[commandObj.variableParams[0]] = null;
        }
        pkg.data.push(data);
      }
    }
  }

  return pkg;
}



/**
 * [createBlockValues creates the values array of data by type]
 * @param  {string} name [the name of the block type]
 * @return {array}      [the default values array]
 */
function createBlockValues(name, data) {
  'use strict';

  var ret = null;
  var values = [];
  var withSubStatus = false;
  var valueIndex = 0;
  var opt = _blockTypes[name];
  var datatype = null;
  if (!opt) {
    return logger.warn('unknown block name: ', name);
  }

  if (opt.hasOwnProperty('status')) {
    var status = opt.status;
    withSubStatus = checkSubStatus(opt);

    if (withSubStatus) {
      (function() {
        // with sub status
        ret = {};
        var subname, i;
        if (data) {
          var subid = data[valueIndex++].BYTE;
          for (subname in status) {
            if (status[subname].subid == subid) {
              datatype = status[subname].datatype;
              break;
            }
          }
          if (datatype) {
            for (i = 0; i < datatype.length; i++) {
              values.push(data[i + valueIndex][datatype[i]]);
            }
            ret[subname] = values;
          }
        } else {
          for (subname in status) {
            ret[subname] = [];
            datatype = status[subname].datatype;
            for (i = 0; i < datatype.length; i++) {
              ret[subname].push(null);
            }
          }
        }
      })();
    } else {
      (function() {
        // normal
        datatype = status;
        for (var i = 0; i < datatype.length; i++) {
          if (data) {
            values.push(data[i + valueIndex][datatype[i]]);
          } else {
            values.push(null);
          }
        }
        ret = values;
      })();
    }
  }

  return ret;
}

exports.registerBlockType = registerBlockType;
exports.unregisterBlockType = unregisterBlockType;
exports.getBlockOption = getBlockOption;
exports.createStatusPackage = createStatusPackage;
exports.createSubStatusPackage = createSubStatusPackage;
exports.createCommandPackage = createCommandPackage;
exports.createBlockValues = createBlockValues;
exports.checkSubStatus = checkSubStatus;
exports.checkStatusParams = checkStatusParams;
exports.checkCommandParams = checkCommandParams;

},{"../../log/log4js":72,"../../protocol":75}],61:[function(require,module,exports){
var logger = require('../../log/log4js').logger;
var mostVersion = 4;
var soundSensorVersion = 5;

function getBlockLatestVersion(name) {
    logger.warn('[getBlockLatestVersion] name:', name);
    switch(name) {
        case 'LINEFOLLOWER':
            return mostVersion;
        case 'KNOB':
            return mostVersion;
        case 'LEDPANEL':
            return mostVersion;
        case 'SERVO':
            return mostVersion;
         case 'ULTRASONIC':
            return mostVersion;
        case 'COLORSENSOR':
            return mostVersion;
        case 'BUTTON':
            return mostVersion;
        case 'ACCELEROMETER_GYRO':
            return mostVersion;
        case 'LIGHTSENSOR':
            return mostVersion;
        case 'FUNNYTOUCH':
            return mostVersion;
        case 'TEMPERATURE':
            return mostVersion;
        case 'BUZZER':
            return mostVersion;
        case 'OLED_DISPLAY':
            return mostVersion;
        case 'VOISERECOGNITION':
            return mostVersion;
        case 'JOYSTICK':
            return mostVersion;
        case 'PIR':
            return mostVersion;
        case 'SOIL_HUMIDITY':
            return mostVersion;
        case 'SOUNDSENSOR':
            return soundSensorVersion;
        case 'SEGDISPLAY':
            return mostVersion;
        case 'ELWIRES':
            return mostVersion;
        case 'HUMITURE':
            return mostVersion;
        case 'LEDSTRIP':
            return mostVersion;
        case 'LED':
            return mostVersion;
        case 'MOTORS':
            return mostVersion;
        case 'USB_AUDIO':
            return mostVersion;
        case 'USB_CAMERA':
            return mostVersion;
        default:
            return -1;
    }
}

exports.getBlockLatestVersion = getBlockLatestVersion;
},{"../../log/log4js":72}],62:[function(require,module,exports){
/**
 * the core library for logic engine.
 */
var driver = require('../../driver');
var protocol = require('../../protocol');
var system = require('./system');
var block = require('./block');
var _ = require('underscore');
var logger = require('../../log/log4js').logger;
var config = require('../../config/config');
var event = require('../../event/event');
var process = require('./process');
var events = require('./events');
var async = require('async');
var when = require('when');
var utils = require('../../protocol/utils');

var OFFLINECOUNT = 6;
var isRunning = null;
var stopInterval = null;
var _driver = null;
var _activeBlocksCache = process.getBlocksCache();

/**
 * [_gcBlocksCache delete the inactive blocks in cache and reset the active flag]
 */
function _gcBlocksCache() {
  'use strict';

  logger.info('cache info: ', JSON.stringify(_activeBlocksCache));
  for (var no = 0; no < _activeBlocksCache.length; no++){
    if (_activeBlocksCache[no] && (_activeBlocksCache[no].online === true)){
      if (_activeBlocksCache[no].flag === false) {
        _activeBlocksCache[no].offlinecount++;
        if (_activeBlocksCache[no].offlinecount >= OFFLINECOUNT){
          _activeBlocksCache[no].online = false;
          event.emit(events.BLOCKLIST,getActiveBlocks());
          var name = _activeBlocksCache[no].name;
          var idx = getBlockIdx(name,no);
          var state = 'disconnected';
          var count = getSameTypeBlockCount(name);
          event.emit(events.BLOCKCONNECTION,{name: name, idx: idx, state: state});
          event.emit(events.BLOCKCONUT,{type: name, count: count});
        }
      } else {
        _activeBlocksCache[no].flag = false;
      }
    }
  }
}

/**
 * [setDriver sets driver]
 * @param {string} type [the type of driver.]
 */
function setDriver(type) {
  'use strict';
  try {
    if (_driver) {
      closeDriver();
    }

    _driver = driver.create(type);
    _driver.state = 'OPENING';

    _driver.on('data', function(buffer) {
      process.processBuffer(buffer);
    });

    _driver.on('error', function(err) {
      logger.warn(err);
    });

    if ((type === 'serial') || (type === 'websocket') || (type === 'cordovatcp')) {
      _driver.on('connectResult', function(result) {
        event.emit(events.DRIVERCONNECT,result);
        sendHeartbeatPkg();
        _driver.state = 'OPENED';
      });
    } else {
      sendHeartbeatPkg();
      _driver.state = 'OPENED';
    }

    _driver.on('disconnect', function(type) {
      event.emit(events.DRIVERDISCONNECT,type);
    });
  } catch(e) {
    logger.error('setDriver error:' + e);
  }

  return _driver;

}

/**
 * [getDriver return the current driver instance]
 * @return {Object}      [the driver instance if inited.]
 */
function getDriver() {
  'use strict';

  return _driver;
}

/**
 * [getDriverConnectResult return the current driver ConnectResult]
 * @return {integer}      [1: success; 0:fail]
 */
function getDriverConnectResult(){
  var count = 0;
  return when.promise(function(resolve) {
     async.whilst(
       function() { return (_driver.state != 'OPENED'); },
       function(callback) {
         if(count > 18) {
           callback('timeout');
         } else {
           count++;
           setTimeout(callback, 100);
         }
       },
       function (err, count) {
         if (err){
           logger.warn(err);
           if (_driver.state === 'OPENED'){
             return resolve(1);
           } else {
             return resolve(0);
           }
         } else{
           return resolve(1);
         }
       }
     );
  });
}

/**
 * [closeDriver close driver]
 */
function closeDriver() {
  'use strict';

  if (_driver) {
    _driver.close();
    _driver = null;
  }
}

/**
 * getBlockNo get a block's no.
 * @param {string} name   [the name of the block type]
 * @param {integer} idx   [optional, if set, will set status of the {idx}th block of specified type(idx begins from 1 and defaults to 1)]
 * @return {integer} no   [block no]
 */
function getBlockNo(name,idx){
  var count = 0;
  for (var no = 0; no < _activeBlocksCache.length; no++){
    if (_activeBlocksCache[no]){
      if (_activeBlocksCache[no].name == name){
        count++;
      }
      if (count == idx){
        if (_activeBlocksCache[no].online){
          return no;
        } else {
          logger.warn('block offline!' + name + idx);
          return -1;
        }
      }
    }
  }
  logger.warn('block not found!' + name + idx);
  return 0;
}

/**
 * getBlockNo get a block's idx.
 * @param {string} name   [the name of the block type]
 * @param {integer} no   [block no]
 * @return {integer} idx   [the {idx}th of th block]
 */
function getBlockIdx(name,no){
  var idx = 0;
  for (var i = 0; i < _activeBlocksCache.length; i++){
    if (_activeBlocksCache[i]){
      if (_activeBlocksCache[i].name == name){
        idx++;
      }
      if (i == no){
        return idx;
      }
    }
  }
  logger.warn('block not found!' + name + no);
  return 0;
}

/**
 * getSameTypeBlockCount get same type block's count.
 * @param {string} name   [the name of the block type]
 * @return {integer} count   [the count of the block]
 */
function getSameTypeBlockCount(name){
  'use strict';

  var blocks = getActiveBlocks();
  if (name in blocks){
    return blocks[name].length;
  } else {
    return 0;
  }
}

/**
 * getVoiceCommand.
 * @return {object} {command1: id1;command2: id2;......}
 */
function getVoiceCommand(){
  'use strict';
  var command = {'Turn on the light': 3, 'Turn Red': 4, 'Turn Blue': 5, 'Turn Green': 6,'Turn White':7,'More light':8,'Less light':9,'Lights off':10,'Motor Forward':11,'Motor Backward':12,'Speed Up':13,'Speed Down':14,'Love':15,'Smile':16,'Angry':17,'Sad':18,'Rock and roll':19,'Fire Fire':20,'Game start':21,'Winter is coming':22,'Start':23,'Shut down':24};
  return command;
}

/**
 * setBlockStatus sets a block's status.
 * @param {string} name   [the name of the block type]
 * @param {Array} status [the status to set]
 * @param {integer} idx    [optional, if set, will set status of the {idx}th block of specified type(idx begins from 1 and defaults to 1)]
 */
function setBlockStatus(name, status, idx) {
  'use strict';

  if (!idx){
    idx = idx | 1;
  }
  var opt = block.getBlockOption(name);
  if (!opt) {
    return logger.warn('unknown block name: ', name);
  }

  var ret = block.checkStatusParams(opt, status);
  if (ret < 0) {
    return logger.warn('Number-of-params not correct: ', name);
  }

  var pkg = block.createStatusPackage(name, status);

  //if idx was 255,means broadcast,send to all block of this type
  if (idx === 255){
    pkg.no = 255;
  } else {
    pkg.no = getBlockNo(name,idx);
    if (pkg.no <= 0) {
      return null;
    }
  }

  _activeBlocksCache[pkg.no].values = status;

  var buf = protocol.serialize(pkg);

  if (_driver) {
    _driver.send(buf);
  }
}


/**
 * send block command sends a command to block name.
 * @param {string} name   [the name of the block type]
 * @param {string} command   [the name of the block command]
 * @param {object} params [the params of the block command]
 * @param {integer} idx    [optional, if set, will set status of the {idx}th block of specified type(idx begins from 1 and defaults to 1)]
 */
function sendBlockCommand(name, command, params, idx) {
  'use strict';

  if (!idx){
    idx = idx | 1;
  }
  var opt = block.getBlockOption(name);
  if (!opt) {
    return logger.warn('unknown block name: ', name);
  }

  var ret = block.checkCommandParams(opt, command, params);
  if (ret < 0) {
    return logger.warn('Number-of-params not correct: ', name);
  }

  var pkg = block.createCommandPackage(name, command, params);

  //if idx was 255,means broadcast,send to all block of this type
  if (idx === 255){
    pkg.no = 255;
  } else {
    pkg.no = getBlockNo(name,idx);
    if (pkg.no <= 0) {
      return null;
    }
  }

  var buf = protocol.serialize(pkg);

  if (_driver) {
    _driver.send(buf);
  }
}


/**
   * send get block version command to block name.
   * @param {string} name   [the name of the block type]
   * @param {integer} idx    [optional, if set, will get block version of the {idx}th block of specified type(idx begins from 1 and defaults to 1)]
*/
function getBlockVersion(name, idx) {
  'use strict';
  if (!idx){
    idx = idx | 1;
  }

  if(idx === 255) {
    return null;
  }

  var pkg = system.DOWN.GETVERSION;
  pkg.no = getBlockNo(name, idx);
  if (pkg.no <= 0) {
    return null;
  }

  var buf = protocol.serialize(pkg);
  if (_driver) {
    _driver.send(buf);
  }
}

function getTypeAndSubtypeByName(name) {
    'use strict';
    var typeObj = {type:-1, subtype:-1};
    var opt = block.getBlockOption(name);
    if (opt) {
      typeObj.type = opt.type;
      typeObj.subtype = opt.subtype;
    } else {
      logger.warn('[getTypeAndSubtypeByName]unknown block name: ', name);
    }
    return typeObj;
}

/**
 *
 * @param {string} name   [the name of the block type]
 * @param {string} command   [the name of the block command]
 * @param {object} params [the params of the block command]
 * @param {integer} idx    [optional, if set, will set status of the {idx}th block of specified type(idx begins from 1 and defaults to 1)]
 */
function setBlockCommonCommand(name, command, params, idx) {
  'use strict';

  if (!idx){
    idx = idx | 1;
  }
  var opt = block.getBlockOption(name);
  if (!opt) {
    return logger.warn('unknown block name: ', name);
  }

  var pkg;
  switch (command) {
    case 'RESET':
      pkg = system.DOWN.RESET;
      break;
    case 'BAUDRATE':
      pkg = system.DOWN.BAUDRATE;
      break;
    case 'FEEDBACKENABLE':
      pkg = system.DOWN.FEEDBACKENABLE;
      break;
    case 'HANDSHAKE':
      pkg = system.DOWN.HANDSHAKE;
      break;
    case 'RGB':
      pkg = system.DOWN.RGB;
      break;
    default:
      return logger.warn('unknown command');
  }
  if (pkg.hasOwnProperty('data')) {
    if (pkg.data.length != params.length){
        logger.warn('the needed Number-of-params is: ', pkg.data.length);
        logger.warn('but your Number-of-params is: ', params.length);
        return -1;
    }
    for (var j = 0; j < pkg.data.length; j++) {
      var type = _.keys(pkg.data[j])[0];
      pkg.data[j][type] = params[j];
    }
  }

  //if idx was 255,means broadcast,send to all block of this type
  if (idx === 255){
    pkg.no = 255;
  } else {
    pkg.no = getBlockNo(name,idx);
    if (pkg.no <= 0) {
      return null;
    }
  }

  var buf = protocol.serialize(pkg);
  if (_driver) {
    _driver.send(buf);
  }
}

/**
 * updateBlockStatus update a Block's status to app.
 * @param {string} name   [the name of the block type]
 * @param {integer} idx    [optional, if set, will set status of the {idx}th block of specified type(idx begins from 1 and defaults to 1)]
 */
function updateBlockStatus(name, idx) {
  'use strict';
  if (!idx){
    idx = idx | 1;
  }
  var no = getBlockNo(name,idx);
  if (no <= 0){
    return null;
  } else {
    var values = _activeBlocksCache[no].values;
    event.emit(events.BLOCKSTATUS,name, idx, values);
  }
}

/**
 * updateAllBlockStatus update all Block's status to app.
 */
function updateAllBlockStatus() {
  'use strict';

  var name;
  var idx;
  var values;
  for (var no = 0; no < _activeBlocksCache.length; no++){
    if (_activeBlocksCache[no] && (_activeBlocksCache[no].online)){
      name = _activeBlocksCache[no].name;
      idx = getBlockIdx(name,no);
      values = _activeBlocksCache[no].values;
      event.emit(events.BLOCKSTATUS,name, idx, values);
    }
  }
}

/**
 * getBlockStatus queries a block's status.
 * @param  {string}   name     [the name of the block type]
 * @param  {integer}   idx      [optional, if set, will get status of the {idx}th block of specified name(idx begins from 1 and defaults 1)]
 * @return {Promise}            [the status]
 */
function getBlockStatus(name, idx) {
  'use strict';

  if (!idx){
    idx = idx | 1;
  }
  var opt = block.getBlockOption(name);
  if (!opt) {
    logger.warn('unknown block name: ', name);
    return null;
  }

  var no = getBlockNo(name,idx);
  if (no <= 0) {
    return null;
  }

  return _activeBlocksCache[no].values;
}

/**
 * getBlockSubStatus queries a block's substatus.
 * @param  {string}   name     [the name of the block type]
 * @param  {string}   subname  [the name of the block substate]
 * @param  {integer}   idx     [optional, if set, will get status of the {idx}th block of specified name(idx begins from 1 and defaults 1)]
 * @return {Promise}           [the substatus]
 */
function getBlockSubStatus(name, subname, idx) {
  'use strict';

  if (!idx){
    idx = idx | 1;
  }
  var opt = block.getBlockOption(name);
  if (!opt) {
    logger.warn('unknown block name: ', name);
    return null;
  }

  var withSubStatus = block.checkSubStatus(opt);
  if (withSubStatus) {
    var no = getBlockNo(name,idx);
    if (no <= 0) {
      return null;
    }
    if (subname in _activeBlocksCache[no].values) {
      return _activeBlocksCache[no].values[subname];
    }
  }
  return null;
}

/**
 * [getActiveBlocks get all active blocks and their values]
 * @return {object} [blocks oject]
 */
function getActiveBlocks() {
  'use strict';
  var blocks = {};
  var name;
  for (var no = 0; no < _activeBlocksCache.length; no++){
    if (_activeBlocksCache[no] && (_activeBlocksCache[no].online)){
      name = _activeBlocksCache[no].name;
      if (!blocks.hasOwnProperty(name)) {
        blocks[name] = [];
      }
      blocks[name].push(_activeBlocksCache[no].values);
    }
  }
  return blocks;
}

/** send block number arraging request every one second. */
function _doInterval() {
  _gcBlocksCache();

  if (_driver) {
    var pkg = system.DOWN.ARANGE;
    _driver.send(protocol.serialize(pkg));
  }
}

/**
 * start interface
 */
function start() {
  if (_driver) {
    logger.warn('driver already set');
    sendHeartbeatPkg();
  } else
  {
    var conf = config.getConfig();
    setDriver(conf.driver);
  }
}

/**
 * stop interface
 */
function stop() {
  if (_driver && (_driver.state === 'OPENED')){
    stopHeartbeatPkg();
    closeDriver();
    if (stopInterval){
      clearInterval(stopInterval);
      stopInterval = null;
    }
  } else if (_driver && (_driver.state === 'OPENING')){
    if (!stopInterval){
      stopInterval = setInterval(stop, 500);
    }
  }
}

/**
 * send HeartbeatPkg interface
 */
function sendHeartbeatPkg(){
  if (isRunning){
    logger.warn('HeartbeatPkg already running');
  } else {
    isRunning = setInterval(_doInterval, 500);
  }
}

/**
 * stop HeartbeatPkg interface
 */
function stopHeartbeatPkg(){
  if (isRunning){
    clearInterval(isRunning);
    isRunning = null;
  }
}

exports.setDriver = setDriver;
exports.closeDriver = closeDriver;
exports.getDriver = getDriver;
exports.getDriverConnectResult = getDriverConnectResult;
exports.setBlockStatus = setBlockStatus;
exports.updateBlockStatus = updateBlockStatus;
exports.updateAllBlockStatus = updateAllBlockStatus;
exports.getSameTypeBlockCount = getSameTypeBlockCount;
exports.getBlockStatus = getBlockStatus;
exports.getBlockSubStatus = getBlockSubStatus;
exports.sendBlockCommand = sendBlockCommand;
exports.getBlockVersion = getBlockVersion;
exports.getTypeAndSubtypeByName = getTypeAndSubtypeByName;
exports.setBlockCommonCommand = setBlockCommonCommand;
exports.getActiveBlocks = getActiveBlocks;
exports.getBlockIdx = getBlockIdx;
exports.getBlockNo = getBlockNo;
exports.getVoiceCommand = getVoiceCommand;

exports.start = start;
exports.stop = stop;
exports.sendHeartbeatPkg = sendHeartbeatPkg;
exports.stopHeartbeatPkg = stopHeartbeatPkg;

},{"../../config/config":46,"../../driver":52,"../../event/event":71,"../../log/log4js":72,"../../protocol":75,"../../protocol/utils":77,"./block":60,"./events":64,"./process":67,"./system":68,"async":78,"underscore":99,"when":117}],63:[function(require,module,exports){
/**
 * logic engine
 */
var protocol = require('../../protocol');
var config = require('../../config/config');
var core = require('./core');
var log4js = require('../../log/log4js');
var logger = log4js.logger;
var block = require('./block');
var event = require('../../event/event');
var update = require('./update');
var firmware = require('./firmware');

var LogicEngine = function(conf) {
  var self = this;

  config.setConfig(conf);

  this._config = config.getConfig();

  log4js.setLoglevel(this._config.loglevel);

  /**
   * [setConfig sets config]
   * @param {object} conf [configuration]
   */
  this.setConfig = function(conf) {
    config.setConfig(conf);
  };

  /**
   * [setDriver sets driver]
   * @param {string} type [the type of driver.]
   */
  this.setDriver = function(type) {
    return core.setDriver(type);
  };

  /**
   * [getDriverConnectResult return the current driver ConnectResult]
   * @return {integer}      [1: success; 0:fail]
  */
  this.getDriverConnectResult = function() {
    return core.getDriverConnectResult();
  };

  /**
   * [closeDriver closde driver]
   */
  this.closeDriver = function() {
    core.closeDriver();
  };

  /**
   * registerBlockType adds a new type of block to the engine.
   * @param {object} option [block configuration and implementation.]
   */
  this.registerBlockType = function(option) {
    return block.registerBlockType(option);
  };

  /**
   * unregisterBlockType remove block type by name.
   * @param {string} type [the name of the block type]
   */
  this.unregisterBlockType = function(name) {
    return block.unregisterBlockType(name);
  };

  /**
   * setBlockStatus sets a block's status.
   * @param {string} type   [the name of the block type]
   * @param {object} status [the status to set]
   * @param {integer} idx    [optional, if set, will set status of the {idx}th block of specified type(idx begins from 0 and defaults to 0)]
   */
  this.setBlockStatus = function(type, status, idx) {
    return core.setBlockStatus(type, status, idx);
  };

  /**
   * updateBlockStatus update a Block's status to app.
   */
  this.updateBlockStatus = function(name, idx) {
    return core.updateBlockStatus(name, idx);
  };

  /**
   * updateAllBlockStatus update all Block's status to app.
   */
  this.updateAllBlockStatus = function() {
    return core.updateAllBlockStatus();
  };

  /**
   * getVoiceCommand.
   * @return {object} {command1: id1;command2: id2;......}
   */
  this.getVoiceCommand = function() {
    return core.getVoiceCommand();
  };

  /**
   * getBlockStatus queries a block's status.
   * @param  {string}   type     [the name of the block type]
   * @param  {integer}   idx      [optional, if set, will set status of the {idx}th block of specified type(idx begins from 0 and defaults 0)]
   * @return {Promise}            [the status promise]
   */
  this.getBlockStatus = function(type, idx) {
    return core.getBlockStatus(type, idx);
  };

/**
 * getBlockSubStatus queries a block's substatus.
 * @param  {string}   type     [the name of the block type]
 * @param  {string}   subname  [the name of the block substate]
 * @param  {integer}   idx     [optional, if set, will get status of the {idx}th block of specified name(idx begins from 0 and defaults 0)]
 * @return {Promise}           [the substatus]
 */
  this.getBlockSubStatus = function(type, subname, idx) {
    return core.getBlockSubStatus(type, subname, idx);
  };

  /**
   * [getActiveBlocks get all active blocks and their values]
   * @return {object} [blocks oject]
   */
  this.getActiveBlocks = function() {
    return core.getActiveBlocks();
  };

  /**
   * send block command sends a command to block name.
   * @param {string} name   [the name of the block type]
   * @param {string} command   [the name of the block command]
   * @param {object} params [the params of the block command]
   * @param {integer} idx    [optional, if set, will set status of the {idx}th block of specified type(idx begins from 0 and defaults to 0)]
   */
  this.sendBlockCommand = function(name, command, params, idx) {
    return core.sendBlockCommand(name, command, params, idx);
  };

  /**
   * send get block version command to block name.
   * @param {string} name   [the name of the block type]
   * @param {integer} idx    [optional, if set, will get block version of the {idx}th block of specified type(idx begins from 0 and defaults to 0)]
   */
  this.getBlockVersion = function(name, idx) {
    return core.getBlockVersion(name, idx);
  };

  this.getTypeAndSubtypeByName = function(name) {
    return core.getTypeAndSubtypeByName(name);
  };

  this.setBlockFirmware = function(type, subtype, firmwarebuf) {
    return firmware.setFirmware(type, subtype, firmwarebuf);
  };

  this.updateBlockFirmware = function(name, idx) {
    return update.updateBlockFirmware(name, idx);
  };

  this.resetFirmwareUpdateState = function(nodesLength) {
    return update.resetFirmwareUpdateState(nodesLength);
  };

  this.setUpdatingFalse = function() {
    return update.setUpdatingFalse();
  };

  /**
   * setBlockCommonCommand sends a common command to block.
   * @param {string} name   [the name of the block type]
   * @param {string} command   [the name of the block command]
   * @param {object} params [the params of the block command]
   * @param {integer} idx    [optional, if set, will set status of the {idx}th block of specified type(idx begins from 0 and defaults to 0)]
   */
  this.setBlockCommonCommand = function(name, command, params, idx) {
    return core.setBlockCommonCommand(name, command, params, idx);
  };

  /**
   * start interface
   */
  this.start = function() {
    return core.start();
  };

  /**
   * stop interface
   */
  this.stop = function() {
    return core.stop();
  };

  /**
   * send HeartbeatPkg interface
   */
  this.sendHeartbeatPkg = function() {
    return core.sendHeartbeatPkg();
  };

  /**
   * stop HeartbeatPkg interface
   */
  this.stopHeartbeatPkg = function() {
    return core.stopHeartbeatPkg();
  };

  this.event = event;
  
  /**
   * on registers an event handler to engine.
   * @param  {string}   event    [the event name]
   * @param  {Function} callback [callback funtion when event triggers]
   */
  this.on = function(event, callback) {
    this.event.on(event, callback);
  };

  /**
   * remove an event handler.
   * @param  {string}   event    [the event name]
   * @param  {Function} callback [callback funtion when event triggers]
   */
  this.removeListener = function(event, callback) {
    this.event.removeListener(event, callback);
  };

  // static the egine
  core.start();
};

module.exports = LogicEngine;

},{"../../config/config":46,"../../event/event":71,"../../log/log4js":72,"../../protocol":75,"./block":60,"./core":62,"./firmware":65,"./update":70}],64:[function(require,module,exports){
var events = {
  HANDSHAKE: 'handshake',
  BLOCKLIST: 'blockListChanges',
  BLOCKSTATUS: 'blockStatusChanges',
  BLOCKCONNECTION: 'blockConnectionStatusChanges',
  BLOCKCONUT: 'sameTypeBlockCountChanges',
  DRIVERCONNECT: 'driverConnectResult',
  DRIVERDISCONNECT: 'driverDisconnect',
  AVBLOCKCHANGE: 'avblockChanges',
  RESETAVSTATE: 'resetavstate',
  ERROR: 'error',
  BLOCKVERSION: 'blockVersionResult',
  UPDATEFIRMWAREFILERESULT: 'updateFirmwareFileResult',
  SETFIRMWAREBYTYPEANDSUBTYPE: 'setFirmWareByTypeAndSubtype',
  BLOCKUPDATERESULT: 'blockUpdateResult',
  INITIATIVEDISCONNECT: 'initiativeDisconnect',
  DISCONNBLOCKRECONNECT: 'disconnBLockReconnect'
};

module.exports = events;

},{}],65:[function(require,module,exports){
var logger = require('../../log/log4js').logger;

var _initiateArr = false;
var subtypeArr = [];
var firmwareArr = [];
var _maxArrLength = 0x80;
var _maxSubArrLength = 0x80;
var _defaultFirmware = '@@';

function _initFirmwareArr() {
    for(var i = 0; i < _maxSubArrLength; ++i) {
        subtypeArr[i] = _defaultFirmware;
    }
    for(var j = 0; j < _maxArrLength; ++j) {
        firmwareArr[j] = subtypeArr;
    }
}

function setFirmware(type, subtype, firmware) {
    logger.warn('[setFirmware] ', type, subtype);
    if(!_initiateArr) {
        _initiateArr = true;
        _initFirmwareArr();
    }
    if(type <= 0 || type >= _maxArrLength) {
        return false;
    }
    firmwareArr[type][subtype] = firmware;
    logger.warn('[setFirmware] firmware.length:', firmwareArr[type][subtype].length);
    return true;
}

function getFirmware(type, subtype) {
    if(!_initiateArr) {
        _initiateArr = true;
        _initFirmwareArr();
    }
    if(type <= 0 || type >= _maxArrLength) {
        return _defaultFirmware;
    }
    return firmwareArr[type][subtype];
}

exports.setFirmware = setFirmware;
exports.getFirmware = getFirmware;
},{"../../log/log4js":72}],66:[function(require,module,exports){
/**
 * engine factory and initializition.
 */
var blocks = require('../../blocks/electronic');
var LogicEngine = require('./engine');
var _ = require('underscore');

/**
 * [create is the engine factory]
 * @param  {object} conf [configuration]
 * @return {object}      [the engine instance]
 */
function create(conf) {
  var engine = new LogicEngine(conf);
  for (var i = 0; i < blocks.length; i++) {
    engine.registerBlockType(blocks[i]);
  }

  return engine;
}

// export to browser
if (typeof window !== "undefined") {
  window.createNeuronsLogicEngine = create;
}

exports.create = create;

},{"../../blocks/electronic":14,"./engine":63,"underscore":99}],67:[function(require,module,exports){
var protocol = require('../../protocol');
var utils = require('../../protocol/utils');
var system = require('./system');
var block = require('./block');
var core = require('./core');
var logger = require('../../log/log4js').logger;
var event = require('../../event/event');
var events = require('./events');
var update = require('./update');
var blockversion = require('./blockversion');

var _activeBlocksCache = [];

/**
 * [_processArrange process number arrange answer from block]
 * @param  {object} pkg [the arrange answer package]
 */
function _processArrange(pkg) {
    'use strict';

    var type = pkg.data[0].BYTE;
    var subtype = null;
    if (pkg.data.length > 1) {
      subtype = pkg.data[1].BYTE;
    }

    var opt = block.getBlockOption(type, subtype);

    if (opt === null) {
      logger.warn('block type not registered, pkg:', pkg);
      return;
    }

    if ((pkg.no in _activeBlocksCache) && (opt.name == _activeBlocksCache[pkg.no].name) && (_activeBlocksCache[pkg.no].online)) {
      _activeBlocksCache[pkg.no].flag = true;
      _activeBlocksCache[pkg.no].offlinecount = 0;   
    } else {
      var idx,count;
      // replace by another block,report to app
      if ((pkg.no in _activeBlocksCache) && (opt.name != _activeBlocksCache[pkg.no].name) && (_activeBlocksCache[pkg.no].online)) {
      _activeBlocksCache[pkg.no].online = false;
        var name = _activeBlocksCache[pkg.no].name;
        idx = core.getBlockIdx(name,pkg.no);
        count = core.getSameTypeBlockCount(name);
        event.emit(events.BLOCKCONNECTION,{name: name, idx: idx, state: 'disconnected'});
        event.emit(events.BLOCKCONUT,{type: name, count: count});
      }
      // create cache
      var cache = {};
      cache.name = opt.name;
      cache.flag = true;
      cache.offlinecount = 0;
      cache.online = true;
      cache.values = block.createBlockValues(opt.name);
      _activeBlocksCache[pkg.no] = cache;
      event.emit(events.BLOCKLIST,core.getActiveBlocks());
      idx = core.getBlockIdx(cache.name,pkg.no);
      var state = 'connected';
      event.emit(events.BLOCKCONNECTION,{name: cache.name, idx: idx, state: state});
      count = core.getSameTypeBlockCount(cache.name);
      event.emit(events.BLOCKCONUT,{type: cache.name, count: count});    
    }
}

/**
 * [_processBlockVersion process block version answer from block]
 * @param  {object} pkg [the block version answer package]
 */
function _processBlockVersion(pkg) {
  'use strict';
  if ((pkg.no in _activeBlocksCache) && pkg.data.length >= 3) {
    var name = _activeBlocksCache[pkg.no].name;
    var idx = core.getBlockIdx(name, pkg.no);
    var version = pkg.data[2].SHORT;
    var opt = block.getBlockOption(name);
    if (opt === null) {
      logger.warn('block type not registered, block name:', name);
      return;
    }
    var latestVersion = blockversion.getBlockLatestVersion(name);
    var update = false;
    if(latestVersion != -1 && latestVersion > version) {
      update = true;
    }
    event.emit(events.BLOCKVERSION,{name: name, idx: idx, update: update});
  } else {
    logger.warn('[_processBlockVersion]cannot find pkg in _activeBlocksCache pkg.no:', pkg.no);
  }
}

/**
 * [_processErrorcode process errorcode from block]
 * @param  {object} pkg [the errorcode package]
 */
function _processErrorcode(pkg) {
  'use strict';

  var errorCode = pkg.data[0].BYTE;
  switch (errorCode) {
    case 0x0f:
      logger.debug('data pkg correct');
      break;
    case 0x10:
      logger.warn('system busy, block no:' + pkg.no);
      break;
    case 0x11:
      logger.warn('data pkg block type error, block no:' + pkg.no);
      break;
    case 0x12:
      logger.warn('data pkg checksum error, block no:' + pkg.no);
      break;
  }
}

/**
 * [_processHandShake process handshake from block]
 * @param  {object} pkg [the handshake package]
 */
function _processHandShake(pkg) {
  'use strict';

  if ((_activeBlocksCache[pkg.no]) && (_activeBlocksCache[pkg.no].online)){
    var name = _activeBlocksCache[pkg.no].name; 
    var idx = 0;
    for (var i = 1; i <= pkg.no; i++){
      if (name == _activeBlocksCache[i].name){
        idx++;
      }  
    }
    event.emit(events.HANDSHAKE,name,idx);
    return;    
  }
}

function _processStatus(name, pkg) {
  'use strict';

  //  logger.warn(JSON.stringify(pkg.data));

  var values = block.createBlockValues(name, pkg.data);
  var withSubStatus = !(values instanceof Array);

  var j;
  if ((_activeBlocksCache[pkg.no]) && (name == _activeBlocksCache[pkg.no].name)){
    var idx = 0;
    for (var i = 1; i <= pkg.no; i++){
      if (name == _activeBlocksCache[i].name){
        idx++;
      }  
    }
    event.emit(events.BLOCKSTATUS,name, idx, values);
    if (withSubStatus) {
      for (var subname in values) {
        if (subname in _activeBlocksCache[pkg.no].values) {
          for (j = 0; j < values[subname].length; j++) {
            if (_activeBlocksCache[pkg.no].values[subname][j] != values[subname][j]) {
              _activeBlocksCache[pkg.no].values[subname] = values[subname];
              break;
            }
          }
        }
      }
    } else {
      for (j = 0; j < values.length; j++) {
        if (_activeBlocksCache[pkg.no].values[j] != values[j]) {
          _activeBlocksCache[pkg.no].values = values;
          break;
        }
      }
    }
  }  
}

/**
 * [processBuffer processes buffers receiving from the driver]
 * @param  {ArrayBuffer} buffer [the buffer]
 */
 function processBuffer(buffer) {
  'use strict';
  try {
    var bufIdx = 1;
    var view = new Uint8Array(buffer);
    var type = view[bufIdx++];
    var pkg = null;

    if (type >= 0x00 && type <= 0x0f) {
      // reserved
    } else if (type >= 0x10 && type <= 0x20) {
      // system package
      if (type in system.UP) {

        switch (type) {
          case 0x10:
          var blocktype = view[bufIdx++];
          if (blocktype >= 0x61 && blocktype <= 0x7f) {
            pkg = protocol.parse(buffer, system.UP[type].withSubtype);
          } else {
            pkg = protocol.parse(buffer, system.UP[type].withoutSubtype);
          }
          if(blocktype !== 0) {
            _processArrange(pkg);
          } else {
            update.handleBootloadBlock(pkg);
          }
          break;
          case 0x12:
          pkg = protocol.parse(buffer, system.UP[type]);
          _processBlockVersion(pkg);
          break;
          case 0x20:
          pkg = protocol.parse(buffer, system.UP[type]);
          _processHandShake(pkg);
          break;
          case 0x15:
          pkg = protocol.parse(buffer, system.UP[type]);
          _processErrorcode(pkg);
          break;
          default:
          break;
        }
      } else {
        logger.warn('system package type not supported: ', type);
      }
    } else if(type == 0x61) {
      var subtype = view[bufIdx];
      logger.warn('type:0x61 subtype:' + subtype);
      switch(subtype) {
        case 0x06:
          pkg = protocol.parse(buffer, system.UPDATE[subtype]);
          update.handleHardwareID(pkg);
          break;
        case 0x07:
          pkg = protocol.parse(buffer, system.UPDATE[subtype]);
          update.handleUpdateFirmwareFileRes(pkg);
          break;
        case 0x08:
          pkg = protocol.parse(buffer, system.UPDATE[subtype]);
          logger.warn('pkg:' + JSON.stringify(pkg));
          update.handleQueryFirmwareFileRes(pkg);
          break;
        default:
          break;
      }
    } else if (type >= 0x21 && type <= 0x7f) {
      // block data
      var subtype = null;
      if (type >= 0x61) {
        subtype = view[bufIdx++];
      }
      var opt = null;
      opt = block.getBlockOption(type, subtype);
      if (opt) {
        var withSubStatus = block.checkSubStatus(opt);
        if (withSubStatus) {
          pkg = block.createSubStatusPackage(opt.name, view[bufIdx++]);
        } else {
          pkg = block.createStatusPackage(opt.name);
        }

        pkg = protocol.parse(buffer, pkg);
        _processStatus(opt.name, pkg);
      }
    } else {
      // invalid
      logger.warn('invalid package type: ', type);
    }
  } catch(e) {
    logger.warn('_process error: ' + e + ' buffer: ' + utils.hexBuf(buffer));
  }
}

function getBlocksCache() {
  'use strict';
   return _activeBlocksCache;
}

exports.processBuffer = processBuffer;
exports.getBlocksCache = getBlocksCache;

},{"../../event/event":71,"../../log/log4js":72,"../../protocol":75,"../../protocol/utils":77,"./block":60,"./blockversion":61,"./core":62,"./events":64,"./system":68,"./update":70}],68:[function(require,module,exports){
/**
 * [PACKAGES defines package format by receiving type]
 * @type {Array}
 */
var UP = [];
var UPDATE = [];
var DOWN = {};
// answer of block number arranging.
UP[0x10] = {
  withSubtype: {
    no: 0, // will be overwrite to source block no
    type: 0x10,
    data: [{
      'BYTE': 0 // type
    }, {
      'BYTE': 0 // subtype
    }]
  },
  withoutSubtype: {
    no: 0, // will be overwrite to source block no
    type: 0x10,
    data: [{
      'BYTE': 0 // type
    }]
  }
};

////////////////////////////////////// update block ////////////////////////////////////
// answer of block version query.
UP[0x12] = {
  no: 0, // will be overwrite to source block no
  type: 0x12,
  data: [{
    'BYTE': 0 // type, must be 0x15, means neuron block
  }, {
    'BYTE': 0 // subtype, must be 0x01, means support neuron protocol
  }, {
    'SHORT': 0 //means neuron block version
  }]
};

UP[0x61] = {
  no: 0,
  type: 0x61
};

UPDATE[0x06] = {
  no: 0,
  type: 0x61,
  subtype: 0x06,
  data: [{
    'short': 0
  }, {
    'short': 0
  }]
};

UPDATE[0x07] = {
  no: 0,
  type: 0x61,
  subtype: 0x07,
  data: [{
    'SHORT': 0
  },{
    'BYTE': 0
  }]
};

UPDATE[0x08] = {
  no: 0,
  type: 0x61,
  subtype: 0x08,
  data: [{
    'BYTE': 0
  }]
};

////////////////////////////////////// end update block ////////////////////////////////////

// handshake from block
UP[0x20] = {
  no: 0, // will be overwrite to source block no
  type: 0x20
};
// errorcode from block
UP[0x15] = {
  no: 0, // will be overwrite to source block no
  type: 0x15,
    data: [{
      'BYTE': 0 // errorcode
    }]
};


// ask for block number arranging.
DOWN.ARANGE = {
  no: 0xff,
  type: 0x10,
  data: [{
    'BYTE': 0
  }]
};
// reset block
DOWN.RESET = {
  no: 0, // must be overwrite to target block no.
  type: 0x11
};
// set baudrate
DOWN.BAUDRATE = {
  no:0, // must be overwrite to target block no.
  type: 0x13,
  data: [{
    'BYTE': 0 // must be overwrite. 0 for 115200, 1 for 921600
  }]
};
// set report behavior
DOWN.BEHAVIOR = {
  no: 0, // must be overwrite to target block no.
  type: 0x1e,
  data: [{
    'BYTE': 0 // must be overwrite. 0 for report when query, 1 for report when status changes, 2 for report periodically.
  }, {
    'long': 0 // must be overwrite. the report period,if not report periodically,set 0
  }]
};
// query for block status
DOWN.QUERY = {
  no: 0, // must be overwrite to target block no.
  type: 0x1f
};

// send FEEDBACKENABLE to block
DOWN.FEEDBACKENABLE = {
  no: 0, // must be overwrite to target block no.
  type: 0x61,
  subtype: 0x01,
  data: [{
    'BYTE': 0 // must be overwrite. 0 for disable, 1 for enable
  }]
};

// send handshake to block
DOWN.HANDSHAKE = {
  no: 0, // must be overwrite to target block no.
  type: 0x61,
  subtype: 0x03
};

// send rgb to block
DOWN.RGB = {
  no: 0, // must be overwrite to target block no.
  type: 0x61,
  subtype: 0x02,
  data: [{
    'SHORT': 0 // R, must be overwrite.
  }, {
    'SHORT': 0 // G, must be overwrite.
  }, {
    'SHORT': 0 // B, must be overwrite.
  }]
};

// get block version
DOWN.GETVERSION = {
  no: 0, // must be overwrite to target block no.
  type: 0x12
};

DOWN.UPDATEBLOCK = {
  no: 0, // must be overwrite to target block no.
  type: 0x61,
  subtype: 0x05,
  data: [{
    'BYTE': 0 // type, must be overwrite
  }, {
    'BYTE': 0 // subtype, must be overwrite
  }]
};

DOWN.QUERYBLOCKID = {
  no: 0,
  type: 0x61,
  subtype: 0x06
};

DOWN.SENDFIRMWAREFILEINFO = {
  no: 0,  // must be overwrite to target block no.
  type: 0x61,
  subtype: 0x07,
  data: [{
    'SHORT': 0x00
  }, {
    'long': 0x00
  }, {
    'long': 0x00
  }]
};

DOWN.SENDFIRMWAREFILEDATA = {
  no: 0xff,
  type: 0x61,
  subtype: 0x07,
  data: [{
    'SHORT': 0x00
  }, {
    'SHORT': 0x80
  }]
};

DOWN.QUERYUPDATERESULT = {
  no: 0,
  type: 0x61,
  subtype: 0x08
};

exports.UP = UP;
exports.UPDATE = UPDATE;
exports.DOWN = DOWN;

},{}],69:[function(require,module,exports){
var logger = require('../../log/log4js').logger;

function checkHardwareId(hardwareId_0, hardwareId_1) {
    var iRet = -1;
    var firstValue = _checkHardwareFirstId(hardwareId_0);
    logger.warn('hardwareId_0 firstValue ', hardwareId_0, firstValue);
    if(firstValue == -1) {
        return iRet;
    }
    var secondValue = _checkHardwareSecondId(hardwareId_1);
    logger.warn('hardwareId_1 secondValue ', hardwareId_1, secondValue);
    if(secondValue == -1) {
        return iRet;
    }

    iRet = _getHardwareId(firstValue, secondValue);
    return iRet;
}

function getRelativeTypeSubType(hardwareId) {
    var typeObj = {type:-1, subtype:-1};
    switch(hardwareId) {
        case 1:
            break;
        case 2:
            typeObj.type = 0x63;
            typeObj.subtype = 0x04;
            break;
        case 3:
            break;
        case 4:
            typeObj.type = 0x64;
            typeObj.subtype = 0x01;
            break;
        case 5:
            typeObj.type = 0x65;
            typeObj.subtype = 0x04;
            break;
        case 6:
            break;
        case 7:
            typeObj.type = 0x65;
            typeObj.subtype = 0x02;
            break;
        case 8:
            typeObj.type = 0x62;
            typeObj.subtype = 0x03;
            break;
        case 9:
            break;
        case 10:
            typeObj.type = 0x63;
            typeObj.subtype = 0x03;
            break;
        case 11:
            typeObj.type = 0x63;
            typeObj.subtype = 0x05;
            break;
        case 12:
            break;
        case 13:
            typeObj.type = 0x64;
            typeObj.subtype = 0x02;
            break;
        case 14:
            typeObj.type = 0x63;
            typeObj.subtype = 0x06;
            break;
        case 15:
            typeObj.type = 0x63;
            typeObj.subtype = 0x02;
            break;
        case 16:
            typeObj.type = 0x65;
            typeObj.subtype = 0x03;
            break;
        case 17:
            typeObj.type = 0x64;
            typeObj.subtype = 0x04;
            break;
        case 18:
            break;
        case 19:
            break;
        case 20:
            typeObj.type = 0x63;
            typeObj.subtype = 0x01;
            break;
        case 21:
            break;
        case 22:
            break;
        case 23:
            typeObj.type = 0x62;
            typeObj.subtype = 0x02;
            break;
        case 24:
            typeObj.type = 0x66;
            typeObj.subtype = 0x02;
            break;
        case 25:
            typeObj.type = 0x65;
            typeObj.subtype = 0x05;
            break;
        case 26:
            break;
        case 27:
            break;
        case 28:
            break;
        case 29:
            typeObj.type = 0x66;
            typeObj.subtype = 0x03;
            break;
        case 30:
            typeObj.type = 0x63;
            typeObj.subtype = 0x07;
            break;
        case 31:
            break;
        case 32:
            typeObj.type = 0x64;
            typeObj.subtype = 0x07;
            break;
        case 33:
            break;
        case 34:
            break;
        case 35:
            typeObj.type = 0x63;
            typeObj.subtype = 0x0c;
            break;
        case 36:
            break;
        case 37:
            typeObj.type = 0x63;
            typeObj.subtype = 0x08;
            break;
        case 38:
            break;
        case 39:
            break;
        case 40:
            break;
        case 41:
            typeObj.type = 0x63;
            typeObj.subtype = 0x0d;
            break;
        case 42:
            typeObj.type = 0x65;
            typeObj.subtype = 0x06;
            break;
        case 43:
            break;
        default:
            break;
    }
    return typeObj;
}

function _getHardwareId(firstValue, secondValue) {
    var iRet = -1;
    var index = _getIndex(secondValue);
    logger.warn('firstValue secondValue index ', firstValue, secondValue, index);
    if(index == -1) {
        return iRet;
    }
    var startID = 0;
    if(firstValue === 0) {
        startID = 1;
        iRet = startID + index;
    } else if(firstValue == 0x81) {
        startID = 35;
        iRet = startID + index;
    } else if(firstValue == 0x3ff) {
        startID = 18;
        iRet = startID + index;
    }
    return iRet;
}

function _getIndex(hardwareId) {
    var index = -1;
    switch (hardwareId) {
        case 0:
            index = 0;
            break;
        case 0x40:
            index = 1;
            break;
        case 0x81:
            index = 2;
            break;
        case 0xc1:
            index = 3;
            break;
        case 0x100:
            index = 4;
            break;
        case 0x140:
            index = 5;
            break;
        case 0x17b:
            index = 6;
            break;
        case 0x1bc:
            index = 7;
            break;
        case 0x200:
            index = 8;
            break;
        case 0x243:
            index = 9;
            break;
        case 0x284:
            index = 10;
            break;
        case 0x2aa:
            index = 11;
            break;
        case 0x2ff:
            index = 12;
            break;
        case 0x33e:
            index = 13;
            break;
        case 0x37e:
            index = 14;
            break;
        case 0x3bf:
            index = 15;
            break;
        case 0x3ff:
            index = 16;
            break;
        default:
            index = -1;
            break;
    }
    return index;
}

function _checkHardwareFirstId(hardwareId) {
    var firstValue = -1;
    if(hardwareId >= 0 && hardwareId <= 15) {
        firstValue = 0;
    } else if(hardwareId >= (0x81 - 15) && hardwareId <= (0x81 + 15)) {
        firstValue = 0x81;
    } else if(hardwareId >= (0x3ff - 15) && hardwareId <= (0x3ff + 15)) {
        firstValue = 0x3ff;
    }
    return firstValue;
}

function _checkHardwareSecondId(hardwareId) {
    var secondValue = -1;
    if(hardwareId >= 0 && hardwareId <= 15) {
        secondValue = 0;
    } else if(hardwareId >= (0x40 - 15) && hardwareId <= (0x40 + 15)) {
        secondValue = 0x40;
    } else if(hardwareId >= (0x81 - 15) && hardwareId <= (0x81 + 15)) {
        secondValue = 0x81;
    } else if(hardwareId >= (0xc1 - 15) && hardwareId <= (0xc1 + 15)) {
        secondValue = 0xc1;
    } else if(hardwareId >= (0x100 - 15) && hardwareId <= (0x100 + 15)) {
        secondValue = 0x100;
    } else if(hardwareId >= (0x140 - 15) && hardwareId <= (0x140 + 15)) {
        secondValue = 0x140;
    } else if(hardwareId >= (0x17b - 15) && hardwareId <= (0x17b + 15)) {
        secondValue = 0x17b;
    } else if(hardwareId >= (0x1bc - 15) && hardwareId <= (0x1bc + 15)) {
        secondValue = 0x1bc;
    } else if(hardwareId >= (0x200 - 15) && hardwareId <= (0x200 + 15)) {
        secondValue = 0x200;
    } else if(hardwareId >= (0x243 - 15) && hardwareId <= (0x243 + 15)) {
        secondValue = 0x243;
    } else if(hardwareId >= (0x284 - 15) && hardwareId <= (0x284 + 15)) {
        secondValue = 0x284;
    } else if(hardwareId >= (0x2aa - 15) && hardwareId <= (0x2aa + 15)) {
        secondValue = 0x2aa;
    } else if(hardwareId >= (0x2ff - 15) && hardwareId <= (0x2ff + 15)) {
        secondValue = 0x2ff;
    } else if(hardwareId >= (0x33e - 15) && hardwareId <= (0x33e + 15)) {
        secondValue = 0x33e;
    } else if(hardwareId >= (0x37e - 15) && hardwareId <= (0x37e + 15)) {
        secondValue = 0x37e;
    } else if(hardwareId >= (0x3bf - 15) && hardwareId <= (0x3bf + 15)) {
        secondValue = 0x3bf;
    } else if(hardwareId >= (0x3ff - 15) && hardwareId <= (0x3ff + 15)) {
        secondValue = 0x3ff;
    }
    return secondValue;
}

exports.checkHardwareId = checkHardwareId;
exports.getRelativeTypeSubType = getRelativeTypeSubType;
},{"../../log/log4js":72}],70:[function(require,module,exports){
var events = require('./events');
var async = require('async');
var when = require('when');
var utils = require('../../protocol/utils');
var core = require('./core');
var logger = require('../../log/log4js').logger;
var event = require('../../event/event');
var events = require('./events');
var block = require('./block');
var system = require('./system');
var protocol = require('../../protocol');
var table = require('./table');
var firmware = require('./firmware');

var _isUpdating = false;
var _updateFinished = true;
var _nodesLength = 0;
var _lastTimeStamp = 0;
var _currentTimeStamp = 0;
var _uint8buf = null;
var _defaultFirmware = '@@';
var _setbootloadSuccess = false;
var _setbootloadIntervalId = 0;
var _setbootloadCount = 0;
var _setbootloadMaxCount = 3;
var _setbootloadInterval = 3000;

var _infoIntervalID = 0;
var _dataIntervalID = 0;
var _infoCount = 0;
var _dataCount = 0;
var _dataFailCount = 0;
var _dataFailMaxCount = 10;
var _dataIndex = 0;
var _infoSuccess = false;
var _dataSuccess = false;
var _infoDataInterval = 3000;
var _infoDataMaxCount = 3;

var _updateBlockBuf = null;
var _fileInfoBuf = null;
var _fileDataBuf = null;

var _handleBootloadBlockTimeoutId = 0;
var _handleUpdateFirmwareFileResTimeoutId = 0;
var _handleQueryFirmwareFileResTimeoutId = 0;

function setUpdatingFalse() {
    logger.error('[update:setUpdatingFalse] set _isUpdating = false');
    _isUpdating = false;
}

function resetFirmwareUpdateState(nodesLength) {
    _nodesLength = nodesLength;
    if(_nodesLength === 0) {
        if(_infoIntervalID === 0 && _dataIntervalID === 0 && _updateFinished) {
            logger.error('resetFirmwareUpdateState _isUpdating = false _updateFinished:', _updateFinished);
            _isUpdating = false;
        } else {
            logger.error('resetFirmwareUpdateState _infoIntervalID _dataIntervalID', _infoIntervalID, _dataIntervalID);
        }
        
    }
}

function updateBlockFirmware(name, idx) {
    'use strict';
    if (!idx) {
        idx = idx | 1;
    }

    if (idx === 255) {
        return null;
    }

    var opt = block.getBlockOption(name);
    if (!opt) {
        return logger.error('unknown block name: ', name);
    }

    _setbootloadSuccess = false;
    _setbootloadIntervalId = 0;
    _setbootloadCount = 0;
    logger.error('updateBlockFirmware _isUpdating = false');
    _isUpdating = false;
    _updateFinished = false;

    var pkg = system.DOWN.UPDATEBLOCK;
    pkg.no = core.getBlockNo(name, idx);
    if (pkg.no <= 0) {
        return null;
    }

    pkg.data[0].BYTE = opt.type;
    pkg.data[1].BYTE = opt.subtype;

    _updateBlockBuf = protocol.serialize(pkg);
    logger.error(utils.hexBuf(_updateBlockBuf));
    if (core.getDriver()) {
        // logger.error('[updateBlockFirmware] core.getDriver().send(_updateBlockBuf)');
        core.getDriver().send(_updateBlockBuf);
    }

    if(_setbootloadIntervalId === 0) {
        _setbootloadIntervalId = setInterval(_updateBlockFirmwareInterval, _setbootloadInterval);
    }
}

function _updateBlockFirmwareInterval() {
    _setbootloadCount += 1;
    if (_setbootloadCount >= _setbootloadMaxCount) {
        logger.error('[_updateBlockFirmwareInterval] reach _setbootloadMaxCount:', _setbootloadMaxCount);
        clearInterval(_setbootloadIntervalId);
        _setbootloadIntervalId = 0;
        event.emit(events.INITIATIVEDISCONNECT);
        logger.error('_updateBlockFirmwareInterval _isUpdating = false');
        _isUpdating = false;
        _updateFinished = true;
        return;
    }
    if (_setbootloadSuccess) {
        logger.error('[_updateBlockFirmwareInterval] _setbootloadSuccess: true');
        clearInterval(_setbootloadIntervalId);
        _setbootloadIntervalId = 0;
        return;
    }
    logger.error('[_updateBlockFirmwareInterval] _setbootloadCount:', _setbootloadCount);
    if (core.getDriver()) {
        // logger.error('[_updateBlockFirmwareInterval] core.getDriver().send(buf) interval');
        core.getDriver().send(_updateBlockBuf);
    }
}

function handleBootloadBlock(pkg) {
    if (!_setbootloadSuccess) {
        _setbootloadSuccess = true;
        clearInterval(_setbootloadIntervalId);
        _setbootloadIntervalId = 0;
        logger.error('[handleBootloadBlock] _setbootloadSuccess: true');
    }

    logger.error('[handleBootloadBlock] _isUpdating:', _isUpdating, _infoIntervalID, _dataIntervalID, _updateFinished);

    if (!_isUpdating) { // make sure only one block is updating
        _currentTimeStamp = new Date().getTime();
        if((_currentTimeStamp - _lastTimeStamp) > 5000) {
            _lastTimeStamp = _currentTimeStamp;
            _isUpdating = true;
            _updateFinished = false;
            _dataFailCount = 0;
            _dataIndex = 0;
            if(_handleBootloadBlockTimeoutId === 0) {
                _handleBootloadBlockTimeoutId = setTimeout(_handleBootloadBlockTimeout, 90000);
            }
            
            queryHardwareID(pkg.no);
        } else {
            logger.error('[handleBootloadBlock] no need to set _isUpdating=true');
        }
    } else {
        if(_infoIntervalID === 0 && _dataIntervalID === 0 && _updateFinished) {
            logger.error('handleBootloadBlock _isUpdating = false _updateFinished:', _updateFinished);
            _isUpdating = false;
        }
    }
}

function _handleBootloadBlockTimeout() {
    logger.error('_handleBootloadBlockTimeout timeout 60s');
    logger.error('_handleBootloadBlockTimeout _isUpdating = false');
    _isUpdating = false;
    _updateFinished = true;
    _handleBootloadBlockTimeoutId = 0;
}

function queryHardwareID(no) {
    logger.error('queryHardwareID blockId:', no);
    var pkg = system.DOWN.QUERYBLOCKID;
    pkg.no = no;
    var buf = protocol.serialize(pkg);
    logger.error(utils.hexBuf(buf));
    if (core.getDriver()) {
        core.getDriver().send(buf);
    }
}

function handleHardwareID(pkg) {
    if (pkg.data.length < 2) {
        logger.error('handleHardwareID unexpected pkg.data.length:', pkg.data.length);
        return;
    }
    event.emit(events.DISCONNBLOCKRECONNECT);
    var hardwareId_0 = pkg.data[0].short;
    var hardwareId_1 = pkg.data[1].short;
    logger.error('hardwareId_0:' + hardwareId_0 + ', hardwareId_1:' + hardwareId_1);
    var valid = _setFirmwareFile(hardwareId_0, hardwareId_1);
    if (!valid) {
        logger.error('handleHardwareID _isUpdating = false');
        _isUpdating = false;
        _updateFinished = true;
        clearTimeout(_handleBootloadBlockTimeoutId);
        clearTimeout(_handleQueryFirmwareFileResTimeoutId);
        clearTimeout(_handleUpdateFirmwareFileResTimeoutId);
        _handleBootloadBlockTimeoutId = 0;
        _handleQueryFirmwareFileResTimeoutId = 0;
        _handleUpdateFirmwareFileResTimeoutId = 0;
        logger.error('unexpected hardwareId_0:' + hardwareId_0 + ', hardwareId_1:' + hardwareId_1);
        return;
    }

    var crc = _getFirmwareFileCRC();
    sendFirmwareFileInfo(pkg.no, crc);
}

function _setFirmwareFile(hardwareId_0, hardwareId_1) {
    uint8buf = null;
    var hardwareid = table.checkHardwareId(hardwareId_0, hardwareId_1);
    logger.error('[_setFirmwareFile] hardwareid:', hardwareid);
    if (hardwareid == -1) {
        return false;
    }

    var typeObj = table.getRelativeTypeSubType(hardwareid);
    logger.error('[_setFirmwareFile] typeObj:', typeObj);
    if (typeObj.type == -1) {
        return false;
    }

    uint8buf = firmware.getFirmware(typeObj.type, typeObj.subtype);
    if (uint8buf == _defaultFirmware) {
        event.emit(events.SETFIRMWAREBYTYPEANDSUBTYPE, {
            type: typeObj.type,
            subtype: typeObj.subtype
        });
        return false;
    }
    return true;
}

function _getFirmwareFileCRC() {
    if (uint8buf === null) {
        logger.error('[_getFirmwareFileCRC] unexpected case uint8buf == null');
        return;
    }
    var defaultCRC = new Uint32Array(1);
    defaultCRC[0] = 0xffffffff;
    var crc = utils.crc32(defaultCRC[0], uint8buf, uint8buf.length);
    logger.error('[_getFirmwareFileCRC] crc:' + crc);
    return crc;
}

function sendFirmwareFileInfo(no, crc) {
    if (uint8buf === null) {
        logger.error('[sendFirmwareFileInfo] unexpected case uint8buf == null');
        return;
    }

    var pkg = system.DOWN.SENDFIRMWAREFILEINFO;
    pkg.no = no; //todo get this pkg.no by name and idx
    pkg.data[0].SHORT = 0; //0 means the first info packet
    pkg.data[1].long = uint8buf.length;
    pkg.data[2].long = crc;
    _fileInfoBuf = protocol.serialize(pkg);
    logger.error('[sendFirmwareFileInfo] _fileInfoBuf:', utils.hexBuf(_fileInfoBuf));

    clearInterval(_infoIntervalID);
    _infoIntervalID = 0;
    _infoCount = 0;
    _infoSuccess = false;

    if (core.getDriver()) {
        core.getDriver().send(_fileInfoBuf);
    }

    if(_infoIntervalID === 0) {
        _infoIntervalID = setInterval(_sendFirmwareFileInfoInterval, _infoDataInterval);
    }
}

function _sendFirmwareFileInfoInterval() {
    _infoCount += 1;
    if (_infoCount >= _infoDataMaxCount) {
        logger.error('[_sendFirmwareFileInfoInterval] reach _infoDataMaxCount:', _infoDataMaxCount);
        clearInterval(_infoIntervalID);
        _infoIntervalID = 0;
        event.emit(events.INITIATIVEDISCONNECT);
        logger.error('_sendFirmwareFileInfoInterval _isUpdating = false');
        _isUpdating = false;
        _updateFinished = true;
        return;
    }
    if (_infoSuccess) {
        logger.error('[_sendFirmwareFileInfoInterval] setInterval _infoSuccess: true');
        clearInterval(_infoIntervalID);
        _infoIntervalID = 0;
        logger.error('_sendFirmwareFileInfoInterval _isUpdating = false');
        _isUpdating = false;
        return;
    }
    logger.error('[_sendFirmwareFileInfoInterval] send info count:', _infoCount);
    if (core.getDriver()) {
        core.getDriver().send(_fileInfoBuf);
    }
}

function handleUpdateFirmwareFileRes(pkg) {
    if (pkg.data.length < 2) {
        logger.error('[handleUpdateFirmwareFileRes] unexpected pkg.data.length:', pkg.data.length);
        return;
    }
    if (pkg.data[0].SHORT === 0x00) { // pkg.data[0].SHORT == 0x00 means the first pkg with file info
        if (pkg.data[1].BYTE == 0x01) { // pkg.data[1].BYTE == 0x01 means success
            _infoSuccess = true;
            clearInterval(_infoIntervalID);
            _infoIntervalID = 0;
            sendFirmwareFileData(pkg.no, 0x01);
        } else {
            _infoSuccess = false;
            logger.error('[handleUpdateFirmwareFileRes] _infoSuccess: false');
        }
    } else { // pkg.data[0].SHORT != 0x00 means the other pkg with file data
        if (pkg.data[1].BYTE == 0x01) { // pkg.data[1].BYTE == 0x01 means success
            logger.error('[handleUpdateFirmwareFileRes] _dataSuccess:true, pkgseq:', pkg.data[0].SHORT, pkg);
            _dataSuccess = true;
            clearInterval(_dataIntervalID);
            _dataIntervalID = 0;
            _dataFailCount = 0;
            if(pkg.data[0].SHORT > _dataIndex) {
                _dataIndex = pkg.data[0].SHORT;
                sendFirmwareFileData(pkg.no, pkg.data[0].SHORT + 1);
            }
            
        } else {
            logger.error('[handleUpdateFirmwareFileRes] _dataSuccess: false, pkgseq:', pkg.data[0].SHORT);
            _dataSuccess = false;
            if(pkg.data[0].SHORT > _dataIndex) {
                _dataFailCount += 1;
            }
            
            if(_dataFailCount <= _dataFailMaxCount) {
                if(pkg.data[0].SHORT > _dataIndex) {
                    sendFirmwareFileData(pkg.no, pkg.data[0].SHORT);
                }
            } else {
                logger.error('[handleUpdateFirmwareFileRes] reach send data max fail count');
                clearInterval(_dataIntervalID);
                _dataIntervalID = 0;
                _isUpdating = true;
                _updateFinished = true;
                _dataIndex = 0;
                if(_handleUpdateFirmwareFileResTimeoutId === 0) {
                    _handleUpdateFirmwareFileResTimeoutId = setTimeout(_handleUpdateFirmwareFileResTimeout, 90000);
                }
                
                
            }
            
        }
    }
}

function _handleUpdateFirmwareFileResTimeout() {
    logger.error('_handleUpdateFirmwareFileResTimeout _isUpdating = false');
    _isUpdating = false;
    _updateFinished = true;
    _handleUpdateFirmwareFileResTimeoutId = 0;
}

function sendFirmwareFileData(no, seq) {
    if (uint8buf === null) {
        logger.error('[sendFirmwareFileData] unexpected case uint8buf == null');
        return;
    }

    var pkg = system.DOWN.SENDFIRMWAREFILEDATA;
    pkg.no = no;
    //packet data
    var data = [];
    data.push({
        'SHORT': seq
    }); //sub package number
    data.push({
        'SHORT': 0x80
    });
    var startIndex = (seq - 0x01) * 64;
    if (startIndex >= uint8buf.length) {
        logger.error('[sendFirmwareFileData] finished, startIndex:', startIndex);
        queryFirmwareFileResult(no);
        return;
    }
    for (var i = startIndex; i < (startIndex + 64) && i < uint8buf.length; ++i) {
        data.push({
            'byte': uint8buf[i]
        });
    }
    pkg.data = data;
    _fileDataBuf = protocol.serialize(pkg);
    //end packet data
    clearInterval(_dataIntervalID);
    _dataIntervalID = 0;
    _dataCount = 0;
    _dataSuccess = false;
    if (core.getDriver()) {
        // logger.error('[sendFirmwareFileData] no, seq, _fileDataBuf:', no, seq, utils.hexBuf(_fileDataBuf));
        core.getDriver().send(_fileDataBuf);
    }
    //send data interval
    _dataIntervalID = setInterval(_sendFirmwareFileDataInterval, _infoDataInterval);
}

function _sendFirmwareFileDataInterval() {
    _dataCount += 1;
    if (_dataCount >= _infoDataMaxCount) {
        logger.error('[_sendFirmwareFileDataInterval] reach _infoDataMaxCount:', _infoDataMaxCount);
        clearInterval(_dataIntervalID);
        _dataIntervalID = 0;
        event.emit(events.INITIATIVEDISCONNECT);
        logger.error('_sendFirmwareFileDataInterval _isUpdating = false');
        _isUpdating = false;
        _updateFinished = true;
        return;
    }
    if (_dataSuccess) {
        logger.error('[_sendFirmwareFileDataInterval] _dataSuccess:true');
        clearInterval(_dataIntervalID);
        _dataIntervalID = 0;
        logger.error('_sendFirmwareFileDataInterval _isUpdating = false');
        _isUpdating = false;
        return;
    }
    logger.error('[_sendFirmwareFileDataInterval] _dataCount:', _dataCount);
    if (core.getDriver()) {
        // logger.error('[_sendFirmwareFileDataInterval] no, seq _fileDataBuf:', no, seq, utils.hexBuf(_fileDataBuf));
        core.getDriver().send(_fileDataBuf);
    }
}

function queryFirmwareFileResult(no) {
    var pkg = system.DOWN.QUERYUPDATERESULT;
    pkg.no = no;
    var buf = protocol.serialize(pkg);
    logger.error(utils.hexBuf(buf));
    if (core.getDriver()) {
        core.getDriver().send(buf);
    }
}

function handleQueryFirmwareFileRes(pkg) {
    var iRet = pkg.data[0].BYTE;
    logger.error('[handleQueryFirmwareFileRes] iRet:', iRet);
    if (iRet == 0x01) { //means update success
        resetBlockCommand(pkg.no);
        if(_handleQueryFirmwareFileResTimeoutId === 0) {
            _handleQueryFirmwareFileResTimeoutId = setTimeout(_handleQueryFirmwareFileResTimeout, 2000);
        }
        
        event.emit(events.BLOCKUPDATERESULT, {
            result: iRet
        });
    } else { // means update fail
        event.emit(events.BLOCKUPDATERESULT, {
            result: iRet
        });
    }
}

function _handleQueryFirmwareFileResTimeout() {
    logger.error('[_handleQueryFirmwareFileResTimeout] update success, now reset isUpdating == false');
    isUpdating = false;
    _handleQueryFirmwareFileResTimeoutId = 0;
    clearInterval(_handleBootloadBlockTimeoutId);
    _updateFinished = true;
    _handleBootloadBlockTimeoutId = 0;
}

function resetBlockCommand(no) {
    var pkg = system.DOWN.RESET;
    pkg.no = no;
    var buf = protocol.serialize(pkg);
    logger.error(utils.hexBuf(buf));
    if (core.getDriver()) {
        core.getDriver().send(buf);
    }
}

exports.setUpdatingFalse = setUpdatingFalse;
exports.resetFirmwareUpdateState = resetFirmwareUpdateState;
exports.updateBlockFirmware = updateBlockFirmware;
exports.handleBootloadBlock = handleBootloadBlock;
exports.handleHardwareID = handleHardwareID;
exports.handleUpdateFirmwareFileRes = handleUpdateFirmwareFileRes;
exports.handleQueryFirmwareFileRes = handleQueryFirmwareFileRes;
},{"../../event/event":71,"../../log/log4js":72,"../../protocol":75,"../../protocol/utils":77,"./block":60,"./core":62,"./events":64,"./firmware":65,"./system":68,"./table":69,"async":78,"when":117}],71:[function(require,module,exports){
var EventEmitter = require('events').EventEmitter; 
var event = new EventEmitter(); 

module.exports = event;

},{"events":85}],72:[function(require,module,exports){
var log4js = require('log4js');
log4js.configure({
  appenders: [
    { type: 'console' } //控制台输出
  ],
  replaceConsole: false
});

var logger = log4js.getLogger('engineLog');

function setLoglevel(level){
  logger.setLevel(level);
}
exports.setLoglevel = setLoglevel;
exports.logger = logger;

},{"log4js":96}],73:[function(require,module,exports){
/**
 * [convert7to8bit converts an array buffer of 7bit/byte format to 8bit/byte format.]
 * @param  {[ArrayBuffer]} inbuf  [the source array buffer]
 * @param  {[int]} offset [the byte offset of buffer]
 * @param  {[int]} length [the length from offset]
 * @return {[ArrayBuffer]}        [the converted array buffer]
 */
function convert7to8bit(inbuf, offset, length) {
  'use strict';

  var out = null;

  if (!(inbuf instanceof(ArrayBuffer))) {
    return out;
  }

  if (inbuf.byteLength === 0) {
    out = new ArrayBuffer(0);
    return out;
  }

  offset = offset || 0;
  length = length || inbuf.byteLength;

  var inputView = new Uint8Array(inbuf, offset, length);

  var inlen = inputView.length;
  var outlen = inlen - Math.ceil(inlen / 8);
  out = new ArrayBuffer(outlen);

  var outView = new Uint8Array(out);

  var mask = [0x01, 0x03, 0x07, 0x0f, 0x1f, 0x3f, 0x7f];
  var counter = 0;
  var i, j = 0;
  var temp = 0;
  for (i = 0; i < inlen - 1; i++) {
    outView[j++] = (inputView[i] >> counter) | ((inputView[i + 1] & mask[counter]) << (7 - counter));
    counter++;
    if (0 === (counter % 7)) {
      counter = 0;
      i++;
    }
  }

  return out;
}

/**
 * [convert8to8bit converts an array buffer of 8bit/byte format to 7bit/byte format.]
 * @param  {[ArrayBuffer]} inbuf [the source array buffer]
 * @return {[ArrayBuffer]}       [the converted array buffer]
 */
function convert8to7bit(inbuf) {
  'use strict';

  var out = null;

  if (!(inbuf instanceof(ArrayBuffer))) {
    return out;
  }

  if (inbuf.byteLength === 0) {
    out = new ArrayBuffer(0);
    return out;
  }

  var inputView = new Uint8Array(inbuf);

  var inlen = inputView.length;
  var outlen = Math.ceil(inlen / 7) + inlen;
  out = new ArrayBuffer(outlen);

  var outView = new Uint8Array(out);

  var mask = [0x80, 0xc0, 0xe0, 0xf0, 0xf8, 0xfc, 0xfe];
  var counter = 0;
  var temp = 0x00;
  var i, j = 0;
  for (i = 0; i < inlen; i++) {
    outView[j++] = ((inputView[i] << counter) | temp) & 0x7f;

    temp = (((mask[counter] & inputView[i]) >> (7 - counter)));

    counter++;
    if (0 === (counter % 7)) {
      outView[j++] = temp;

      temp = 0x00;
      counter = 0;
    }
  }
  if (0 !== (counter % 7)) {
    outView[j++] = temp;
  }

  return out;
}

exports.convert7to8bit = convert7to8bit;
exports.convert8to7bit = convert8to7bit;

},{}],74:[function(require,module,exports){
/**
 * protocol data encoding and decoding.
 * the data is represented as follow (Object Array):
 * [{   
 *     "byte": 0xf1 // 7bit/byte byte
 *   }, {
 *     "BYTE": 0x01 // 8bit/byte byte (only use when the byte < 128)
 *   },{
 *     "short": 0x019f // 7bit/byte short
 *   },{
 *     "SHORT": 0x019f // 7bit/byte short, but ignore most significant byte (only use when the MSB is 0x00)
 *   }, {
 *     "long": 0x11111111 // 7bit/byte long
 *   }, {
 *     "float": 9.88  // 7bit/byte float
 *   }, {
 *     "double": 0.99998 // 7bit/byte double
 *   }, {
 *     "string": "test" // byte array of TLV format (see string.js)
 *   }] 
 */
var _ = require('underscore');
var utils = require('./utils');
var string = require('./string');
var convert = require('./convert');

/**
 * [DATA_TYPE describes the info of each data type]
 * @type {Object} 
 */
var DATA_TYPE = {
  "byte": {
    "origByteLength": 1,
    "codecByteLength": 2,
    "readFunc": "getInt8",
    "setFunc": "setInt8"
  },
  "BYTE": {
    "origByteLength": 1,
    "codecByteLength": 1,
    "readFunc": "getInt8",
    "setFunc": "setInt8"
  },
  "short": {
    "origByteLength": 2,
    "codecByteLength": 3,
    "readFunc": "getInt16",
    "setFunc": "setInt16"
  },
  "SHORT": {
    "origByteLength": 2,
    "codecByteLength": 2,
    "readFunc": "getInt16",
    "setFunc": "setInt16"
  },
  "long": {
    "origByteLength": 4,
    "codecByteLength": 5,
    "readFunc": "getInt32",
    "setFunc": "setInt32"
  },
  "float": {
    "origByteLength": 4,
    "codecByteLength": 5,
    "readFunc": "getFloat32",
    "setFunc": "setFloat32"
  },
  "double": {
    "origByteLength": 8,
    "codecByteLength": 10,
    "readFunc": "getFloat64",
    "setFunc": "setFloat64"
  }
};

/**
 * [calcBufferLength calcs the codec buffer length of data]
 * @param  {[Object Array]} data [the data array to describe the data]
 * @return {[Integer]}      [the codec buffer length]
 */
function calcBufferLength(data) {
  'use strict';

  var buflen = 0;
  var type;
  // calc buffer length
  for (var i = 0; i < data.length; i++) {
    type = _.keys(data[i])[0];

    if (type == 'string') {
      buflen += string.calcStringByteLen(data[i][type]);
    } else {
      if (DATA_TYPE[type]) {
        buflen += DATA_TYPE[type].codecByteLength;
      }
    }
  }
  return buflen;
}

/**
 * [readDataFromBuffer read typed data from array buffer]
 * @param  {[ArrayBuffer]} buf  [the srouce array buffer]
 * @param  {[Object Array]} data [the data array to describe the data ]
 * @return {[Object Array]}      [the data array filled with read data]
 */
function readDataFromBuffer(buf, data) {
  'use strict';

  if ((typeof(buf) === 'undefined') || (typeof(data) === 'undefined')) {
    return null;
  }

  var idx = 0;
  var raw;
  var type;
  var view;

  for (var i = 0; i < data.length; i++) {
    type = _.keys(data[i])[0];
    if (type == 'string') {
      var str = string.readStringFromBuffer(buf, idx);
      idx += string.calcStringByteLen(str);
      data[i][type] = str;
    } else {
      switch (type) {
        case 'byte':
        case 'short':
        case 'long':
        case 'float':
        case 'double':
          raw = convert.convert7to8bit(buf, idx, DATA_TYPE[type].codecByteLength);
          break;
        case 'BYTE':
          raw = buf.slice(idx, idx + 1);
          break;
        case 'SHORT':
          var temp = new Int8Array(buf, idx, DATA_TYPE[type].codecByteLength);
          var v = new Int8Array(DATA_TYPE[type].codecByteLength + 1);
          v[0] = temp[0];
          v[1] = temp[1];
          raw = convert.convert7to8bit(v.buffer);
          break;
        default:
          // type not supported
          return null;
      }
      view = new DataView(raw);
      data[i][type] = view[DATA_TYPE[type].readFunc](0, true);
      idx += DATA_TYPE[type].codecByteLength;
    }
  }

  return data;
}

/**
 * [writeDataToBuffer write typed data to array buffer]
 * @param  {[Object Array]} data [the data array]
 * @return {[ArrayBuffer]}      [the serialized binary array buffer]
 */
function writeDataToBuffer(data) {
  'use strict';

  if (typeof(data) === 'undefined') {
    return null;
  }

  var idx = 0;
  var buflen = 0;
  var type;
  var raw;
  var temp;

  buflen = calcBufferLength(data);

  var buf = new ArrayBuffer(buflen);
  var view = new DataView(buf);

  for (var i = 0; i < data.length; i++) {
    type = _.keys(data[i])[0];
    if (type == 'string') {
      utils.copyBuffer(string.writeStringToBuffer(data[i][type]), buf, idx);
      idx += string.calcStringByteLen(data[i][type]);
    } else {
      switch (type) {
        case 'byte':
        case 'short':
        case 'long':
        case 'float':
        case 'double':
          temp = new ArrayBuffer(DATA_TYPE[type].origByteLength);
          view = new DataView(temp);
          view[DATA_TYPE[type].setFunc](0, data[i][type], true);

          raw = convert.convert8to7bit(temp);

          break;
        case 'BYTE':
          raw = (new Int8Array([data[i][type]])).buffer;
          break;
        case 'SHORT':
          temp = new ArrayBuffer(DATA_TYPE[type].origByteLength);
          view = new DataView(temp);
          view[DATA_TYPE[type].setFunc](0, data[i][type], true);

          raw = convert.convert8to7bit(temp).slice(0, DATA_TYPE[type].codecByteLength);
          break;
        default:
          // type not supported
          return null;
      }

      utils.copyBuffer(raw, buf, idx);
      idx += DATA_TYPE[type].codecByteLength;
    }

  }

  return buf;
}

exports.calcBufferLength = calcBufferLength;
exports.readDataFromBuffer = readDataFromBuffer;
exports.writeDataToBuffer = writeDataToBuffer;
},{"./convert":73,"./string":76,"./utils":77,"underscore":99}],75:[function(require,module,exports){
/**
 * package serialzer and parser.
 * the package object format:
 *
 * {
 *   "no": 1, // the block number, required
 *   "type": 0x11, // the package type, required
 *   "subtype": 0x01, // the sub type, optional
 *   "data": [{   // the data, optional
 *     "byte": 0xf1 // 7bit/byte byte
 *   }, {
 *     "BYTE": 0x01 // 8bit/byte byte (obly use when the byte < 128)
 *   },{
 *     "short": 0x019f // 7bit/byte short
 *   },{
 *     "SHORT": 0x019f // 7bit/byte short, but ignore most significant byte (only use when the MSB is 0x00)
 *   }, {
 *     "long": 0x11111111 // 7bit/byte long
 *   }, {
 *     "float": 9.88  // 7bit/byte float
 *   }, {
 *     "double": 0.99998 // 7bit/byte double
 *   }, {
 *     "string": "test"
 *   }] 
 * }
 */

var data = require('./data');
var utils = require('./utils');

/**
 * [parse parses bytes in array buffer to package object]
 * @param  {[type]} buf [input buffer]
 * @param  {[type]} pkg [pkg description]
 * @return {[type]}     [the parsed package]
 */
function parse(buf, pkg) {
  'use strict';

  if (typeof(buf) === 'undefined') {
    return null;
  }

  if (!(buf instanceof ArrayBuffer)) {
    return null;
  }

  if (buf.byteLength === 0) {
    return null;
  }

  var idx = 0;
  var view = new DataView(buf);


  pkg.no = view.getUint8(idx++, true);
  pkg.type = view.getUint8(idx++, true);
  if (pkg.hasOwnProperty('subtype')) {
    pkg.subtype = view.getUint8(idx++, true);
  }
  if (pkg.hasOwnProperty('code')) {
    pkg.code = view.getUint8(idx++, true);
  }  

  data.readDataFromBuffer(buf.slice(idx), pkg.data);

  return pkg;
}

/**
 * [serialize read package object and write its binary to array buffer]
 * @param  {[type]} pkg [the package to be serialized]
 * @return {[type]}     [the serialized array buffer]
 */
function serialize(pkg) {
  'use strict';

  if (typeof(pkg) === 'undefined') {
    return null;
  }

  if (!pkg.hasOwnProperty('no') || !pkg.hasOwnProperty('type')) {
    return null;
  }

  var buflen = 2;
  if (pkg.hasOwnProperty('subtype')) {
    buflen += 1;
  }
  if (pkg.hasOwnProperty('code')) {
    buflen += 1;
  }  
  if (pkg.hasOwnProperty('data')) {
    buflen += data.calcBufferLength(pkg.data);
  }

  var buf = new ArrayBuffer(buflen);
  var view = new DataView(buf);

  var idx = 0;
  view.setUint8(idx++, pkg.no, true);
  view.setUint8(idx++, pkg.type, true);
  if (pkg.hasOwnProperty('subtype')) {
    view.setUint8(idx++, pkg.subtype, true);
  }
  if (pkg.hasOwnProperty('code')) {
    view.setUint8(idx++, pkg.code, true);
  }  
  if (pkg.hasOwnProperty('data')) {
    var tempbuf = data.writeDataToBuffer(pkg.data);

    utils.copyBuffer(tempbuf, buf, idx);
  }

  return buf;
}

exports.parse = parse;
exports.serialize = serialize;

},{"./data":74,"./utils":77}],76:[function(require,module,exports){
/**
 * protocol data encoding and decoding for string type.
 * [{
 *   "string": "asdf"
 * }] 
 * the binary format of string follows TLV:tag(BYTE)+length(short)+value(bytes) pattern.
 */

var convert = require('./convert');
var utils = require('./utils');

var TAG_LEN = 1;
var LENGTH_LEN = 2;
var ASCII = 1;

// ArrayBuffer to ascii string
function _ab2asciiStr(buf) {
  'use strict';

  return String.fromCharCode.apply(null, new Uint8Array(buf));
}

// ascii string to arraybuffer
function _asciiStr2ab(str) {
  'use strict';

  var buf = new ArrayBuffer(str.length);
  var bufView = new Uint8Array(buf);
  for (var i = 0, strLen = str.length; i < strLen; i++) {
    bufView[i] = str.charCodeAt(i);
  }
  return buf;
}

/**
 * [readStringFromBuffer reads a string from buffer from index]
 * @param  {ArrayBuffer} buf [the source buffer]
 * @param  {integer} idx [the start index of buffer]
 * @param  {string} encoding [optional. default 'ascii'. will support 'utf-8', 'gbk' in the feature.]
 * @return {string}     [the string read. (including tag and length field)]
 */
function readStringFromBuffer(buf, idx, encoding) {
  'use strict';

  idx = idx || 0;
  var view = new DataView(buf, idx);
  var tag = view.getInt8(0, true);

  var temp = new Int8Array(buf, idx + TAG_LEN, LENGTH_LEN);
  var v = new Int8Array(LENGTH_LEN + 1);
  v[0] = temp[0];
  v[1] = temp[1];
  var lenView = new DataView(convert.convert7to8bit(v.buffer));
  var length = lenView.getInt16(0, true);

  var strStart = idx + TAG_LEN + LENGTH_LEN;
  if (tag === ASCII){
    return _ab2asciiStr(buf.slice(strStart));
  }
}

/**
 * [writeStringToBuffer description]
 * @param  {string} str [the string to write]
 * @param  {string} encoding [optional. default 'ascii'. will support 'utf-8', 'gbk' in the feature.]
 * @return {ArrayBuffer}        [the arraybuffer of bytes wrote. (including tag and length field)]
 */
function writeStringToBuffer(str, encoding) {
  'use strict';

  var bufLen = calcStringByteLen(str, encoding);
  var strLen = str.length;

  var buf = new ArrayBuffer(bufLen);

  var tagArray = new Int8Array([0x01]);
  utils.copyBuffer(tagArray.buffer, buf);

  var lenView = new DataView(new ArrayBuffer(LENGTH_LEN));
  lenView.setInt16(0, strLen, true);
  var lenArray = convert.convert8to7bit(lenView.buffer);
  utils.copyBuffer(lenArray, buf, TAG_LEN);

  utils.copyBuffer(_asciiStr2ab(str), buf, TAG_LEN + LENGTH_LEN);

  return buf;
}

/**
 * [calcStringByteLen calculates the length of encoded bytes of string]
 * @param  {string} str   [the string]
 * @param  {string} encoding [optional. default 'ascii'. will support 'utf-8', 'gbk' in the feature.]
 * @return {integer}          [the length of result buffer.]
 */
function calcStringByteLen(str, encoding) {
  'use strict';

  // ascii
  return TAG_LEN + LENGTH_LEN + str.length;
}

exports.readStringFromBuffer = readStringFromBuffer;
exports.calcStringByteLen = calcStringByteLen;
exports.writeStringToBuffer = writeStringToBuffer;

},{"./convert":73,"./utils":77}],77:[function(require,module,exports){
/**
 * util functions
 */

var crc_table = new Uint32Array(256);
var tempCRC = new Uint32Array(1);
var isInitCRC_table = false;

function init_crc_table() {
  var i, j;
  for(i = 0; i < 256; ++i) {
    tempCRC[0] = i;
    for(j = 0; j < 8; ++j) {
      if(tempCRC[0] & 1) {
        tempCRC[0] = 0xedb88320 ^ (tempCRC[0] >>> 1);
      } else {
        tempCRC[0] = tempCRC[0] >>> 1;
      }
    }
    crc_table[i] = tempCRC[0];
  }
}

function crc32(crc, uint8arr, size) {
  if(!isInitCRC_table) {
    isInitCRC_table = true;
    init_crc_table();
  }
  tempCRC[0] = crc;
  for(var i = 0; i < size; ++i) {
    tempCRC[0] = crc_table[(tempCRC[0] ^ uint8arr[i]) & 0xff] ^ (tempCRC[0] >>> 8);
  }
  return tempCRC[0] ^ 0xffffffff;
}

/**
 * [hexBuf return hex string representation of an ArrayBuffer]
 * @param  {[buf]} buf  [the input buf]
 * @return {[string]}     [the hex string representation]
 */
function hexBuf(buf) {
  'use strict';

  var view = new Uint8Array(buf);
  var hex = '0x';
  var byte = '';

  for (var i = 0; i < view.length; i++) {
    byte = view[i].toString(16);
    if (byte.length < 2) {
      byte = '0' + byte;
    }
    hex += byte;
  }

  return hex;
}

/**
 * [bufferEqual return if two ArrayBuffer is deep equal]
 * @param  {[type]} buf1 [the first buf]
 * @param  {[type]} buf2 [the second buf]
 * @return {[type]}      [return true if two ArrayBuffer is equal, false if not.]
 */
function bufferEqual(buf1, buf2) {
  'use strict';

  if (!(buf1 instanceof(ArrayBuffer)) || !(buf2 instanceof(ArrayBuffer))) {
    return false;
  }

  if (buf1.byteLength != buf2.byteLength) {
    return false;
  }

  var view1 = new Uint8Array(buf1);
  var view2 = new Uint8Array(buf2);

  for (var i = 0; i < view1.length; i++) {
    if (view1[i] != view2[i]) {
      return false;
    }
  }

  return true;
}

/**
 * [copyBuffer copy the bytes in src to desc from 'start' index]
 * @param  {[ArrayBuffer]} src   [the source buffer]
 * @param  {[ArrayBuffer]} des   [the destination buffer]
 * @param  {[type]} start [if specified, will copy from start index of desc]
 * @return {[ArrayBuffer]}       [the desc array buffer]
 */
function copyBuffer(src, des, start) {
  'use strict';

  if (src === des) {
    return des;
  }

  var idx = start || 0;

  var srcView = new Int8Array(src);
  var desView = new Int8Array(des);

  for (var i = 0; i < srcView.length; i++) {
    if (idx + i >= desView.length) {
      break;
    }
    desView[idx + i] = srcView[i];
  }

  return des;
}

exports.hexBuf = hexBuf;
exports.bufferEqual = bufferEqual;
exports.copyBuffer = copyBuffer;
exports.crc32 = crc32;
},{}],78:[function(require,module,exports){
(function (process,global){
/*!
 * async
 * https://github.com/caolan/async
 *
 * Copyright 2010-2014 Caolan McMahon
 * Released under the MIT license
 */
(function () {

    var async = {};
    function noop() {}
    function identity(v) {
        return v;
    }
    function toBool(v) {
        return !!v;
    }
    function notId(v) {
        return !v;
    }

    // global on the server, window in the browser
    var previous_async;

    // Establish the root object, `window` (`self`) in the browser, `global`
    // on the server, or `this` in some virtual machines. We use `self`
    // instead of `window` for `WebWorker` support.
    var root = typeof self === 'object' && self.self === self && self ||
            typeof global === 'object' && global.global === global && global ||
            this;

    if (root != null) {
        previous_async = root.async;
    }

    async.noConflict = function () {
        root.async = previous_async;
        return async;
    };

    function only_once(fn) {
        return function() {
            if (fn === null) throw new Error("Callback was already called.");
            fn.apply(this, arguments);
            fn = null;
        };
    }

    function _once(fn) {
        return function() {
            if (fn === null) return;
            fn.apply(this, arguments);
            fn = null;
        };
    }

    //// cross-browser compatiblity functions ////

    var _toString = Object.prototype.toString;

    var _isArray = Array.isArray || function (obj) {
        return _toString.call(obj) === '[object Array]';
    };

    // Ported from underscore.js isObject
    var _isObject = function(obj) {
        var type = typeof obj;
        return type === 'function' || type === 'object' && !!obj;
    };

    function _isArrayLike(arr) {
        return _isArray(arr) || (
            // has a positive integer length property
            typeof arr.length === "number" &&
            arr.length >= 0 &&
            arr.length % 1 === 0
        );
    }

    function _arrayEach(arr, iterator) {
        var index = -1,
            length = arr.length;

        while (++index < length) {
            iterator(arr[index], index, arr);
        }
    }

    function _map(arr, iterator) {
        var index = -1,
            length = arr.length,
            result = Array(length);

        while (++index < length) {
            result[index] = iterator(arr[index], index, arr);
        }
        return result;
    }

    function _range(count) {
        return _map(Array(count), function (v, i) { return i; });
    }

    function _reduce(arr, iterator, memo) {
        _arrayEach(arr, function (x, i, a) {
            memo = iterator(memo, x, i, a);
        });
        return memo;
    }

    function _forEachOf(object, iterator) {
        _arrayEach(_keys(object), function (key) {
            iterator(object[key], key);
        });
    }

    function _indexOf(arr, item) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] === item) return i;
        }
        return -1;
    }

    var _keys = Object.keys || function (obj) {
        var keys = [];
        for (var k in obj) {
            if (obj.hasOwnProperty(k)) {
                keys.push(k);
            }
        }
        return keys;
    };

    function _keyIterator(coll) {
        var i = -1;
        var len;
        var keys;
        if (_isArrayLike(coll)) {
            len = coll.length;
            return function next() {
                i++;
                return i < len ? i : null;
            };
        } else {
            keys = _keys(coll);
            len = keys.length;
            return function next() {
                i++;
                return i < len ? keys[i] : null;
            };
        }
    }

    // Similar to ES6's rest param (http://ariya.ofilabs.com/2013/03/es6-and-rest-parameter.html)
    // This accumulates the arguments passed into an array, after a given index.
    // From underscore.js (https://github.com/jashkenas/underscore/pull/2140).
    function _restParam(func, startIndex) {
        startIndex = startIndex == null ? func.length - 1 : +startIndex;
        return function() {
            var length = Math.max(arguments.length - startIndex, 0);
            var rest = Array(length);
            for (var index = 0; index < length; index++) {
                rest[index] = arguments[index + startIndex];
            }
            switch (startIndex) {
                case 0: return func.call(this, rest);
                case 1: return func.call(this, arguments[0], rest);
            }
            // Currently unused but handle cases outside of the switch statement:
            // var args = Array(startIndex + 1);
            // for (index = 0; index < startIndex; index++) {
            //     args[index] = arguments[index];
            // }
            // args[startIndex] = rest;
            // return func.apply(this, args);
        };
    }

    function _withoutIndex(iterator) {
        return function (value, index, callback) {
            return iterator(value, callback);
        };
    }

    //// exported async module functions ////

    //// nextTick implementation with browser-compatible fallback ////

    // capture the global reference to guard against fakeTimer mocks
    var _setImmediate = typeof setImmediate === 'function' && setImmediate;

    var _delay = _setImmediate ? function(fn) {
        // not a direct alias for IE10 compatibility
        _setImmediate(fn);
    } : function(fn) {
        setTimeout(fn, 0);
    };

    if (typeof process === 'object' && typeof process.nextTick === 'function') {
        async.nextTick = process.nextTick;
    } else {
        async.nextTick = _delay;
    }
    async.setImmediate = _setImmediate ? _delay : async.nextTick;


    async.forEach =
    async.each = function (arr, iterator, callback) {
        return async.eachOf(arr, _withoutIndex(iterator), callback);
    };

    async.forEachSeries =
    async.eachSeries = function (arr, iterator, callback) {
        return async.eachOfSeries(arr, _withoutIndex(iterator), callback);
    };


    async.forEachLimit =
    async.eachLimit = function (arr, limit, iterator, callback) {
        return _eachOfLimit(limit)(arr, _withoutIndex(iterator), callback);
    };

    async.forEachOf =
    async.eachOf = function (object, iterator, callback) {
        callback = _once(callback || noop);
        object = object || [];

        var iter = _keyIterator(object);
        var key, completed = 0;

        while ((key = iter()) != null) {
            completed += 1;
            iterator(object[key], key, only_once(done));
        }

        if (completed === 0) callback(null);

        function done(err) {
            completed--;
            if (err) {
                callback(err);
            }
            // Check key is null in case iterator isn't exhausted
            // and done resolved synchronously.
            else if (key === null && completed <= 0) {
                callback(null);
            }
        }
    };

    async.forEachOfSeries =
    async.eachOfSeries = function (obj, iterator, callback) {
        callback = _once(callback || noop);
        obj = obj || [];
        var nextKey = _keyIterator(obj);
        var key = nextKey();
        function iterate() {
            var sync = true;
            if (key === null) {
                return callback(null);
            }
            iterator(obj[key], key, only_once(function (err) {
                if (err) {
                    callback(err);
                }
                else {
                    key = nextKey();
                    if (key === null) {
                        return callback(null);
                    } else {
                        if (sync) {
                            async.setImmediate(iterate);
                        } else {
                            iterate();
                        }
                    }
                }
            }));
            sync = false;
        }
        iterate();
    };



    async.forEachOfLimit =
    async.eachOfLimit = function (obj, limit, iterator, callback) {
        _eachOfLimit(limit)(obj, iterator, callback);
    };

    function _eachOfLimit(limit) {

        return function (obj, iterator, callback) {
            callback = _once(callback || noop);
            obj = obj || [];
            var nextKey = _keyIterator(obj);
            if (limit <= 0) {
                return callback(null);
            }
            var done = false;
            var running = 0;
            var errored = false;

            (function replenish () {
                if (done && running <= 0) {
                    return callback(null);
                }

                while (running < limit && !errored) {
                    var key = nextKey();
                    if (key === null) {
                        done = true;
                        if (running <= 0) {
                            callback(null);
                        }
                        return;
                    }
                    running += 1;
                    iterator(obj[key], key, only_once(function (err) {
                        running -= 1;
                        if (err) {
                            callback(err);
                            errored = true;
                        }
                        else {
                            replenish();
                        }
                    }));
                }
            })();
        };
    }


    function doParallel(fn) {
        return function (obj, iterator, callback) {
            return fn(async.eachOf, obj, iterator, callback);
        };
    }
    function doParallelLimit(fn) {
        return function (obj, limit, iterator, callback) {
            return fn(_eachOfLimit(limit), obj, iterator, callback);
        };
    }
    function doSeries(fn) {
        return function (obj, iterator, callback) {
            return fn(async.eachOfSeries, obj, iterator, callback);
        };
    }

    function _asyncMap(eachfn, arr, iterator, callback) {
        callback = _once(callback || noop);
        arr = arr || [];
        var results = _isArrayLike(arr) ? [] : {};
        eachfn(arr, function (value, index, callback) {
            iterator(value, function (err, v) {
                results[index] = v;
                callback(err);
            });
        }, function (err) {
            callback(err, results);
        });
    }

    async.map = doParallel(_asyncMap);
    async.mapSeries = doSeries(_asyncMap);
    async.mapLimit = doParallelLimit(_asyncMap);

    // reduce only has a series version, as doing reduce in parallel won't
    // work in many situations.
    async.inject =
    async.foldl =
    async.reduce = function (arr, memo, iterator, callback) {
        async.eachOfSeries(arr, function (x, i, callback) {
            iterator(memo, x, function (err, v) {
                memo = v;
                callback(err);
            });
        }, function (err) {
            callback(err, memo);
        });
    };

    async.foldr =
    async.reduceRight = function (arr, memo, iterator, callback) {
        var reversed = _map(arr, identity).reverse();
        async.reduce(reversed, memo, iterator, callback);
    };

    async.transform = function (arr, memo, iterator, callback) {
        if (arguments.length === 3) {
            callback = iterator;
            iterator = memo;
            memo = _isArray(arr) ? [] : {};
        }

        async.eachOf(arr, function(v, k, cb) {
            iterator(memo, v, k, cb);
        }, function(err) {
            callback(err, memo);
        });
    };

    function _filter(eachfn, arr, iterator, callback) {
        var results = [];
        eachfn(arr, function (x, index, callback) {
            iterator(x, function (v) {
                if (v) {
                    results.push({index: index, value: x});
                }
                callback();
            });
        }, function () {
            callback(_map(results.sort(function (a, b) {
                return a.index - b.index;
            }), function (x) {
                return x.value;
            }));
        });
    }

    async.select =
    async.filter = doParallel(_filter);

    async.selectLimit =
    async.filterLimit = doParallelLimit(_filter);

    async.selectSeries =
    async.filterSeries = doSeries(_filter);

    function _reject(eachfn, arr, iterator, callback) {
        _filter(eachfn, arr, function(value, cb) {
            iterator(value, function(v) {
                cb(!v);
            });
        }, callback);
    }
    async.reject = doParallel(_reject);
    async.rejectLimit = doParallelLimit(_reject);
    async.rejectSeries = doSeries(_reject);

    function _createTester(eachfn, check, getResult) {
        return function(arr, limit, iterator, cb) {
            function done() {
                if (cb) cb(getResult(false, void 0));
            }
            function iteratee(x, _, callback) {
                if (!cb) return callback();
                iterator(x, function (v) {
                    if (cb && check(v)) {
                        cb(getResult(true, x));
                        cb = iterator = false;
                    }
                    callback();
                });
            }
            if (arguments.length > 3) {
                eachfn(arr, limit, iteratee, done);
            } else {
                cb = iterator;
                iterator = limit;
                eachfn(arr, iteratee, done);
            }
        };
    }

    async.any =
    async.some = _createTester(async.eachOf, toBool, identity);

    async.someLimit = _createTester(async.eachOfLimit, toBool, identity);

    async.all =
    async.every = _createTester(async.eachOf, notId, notId);

    async.everyLimit = _createTester(async.eachOfLimit, notId, notId);

    function _findGetResult(v, x) {
        return x;
    }
    async.detect = _createTester(async.eachOf, identity, _findGetResult);
    async.detectSeries = _createTester(async.eachOfSeries, identity, _findGetResult);
    async.detectLimit = _createTester(async.eachOfLimit, identity, _findGetResult);

    async.sortBy = function (arr, iterator, callback) {
        async.map(arr, function (x, callback) {
            iterator(x, function (err, criteria) {
                if (err) {
                    callback(err);
                }
                else {
                    callback(null, {value: x, criteria: criteria});
                }
            });
        }, function (err, results) {
            if (err) {
                return callback(err);
            }
            else {
                callback(null, _map(results.sort(comparator), function (x) {
                    return x.value;
                }));
            }

        });

        function comparator(left, right) {
            var a = left.criteria, b = right.criteria;
            return a < b ? -1 : a > b ? 1 : 0;
        }
    };

    async.auto = function (tasks, concurrency, callback) {
        if (typeof arguments[1] === 'function') {
            // concurrency is optional, shift the args.
            callback = concurrency;
            concurrency = null;
        }
        callback = _once(callback || noop);
        var keys = _keys(tasks);
        var remainingTasks = keys.length;
        if (!remainingTasks) {
            return callback(null);
        }
        if (!concurrency) {
            concurrency = remainingTasks;
        }

        var results = {};
        var runningTasks = 0;

        var hasError = false;

        var listeners = [];
        function addListener(fn) {
            listeners.unshift(fn);
        }
        function removeListener(fn) {
            var idx = _indexOf(listeners, fn);
            if (idx >= 0) listeners.splice(idx, 1);
        }
        function taskComplete() {
            remainingTasks--;
            _arrayEach(listeners.slice(0), function (fn) {
                fn();
            });
        }

        addListener(function () {
            if (!remainingTasks) {
                callback(null, results);
            }
        });

        _arrayEach(keys, function (k) {
            if (hasError) return;
            var task = _isArray(tasks[k]) ? tasks[k]: [tasks[k]];
            var taskCallback = _restParam(function(err, args) {
                runningTasks--;
                if (args.length <= 1) {
                    args = args[0];
                }
                if (err) {
                    var safeResults = {};
                    _forEachOf(results, function(val, rkey) {
                        safeResults[rkey] = val;
                    });
                    safeResults[k] = args;
                    hasError = true;

                    callback(err, safeResults);
                }
                else {
                    results[k] = args;
                    async.setImmediate(taskComplete);
                }
            });
            var requires = task.slice(0, task.length - 1);
            // prevent dead-locks
            var len = requires.length;
            var dep;
            while (len--) {
                if (!(dep = tasks[requires[len]])) {
                    throw new Error('Has nonexistent dependency in ' + requires.join(', '));
                }
                if (_isArray(dep) && _indexOf(dep, k) >= 0) {
                    throw new Error('Has cyclic dependencies');
                }
            }
            function ready() {
                return runningTasks < concurrency && _reduce(requires, function (a, x) {
                    return (a && results.hasOwnProperty(x));
                }, true) && !results.hasOwnProperty(k);
            }
            if (ready()) {
                runningTasks++;
                task[task.length - 1](taskCallback, results);
            }
            else {
                addListener(listener);
            }
            function listener() {
                if (ready()) {
                    runningTasks++;
                    removeListener(listener);
                    task[task.length - 1](taskCallback, results);
                }
            }
        });
    };



    async.retry = function(times, task, callback) {
        var DEFAULT_TIMES = 5;
        var DEFAULT_INTERVAL = 0;

        var attempts = [];

        var opts = {
            times: DEFAULT_TIMES,
            interval: DEFAULT_INTERVAL
        };

        function parseTimes(acc, t){
            if(typeof t === 'number'){
                acc.times = parseInt(t, 10) || DEFAULT_TIMES;
            } else if(typeof t === 'object'){
                acc.times = parseInt(t.times, 10) || DEFAULT_TIMES;
                acc.interval = parseInt(t.interval, 10) || DEFAULT_INTERVAL;
            } else {
                throw new Error('Unsupported argument type for \'times\': ' + typeof t);
            }
        }

        var length = arguments.length;
        if (length < 1 || length > 3) {
            throw new Error('Invalid arguments - must be either (task), (task, callback), (times, task) or (times, task, callback)');
        } else if (length <= 2 && typeof times === 'function') {
            callback = task;
            task = times;
        }
        if (typeof times !== 'function') {
            parseTimes(opts, times);
        }
        opts.callback = callback;
        opts.task = task;

        function wrappedTask(wrappedCallback, wrappedResults) {
            function retryAttempt(task, finalAttempt) {
                return function(seriesCallback) {
                    task(function(err, result){
                        seriesCallback(!err || finalAttempt, {err: err, result: result});
                    }, wrappedResults);
                };
            }

            function retryInterval(interval){
                return function(seriesCallback){
                    setTimeout(function(){
                        seriesCallback(null);
                    }, interval);
                };
            }

            while (opts.times) {

                var finalAttempt = !(opts.times-=1);
                attempts.push(retryAttempt(opts.task, finalAttempt));
                if(!finalAttempt && opts.interval > 0){
                    attempts.push(retryInterval(opts.interval));
                }
            }

            async.series(attempts, function(done, data){
                data = data[data.length - 1];
                (wrappedCallback || opts.callback)(data.err, data.result);
            });
        }

        // If a callback is passed, run this as a controll flow
        return opts.callback ? wrappedTask() : wrappedTask;
    };

    async.waterfall = function (tasks, callback) {
        callback = _once(callback || noop);
        if (!_isArray(tasks)) {
            var err = new Error('First argument to waterfall must be an array of functions');
            return callback(err);
        }
        if (!tasks.length) {
            return callback();
        }
        function wrapIterator(iterator) {
            return _restParam(function (err, args) {
                if (err) {
                    callback.apply(null, [err].concat(args));
                }
                else {
                    var next = iterator.next();
                    if (next) {
                        args.push(wrapIterator(next));
                    }
                    else {
                        args.push(callback);
                    }
                    ensureAsync(iterator).apply(null, args);
                }
            });
        }
        wrapIterator(async.iterator(tasks))();
    };

    function _parallel(eachfn, tasks, callback) {
        callback = callback || noop;
        var results = _isArrayLike(tasks) ? [] : {};

        eachfn(tasks, function (task, key, callback) {
            task(_restParam(function (err, args) {
                if (args.length <= 1) {
                    args = args[0];
                }
                results[key] = args;
                callback(err);
            }));
        }, function (err) {
            callback(err, results);
        });
    }

    async.parallel = function (tasks, callback) {
        _parallel(async.eachOf, tasks, callback);
    };

    async.parallelLimit = function(tasks, limit, callback) {
        _parallel(_eachOfLimit(limit), tasks, callback);
    };

    async.series = function(tasks, callback) {
        _parallel(async.eachOfSeries, tasks, callback);
    };

    async.iterator = function (tasks) {
        function makeCallback(index) {
            function fn() {
                if (tasks.length) {
                    tasks[index].apply(null, arguments);
                }
                return fn.next();
            }
            fn.next = function () {
                return (index < tasks.length - 1) ? makeCallback(index + 1): null;
            };
            return fn;
        }
        return makeCallback(0);
    };

    async.apply = _restParam(function (fn, args) {
        return _restParam(function (callArgs) {
            return fn.apply(
                null, args.concat(callArgs)
            );
        });
    });

    function _concat(eachfn, arr, fn, callback) {
        var result = [];
        eachfn(arr, function (x, index, cb) {
            fn(x, function (err, y) {
                result = result.concat(y || []);
                cb(err);
            });
        }, function (err) {
            callback(err, result);
        });
    }
    async.concat = doParallel(_concat);
    async.concatSeries = doSeries(_concat);

    async.whilst = function (test, iterator, callback) {
        callback = callback || noop;
        if (test()) {
            var next = _restParam(function(err, args) {
                if (err) {
                    callback(err);
                } else if (test.apply(this, args)) {
                    iterator(next);
                } else {
                    callback.apply(null, [null].concat(args));
                }
            });
            iterator(next);
        } else {
            callback(null);
        }
    };

    async.doWhilst = function (iterator, test, callback) {
        var calls = 0;
        return async.whilst(function() {
            return ++calls <= 1 || test.apply(this, arguments);
        }, iterator, callback);
    };

    async.until = function (test, iterator, callback) {
        return async.whilst(function() {
            return !test.apply(this, arguments);
        }, iterator, callback);
    };

    async.doUntil = function (iterator, test, callback) {
        return async.doWhilst(iterator, function() {
            return !test.apply(this, arguments);
        }, callback);
    };

    async.during = function (test, iterator, callback) {
        callback = callback || noop;

        var next = _restParam(function(err, args) {
            if (err) {
                callback(err);
            } else {
                args.push(check);
                test.apply(this, args);
            }
        });

        var check = function(err, truth) {
            if (err) {
                callback(err);
            } else if (truth) {
                iterator(next);
            } else {
                callback(null);
            }
        };

        test(check);
    };

    async.doDuring = function (iterator, test, callback) {
        var calls = 0;
        async.during(function(next) {
            if (calls++ < 1) {
                next(null, true);
            } else {
                test.apply(this, arguments);
            }
        }, iterator, callback);
    };

    function _queue(worker, concurrency, payload) {
        if (concurrency == null) {
            concurrency = 1;
        }
        else if(concurrency === 0) {
            throw new Error('Concurrency must not be zero');
        }
        function _insert(q, data, pos, callback) {
            if (callback != null && typeof callback !== "function") {
                throw new Error("task callback must be a function");
            }
            q.started = true;
            if (!_isArray(data)) {
                data = [data];
            }
            if(data.length === 0 && q.idle()) {
                // call drain immediately if there are no tasks
                return async.setImmediate(function() {
                    q.drain();
                });
            }
            _arrayEach(data, function(task) {
                var item = {
                    data: task,
                    callback: callback || noop
                };

                if (pos) {
                    q.tasks.unshift(item);
                } else {
                    q.tasks.push(item);
                }

                if (q.tasks.length === q.concurrency) {
                    q.saturated();
                }
            });
            async.setImmediate(q.process);
        }
        function _next(q, tasks) {
            return function(){
                workers -= 1;

                var removed = false;
                var args = arguments;
                _arrayEach(tasks, function (task) {
                    _arrayEach(workersList, function (worker, index) {
                        if (worker === task && !removed) {
                            workersList.splice(index, 1);
                            removed = true;
                        }
                    });

                    task.callback.apply(task, args);
                });
                if (q.tasks.length + workers === 0) {
                    q.drain();
                }
                q.process();
            };
        }

        var workers = 0;
        var workersList = [];
        var q = {
            tasks: [],
            concurrency: concurrency,
            payload: payload,
            saturated: noop,
            empty: noop,
            drain: noop,
            started: false,
            paused: false,
            push: function (data, callback) {
                _insert(q, data, false, callback);
            },
            kill: function () {
                q.drain = noop;
                q.tasks = [];
            },
            unshift: function (data, callback) {
                _insert(q, data, true, callback);
            },
            process: function () {
                while(!q.paused && workers < q.concurrency && q.tasks.length){

                    var tasks = q.payload ?
                        q.tasks.splice(0, q.payload) :
                        q.tasks.splice(0, q.tasks.length);

                    var data = _map(tasks, function (task) {
                        return task.data;
                    });

                    if (q.tasks.length === 0) {
                        q.empty();
                    }
                    workers += 1;
                    workersList.push(tasks[0]);
                    var cb = only_once(_next(q, tasks));
                    worker(data, cb);
                }
            },
            length: function () {
                return q.tasks.length;
            },
            running: function () {
                return workers;
            },
            workersList: function () {
                return workersList;
            },
            idle: function() {
                return q.tasks.length + workers === 0;
            },
            pause: function () {
                q.paused = true;
            },
            resume: function () {
                if (q.paused === false) { return; }
                q.paused = false;
                var resumeCount = Math.min(q.concurrency, q.tasks.length);
                // Need to call q.process once per concurrent
                // worker to preserve full concurrency after pause
                for (var w = 1; w <= resumeCount; w++) {
                    async.setImmediate(q.process);
                }
            }
        };
        return q;
    }

    async.queue = function (worker, concurrency) {
        var q = _queue(function (items, cb) {
            worker(items[0], cb);
        }, concurrency, 1);

        return q;
    };

    async.priorityQueue = function (worker, concurrency) {

        function _compareTasks(a, b){
            return a.priority - b.priority;
        }

        function _binarySearch(sequence, item, compare) {
            var beg = -1,
                end = sequence.length - 1;
            while (beg < end) {
                var mid = beg + ((end - beg + 1) >>> 1);
                if (compare(item, sequence[mid]) >= 0) {
                    beg = mid;
                } else {
                    end = mid - 1;
                }
            }
            return beg;
        }

        function _insert(q, data, priority, callback) {
            if (callback != null && typeof callback !== "function") {
                throw new Error("task callback must be a function");
            }
            q.started = true;
            if (!_isArray(data)) {
                data = [data];
            }
            if(data.length === 0) {
                // call drain immediately if there are no tasks
                return async.setImmediate(function() {
                    q.drain();
                });
            }
            _arrayEach(data, function(task) {
                var item = {
                    data: task,
                    priority: priority,
                    callback: typeof callback === 'function' ? callback : noop
                };

                q.tasks.splice(_binarySearch(q.tasks, item, _compareTasks) + 1, 0, item);

                if (q.tasks.length === q.concurrency) {
                    q.saturated();
                }
                async.setImmediate(q.process);
            });
        }

        // Start with a normal queue
        var q = async.queue(worker, concurrency);

        // Override push to accept second parameter representing priority
        q.push = function (data, priority, callback) {
            _insert(q, data, priority, callback);
        };

        // Remove unshift function
        delete q.unshift;

        return q;
    };

    async.cargo = function (worker, payload) {
        return _queue(worker, 1, payload);
    };

    function _console_fn(name) {
        return _restParam(function (fn, args) {
            fn.apply(null, args.concat([_restParam(function (err, args) {
                if (typeof console === 'object') {
                    if (err) {
                        if (console.error) {
                            console.error(err);
                        }
                    }
                    else if (console[name]) {
                        _arrayEach(args, function (x) {
                            console[name](x);
                        });
                    }
                }
            })]));
        });
    }
    async.log = _console_fn('log');
    async.dir = _console_fn('dir');
    /*async.info = _console_fn('info');
    async.warn = _console_fn('warn');
    async.error = _console_fn('error');*/

    async.memoize = function (fn, hasher) {
        var memo = {};
        var queues = {};
        var has = Object.prototype.hasOwnProperty;
        hasher = hasher || identity;
        var memoized = _restParam(function memoized(args) {
            var callback = args.pop();
            var key = hasher.apply(null, args);
            if (has.call(memo, key)) {   
                async.setImmediate(function () {
                    callback.apply(null, memo[key]);
                });
            }
            else if (has.call(queues, key)) {
                queues[key].push(callback);
            }
            else {
                queues[key] = [callback];
                fn.apply(null, args.concat([_restParam(function (args) {
                    memo[key] = args;
                    var q = queues[key];
                    delete queues[key];
                    for (var i = 0, l = q.length; i < l; i++) {
                        q[i].apply(null, args);
                    }
                })]));
            }
        });
        memoized.memo = memo;
        memoized.unmemoized = fn;
        return memoized;
    };

    async.unmemoize = function (fn) {
        return function () {
            return (fn.unmemoized || fn).apply(null, arguments);
        };
    };

    function _times(mapper) {
        return function (count, iterator, callback) {
            mapper(_range(count), iterator, callback);
        };
    }

    async.times = _times(async.map);
    async.timesSeries = _times(async.mapSeries);
    async.timesLimit = function (count, limit, iterator, callback) {
        return async.mapLimit(_range(count), limit, iterator, callback);
    };

    async.seq = function (/* functions... */) {
        var fns = arguments;
        return _restParam(function (args) {
            var that = this;

            var callback = args[args.length - 1];
            if (typeof callback == 'function') {
                args.pop();
            } else {
                callback = noop;
            }

            async.reduce(fns, args, function (newargs, fn, cb) {
                fn.apply(that, newargs.concat([_restParam(function (err, nextargs) {
                    cb(err, nextargs);
                })]));
            },
            function (err, results) {
                callback.apply(that, [err].concat(results));
            });
        });
    };

    async.compose = function (/* functions... */) {
        return async.seq.apply(null, Array.prototype.reverse.call(arguments));
    };


    function _applyEach(eachfn) {
        return _restParam(function(fns, args) {
            var go = _restParam(function(args) {
                var that = this;
                var callback = args.pop();
                return eachfn(fns, function (fn, _, cb) {
                    fn.apply(that, args.concat([cb]));
                },
                callback);
            });
            if (args.length) {
                return go.apply(this, args);
            }
            else {
                return go;
            }
        });
    }

    async.applyEach = _applyEach(async.eachOf);
    async.applyEachSeries = _applyEach(async.eachOfSeries);


    async.forever = function (fn, callback) {
        var done = only_once(callback || noop);
        var task = ensureAsync(fn);
        function next(err) {
            if (err) {
                return done(err);
            }
            task(next);
        }
        next();
    };

    function ensureAsync(fn) {
        return _restParam(function (args) {
            var callback = args.pop();
            args.push(function () {
                var innerArgs = arguments;
                if (sync) {
                    async.setImmediate(function () {
                        callback.apply(null, innerArgs);
                    });
                } else {
                    callback.apply(null, innerArgs);
                }
            });
            var sync = true;
            fn.apply(this, args);
            sync = false;
        });
    }

    async.ensureAsync = ensureAsync;

    async.constant = _restParam(function(values) {
        var args = [null].concat(values);
        return function (callback) {
            return callback.apply(this, args);
        };
    });

    async.wrapSync =
    async.asyncify = function asyncify(func) {
        return _restParam(function (args) {
            var callback = args.pop();
            var result;
            try {
                result = func.apply(this, args);
            } catch (e) {
                return callback(e);
            }
            // if result is Promise object
            if (_isObject(result) && typeof result.then === "function") {
                result.then(function(value) {
                    callback(null, value);
                })["catch"](function(err) {
                    callback(err.message ? err : new Error(err));
                });
            } else {
                callback(null, result);
            }
        });
    };

    // Node.js
    if (typeof module === 'object' && module.exports) {
        module.exports = async;
    }
    // AMD / RequireJS
    else if (typeof define === 'function' && define.amd) {
        define([], function () {
            return async;
        });
    }
    // included directly via <script> tag
    else {
        root.async = async;
    }

}());

}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"_process":88}],79:[function(require,module,exports){

},{}],80:[function(require,module,exports){
arguments[4][79][0].apply(exports,arguments)
},{"dup":79}],81:[function(require,module,exports){
(function (global){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */

'use strict'

var base64 = require('base64-js')
var ieee754 = require('ieee754')
var isArray = require('isarray')

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50
Buffer.poolSize = 8192 // not used by this implementation

var rootParent = {}

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.foo = function () { return 42 }
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */
function Buffer (arg) {
  if (!(this instanceof Buffer)) {
    // Avoid going through an ArgumentsAdaptorTrampoline in the common case.
    if (arguments.length > 1) return new Buffer(arg, arguments[1])
    return new Buffer(arg)
  }

  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    this.length = 0
    this.parent = undefined
  }

  // Common case.
  if (typeof arg === 'number') {
    return fromNumber(this, arg)
  }

  // Slightly less common case.
  if (typeof arg === 'string') {
    return fromString(this, arg, arguments.length > 1 ? arguments[1] : 'utf8')
  }

  // Unusual.
  return fromObject(this, arg)
}

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function fromNumber (that, length) {
  that = allocate(that, length < 0 ? 0 : checked(length) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < length; i++) {
      that[i] = 0
    }
  }
  return that
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') encoding = 'utf8'

  // Assumption: byteLength() return value is always < kMaxLength.
  var length = byteLength(string, encoding) | 0
  that = allocate(that, length)

  that.write(string, encoding)
  return that
}

function fromObject (that, object) {
  if (Buffer.isBuffer(object)) return fromBuffer(that, object)

  if (isArray(object)) return fromArray(that, object)

  if (object == null) {
    throw new TypeError('must start with number, buffer, array or string')
  }

  if (typeof ArrayBuffer !== 'undefined') {
    if (object.buffer instanceof ArrayBuffer) {
      return fromTypedArray(that, object)
    }
    if (object instanceof ArrayBuffer) {
      return fromArrayBuffer(that, object)
    }
  }

  if (object.length) return fromArrayLike(that, object)

  return fromJsonObject(that, object)
}

function fromBuffer (that, buffer) {
  var length = checked(buffer.length) | 0
  that = allocate(that, length)
  buffer.copy(that, 0, 0, length)
  return that
}

function fromArray (that, array) {
  var length = checked(array.length) | 0
  that = allocate(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

// Duplicate of fromArray() to keep fromArray() monomorphic.
function fromTypedArray (that, array) {
  var length = checked(array.length) | 0
  that = allocate(that, length)
  // Truncating the elements is probably not what people expect from typed
  // arrays with BYTES_PER_ELEMENT > 1 but it's compatible with the behavior
  // of the old Buffer constructor.
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(array)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromTypedArray(that, new Uint8Array(array))
  }
  return that
}

function fromArrayLike (that, array) {
  var length = checked(array.length) | 0
  that = allocate(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

// Deserialize { type: 'Buffer', data: [1,2,3,...] } into a Buffer object.
// Returns a zero-length buffer for inputs that don't conform to the spec.
function fromJsonObject (that, object) {
  var array
  var length = 0

  if (object.type === 'Buffer' && isArray(object.data)) {
    array = object.data
    length = checked(array.length) | 0
  }
  that = allocate(that, length)

  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
} else {
  // pre-set for values that may exist in the future
  Buffer.prototype.length = undefined
  Buffer.prototype.parent = undefined
}

function allocate (that, length) {
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that.length = length
  }

  var fromPool = length !== 0 && length <= Buffer.poolSize >>> 1
  if (fromPool) that.parent = rootParent

  return that
}

function checked (length) {
  // Note: cannot use `length < kMaxLength` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (subject, encoding) {
  if (!(this instanceof SlowBuffer)) return new SlowBuffer(subject, encoding)

  var buf = new Buffer(subject, encoding)
  delete buf.parent
  return buf
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  var i = 0
  var len = Math.min(x, y)
  while (i < len) {
    if (a[i] !== b[i]) break

    ++i
  }

  if (i !== len) {
    x = a[i]
    y = b[i]
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'binary':
    case 'base64':
    case 'raw':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) throw new TypeError('list argument must be an Array of Buffers.')

  if (list.length === 0) {
    return new Buffer(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; i++) {
      length += list[i].length
    }
  }

  var buf = new Buffer(length)
  var pos = 0
  for (i = 0; i < list.length; i++) {
    var item = list[i]
    item.copy(buf, pos)
    pos += item.length
  }
  return buf
}

function byteLength (string, encoding) {
  if (typeof string !== 'string') string = '' + string

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'binary':
      // Deprecated
      case 'raw':
      case 'raws':
        return len
      case 'utf8':
      case 'utf-8':
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  start = start | 0
  end = end === undefined || end === Infinity ? this.length : end | 0

  if (!encoding) encoding = 'utf8'
  if (start < 0) start = 0
  if (end > this.length) end = this.length
  if (end <= start) return ''

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'binary':
        return binarySlice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return 0
  return Buffer.compare(this, b)
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset) {
  if (byteOffset > 0x7fffffff) byteOffset = 0x7fffffff
  else if (byteOffset < -0x80000000) byteOffset = -0x80000000
  byteOffset >>= 0

  if (this.length === 0) return -1
  if (byteOffset >= this.length) return -1

  // Negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = Math.max(this.length + byteOffset, 0)

  if (typeof val === 'string') {
    if (val.length === 0) return -1 // special case: looking for empty string always fails
    return String.prototype.indexOf.call(this, val, byteOffset)
  }
  if (Buffer.isBuffer(val)) {
    return arrayIndexOf(this, val, byteOffset)
  }
  if (typeof val === 'number') {
    if (Buffer.TYPED_ARRAY_SUPPORT && Uint8Array.prototype.indexOf === 'function') {
      return Uint8Array.prototype.indexOf.call(this, val, byteOffset)
    }
    return arrayIndexOf(this, [ val ], byteOffset)
  }

  function arrayIndexOf (arr, val, byteOffset) {
    var foundIndex = -1
    for (var i = 0; byteOffset + i < arr.length; i++) {
      if (arr[byteOffset + i] === val[foundIndex === -1 ? 0 : i - foundIndex]) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === val.length) return byteOffset + foundIndex
      } else {
        foundIndex = -1
      }
    }
    return -1
  }

  throw new TypeError('val must be string, number or Buffer')
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new Error('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; i++) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) throw new Error('Invalid hex string')
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function binaryWrite (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    var swap = encoding
    encoding = offset
    offset = length | 0
    length = swap
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'binary':
        return binaryWrite(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; i++) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function binarySlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; i++) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; i++) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; i++) {
      newBuf[i] = this[i + start]
    }
  }

  if (newBuf.length) newBuf.parent = this.parent || this

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('buffer must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('value is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkInt(this, value, offset, byteLength, Math.pow(2, 8 * byteLength), 0)

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkInt(this, value, offset, byteLength, Math.pow(2, 8 * byteLength), 0)

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; i++) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; i++) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = value < 0 ? 1 : 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = value < 0 ? 1 : 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('index out of range')
  if (offset < 0) throw new RangeError('index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; i--) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; i++) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// fill(value, start=0, end=buffer.length)
Buffer.prototype.fill = function fill (value, start, end) {
  if (!value) value = 0
  if (!start) start = 0
  if (!end) end = this.length

  if (end < start) throw new RangeError('end < start')

  // Fill 0 bytes; we're done
  if (end === start) return
  if (this.length === 0) return

  if (start < 0 || start >= this.length) throw new RangeError('start out of bounds')
  if (end < 0 || end > this.length) throw new RangeError('end out of bounds')

  var i
  if (typeof value === 'number') {
    for (i = start; i < end; i++) {
      this[i] = value
    }
  } else {
    var bytes = utf8ToBytes(value.toString())
    var len = bytes.length
    for (i = start; i < end; i++) {
      this[i] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; i++) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; i++) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; i++) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; i++) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"base64-js":82,"ieee754":83,"isarray":84}],82:[function(require,module,exports){
'use strict'

exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

function init () {
  var i
  var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
  var len = code.length

  for (i = 0; i < len; i++) {
    lookup[i] = code[i]
  }

  for (i = 0; i < len; ++i) {
    revLookup[code.charCodeAt(i)] = i
  }
  revLookup['-'.charCodeAt(0)] = 62
  revLookup['_'.charCodeAt(0)] = 63
}

init()

function toByteArray (b64) {
  var i, j, l, tmp, placeHolders, arr
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // the number of equal signs (place holders)
  // if there are two placeholders, than the two characters before it
  // represent one byte
  // if there is only one, then the three characters before it represent 2 bytes
  // this is just a cheap hack to not do indexOf twice
  placeHolders = b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0

  // base64 is 4/3 + up to two characters of the original data
  arr = new Arr(len * 3 / 4 - placeHolders)

  // if there are placeholders, only get up to the last complete 4 chars
  l = placeHolders > 0 ? len - 4 : len

  var L = 0

  for (i = 0, j = 0; i < l; i += 4, j += 3) {
    tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)]
    arr[L++] = (tmp & 0xFF0000) >> 16
    arr[L++] = (tmp & 0xFF00) >> 8
    arr[L++] = tmp & 0xFF
  }

  if (placeHolders === 2) {
    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[L++] = tmp & 0xFF
  } else if (placeHolders === 1) {
    tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var output = ''
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    output += lookup[tmp >> 2]
    output += lookup[(tmp << 4) & 0x3F]
    output += '=='
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + (uint8[len - 1])
    output += lookup[tmp >> 10]
    output += lookup[(tmp >> 4) & 0x3F]
    output += lookup[(tmp << 2) & 0x3F]
    output += '='
  }

  parts.push(output)

  return parts.join('')
}

},{}],83:[function(require,module,exports){
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}

},{}],84:[function(require,module,exports){
var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};

},{}],85:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

function EventEmitter() {
  this._events = this._events || {};
  this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function(n) {
  if (!isNumber(n) || n < 0 || isNaN(n))
    throw TypeError('n must be a positive number');
  this._maxListeners = n;
  return this;
};

EventEmitter.prototype.emit = function(type) {
  var er, handler, len, args, i, listeners;

  if (!this._events)
    this._events = {};

  // If there is no 'error' event listener then throw.
  if (type === 'error') {
    if (!this._events.error ||
        (isObject(this._events.error) && !this._events.error.length)) {
      er = arguments[1];
      if (er instanceof Error) {
        throw er; // Unhandled 'error' event
      }
      throw TypeError('Uncaught, unspecified "error" event.');
    }
  }

  handler = this._events[type];

  if (isUndefined(handler))
    return false;

  if (isFunction(handler)) {
    switch (arguments.length) {
      // fast cases
      case 1:
        handler.call(this);
        break;
      case 2:
        handler.call(this, arguments[1]);
        break;
      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;
      // slower
      default:
        args = Array.prototype.slice.call(arguments, 1);
        handler.apply(this, args);
    }
  } else if (isObject(handler)) {
    args = Array.prototype.slice.call(arguments, 1);
    listeners = handler.slice();
    len = listeners.length;
    for (i = 0; i < len; i++)
      listeners[i].apply(this, args);
  }

  return true;
};

EventEmitter.prototype.addListener = function(type, listener) {
  var m;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events)
    this._events = {};

  // To avoid recursion in the case that type === "newListener"! Before
  // adding it to the listeners, first emit "newListener".
  if (this._events.newListener)
    this.emit('newListener', type,
              isFunction(listener.listener) ?
              listener.listener : listener);

  if (!this._events[type])
    // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;
  else if (isObject(this._events[type]))
    // If we've already got an array, just append.
    this._events[type].push(listener);
  else
    // Adding the second element, need to change to array.
    this._events[type] = [this._events[type], listener];

  // Check for listener leak
  if (isObject(this._events[type]) && !this._events[type].warned) {
    if (!isUndefined(this._maxListeners)) {
      m = this._maxListeners;
    } else {
      m = EventEmitter.defaultMaxListeners;
    }

    if (m && m > 0 && this._events[type].length > m) {
      this._events[type].warned = true;
      console.error('(node) warning: possible EventEmitter memory ' +
                    'leak detected. %d listeners added. ' +
                    'Use emitter.setMaxListeners() to increase limit.',
                    this._events[type].length);
      if (typeof console.trace === 'function') {
        // not supported in IE 10
        console.trace();
      }
    }
  }

  return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.once = function(type, listener) {
  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  var fired = false;

  function g() {
    this.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(this, arguments);
    }
  }

  g.listener = listener;
  this.on(type, g);

  return this;
};

// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener = function(type, listener) {
  var list, position, length, i;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events || !this._events[type])
    return this;

  list = this._events[type];
  length = list.length;
  position = -1;

  if (list === listener ||
      (isFunction(list.listener) && list.listener === listener)) {
    delete this._events[type];
    if (this._events.removeListener)
      this.emit('removeListener', type, listener);

  } else if (isObject(list)) {
    for (i = length; i-- > 0;) {
      if (list[i] === listener ||
          (list[i].listener && list[i].listener === listener)) {
        position = i;
        break;
      }
    }

    if (position < 0)
      return this;

    if (list.length === 1) {
      list.length = 0;
      delete this._events[type];
    } else {
      list.splice(position, 1);
    }

    if (this._events.removeListener)
      this.emit('removeListener', type, listener);
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function(type) {
  var key, listeners;

  if (!this._events)
    return this;

  // not listening for removeListener, no need to emit
  if (!this._events.removeListener) {
    if (arguments.length === 0)
      this._events = {};
    else if (this._events[type])
      delete this._events[type];
    return this;
  }

  // emit removeListener for all listeners on all events
  if (arguments.length === 0) {
    for (key in this._events) {
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = {};
    return this;
  }

  listeners = this._events[type];

  if (isFunction(listeners)) {
    this.removeListener(type, listeners);
  } else if (listeners) {
    // LIFO order
    while (listeners.length)
      this.removeListener(type, listeners[listeners.length - 1]);
  }
  delete this._events[type];

  return this;
};

EventEmitter.prototype.listeners = function(type) {
  var ret;
  if (!this._events || !this._events[type])
    ret = [];
  else if (isFunction(this._events[type]))
    ret = [this._events[type]];
  else
    ret = this._events[type].slice();
  return ret;
};

EventEmitter.prototype.listenerCount = function(type) {
  if (this._events) {
    var evlistener = this._events[type];

    if (isFunction(evlistener))
      return 1;
    else if (evlistener)
      return evlistener.length;
  }
  return 0;
};

EventEmitter.listenerCount = function(emitter, type) {
  return emitter.listenerCount(type);
};

function isFunction(arg) {
  return typeof arg === 'function';
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

function isUndefined(arg) {
  return arg === void 0;
}

},{}],86:[function(require,module,exports){
if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}

},{}],87:[function(require,module,exports){
(function (process){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe =
    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
var splitPath = function(filename) {
  return splitPathRe.exec(filename).slice(1);
};

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function(path) {
  var result = splitPath(path),
      root = result[0],
      dir = result[1];

  if (!root && !dir) {
    // No dirname whatsoever
    return '.';
  }

  if (dir) {
    // It has a dirname, strip trailing slash
    dir = dir.substr(0, dir.length - 1);
  }

  return root + dir;
};


exports.basename = function(path, ext) {
  var f = splitPath(path)[2];
  // TODO: make this comparison case-insensitive on windows?
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};


exports.extname = function(path) {
  return splitPath(path)[3];
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

}).call(this,require('_process'))
},{"_process":88}],88:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = setTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    clearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        setTimeout(drainQueue, 0);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],89:[function(require,module,exports){
module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}
},{}],90:[function(require,module,exports){
(function (process,global){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  // Allow for deprecating things in the process of starting up.
  if (isUndefined(global.process)) {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  if (process.noDeprecation === true) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = require('./support/isBuffer');

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = require('inherits');

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./support/isBuffer":89,"_process":88,"inherits":86}],91:[function(require,module,exports){
"use strict";
var layouts = require('../layouts')
, consoleLog = console.log.bind(console);

function consoleAppender (layout, timezoneOffset) {
  layout = layout || layouts.colouredLayout;
  return function(loggingEvent) {
    consoleLog(layout(loggingEvent, timezoneOffset));
  };
}

function configure(config) {
  var layout;
  if (config.layout) {
    layout = layouts.layout(config.layout.type, config.layout);
  }
  return consoleAppender(layout, config.timezoneOffset);
}

exports.appender = consoleAppender;
exports.configure = configure;

},{"../layouts":94}],92:[function(require,module,exports){
"use strict";
var levels = require("./levels");
var DEFAULT_FORMAT = ':remote-addr - -' +
  ' ":method :url HTTP/:http-version"' +
  ' :status :content-length ":referrer"' +
  ' ":user-agent"';
/**
 * Log requests with the given `options` or a `format` string.
 *
 * Options:
 *
 *   - `format`        Format string, see below for tokens
 *   - `level`         A log4js levels instance. Supports also 'auto'
 *
 * Tokens:
 *
 *   - `:req[header]` ex: `:req[Accept]`
 *   - `:res[header]` ex: `:res[Content-Length]`
 *   - `:http-version`
 *   - `:response-time`
 *   - `:remote-addr`
 *   - `:date`
 *   - `:method`
 *   - `:url`
 *   - `:referrer`
 *   - `:user-agent`
 *   - `:status`
 *
 * @param {String|Function|Object} format or options
 * @return {Function}
 * @api public
 */

function getLogger(logger4js, options) {
	if ('object' == typeof options) {
		options = options || {};
	} else if (options) {
		options = { format: options };
	} else {
		options = {};
	}

	var thislogger = logger4js
  , level = levels.toLevel(options.level, levels.INFO)
  , fmt = options.format || DEFAULT_FORMAT
  , nolog = options.nolog ? createNoLogCondition(options.nolog) : null;

  return function (req, res, next) {
    // mount safety
    if (req._logging) return next();

		// nologs
		if (nolog && nolog.test(req.originalUrl)) return next();
		if (thislogger.isLevelEnabled(level) || options.level === 'auto') {

			var start = new Date()
			, statusCode
			, writeHead = res.writeHead
			, url = req.originalUrl;

			// flag as logging
			req._logging = true;

			// proxy for statusCode.
			res.writeHead = function(code, headers){
				res.writeHead = writeHead;
				res.writeHead(code, headers);
				res.__statusCode = statusCode = code;
				res.__headers = headers || {};

				//status code response level handling
				if(options.level === 'auto'){
					level = levels.INFO;
					if(code >= 300) level = levels.WARN;
					if(code >= 400) level = levels.ERROR;
				} else {
					level = levels.toLevel(options.level, levels.INFO);
				}
			};

			//hook on end request to emit the log entry of the HTTP request.
			res.on('finish', function() {
				res.responseTime = new Date() - start;
				//status code response level handling
				if(res.statusCode && options.level === 'auto'){
					level = levels.INFO;
					if(res.statusCode >= 300) level = levels.WARN;
					if(res.statusCode >= 400) level = levels.ERROR;
				}
				if (thislogger.isLevelEnabled(level)) {
          var combined_tokens = assemble_tokens(req, res, options.tokens || []);
					if (typeof fmt === 'function') {
						var line = fmt(req, res, function(str){ return format(str, combined_tokens); });
						if (line) thislogger.log(level, line);
					} else {
						thislogger.log(level, format(fmt, combined_tokens));
					}
				}
			});
		}

    //ensure next gets always called
    next();
  };
}

/**
 * Adds custom {token, replacement} objects to defaults,
 * overwriting the defaults if any tokens clash
 *
 * @param  {IncomingMessage} req
 * @param  {ServerResponse} res
 * @param  {Array} custom_tokens
 *    [{ token: string-or-regexp, replacement: string-or-replace-function }]
 * @return {Array}
 */
function assemble_tokens(req, res, custom_tokens) {
  var array_unique_tokens = function(array) {
    var a = array.concat();
    for(var i=0; i<a.length; ++i) {
      for(var j=i+1; j<a.length; ++j) {
        if(a[i].token == a[j].token) { // not === because token can be regexp object
          a.splice(j--, 1);
        }
      }
    }
    return a;
  };

  var default_tokens = [];
  default_tokens.push({ token: ':url', replacement: req.originalUrl });
  default_tokens.push({ token: ':protocol', replacement: req.protocol });
  default_tokens.push({ token: ':hostname', replacement: req.hostname });
  default_tokens.push({ token: ':method', replacement: req.method });
  default_tokens.push({ token: ':status', replacement: res.__statusCode || res.statusCode });
  default_tokens.push({ token: ':response-time', replacement: res.responseTime });
  default_tokens.push({ token: ':date', replacement: new Date().toUTCString() });
  default_tokens.push({
    token: ':referrer',
    replacement: req.headers.referer || req.headers.referrer || ''
  });
  default_tokens.push({
    token: ':http-version',
    replacement: req.httpVersionMajor + '.' + req.httpVersionMinor
  });
  default_tokens.push({
    token: ':remote-addr',
    replacement:
      req.headers['x-forwarded-for'] ||
      req.ip ||
      req._remoteAddress ||
      (req.socket &&
        (req.socket.remoteAddress ||
          (req.socket.socket && req.socket.socket.remoteAddress)
        )
      )
    }
  );
  default_tokens.push({ token: ':user-agent', replacement: req.headers['user-agent'] });
  default_tokens.push({
    token: ':content-length',
    replacement:
      (res._headers && res._headers['content-length']) ||
      (res.__headers && res.__headers['Content-Length']) ||
      '-'
    }
  );
  default_tokens.push({ token: /:req\[([^\]]+)\]/g, replacement: function(_, field) {
    return req.headers[field.toLowerCase()];
  } });
  default_tokens.push({ token: /:res\[([^\]]+)\]/g, replacement: function(_, field) {
    return res._headers ?
      (res._headers[field.toLowerCase()] || res.__headers[field])
      : (res.__headers && res.__headers[field]);
  } });

  return array_unique_tokens(custom_tokens.concat(default_tokens));
}

/**
 * Return formatted log line.
 *
 * @param  {String} str
 * @param  {IncomingMessage} req
 * @param  {ServerResponse} res
 * @return {String}
 * @api private
 */

function format(str, tokens) {
  for (var i = 0; i < tokens.length; i++) {
    str = str.replace(tokens[i].token, tokens[i].replacement);
  }
  return str;
}

/**
 * Return RegExp Object about nolog
 *
 * @param  {String} nolog
 * @return {RegExp}
 * @api private
 *
 * syntax
 *  1. String
 *   1.1 "\\.gif"
 *         NOT LOGGING http://example.com/hoge.gif and http://example.com/hoge.gif?fuga
 *         LOGGING http://example.com/hoge.agif
 *   1.2 in "\\.gif|\\.jpg$"
 *         NOT LOGGING http://example.com/hoge.gif and
 *           http://example.com/hoge.gif?fuga and http://example.com/hoge.jpg?fuga
 *         LOGGING http://example.com/hoge.agif,
 *           http://example.com/hoge.ajpg and http://example.com/hoge.jpg?hoge
 *   1.3 in "\\.(gif|jpe?g|png)$"
 *         NOT LOGGING http://example.com/hoge.gif and http://example.com/hoge.jpeg
 *         LOGGING http://example.com/hoge.gif?uid=2 and http://example.com/hoge.jpg?pid=3
 *  2. RegExp
 *   2.1 in /\.(gif|jpe?g|png)$/
 *         SAME AS 1.3
 *  3. Array
 *   3.1 ["\\.jpg$", "\\.png", "\\.gif"]
 *         SAME AS "\\.jpg|\\.png|\\.gif"
 */
function createNoLogCondition(nolog) {
  var regexp = null;

	if (nolog) {
    if (nolog instanceof RegExp) {
      regexp = nolog;
    }

    if (typeof nolog === 'string') {
      regexp = new RegExp(nolog);
    }

    if (Array.isArray(nolog)) {
      var regexpsAsStrings = nolog.map(
        function convertToStrings(o) {
          return o.source ? o.source : o;
        }
      );
      regexp = new RegExp(regexpsAsStrings.join('|'));
    }
  }

  return regexp;
}

exports.connectLogger = getLogger;

},{"./levels":95}],93:[function(require,module,exports){
"use strict";
exports.ISO8601_FORMAT = "yyyy-MM-dd hh:mm:ss.SSS";
exports.ISO8601_WITH_TZ_OFFSET_FORMAT = "yyyy-MM-ddThh:mm:ssO";
exports.DATETIME_FORMAT = "dd MM yyyy hh:mm:ss.SSS";
exports.ABSOLUTETIME_FORMAT = "hh:mm:ss.SSS";

function padWithZeros(vNumber, width) {
  var numAsString = vNumber + "";
  while (numAsString.length < width) {
    numAsString = "0" + numAsString;
  }
  return numAsString;
}

function addZero(vNumber) {
  return padWithZeros(vNumber, 2);
}

/**
 * Formats the TimeOffest
 * Thanks to http://www.svendtofte.com/code/date_format/
 * @private
 */
function offset(timezoneOffset) {
  // Difference to Greenwich time (GMT) in hours
  var os = Math.abs(timezoneOffset);
  var h = String(Math.floor(os/60));
  var m = String(os%60);
  if (h.length == 1) {
    h = "0" + h;
  }
  if (m.length == 1) {
    m = "0" + m;
  }
  return timezoneOffset < 0 ? "+"+h+m : "-"+h+m;
}

exports.asString = function(/*format,*/ date, timezoneOffset) {
  /*jshint -W071 */
  var format = exports.ISO8601_FORMAT;
  if (typeof(date) === "string") {
    format = arguments[0];
    date = arguments[1];
    timezoneOffset = arguments[2];
  }
  // make the date independent of the system timezone by working with UTC
  if (timezoneOffset === undefined) {
    timezoneOffset = date.getTimezoneOffset();
  }
  date.setUTCMinutes(date.getUTCMinutes() - timezoneOffset);
  var vDay = addZero(date.getUTCDate());
  var vMonth = addZero(date.getUTCMonth()+1);
  var vYearLong = addZero(date.getUTCFullYear());
  var vYearShort = addZero(date.getUTCFullYear().toString().substring(2,4));
  var vYear = (format.indexOf("yyyy") > -1 ? vYearLong : vYearShort);
  var vHour  = addZero(date.getUTCHours());
  var vMinute = addZero(date.getUTCMinutes());
  var vSecond = addZero(date.getUTCSeconds());
  var vMillisecond = padWithZeros(date.getUTCMilliseconds(), 3);
  var vTimeZone = offset(timezoneOffset);
  date.setUTCMinutes(date.getUTCMinutes() + timezoneOffset);
  var formatted = format
    .replace(/dd/g, vDay)
    .replace(/MM/g, vMonth)
    .replace(/y{1,4}/g, vYear)
    .replace(/hh/g, vHour)
    .replace(/mm/g, vMinute)
    .replace(/ss/g, vSecond)
    .replace(/SSS/g, vMillisecond)
    .replace(/O/g, vTimeZone);
  return formatted;

};
/*jshint +W071 */

},{}],94:[function(require,module,exports){
(function (process){
"use strict";
var dateFormat = require('./date_format')
, os = require('os')
, eol = os.EOL || '\n'
, util = require('util')
, semver = require('semver')
, replacementRegExp = /%[sdj]/g
, layoutMakers = {
  "messagePassThrough": function() { return messagePassThroughLayout; },
  "basic": function() { return basicLayout; },
  "colored": function() { return colouredLayout; },
  "coloured": function() { return colouredLayout; },
  "pattern": function (config) {
    return patternLayout(config && config.pattern, config && config.tokens);
	},
  "dummy": function() { return dummyLayout; }
}
, colours = {
  ALL: "grey",
  TRACE: "blue",
  DEBUG: "cyan",
  INFO: "green",
  WARN: "yellow",
  ERROR: "red",
  FATAL: "magenta",
  OFF: "grey"
};

function wrapErrorsWithInspect(items) {
  return items.map(function(item) {
    if ((item instanceof Error) && item.stack) {
      return { inspect: function() {
        if (semver.satisfies(process.version, '>=6')) {
          return util.format(item);
        } else {
          return util.format(item) + '\n' + item.stack;           
        }
      } };
    } else {
      return item;
    }
  });
}

function formatLogData(logData) {
  var data = Array.isArray(logData) ? logData : Array.prototype.slice.call(arguments);
  return util.format.apply(util, wrapErrorsWithInspect(data));
}

var styles = {
    //styles
  'bold'      : [1,  22],
  'italic'    : [3,  23],
  'underline' : [4,  24],
  'inverse'   : [7,  27],
  //grayscale
  'white'     : [37, 39],
  'grey'      : [90, 39],
  'black'     : [90, 39],
  //colors
  'blue'      : [34, 39],
  'cyan'      : [36, 39],
  'green'     : [32, 39],
  'magenta'   : [35, 39],
  'red'       : [31, 39],
  'yellow'    : [33, 39]
};

function colorizeStart(style) {
  return style ? '\x1B[' + styles[style][0] + 'm' : '';
}
function colorizeEnd(style) {
  return style ? '\x1B[' + styles[style][1] + 'm' : '';
}
/**
 * Taken from masylum's fork (https://github.com/masylum/log4js-node)
 */
function colorize (str, style) {
  return colorizeStart(style) + str + colorizeEnd(style);
}

function timestampLevelAndCategory(loggingEvent, colour, timezoneOffest) {
  var output = colorize(
    formatLogData(
      '[%s] [%s] %s - '
      , dateFormat.asString(loggingEvent.startTime, timezoneOffest)
      , loggingEvent.level
      , loggingEvent.categoryName
    )
    , colour
  );
  return output;
}

/**
 * BasicLayout is a simple layout for storing the logs. The logs are stored
 * in following format:
 * <pre>
 * [startTime] [logLevel] categoryName - message\n
 * </pre>
 *
 * @author Stephan Strittmatter
 */
function basicLayout (loggingEvent, timezoneOffset) {
  return timestampLevelAndCategory(
    loggingEvent,
    undefined,
    timezoneOffset
  ) + formatLogData(loggingEvent.data);
}

/**
 * colouredLayout - taken from masylum's fork.
 * same as basicLayout, but with colours.
 */
function colouredLayout (loggingEvent, timezoneOffset) {
  return timestampLevelAndCategory(
    loggingEvent,
    colours[loggingEvent.level.toString()],
    timezoneOffset
  ) + formatLogData(loggingEvent.data);
}

function messagePassThroughLayout (loggingEvent) {
  return formatLogData(loggingEvent.data);
}

function dummyLayout(loggingEvent) {
  return loggingEvent.data[0];
}

/**
 * PatternLayout
 * Format for specifiers is %[padding].[truncation][field]{[format]}
 * e.g. %5.10p - left pad the log level by 5 characters, up to a max of 10
 * Fields can be any of:
 *  - %r time in toLocaleTimeString format
 *  - %p log level
 *  - %c log category
 *  - %h hostname
 *  - %m log data
 *  - %d date in various formats
 *  - %% %
 *  - %n newline
 *  - %z pid
 *  - %x{<tokenname>} add dynamic tokens to your log. Tokens are specified in the tokens parameter
 * You can use %[ and %] to define a colored block.
 *
 * Tokens are specified as simple key:value objects.
 * The key represents the token name whereas the value can be a string or function
 * which is called to extract the value to put in the log message. If token is not
 * found, it doesn't replace the field.
 *
 * A sample token would be: { "pid" : function() { return process.pid; } }
 *
 * Takes a pattern string, array of tokens and returns a layout function.
 * @param {String} Log format pattern String
 * @param {object} map object of different tokens
 * @param {number} timezone offset in minutes
 * @return {Function}
 * @author Stephan Strittmatter
 * @author Jan Schmidle
 */
function patternLayout (pattern, tokens, timezoneOffset) {
  // jshint maxstatements:22
  var TTCC_CONVERSION_PATTERN  = "%r %p %c - %m%n";
  var regex = /%(-?[0-9]+)?(\.?[0-9]+)?([\[\]cdhmnprzxy%])(\{([^\}]+)\})?|([^%]+)/;

  pattern = pattern || TTCC_CONVERSION_PATTERN;

  function categoryName(loggingEvent, specifier) {
    var loggerName = loggingEvent.categoryName;
    if (specifier) {
      var precision = parseInt(specifier, 10);
      var loggerNameBits = loggerName.split(".");
      if (precision < loggerNameBits.length) {
        loggerName = loggerNameBits.slice(loggerNameBits.length - precision).join(".");
      }
    }
    return loggerName;
  }

  function formatAsDate(loggingEvent, specifier) {
    var format = dateFormat.ISO8601_FORMAT;
    if (specifier) {
      format = specifier;
      // Pick up special cases
      if (format == "ISO8601") {
        format = dateFormat.ISO8601_FORMAT;
      } else if (format == "ISO8601_WITH_TZ_OFFSET") {
        format = dateFormat.ISO8601_WITH_TZ_OFFSET_FORMAT;
      } else if (format == "ABSOLUTE") {
        format = dateFormat.ABSOLUTETIME_FORMAT;
      } else if (format == "DATE") {
        format = dateFormat.DATETIME_FORMAT;
      }
    }
    // Format the date
    return dateFormat.asString(format, loggingEvent.startTime, timezoneOffset);
  }

  function hostname() {
    return os.hostname().toString();
  }

  function formatMessage(loggingEvent) {
    return formatLogData(loggingEvent.data);
  }

  function endOfLine() {
    return eol;
  }

  function logLevel(loggingEvent) {
    return loggingEvent.level.toString();
  }

  function startTime(loggingEvent) {
    return dateFormat.asString('hh:mm:ss', loggingEvent.startTime, timezoneOffset);
  }

  function startColour(loggingEvent) {
    return colorizeStart(colours[loggingEvent.level.toString()]);
  }

  function endColour(loggingEvent) {
    return colorizeEnd(colours[loggingEvent.level.toString()]);
  }

  function percent() {
    return '%';
  }

  function pid(loggingEvent) {
    if (loggingEvent && loggingEvent.pid) {
      return loggingEvent.pid;
    } else {
      return process.pid;
    }
  }

  function clusterInfo(loggingEvent, specifier) {
    if (loggingEvent.cluster && specifier) {
      return specifier
        .replace('%m', loggingEvent.cluster.master)
        .replace('%w', loggingEvent.cluster.worker)
        .replace('%i', loggingEvent.cluster.workerId);
    } else if (loggingEvent.cluster) {
      return loggingEvent.cluster.worker+'@'+loggingEvent.cluster.master;
    } else {
      return pid();
    }
  }

  function userDefined(loggingEvent, specifier) {
    if (typeof(tokens[specifier]) !== 'undefined') {
      if (typeof(tokens[specifier]) === 'function') {
        return tokens[specifier](loggingEvent);
      } else {
        return tokens[specifier];
      }
    }
    return null;
  }

  var replacers = {
    'c': categoryName,
    'd': formatAsDate,
    'h': hostname,
    'm': formatMessage,
    'n': endOfLine,
    'p': logLevel,
    'r': startTime,
    '[': startColour,
    ']': endColour,
    'y': clusterInfo,
    'z': pid,
    '%': percent,
    'x': userDefined
  };

  function replaceToken(conversionCharacter, loggingEvent, specifier) {
    return replacers[conversionCharacter](loggingEvent, specifier);
  }

  function truncate(truncation, toTruncate) {
    var len;
    if (truncation) {
      len = parseInt(truncation.substr(1), 10);
      return toTruncate.substring(0, len);
    }

    return toTruncate;
  }

  function pad(padding, toPad) {
    var len;
    if (padding) {
      if (padding.charAt(0) == "-") {
        len = parseInt(padding.substr(1), 10);
        // Right pad with spaces
        while (toPad.length < len) {
          toPad += " ";
        }
      } else {
        len = parseInt(padding, 10);
        // Left pad with spaces
        while (toPad.length < len) {
          toPad = " " + toPad;
        }
      }
    }
    return toPad;
  }

  function truncateAndPad(toTruncAndPad, truncation, padding) {
    var replacement = toTruncAndPad;
    replacement = truncate(truncation, replacement);
    replacement = pad(padding, replacement);
    return replacement;
  }

  return function(loggingEvent) {
    var formattedString = "";
    var result;
    var searchString = pattern;

    while ((result = regex.exec(searchString))) {
      var matchedString = result[0];
      var padding = result[1];
      var truncation = result[2];
      var conversionCharacter = result[3];
      var specifier = result[5];
      var text = result[6];

      // Check if the pattern matched was just normal text
      if (text) {
        formattedString += "" + text;
      } else {
        // Create a raw replacement string based on the conversion
        // character and specifier
        var replacement = replaceToken(conversionCharacter, loggingEvent, specifier);
        formattedString += truncateAndPad(replacement, truncation, padding);
      }
      searchString = searchString.substr(result.index + result[0].length);
    }
    return formattedString;
  };

}

module.exports = {
  basicLayout: basicLayout,
  messagePassThroughLayout: messagePassThroughLayout,
  patternLayout: patternLayout,
  colouredLayout: colouredLayout,
  coloredLayout: colouredLayout,
  dummyLayout: dummyLayout,
  addLayout: function(name, serializerGenerator) {
    layoutMakers[name] = serializerGenerator;
  },
  layout: function(name, config) {
    return layoutMakers[name] && layoutMakers[name](config);
  }
};

}).call(this,require('_process'))
},{"./date_format":93,"_process":88,"os":80,"semver":98,"util":90}],95:[function(require,module,exports){
"use strict";

function Level(level, levelStr) {
  this.level = level;
  this.levelStr = levelStr;
}

/**
 * converts given String to corresponding Level
 * @param {String} sArg String value of Level OR Log4js.Level
 * @param {Log4js.Level} defaultLevel default Level, if no String representation
 * @return Level object
 * @type Log4js.Level
 */
function toLevel(sArg, defaultLevel) {
  if (!sArg) {
    return defaultLevel;
  }
  if (sArg instanceof Level) {
    module.exports[sArg.toString()] = sArg;
    return sArg;
  }
  if (typeof sArg === "string") {
    return module.exports[sArg.toUpperCase()] || defaultLevel;
  }
  return toLevel(sArg.toString());
}

Level.prototype.toString = function() {
  return this.levelStr;
};

Level.prototype.isLessThanOrEqualTo = function(otherLevel) {
  if (typeof otherLevel === "string") {
    otherLevel = toLevel(otherLevel);
  }
  return this.level <= otherLevel.level;
};

Level.prototype.isGreaterThanOrEqualTo = function(otherLevel) {
  if (typeof otherLevel === "string") {
    otherLevel = toLevel(otherLevel);
  }
  return this.level >= otherLevel.level;
};

Level.prototype.isEqualTo = function(otherLevel) {
  if (typeof otherLevel === "string") {
    otherLevel = toLevel(otherLevel);
  }
  return this.level === otherLevel.level;
};

module.exports = {
  ALL: new Level(Number.MIN_VALUE, "ALL"),
  TRACE: new Level(5000, "TRACE"),
  DEBUG: new Level(10000, "DEBUG"),
  INFO: new Level(20000, "INFO"),
  WARN: new Level(30000, "WARN"),
  ERROR: new Level(40000, "ERROR"),
  FATAL: new Level(50000, "FATAL"),
  MARK: new Level(9007199254740992, "MARK"), // 2^53
  OFF: new Level(Number.MAX_VALUE, "OFF"),
  toLevel: toLevel,
  Level: Level
};

},{}],96:[function(require,module,exports){
(function (process){
"use strict";
/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview log4js is a library to log in JavaScript in similar manner
 * than in log4j for Java. The API should be nearly the same.
 *
 * <h3>Example:</h3>
 * <pre>
 *  var logging = require('log4js');
 *  //add an appender that logs all messages to stdout.
 *  logging.addAppender(logging.consoleAppender());
 *  //add an appender that logs "some-category" to a file
 *  logging.addAppender(logging.fileAppender("file.log"), "some-category");
 *  //get a logger
 *  var log = logging.getLogger("some-category");
 *  log.setLevel(logging.levels.TRACE); //set the Level
 *
 *  ...
 *
 *  //call the log
 *  log.trace("trace me" );
 * </pre>
 *
 * NOTE: the authors below are the original browser-based log4js authors
 * don't try to contact them about bugs in this version :)
 * @version 1.0
 * @author Stephan Strittmatter - http://jroller.com/page/stritti
 * @author Seth Chisamore - http://www.chisamore.com
 * @since 2005-05-20
 * @static
 * Website: http://log4js.berlios.de
 */
var events = require('events')
, fs = require('fs')
, path = require('path')
, util = require('util')
, layouts = require('./layouts')
, levels = require('./levels')
, loggerModule = require('./logger')
, LoggingEvent = loggerModule.LoggingEvent
, Logger = loggerModule.Logger
, ALL_CATEGORIES = '[all]'
, appenders = {}
, loggers = {}
, appenderMakers = {}
, appenderShutdowns = {}
, defaultConfig =   {
  appenders: [
    { type: "console" }
  ],
  replaceConsole: false
};

require('./appenders/console');

function hasLogger(logger) {
  return loggers.hasOwnProperty(logger);
}

levels.forName = function(levelStr, levelVal) {
  var level;
  if (typeof levelStr === "string" && typeof levelVal === "number") {
    var levelUpper = levelStr.toUpperCase();
    level = new levels.Level(levelVal, levelUpper);
    loggerModule.addLevelMethods(level);
  }
  return level;
};

levels.getLevel = function(levelStr) {
  var level;
  if (typeof levelStr === "string") {
    var levelUpper = levelStr.toUpperCase();
    level = levels.toLevel(levelStr);
  }
  return level;
};

function getBufferedLogger(categoryName) {
    var base_logger = getLogger(categoryName);
    var logger = {};
    logger.temp = [];
    logger.target = base_logger;
    logger.flush = function () {
        for (var i = 0; i < logger.temp.length; i++) {
            var log = logger.temp[i];
            logger.target[log.level](log.message);
            delete logger.temp[i];
        }
    };
    logger.trace = function (message) { logger.temp.push({level: 'trace', message: message}); };
    logger.debug = function (message) { logger.temp.push({level: 'debug', message: message}); };
    logger.info = function (message) { logger.temp.push({level: 'info', message: message}); };
    logger.warn = function (message) { logger.temp.push({level: 'warn', message: message}); };
    logger.error = function (message) { logger.temp.push({level: 'error', message: message}); };
    logger.fatal = function (message) { logger.temp.push({level: 'fatal', message: message}); };

    return logger;
}

function normalizeCategory (category) {
  return  category + '.';
}

function doesLevelEntryContainsLogger (levelCategory, loggerCategory) {  
  var normalizedLevelCategory = normalizeCategory(levelCategory);
  var normalizedLoggerCategory = normalizeCategory(loggerCategory);
  return normalizedLoggerCategory.substring(0, normalizedLevelCategory.length) == normalizedLevelCategory; //jshint ignore:line
}

function doesAppenderContainsLogger (appenderCategory, loggerCategory) {
  var normalizedAppenderCategory = normalizeCategory(appenderCategory);
  var normalizedLoggerCategory = normalizeCategory(loggerCategory);
  return normalizedLoggerCategory.substring(0, normalizedAppenderCategory.length) == normalizedAppenderCategory; //jshint ignore:line
}


/**
 * Get a logger instance. Instance is cached on categoryName level.
 * @param  {String} categoryName name of category to log to.
 * @return {Logger} instance of logger for the category
 * @static
 */
function getLogger (loggerCategoryName) {

  // Use default logger if categoryName is not specified or invalid
  if (typeof loggerCategoryName !== "string") {
    loggerCategoryName = Logger.DEFAULT_CATEGORY;
  }

  if (!hasLogger(loggerCategoryName)) {

    var level;

    /* jshint -W073 */
    // If there's a "levels" entry in the configuration
    if (levels.config) {
      // Goes through the categories in the levels configuration entry,
      // starting with the "higher" ones.
      var keys = Object.keys(levels.config).sort();
      for (var idx = 0; idx < keys.length; idx++) {
        var levelCategory = keys[idx];
        if (doesLevelEntryContainsLogger(levelCategory, loggerCategoryName)) {
          // level for the logger
          level = levels.config[levelCategory];
        }
      }
    }
    /* jshint +W073 */
  
    // Create the logger for this name if it doesn't already exist
    loggers[loggerCategoryName] = new Logger(loggerCategoryName, level);

    /* jshint -W083 */
    var appenderList;
    for(var appenderCategory in appenders) {
      if (doesAppenderContainsLogger(appenderCategory, loggerCategoryName)) {
        appenderList = appenders[appenderCategory];
        appenderList.forEach(function(appender) {
          loggers[loggerCategoryName].addListener("log", appender);
        });
      }
    }
    /* jshint +W083 */

    if (appenders[ALL_CATEGORIES]) {
      appenderList = appenders[ALL_CATEGORIES];
      appenderList.forEach(function(appender) {
        loggers[loggerCategoryName].addListener("log", appender);
      });
    }
  }
  
  return loggers[loggerCategoryName];
}

/**
 * args are appender, then zero or more categories
 */
function addAppender () {
  var args = Array.prototype.slice.call(arguments);
  var appender = args.shift();
  if (args.length === 0 || args[0] === undefined) {
    args = [ ALL_CATEGORIES ];
  }
  //argument may already be an array
  if (Array.isArray(args[0])) {
    args = args[0];
  }
  
  args.forEach(function(appenderCategory) {
    addAppenderToCategory(appender, appenderCategory);
    
    if (appenderCategory === ALL_CATEGORIES) {
      addAppenderToAllLoggers(appender);
    } else {

      for(var loggerCategory in loggers) {
        if (doesAppenderContainsLogger(appenderCategory,loggerCategory)) {
          loggers[loggerCategory].addListener("log", appender);
        }
      }
      
    }
  });
}

function addAppenderToAllLoggers(appender) {
  for (var logger in loggers) {
    if (hasLogger(logger)) {
      loggers[logger].addListener("log", appender);
    }
  }
}

function addAppenderToCategory(appender, category) {
  if (!appenders[category]) {
    appenders[category] = [];
  }
  appenders[category].push(appender);
}

function clearAppenders () {
  appenders = {};
  for (var logger in loggers) {
    if (hasLogger(logger)) {
      loggers[logger].removeAllListeners("log");
    }
  }
}

function configureAppenders(appenderList, options) {
  clearAppenders();
  if (appenderList) {
    appenderList.forEach(function(appenderConfig) {
      loadAppender(appenderConfig.type);
      var appender;
      appenderConfig.makers = appenderMakers;
      try {
        appender = appenderMakers[appenderConfig.type](appenderConfig, options);
        addAppender(appender, appenderConfig.category);
      } catch(e) {
        throw new Error("log4js configuration problem for " + util.inspect(appenderConfig), e);
      }
    });
  }
}

function configureLevels(_levels) {
  levels.config = _levels; // Keep it so we can create loggers later using this cfg
  if (_levels) {
    var keys = Object.keys(levels.config).sort();
    for (var idx in keys) {
      var category = keys[idx];
      if(category === ALL_CATEGORIES) {
        setGlobalLogLevel(_levels[category]);
      }
      /* jshint -W073 */
      for(var loggerCategory in loggers) {
        if (doesLevelEntryContainsLogger(category, loggerCategory)) {
          loggers[loggerCategory].setLevel(_levels[category]);
        }
      }
      /* jshint +W073 */
    }
  }
}

function setGlobalLogLevel(level) {
  Logger.prototype.level = levels.toLevel(level, levels.TRACE);
}

/**
 * Get the default logger instance.
 * @return {Logger} instance of default logger
 * @static
 */
function getDefaultLogger () {
  return getLogger(Logger.DEFAULT_CATEGORY);
}

var configState = {};

function loadConfigurationFile(filename) {
  if (filename) {
    return JSON.parse(fs.readFileSync(filename, "utf8"));
  }
  return undefined;
}

function configureOnceOff(config, options) {
  if (config) {
    try {
      configureLevels(config.levels);
      configureAppenders(config.appenders, options);
      
      if (config.replaceConsole) {
        replaceConsole();
      } else {
        restoreConsole();
      }
    } catch (e) {
      throw new Error(
        "Problem reading log4js config " + util.inspect(config) + 
          ". Error was \"" + e.message + "\" (" + e.stack + ")"
      );
    }
  }
}

function reloadConfiguration(options) {
  var mtime = getMTime(configState.filename);
  if (!mtime) return;
  
  if (configState.lastMTime && (mtime.getTime() > configState.lastMTime.getTime())) {
    configureOnceOff(loadConfigurationFile(configState.filename), options);
  }
  configState.lastMTime = mtime;
}

function getMTime(filename) {
  var mtime;
  try {
    mtime = fs.statSync(configState.filename).mtime;
  } catch (e) {
    getLogger('log4js').warn('Failed to load configuration file ' + filename);
  }
  return mtime;
}

function initReloadConfiguration(filename, options) {
  if (configState.timerId) {
    clearInterval(configState.timerId);
    delete configState.timerId;
  }
  configState.filename = filename;
  configState.lastMTime = getMTime(filename);
  configState.timerId = setInterval(reloadConfiguration, options.reloadSecs*1000, options);
}

function configure(configurationFileOrObject, options) {
  var config = configurationFileOrObject;
  config = config || process.env.LOG4JS_CONFIG;
  options = options || {};
  
  if (config === undefined || config === null || typeof(config) === 'string') {
    if (options.reloadSecs) {
      initReloadConfiguration(config, options);
    }
    config = loadConfigurationFile(config) || defaultConfig;
  } else {
    if (options.reloadSecs) {
      getLogger('log4js').warn(
        'Ignoring configuration reload parameter for "object" configuration.'
      );
    }
  }
  configureOnceOff(config, options);
}

var originalConsoleFunctions = {
  log: console.log,
  debug: console.debug,
  info: console.info,
  warn: console.warn,
  error: console.error
};

function replaceConsole(logger) {
  function replaceWith(fn) {
    return function() {
      fn.apply(logger, arguments);
    };
  }
  logger = logger || getLogger("console");
  ['log','debug','info','warn','error'].forEach(function (item) {
    console[item] = replaceWith(item === 'log' ? logger.info : logger[item]);
  });
}

function restoreConsole() {
  ['log', 'debug', 'info', 'warn', 'error'].forEach(function (item) {
    console[item] = originalConsoleFunctions[item];
  });
}

/**
 * Load an appenderModule based on the provided appender filepath. Will first
 * check if the appender path is a subpath of the log4js "lib/appenders" directory.
 * If not, it will attempt to load the the appender as complete path.
 *
 * @param {string} appender The filepath for the appender.
 * @returns {Object|null} The required appender or null if appender could not be loaded.
 * @private
 */
function requireAppender(appender) {
  var appenderModule;
  try {
    appenderModule = require('./appenders/' + appender);
  } catch (e) {
    appenderModule = require(appender);
  }
  return appenderModule;
}

/**
 * Load an appender. Provided the appender path to be loaded. If appenderModule is defined,
 * it will be used in place of requiring the appender module.
 *
 * @param {string} appender The path to the appender module.
 * @param {Object|void} [appenderModule] The pre-required appender module. When provided,
 * instead of requiring the appender by its path, this object will be used.
 * @returns {void}
 * @private
 */
function loadAppender(appender, appenderModule) {
  appenderModule = appenderModule || requireAppender(appender);

  if (!appenderModule) {
    throw new Error("Invalid log4js appender: " + util.inspect(appender));
  }

  module.exports.appenders[appender] = appenderModule.appender.bind(appenderModule);
  if (appenderModule.shutdown) {
    appenderShutdowns[appender] = appenderModule.shutdown.bind(appenderModule);
  }
  appenderMakers[appender] = appenderModule.configure.bind(appenderModule);
}

/**
 * Shutdown all log appenders. This will first disable all writing to appenders
 * and then call the shutdown function each appender.
 *
 * @params {Function} cb - The callback to be invoked once all appenders have
 *  shutdown. If an error occurs, the callback will be given the error object
 *  as the first argument.
 * @returns {void}
 */
function shutdown(cb) {
  // First, disable all writing to appenders. This prevents appenders from
  // not being able to be drained because of run-away log writes.
  loggerModule.disableAllLogWrites();

  // Call each of the shutdown functions in parallel
  var completed = 0;
  var error;
  var shutdownFcts = [];
  var complete = function(err) {
    error = error || err;
    completed++;
    if (completed >= shutdownFcts.length) {
      cb(error);
    }
  };
  for (var category in appenderShutdowns) {
    if (appenderShutdowns.hasOwnProperty(category)) {
      shutdownFcts.push(appenderShutdowns[category]);
    }
  }
  if (!shutdownFcts.length) {
    return cb();
  }
  shutdownFcts.forEach(function(shutdownFct) { shutdownFct(complete); });
}

module.exports = {
  getBufferedLogger: getBufferedLogger,
  getLogger: getLogger,
  getDefaultLogger: getDefaultLogger,
  hasLogger: hasLogger,
  
  addAppender: addAppender,
  loadAppender: loadAppender,
  clearAppenders: clearAppenders,
  configure: configure,
  shutdown: shutdown,
  
  replaceConsole: replaceConsole,
  restoreConsole: restoreConsole,
  
  levels: levels,
  setGlobalLogLevel: setGlobalLogLevel,
  
  layouts: layouts,
  appenders: {},
  appenderMakers: appenderMakers,
  connectLogger: require('./connect-logger').connectLogger
};

//set ourselves up
configure();

}).call(this,require('_process'))
},{"./appenders/console":91,"./connect-logger":92,"./layouts":94,"./levels":95,"./logger":97,"_process":88,"events":85,"fs":79,"path":87,"util":90}],97:[function(require,module,exports){
"use strict";
var levels = require('./levels')
, util = require('util')
, events = require('events')
, DEFAULT_CATEGORY = '[default]';

var logWritesEnabled = true;

/**
 * Models a logging event.
 * @constructor
 * @param {String} categoryName name of category
 * @param {Log4js.Level} level level of message
 * @param {Array} data objects to log
 * @param {Log4js.Logger} logger the associated logger
 * @author Seth Chisamore
 */
function LoggingEvent (categoryName, level, data, logger) {
  this.startTime = new Date();
  this.categoryName = categoryName;
  this.data = data;
  this.level = level;
  this.logger = logger;
}

/**
 * Logger to log messages.
 * use {@see Log4js#getLogger(String)} to get an instance.
 * @constructor
 * @param name name of category to log to
 * @author Stephan Strittmatter
 */
function Logger (name, level) {
  this.category = name || DEFAULT_CATEGORY;

  if (level) {
    this.setLevel(level);
  }
}
util.inherits(Logger, events.EventEmitter);
Logger.DEFAULT_CATEGORY = DEFAULT_CATEGORY;
Logger.prototype.level = levels.TRACE;

Logger.prototype.setLevel = function(level) {
  this.level = levels.toLevel(level, this.level || levels.TRACE);
};

Logger.prototype.removeLevel = function() {
  delete this.level;
};

Logger.prototype.log = function() {
  var logLevel = levels.toLevel(arguments[0], levels.INFO);
  if (!this.isLevelEnabled(logLevel)) {
    return;
  }
  var numArgs = arguments.length - 1;
  var args = new Array(numArgs);
  for (var i = 0; i < numArgs; i++) {
    args[i] = arguments[i + 1];
  }
  this._log(logLevel, args);
};

Logger.prototype.isLevelEnabled = function(otherLevel) {
  return this.level.isLessThanOrEqualTo(otherLevel);
};

['Trace','Debug','Info','Warn','Error','Fatal', 'Mark'].forEach(
  function(levelString) {
    addLevelMethods(levelString);
  }
);

function addLevelMethods(level) {
  level = levels.toLevel(level);

  var levelStrLower = level.toString().toLowerCase();
  var levelMethod = levelStrLower.replace(/_([a-z])/g, function(g) { return g[1].toUpperCase(); } );
  var isLevelMethod = levelMethod[0].toUpperCase() + levelMethod.slice(1);

  Logger.prototype['is'+isLevelMethod+'Enabled'] = function() {
    return this.isLevelEnabled(level.toString());
  };

  Logger.prototype[levelMethod] = function () {
    if (logWritesEnabled && this.isLevelEnabled(level)) {
      var numArgs = arguments.length;
      var args = new Array(numArgs);
      for (var i = 0; i < numArgs; i++) {
        args[i] = arguments[i];
      }
      this._log(level, args);
    }
  };
}

Logger.prototype._log = function(level, data) {
  var loggingEvent = new LoggingEvent(this.category, level, data, this);
  this.emit('log', loggingEvent);
};

/**
 * Disable all log writes.
 * @returns {void}
 */
function disableAllLogWrites() {
  logWritesEnabled = false;
}

/**
 * Enable log writes.
 * @returns {void}
 */
function enableAllLogWrites() {
  logWritesEnabled = true;
}

exports.LoggingEvent = LoggingEvent;
exports.Logger = Logger;
exports.disableAllLogWrites = disableAllLogWrites;
exports.enableAllLogWrites = enableAllLogWrites;
exports.addLevelMethods = addLevelMethods;
},{"./levels":95,"events":85,"util":90}],98:[function(require,module,exports){
;(function(exports) {

// export the class if we are in a Node-like system.
if (typeof module === 'object' && module.exports === exports)
  exports = module.exports = SemVer;

// The debug function is excluded entirely from the minified version.

// Note: this is the semver.org version of the spec that it implements
// Not necessarily the package version of this code.
exports.SEMVER_SPEC_VERSION = '2.0.0';

var MAX_LENGTH = 256;
var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || 9007199254740991;

// The actual regexps go on exports.re
var re = exports.re = [];
var src = exports.src = [];
var R = 0;

// The following Regular Expressions can be used for tokenizing,
// validating, and parsing SemVer version strings.

// ## Numeric Identifier
// A single `0`, or a non-zero digit followed by zero or more digits.

var NUMERICIDENTIFIER = R++;
src[NUMERICIDENTIFIER] = '0|[1-9]\\d*';
var NUMERICIDENTIFIERLOOSE = R++;
src[NUMERICIDENTIFIERLOOSE] = '[0-9]+';


// ## Non-numeric Identifier
// Zero or more digits, followed by a letter or hyphen, and then zero or
// more letters, digits, or hyphens.

var NONNUMERICIDENTIFIER = R++;
src[NONNUMERICIDENTIFIER] = '\\d*[a-zA-Z-][a-zA-Z0-9-]*';


// ## Main Version
// Three dot-separated numeric identifiers.

var MAINVERSION = R++;
src[MAINVERSION] = '(' + src[NUMERICIDENTIFIER] + ')\\.' +
                   '(' + src[NUMERICIDENTIFIER] + ')\\.' +
                   '(' + src[NUMERICIDENTIFIER] + ')';

var MAINVERSIONLOOSE = R++;
src[MAINVERSIONLOOSE] = '(' + src[NUMERICIDENTIFIERLOOSE] + ')\\.' +
                        '(' + src[NUMERICIDENTIFIERLOOSE] + ')\\.' +
                        '(' + src[NUMERICIDENTIFIERLOOSE] + ')';

// ## Pre-release Version Identifier
// A numeric identifier, or a non-numeric identifier.

var PRERELEASEIDENTIFIER = R++;
src[PRERELEASEIDENTIFIER] = '(?:' + src[NUMERICIDENTIFIER] +
                            '|' + src[NONNUMERICIDENTIFIER] + ')';

var PRERELEASEIDENTIFIERLOOSE = R++;
src[PRERELEASEIDENTIFIERLOOSE] = '(?:' + src[NUMERICIDENTIFIERLOOSE] +
                                 '|' + src[NONNUMERICIDENTIFIER] + ')';


// ## Pre-release Version
// Hyphen, followed by one or more dot-separated pre-release version
// identifiers.

var PRERELEASE = R++;
src[PRERELEASE] = '(?:-(' + src[PRERELEASEIDENTIFIER] +
                  '(?:\\.' + src[PRERELEASEIDENTIFIER] + ')*))';

var PRERELEASELOOSE = R++;
src[PRERELEASELOOSE] = '(?:-?(' + src[PRERELEASEIDENTIFIERLOOSE] +
                       '(?:\\.' + src[PRERELEASEIDENTIFIERLOOSE] + ')*))';

// ## Build Metadata Identifier
// Any combination of digits, letters, or hyphens.

var BUILDIDENTIFIER = R++;
src[BUILDIDENTIFIER] = '[0-9A-Za-z-]+';

// ## Build Metadata
// Plus sign, followed by one or more period-separated build metadata
// identifiers.

var BUILD = R++;
src[BUILD] = '(?:\\+(' + src[BUILDIDENTIFIER] +
             '(?:\\.' + src[BUILDIDENTIFIER] + ')*))';


// ## Full Version String
// A main version, followed optionally by a pre-release version and
// build metadata.

// Note that the only major, minor, patch, and pre-release sections of
// the version string are capturing groups.  The build metadata is not a
// capturing group, because it should not ever be used in version
// comparison.

var FULL = R++;
var FULLPLAIN = 'v?' + src[MAINVERSION] +
                src[PRERELEASE] + '?' +
                src[BUILD] + '?';

src[FULL] = '^' + FULLPLAIN + '$';

// like full, but allows v1.2.3 and =1.2.3, which people do sometimes.
// also, 1.0.0alpha1 (prerelease without the hyphen) which is pretty
// common in the npm registry.
var LOOSEPLAIN = '[v=\\s]*' + src[MAINVERSIONLOOSE] +
                 src[PRERELEASELOOSE] + '?' +
                 src[BUILD] + '?';

var LOOSE = R++;
src[LOOSE] = '^' + LOOSEPLAIN + '$';

var GTLT = R++;
src[GTLT] = '((?:<|>)?=?)';

// Something like "2.*" or "1.2.x".
// Note that "x.x" is a valid xRange identifer, meaning "any version"
// Only the first item is strictly required.
var XRANGEIDENTIFIERLOOSE = R++;
src[XRANGEIDENTIFIERLOOSE] = src[NUMERICIDENTIFIERLOOSE] + '|x|X|\\*';
var XRANGEIDENTIFIER = R++;
src[XRANGEIDENTIFIER] = src[NUMERICIDENTIFIER] + '|x|X|\\*';

var XRANGEPLAIN = R++;
src[XRANGEPLAIN] = '[v=\\s]*(' + src[XRANGEIDENTIFIER] + ')' +
                   '(?:\\.(' + src[XRANGEIDENTIFIER] + ')' +
                   '(?:\\.(' + src[XRANGEIDENTIFIER] + ')' +
                   '(?:' + src[PRERELEASE] + ')?' +
                   src[BUILD] + '?' +
                   ')?)?';

var XRANGEPLAINLOOSE = R++;
src[XRANGEPLAINLOOSE] = '[v=\\s]*(' + src[XRANGEIDENTIFIERLOOSE] + ')' +
                        '(?:\\.(' + src[XRANGEIDENTIFIERLOOSE] + ')' +
                        '(?:\\.(' + src[XRANGEIDENTIFIERLOOSE] + ')' +
                        '(?:' + src[PRERELEASELOOSE] + ')?' +
                        src[BUILD] + '?' +
                        ')?)?';

var XRANGE = R++;
src[XRANGE] = '^' + src[GTLT] + '\\s*' + src[XRANGEPLAIN] + '$';
var XRANGELOOSE = R++;
src[XRANGELOOSE] = '^' + src[GTLT] + '\\s*' + src[XRANGEPLAINLOOSE] + '$';

// Tilde ranges.
// Meaning is "reasonably at or greater than"
var LONETILDE = R++;
src[LONETILDE] = '(?:~>?)';

var TILDETRIM = R++;
src[TILDETRIM] = '(\\s*)' + src[LONETILDE] + '\\s+';
re[TILDETRIM] = new RegExp(src[TILDETRIM], 'g');
var tildeTrimReplace = '$1~';

var TILDE = R++;
src[TILDE] = '^' + src[LONETILDE] + src[XRANGEPLAIN] + '$';
var TILDELOOSE = R++;
src[TILDELOOSE] = '^' + src[LONETILDE] + src[XRANGEPLAINLOOSE] + '$';

// Caret ranges.
// Meaning is "at least and backwards compatible with"
var LONECARET = R++;
src[LONECARET] = '(?:\\^)';

var CARETTRIM = R++;
src[CARETTRIM] = '(\\s*)' + src[LONECARET] + '\\s+';
re[CARETTRIM] = new RegExp(src[CARETTRIM], 'g');
var caretTrimReplace = '$1^';

var CARET = R++;
src[CARET] = '^' + src[LONECARET] + src[XRANGEPLAIN] + '$';
var CARETLOOSE = R++;
src[CARETLOOSE] = '^' + src[LONECARET] + src[XRANGEPLAINLOOSE] + '$';

// A simple gt/lt/eq thing, or just "" to indicate "any version"
var COMPARATORLOOSE = R++;
src[COMPARATORLOOSE] = '^' + src[GTLT] + '\\s*(' + LOOSEPLAIN + ')$|^$';
var COMPARATOR = R++;
src[COMPARATOR] = '^' + src[GTLT] + '\\s*(' + FULLPLAIN + ')$|^$';


// An expression to strip any whitespace between the gtlt and the thing
// it modifies, so that `> 1.2.3` ==> `>1.2.3`
var COMPARATORTRIM = R++;
src[COMPARATORTRIM] = '(\\s*)' + src[GTLT] +
                      '\\s*(' + LOOSEPLAIN + '|' + src[XRANGEPLAIN] + ')';

// this one has to use the /g flag
re[COMPARATORTRIM] = new RegExp(src[COMPARATORTRIM], 'g');
var comparatorTrimReplace = '$1$2$3';


// Something like `1.2.3 - 1.2.4`
// Note that these all use the loose form, because they'll be
// checked against either the strict or loose comparator form
// later.
var HYPHENRANGE = R++;
src[HYPHENRANGE] = '^\\s*(' + src[XRANGEPLAIN] + ')' +
                   '\\s+-\\s+' +
                   '(' + src[XRANGEPLAIN] + ')' +
                   '\\s*$';

var HYPHENRANGELOOSE = R++;
src[HYPHENRANGELOOSE] = '^\\s*(' + src[XRANGEPLAINLOOSE] + ')' +
                        '\\s+-\\s+' +
                        '(' + src[XRANGEPLAINLOOSE] + ')' +
                        '\\s*$';

// Star ranges basically just allow anything at all.
var STAR = R++;
src[STAR] = '(<|>)?=?\\s*\\*';

// Compile to actual regexp objects.
// All are flag-free, unless they were created above with a flag.
for (var i = 0; i < R; i++) {
  ;
  if (!re[i])
    re[i] = new RegExp(src[i]);
}

exports.parse = parse;
function parse(version, loose) {
  if (version instanceof SemVer)
    return version;

  if (typeof version !== 'string')
    return null;

  if (version.length > MAX_LENGTH)
    return null;

  var r = loose ? re[LOOSE] : re[FULL];
  if (!r.test(version))
    return null;

  try {
    return new SemVer(version, loose);
  } catch (er) {
    return null;
  }
}

exports.valid = valid;
function valid(version, loose) {
  var v = parse(version, loose);
  return v ? v.version : null;
}


exports.clean = clean;
function clean(version, loose) {
  var s = parse(version.trim().replace(/^[=v]+/, ''), loose);
  return s ? s.version : null;
}

exports.SemVer = SemVer;

function SemVer(version, loose) {
  if (version instanceof SemVer) {
    if (version.loose === loose)
      return version;
    else
      version = version.version;
  } else if (typeof version !== 'string') {
    throw new TypeError('Invalid Version: ' + version);
  }

  if (version.length > MAX_LENGTH)
    throw new TypeError('version is longer than ' + MAX_LENGTH + ' characters')

  if (!(this instanceof SemVer))
    return new SemVer(version, loose);

  ;
  this.loose = loose;
  var m = version.trim().match(loose ? re[LOOSE] : re[FULL]);

  if (!m)
    throw new TypeError('Invalid Version: ' + version);

  this.raw = version;

  // these are actually numbers
  this.major = +m[1];
  this.minor = +m[2];
  this.patch = +m[3];

  if (this.major > MAX_SAFE_INTEGER || this.major < 0)
    throw new TypeError('Invalid major version')

  if (this.minor > MAX_SAFE_INTEGER || this.minor < 0)
    throw new TypeError('Invalid minor version')

  if (this.patch > MAX_SAFE_INTEGER || this.patch < 0)
    throw new TypeError('Invalid patch version')

  // numberify any prerelease numeric ids
  if (!m[4])
    this.prerelease = [];
  else
    this.prerelease = m[4].split('.').map(function(id) {
      if (/^[0-9]+$/.test(id)) {
        var num = +id
        if (num >= 0 && num < MAX_SAFE_INTEGER)
          return num
      }
      return id;
    });

  this.build = m[5] ? m[5].split('.') : [];
  this.format();
}

SemVer.prototype.format = function() {
  this.version = this.major + '.' + this.minor + '.' + this.patch;
  if (this.prerelease.length)
    this.version += '-' + this.prerelease.join('.');
  return this.version;
};

SemVer.prototype.inspect = function() {
  return '<SemVer "' + this + '">';
};

SemVer.prototype.toString = function() {
  return this.version;
};

SemVer.prototype.compare = function(other) {
  ;
  if (!(other instanceof SemVer))
    other = new SemVer(other, this.loose);

  return this.compareMain(other) || this.comparePre(other);
};

SemVer.prototype.compareMain = function(other) {
  if (!(other instanceof SemVer))
    other = new SemVer(other, this.loose);

  return compareIdentifiers(this.major, other.major) ||
         compareIdentifiers(this.minor, other.minor) ||
         compareIdentifiers(this.patch, other.patch);
};

SemVer.prototype.comparePre = function(other) {
  if (!(other instanceof SemVer))
    other = new SemVer(other, this.loose);

  // NOT having a prerelease is > having one
  if (this.prerelease.length && !other.prerelease.length)
    return -1;
  else if (!this.prerelease.length && other.prerelease.length)
    return 1;
  else if (!this.prerelease.length && !other.prerelease.length)
    return 0;

  var i = 0;
  do {
    var a = this.prerelease[i];
    var b = other.prerelease[i];
    ;
    if (a === undefined && b === undefined)
      return 0;
    else if (b === undefined)
      return 1;
    else if (a === undefined)
      return -1;
    else if (a === b)
      continue;
    else
      return compareIdentifiers(a, b);
  } while (++i);
};

// preminor will bump the version up to the next minor release, and immediately
// down to pre-release. premajor and prepatch work the same way.
SemVer.prototype.inc = function(release, identifier) {
  switch (release) {
    case 'premajor':
      this.prerelease.length = 0;
      this.patch = 0;
      this.minor = 0;
      this.major++;
      this.inc('pre', identifier);
      break;
    case 'preminor':
      this.prerelease.length = 0;
      this.patch = 0;
      this.minor++;
      this.inc('pre', identifier);
      break;
    case 'prepatch':
      // If this is already a prerelease, it will bump to the next version
      // drop any prereleases that might already exist, since they are not
      // relevant at this point.
      this.prerelease.length = 0;
      this.inc('patch', identifier);
      this.inc('pre', identifier);
      break;
    // If the input is a non-prerelease version, this acts the same as
    // prepatch.
    case 'prerelease':
      if (this.prerelease.length === 0)
        this.inc('patch', identifier);
      this.inc('pre', identifier);
      break;

    case 'major':
      // If this is a pre-major version, bump up to the same major version.
      // Otherwise increment major.
      // 1.0.0-5 bumps to 1.0.0
      // 1.1.0 bumps to 2.0.0
      if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0)
        this.major++;
      this.minor = 0;
      this.patch = 0;
      this.prerelease = [];
      break;
    case 'minor':
      // If this is a pre-minor version, bump up to the same minor version.
      // Otherwise increment minor.
      // 1.2.0-5 bumps to 1.2.0
      // 1.2.1 bumps to 1.3.0
      if (this.patch !== 0 || this.prerelease.length === 0)
        this.minor++;
      this.patch = 0;
      this.prerelease = [];
      break;
    case 'patch':
      // If this is not a pre-release version, it will increment the patch.
      // If it is a pre-release it will bump up to the same patch version.
      // 1.2.0-5 patches to 1.2.0
      // 1.2.0 patches to 1.2.1
      if (this.prerelease.length === 0)
        this.patch++;
      this.prerelease = [];
      break;
    // This probably shouldn't be used publicly.
    // 1.0.0 "pre" would become 1.0.0-0 which is the wrong direction.
    case 'pre':
      if (this.prerelease.length === 0)
        this.prerelease = [0];
      else {
        var i = this.prerelease.length;
        while (--i >= 0) {
          if (typeof this.prerelease[i] === 'number') {
            this.prerelease[i]++;
            i = -2;
          }
        }
        if (i === -1) // didn't increment anything
          this.prerelease.push(0);
      }
      if (identifier) {
        // 1.2.0-beta.1 bumps to 1.2.0-beta.2,
        // 1.2.0-beta.fooblz or 1.2.0-beta bumps to 1.2.0-beta.0
        if (this.prerelease[0] === identifier) {
          if (isNaN(this.prerelease[1]))
            this.prerelease = [identifier, 0];
        } else
          this.prerelease = [identifier, 0];
      }
      break;

    default:
      throw new Error('invalid increment argument: ' + release);
  }
  this.format();
  return this;
};

exports.inc = inc;
function inc(version, release, loose, identifier) {
  if (typeof(loose) === 'string') {
    identifier = loose;
    loose = undefined;
  }

  try {
    return new SemVer(version, loose).inc(release, identifier).version;
  } catch (er) {
    return null;
  }
}

exports.diff = diff;
function diff(version1, version2) {
  if (eq(version1, version2)) {
    return null;
  } else {
    var v1 = parse(version1);
    var v2 = parse(version2);
    if (v1.prerelease.length || v2.prerelease.length) {
      for (var key in v1) {
        if (key === 'major' || key === 'minor' || key === 'patch') {
          if (v1[key] !== v2[key]) {
            return 'pre'+key;
          }
        }
      }
      return 'prerelease';
    }
    for (var key in v1) {
      if (key === 'major' || key === 'minor' || key === 'patch') {
        if (v1[key] !== v2[key]) {
          return key;
        }
      }
    }
  }
}

exports.compareIdentifiers = compareIdentifiers;

var numeric = /^[0-9]+$/;
function compareIdentifiers(a, b) {
  var anum = numeric.test(a);
  var bnum = numeric.test(b);

  if (anum && bnum) {
    a = +a;
    b = +b;
  }

  return (anum && !bnum) ? -1 :
         (bnum && !anum) ? 1 :
         a < b ? -1 :
         a > b ? 1 :
         0;
}

exports.rcompareIdentifiers = rcompareIdentifiers;
function rcompareIdentifiers(a, b) {
  return compareIdentifiers(b, a);
}

exports.major = major;
function major(a, loose) {
  return new SemVer(a, loose).major;
}

exports.minor = minor;
function minor(a, loose) {
  return new SemVer(a, loose).minor;
}

exports.patch = patch;
function patch(a, loose) {
  return new SemVer(a, loose).patch;
}

exports.compare = compare;
function compare(a, b, loose) {
  return new SemVer(a, loose).compare(b);
}

exports.compareLoose = compareLoose;
function compareLoose(a, b) {
  return compare(a, b, true);
}

exports.rcompare = rcompare;
function rcompare(a, b, loose) {
  return compare(b, a, loose);
}

exports.sort = sort;
function sort(list, loose) {
  return list.sort(function(a, b) {
    return exports.compare(a, b, loose);
  });
}

exports.rsort = rsort;
function rsort(list, loose) {
  return list.sort(function(a, b) {
    return exports.rcompare(a, b, loose);
  });
}

exports.gt = gt;
function gt(a, b, loose) {
  return compare(a, b, loose) > 0;
}

exports.lt = lt;
function lt(a, b, loose) {
  return compare(a, b, loose) < 0;
}

exports.eq = eq;
function eq(a, b, loose) {
  return compare(a, b, loose) === 0;
}

exports.neq = neq;
function neq(a, b, loose) {
  return compare(a, b, loose) !== 0;
}

exports.gte = gte;
function gte(a, b, loose) {
  return compare(a, b, loose) >= 0;
}

exports.lte = lte;
function lte(a, b, loose) {
  return compare(a, b, loose) <= 0;
}

exports.cmp = cmp;
function cmp(a, op, b, loose) {
  var ret;
  switch (op) {
    case '===':
      if (typeof a === 'object') a = a.version;
      if (typeof b === 'object') b = b.version;
      ret = a === b;
      break;
    case '!==':
      if (typeof a === 'object') a = a.version;
      if (typeof b === 'object') b = b.version;
      ret = a !== b;
      break;
    case '': case '=': case '==': ret = eq(a, b, loose); break;
    case '!=': ret = neq(a, b, loose); break;
    case '>': ret = gt(a, b, loose); break;
    case '>=': ret = gte(a, b, loose); break;
    case '<': ret = lt(a, b, loose); break;
    case '<=': ret = lte(a, b, loose); break;
    default: throw new TypeError('Invalid operator: ' + op);
  }
  return ret;
}

exports.Comparator = Comparator;
function Comparator(comp, loose) {
  if (comp instanceof Comparator) {
    if (comp.loose === loose)
      return comp;
    else
      comp = comp.value;
  }

  if (!(this instanceof Comparator))
    return new Comparator(comp, loose);

  ;
  this.loose = loose;
  this.parse(comp);

  if (this.semver === ANY)
    this.value = '';
  else
    this.value = this.operator + this.semver.version;

  ;
}

var ANY = {};
Comparator.prototype.parse = function(comp) {
  var r = this.loose ? re[COMPARATORLOOSE] : re[COMPARATOR];
  var m = comp.match(r);

  if (!m)
    throw new TypeError('Invalid comparator: ' + comp);

  this.operator = m[1];
  if (this.operator === '=')
    this.operator = '';

  // if it literally is just '>' or '' then allow anything.
  if (!m[2])
    this.semver = ANY;
  else
    this.semver = new SemVer(m[2], this.loose);
};

Comparator.prototype.inspect = function() {
  return '<SemVer Comparator "' + this + '">';
};

Comparator.prototype.toString = function() {
  return this.value;
};

Comparator.prototype.test = function(version) {
  ;

  if (this.semver === ANY)
    return true;

  if (typeof version === 'string')
    version = new SemVer(version, this.loose);

  return cmp(version, this.operator, this.semver, this.loose);
};


exports.Range = Range;
function Range(range, loose) {
  if ((range instanceof Range) && range.loose === loose)
    return range;

  if (!(this instanceof Range))
    return new Range(range, loose);

  this.loose = loose;

  // First, split based on boolean or ||
  this.raw = range;
  this.set = range.split(/\s*\|\|\s*/).map(function(range) {
    return this.parseRange(range.trim());
  }, this).filter(function(c) {
    // throw out any that are not relevant for whatever reason
    return c.length;
  });

  if (!this.set.length) {
    throw new TypeError('Invalid SemVer Range: ' + range);
  }

  this.format();
}

Range.prototype.inspect = function() {
  return '<SemVer Range "' + this.range + '">';
};

Range.prototype.format = function() {
  this.range = this.set.map(function(comps) {
    return comps.join(' ').trim();
  }).join('||').trim();
  return this.range;
};

Range.prototype.toString = function() {
  return this.range;
};

Range.prototype.parseRange = function(range) {
  var loose = this.loose;
  range = range.trim();
  ;
  // `1.2.3 - 1.2.4` => `>=1.2.3 <=1.2.4`
  var hr = loose ? re[HYPHENRANGELOOSE] : re[HYPHENRANGE];
  range = range.replace(hr, hyphenReplace);
  ;
  // `> 1.2.3 < 1.2.5` => `>1.2.3 <1.2.5`
  range = range.replace(re[COMPARATORTRIM], comparatorTrimReplace);
  ;

  // `~ 1.2.3` => `~1.2.3`
  range = range.replace(re[TILDETRIM], tildeTrimReplace);

  // `^ 1.2.3` => `^1.2.3`
  range = range.replace(re[CARETTRIM], caretTrimReplace);

  // normalize spaces
  range = range.split(/\s+/).join(' ');

  // At this point, the range is completely trimmed and
  // ready to be split into comparators.

  var compRe = loose ? re[COMPARATORLOOSE] : re[COMPARATOR];
  var set = range.split(' ').map(function(comp) {
    return parseComparator(comp, loose);
  }).join(' ').split(/\s+/);
  if (this.loose) {
    // in loose mode, throw out any that are not valid comparators
    set = set.filter(function(comp) {
      return !!comp.match(compRe);
    });
  }
  set = set.map(function(comp) {
    return new Comparator(comp, loose);
  });

  return set;
};

// Mostly just for testing and legacy API reasons
exports.toComparators = toComparators;
function toComparators(range, loose) {
  return new Range(range, loose).set.map(function(comp) {
    return comp.map(function(c) {
      return c.value;
    }).join(' ').trim().split(' ');
  });
}

// comprised of xranges, tildes, stars, and gtlt's at this point.
// already replaced the hyphen ranges
// turn into a set of JUST comparators.
function parseComparator(comp, loose) {
  ;
  comp = replaceCarets(comp, loose);
  ;
  comp = replaceTildes(comp, loose);
  ;
  comp = replaceXRanges(comp, loose);
  ;
  comp = replaceStars(comp, loose);
  ;
  return comp;
}

function isX(id) {
  return !id || id.toLowerCase() === 'x' || id === '*';
}

// ~, ~> --> * (any, kinda silly)
// ~2, ~2.x, ~2.x.x, ~>2, ~>2.x ~>2.x.x --> >=2.0.0 <3.0.0
// ~2.0, ~2.0.x, ~>2.0, ~>2.0.x --> >=2.0.0 <2.1.0
// ~1.2, ~1.2.x, ~>1.2, ~>1.2.x --> >=1.2.0 <1.3.0
// ~1.2.3, ~>1.2.3 --> >=1.2.3 <1.3.0
// ~1.2.0, ~>1.2.0 --> >=1.2.0 <1.3.0
function replaceTildes(comp, loose) {
  return comp.trim().split(/\s+/).map(function(comp) {
    return replaceTilde(comp, loose);
  }).join(' ');
}

function replaceTilde(comp, loose) {
  var r = loose ? re[TILDELOOSE] : re[TILDE];
  return comp.replace(r, function(_, M, m, p, pr) {
    ;
    var ret;

    if (isX(M))
      ret = '';
    else if (isX(m))
      ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0';
    else if (isX(p))
      // ~1.2 == >=1.2.0- <1.3.0-
      ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0';
    else if (pr) {
      ;
      if (pr.charAt(0) !== '-')
        pr = '-' + pr;
      ret = '>=' + M + '.' + m + '.' + p + pr +
            ' <' + M + '.' + (+m + 1) + '.0';
    } else
      // ~1.2.3 == >=1.2.3 <1.3.0
      ret = '>=' + M + '.' + m + '.' + p +
            ' <' + M + '.' + (+m + 1) + '.0';

    ;
    return ret;
  });
}

// ^ --> * (any, kinda silly)
// ^2, ^2.x, ^2.x.x --> >=2.0.0 <3.0.0
// ^2.0, ^2.0.x --> >=2.0.0 <3.0.0
// ^1.2, ^1.2.x --> >=1.2.0 <2.0.0
// ^1.2.3 --> >=1.2.3 <2.0.0
// ^1.2.0 --> >=1.2.0 <2.0.0
function replaceCarets(comp, loose) {
  return comp.trim().split(/\s+/).map(function(comp) {
    return replaceCaret(comp, loose);
  }).join(' ');
}

function replaceCaret(comp, loose) {
  ;
  var r = loose ? re[CARETLOOSE] : re[CARET];
  return comp.replace(r, function(_, M, m, p, pr) {
    ;
    var ret;

    if (isX(M))
      ret = '';
    else if (isX(m))
      ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0';
    else if (isX(p)) {
      if (M === '0')
        ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0';
      else
        ret = '>=' + M + '.' + m + '.0 <' + (+M + 1) + '.0.0';
    } else if (pr) {
      ;
      if (pr.charAt(0) !== '-')
        pr = '-' + pr;
      if (M === '0') {
        if (m === '0')
          ret = '>=' + M + '.' + m + '.' + p + pr +
                ' <' + M + '.' + m + '.' + (+p + 1);
        else
          ret = '>=' + M + '.' + m + '.' + p + pr +
                ' <' + M + '.' + (+m + 1) + '.0';
      } else
        ret = '>=' + M + '.' + m + '.' + p + pr +
              ' <' + (+M + 1) + '.0.0';
    } else {
      ;
      if (M === '0') {
        if (m === '0')
          ret = '>=' + M + '.' + m + '.' + p +
                ' <' + M + '.' + m + '.' + (+p + 1);
        else
          ret = '>=' + M + '.' + m + '.' + p +
                ' <' + M + '.' + (+m + 1) + '.0';
      } else
        ret = '>=' + M + '.' + m + '.' + p +
              ' <' + (+M + 1) + '.0.0';
    }

    ;
    return ret;
  });
}

function replaceXRanges(comp, loose) {
  ;
  return comp.split(/\s+/).map(function(comp) {
    return replaceXRange(comp, loose);
  }).join(' ');
}

function replaceXRange(comp, loose) {
  comp = comp.trim();
  var r = loose ? re[XRANGELOOSE] : re[XRANGE];
  return comp.replace(r, function(ret, gtlt, M, m, p, pr) {
    ;
    var xM = isX(M);
    var xm = xM || isX(m);
    var xp = xm || isX(p);
    var anyX = xp;

    if (gtlt === '=' && anyX)
      gtlt = '';

    if (xM) {
      if (gtlt === '>' || gtlt === '<') {
        // nothing is allowed
        ret = '<0.0.0';
      } else {
        // nothing is forbidden
        ret = '*';
      }
    } else if (gtlt && anyX) {
      // replace X with 0
      if (xm)
        m = 0;
      if (xp)
        p = 0;

      if (gtlt === '>') {
        // >1 => >=2.0.0
        // >1.2 => >=1.3.0
        // >1.2.3 => >= 1.2.4
        gtlt = '>=';
        if (xm) {
          M = +M + 1;
          m = 0;
          p = 0;
        } else if (xp) {
          m = +m + 1;
          p = 0;
        }
      } else if (gtlt === '<=') {
        // <=0.7.x is actually <0.8.0, since any 0.7.x should
        // pass.  Similarly, <=7.x is actually <8.0.0, etc.
        gtlt = '<'
        if (xm)
          M = +M + 1
        else
          m = +m + 1
      }

      ret = gtlt + M + '.' + m + '.' + p;
    } else if (xm) {
      ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0';
    } else if (xp) {
      ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0';
    }

    ;

    return ret;
  });
}

// Because * is AND-ed with everything else in the comparator,
// and '' means "any version", just remove the *s entirely.
function replaceStars(comp, loose) {
  ;
  // Looseness is ignored here.  star is always as loose as it gets!
  return comp.trim().replace(re[STAR], '');
}

// This function is passed to string.replace(re[HYPHENRANGE])
// M, m, patch, prerelease, build
// 1.2 - 3.4.5 => >=1.2.0 <=3.4.5
// 1.2.3 - 3.4 => >=1.2.0 <3.5.0 Any 3.4.x will do
// 1.2 - 3.4 => >=1.2.0 <3.5.0
function hyphenReplace($0,
                       from, fM, fm, fp, fpr, fb,
                       to, tM, tm, tp, tpr, tb) {

  if (isX(fM))
    from = '';
  else if (isX(fm))
    from = '>=' + fM + '.0.0';
  else if (isX(fp))
    from = '>=' + fM + '.' + fm + '.0';
  else
    from = '>=' + from;

  if (isX(tM))
    to = '';
  else if (isX(tm))
    to = '<' + (+tM + 1) + '.0.0';
  else if (isX(tp))
    to = '<' + tM + '.' + (+tm + 1) + '.0';
  else if (tpr)
    to = '<=' + tM + '.' + tm + '.' + tp + '-' + tpr;
  else
    to = '<=' + to;

  return (from + ' ' + to).trim();
}


// if ANY of the sets match ALL of its comparators, then pass
Range.prototype.test = function(version) {
  if (!version)
    return false;

  if (typeof version === 'string')
    version = new SemVer(version, this.loose);

  for (var i = 0; i < this.set.length; i++) {
    if (testSet(this.set[i], version))
      return true;
  }
  return false;
};

function testSet(set, version) {
  for (var i = 0; i < set.length; i++) {
    if (!set[i].test(version))
      return false;
  }

  if (version.prerelease.length) {
    // Find the set of versions that are allowed to have prereleases
    // For example, ^1.2.3-pr.1 desugars to >=1.2.3-pr.1 <2.0.0
    // That should allow `1.2.3-pr.2` to pass.
    // However, `1.2.4-alpha.notready` should NOT be allowed,
    // even though it's within the range set by the comparators.
    for (var i = 0; i < set.length; i++) {
      ;
      if (set[i].semver === ANY)
        continue;

      if (set[i].semver.prerelease.length > 0) {
        var allowed = set[i].semver;
        if (allowed.major === version.major &&
            allowed.minor === version.minor &&
            allowed.patch === version.patch)
          return true;
      }
    }

    // Version has a -pre, but it's not one of the ones we like.
    return false;
  }

  return true;
}

exports.satisfies = satisfies;
function satisfies(version, range, loose) {
  try {
    range = new Range(range, loose);
  } catch (er) {
    return false;
  }
  return range.test(version);
}

exports.maxSatisfying = maxSatisfying;
function maxSatisfying(versions, range, loose) {
  return versions.filter(function(version) {
    return satisfies(version, range, loose);
  }).sort(function(a, b) {
    return rcompare(a, b, loose);
  })[0] || null;
}

exports.validRange = validRange;
function validRange(range, loose) {
  try {
    // Return '*' instead of '' so that truthiness works.
    // This will throw if it's invalid anyway
    return new Range(range, loose).range || '*';
  } catch (er) {
    return null;
  }
}

// Determine if version is less than all the versions possible in the range
exports.ltr = ltr;
function ltr(version, range, loose) {
  return outside(version, range, '<', loose);
}

// Determine if version is greater than all the versions possible in the range.
exports.gtr = gtr;
function gtr(version, range, loose) {
  return outside(version, range, '>', loose);
}

exports.outside = outside;
function outside(version, range, hilo, loose) {
  version = new SemVer(version, loose);
  range = new Range(range, loose);

  var gtfn, ltefn, ltfn, comp, ecomp;
  switch (hilo) {
    case '>':
      gtfn = gt;
      ltefn = lte;
      ltfn = lt;
      comp = '>';
      ecomp = '>=';
      break;
    case '<':
      gtfn = lt;
      ltefn = gte;
      ltfn = gt;
      comp = '<';
      ecomp = '<=';
      break;
    default:
      throw new TypeError('Must provide a hilo val of "<" or ">"');
  }

  // If it satisifes the range it is not outside
  if (satisfies(version, range, loose)) {
    return false;
  }

  // From now on, variable terms are as if we're in "gtr" mode.
  // but note that everything is flipped for the "ltr" function.

  for (var i = 0; i < range.set.length; ++i) {
    var comparators = range.set[i];

    var high = null;
    var low = null;

    comparators.forEach(function(comparator) {
      if (comparator.semver === ANY) {
        comparator = new Comparator('>=0.0.0')
      }
      high = high || comparator;
      low = low || comparator;
      if (gtfn(comparator.semver, high.semver, loose)) {
        high = comparator;
      } else if (ltfn(comparator.semver, low.semver, loose)) {
        low = comparator;
      }
    });

    // If the edge version comparator has a operator then our version
    // isn't outside it
    if (high.operator === comp || high.operator === ecomp) {
      return false;
    }

    // If the lowest version comparator has an operator and our version
    // is less than it then it isn't higher than the range
    if ((!low.operator || low.operator === comp) &&
        ltefn(version, low.semver)) {
      return false;
    } else if (low.operator === ecomp && ltfn(version, low.semver)) {
      return false;
    }
  }
  return true;
}

// Use the define() function if we're in AMD land
if (typeof define === 'function' && define.amd)
  define(exports);

})(
  typeof exports === 'object' ? exports :
  typeof define === 'function' && define.amd ? {} :
  semver = {}
);

},{}],99:[function(require,module,exports){
//     Underscore.js 1.8.3
//     http://underscorejs.org
//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.

(function() {

  // Baseline setup
  // --------------

  // Establish the root object, `window` in the browser, or `exports` on the server.
  var root = this;

  // Save the previous value of the `_` variable.
  var previousUnderscore = root._;

  // Save bytes in the minified (but not gzipped) version:
  var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;

  // Create quick reference variables for speed access to core prototypes.
  var
    push             = ArrayProto.push,
    slice            = ArrayProto.slice,
    toString         = ObjProto.toString,
    hasOwnProperty   = ObjProto.hasOwnProperty;

  // All **ECMAScript 5** native function implementations that we hope to use
  // are declared here.
  var
    nativeIsArray      = Array.isArray,
    nativeKeys         = Object.keys,
    nativeBind         = FuncProto.bind,
    nativeCreate       = Object.create;

  // Naked function reference for surrogate-prototype-swapping.
  var Ctor = function(){};

  // Create a safe reference to the Underscore object for use below.
  var _ = function(obj) {
    if (obj instanceof _) return obj;
    if (!(this instanceof _)) return new _(obj);
    this._wrapped = obj;
  };

  // Export the Underscore object for **Node.js**, with
  // backwards-compatibility for the old `require()` API. If we're in
  // the browser, add `_` as a global object.
  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = _;
    }
    exports._ = _;
  } else {
    root._ = _;
  }

  // Current version.
  _.VERSION = '1.8.3';

  // Internal function that returns an efficient (for current engines) version
  // of the passed-in callback, to be repeatedly applied in other Underscore
  // functions.
  var optimizeCb = function(func, context, argCount) {
    if (context === void 0) return func;
    switch (argCount == null ? 3 : argCount) {
      case 1: return function(value) {
        return func.call(context, value);
      };
      case 2: return function(value, other) {
        return func.call(context, value, other);
      };
      case 3: return function(value, index, collection) {
        return func.call(context, value, index, collection);
      };
      case 4: return function(accumulator, value, index, collection) {
        return func.call(context, accumulator, value, index, collection);
      };
    }
    return function() {
      return func.apply(context, arguments);
    };
  };

  // A mostly-internal function to generate callbacks that can be applied
  // to each element in a collection, returning the desired result — either
  // identity, an arbitrary callback, a property matcher, or a property accessor.
  var cb = function(value, context, argCount) {
    if (value == null) return _.identity;
    if (_.isFunction(value)) return optimizeCb(value, context, argCount);
    if (_.isObject(value)) return _.matcher(value);
    return _.property(value);
  };
  _.iteratee = function(value, context) {
    return cb(value, context, Infinity);
  };

  // An internal function for creating assigner functions.
  var createAssigner = function(keysFunc, undefinedOnly) {
    return function(obj) {
      var length = arguments.length;
      if (length < 2 || obj == null) return obj;
      for (var index = 1; index < length; index++) {
        var source = arguments[index],
            keys = keysFunc(source),
            l = keys.length;
        for (var i = 0; i < l; i++) {
          var key = keys[i];
          if (!undefinedOnly || obj[key] === void 0) obj[key] = source[key];
        }
      }
      return obj;
    };
  };

  // An internal function for creating a new object that inherits from another.
  var baseCreate = function(prototype) {
    if (!_.isObject(prototype)) return {};
    if (nativeCreate) return nativeCreate(prototype);
    Ctor.prototype = prototype;
    var result = new Ctor;
    Ctor.prototype = null;
    return result;
  };

  var property = function(key) {
    return function(obj) {
      return obj == null ? void 0 : obj[key];
    };
  };

  // Helper for collection methods to determine whether a collection
  // should be iterated as an array or as an object
  // Related: http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
  // Avoids a very nasty iOS 8 JIT bug on ARM-64. #2094
  var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
  var getLength = property('length');
  var isArrayLike = function(collection) {
    var length = getLength(collection);
    return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
  };

  // Collection Functions
  // --------------------

  // The cornerstone, an `each` implementation, aka `forEach`.
  // Handles raw objects in addition to array-likes. Treats all
  // sparse array-likes as if they were dense.
  _.each = _.forEach = function(obj, iteratee, context) {
    iteratee = optimizeCb(iteratee, context);
    var i, length;
    if (isArrayLike(obj)) {
      for (i = 0, length = obj.length; i < length; i++) {
        iteratee(obj[i], i, obj);
      }
    } else {
      var keys = _.keys(obj);
      for (i = 0, length = keys.length; i < length; i++) {
        iteratee(obj[keys[i]], keys[i], obj);
      }
    }
    return obj;
  };

  // Return the results of applying the iteratee to each element.
  _.map = _.collect = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length,
        results = Array(length);
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      results[index] = iteratee(obj[currentKey], currentKey, obj);
    }
    return results;
  };

  // Create a reducing function iterating left or right.
  function createReduce(dir) {
    // Optimized iterator function as using arguments.length
    // in the main function will deoptimize the, see #1991.
    function iterator(obj, iteratee, memo, keys, index, length) {
      for (; index >= 0 && index < length; index += dir) {
        var currentKey = keys ? keys[index] : index;
        memo = iteratee(memo, obj[currentKey], currentKey, obj);
      }
      return memo;
    }

    return function(obj, iteratee, memo, context) {
      iteratee = optimizeCb(iteratee, context, 4);
      var keys = !isArrayLike(obj) && _.keys(obj),
          length = (keys || obj).length,
          index = dir > 0 ? 0 : length - 1;
      // Determine the initial value if none is provided.
      if (arguments.length < 3) {
        memo = obj[keys ? keys[index] : index];
        index += dir;
      }
      return iterator(obj, iteratee, memo, keys, index, length);
    };
  }

  // **Reduce** builds up a single result from a list of values, aka `inject`,
  // or `foldl`.
  _.reduce = _.foldl = _.inject = createReduce(1);

  // The right-associative version of reduce, also known as `foldr`.
  _.reduceRight = _.foldr = createReduce(-1);

  // Return the first value which passes a truth test. Aliased as `detect`.
  _.find = _.detect = function(obj, predicate, context) {
    var key;
    if (isArrayLike(obj)) {
      key = _.findIndex(obj, predicate, context);
    } else {
      key = _.findKey(obj, predicate, context);
    }
    if (key !== void 0 && key !== -1) return obj[key];
  };

  // Return all the elements that pass a truth test.
  // Aliased as `select`.
  _.filter = _.select = function(obj, predicate, context) {
    var results = [];
    predicate = cb(predicate, context);
    _.each(obj, function(value, index, list) {
      if (predicate(value, index, list)) results.push(value);
    });
    return results;
  };

  // Return all the elements for which a truth test fails.
  _.reject = function(obj, predicate, context) {
    return _.filter(obj, _.negate(cb(predicate)), context);
  };

  // Determine whether all of the elements match a truth test.
  // Aliased as `all`.
  _.every = _.all = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length;
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      if (!predicate(obj[currentKey], currentKey, obj)) return false;
    }
    return true;
  };

  // Determine if at least one element in the object matches a truth test.
  // Aliased as `any`.
  _.some = _.any = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length;
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      if (predicate(obj[currentKey], currentKey, obj)) return true;
    }
    return false;
  };

  // Determine if the array or object contains a given item (using `===`).
  // Aliased as `includes` and `include`.
  _.contains = _.includes = _.include = function(obj, item, fromIndex, guard) {
    if (!isArrayLike(obj)) obj = _.values(obj);
    if (typeof fromIndex != 'number' || guard) fromIndex = 0;
    return _.indexOf(obj, item, fromIndex) >= 0;
  };

  // Invoke a method (with arguments) on every item in a collection.
  _.invoke = function(obj, method) {
    var args = slice.call(arguments, 2);
    var isFunc = _.isFunction(method);
    return _.map(obj, function(value) {
      var func = isFunc ? method : value[method];
      return func == null ? func : func.apply(value, args);
    });
  };

  // Convenience version of a common use case of `map`: fetching a property.
  _.pluck = function(obj, key) {
    return _.map(obj, _.property(key));
  };

  // Convenience version of a common use case of `filter`: selecting only objects
  // containing specific `key:value` pairs.
  _.where = function(obj, attrs) {
    return _.filter(obj, _.matcher(attrs));
  };

  // Convenience version of a common use case of `find`: getting the first object
  // containing specific `key:value` pairs.
  _.findWhere = function(obj, attrs) {
    return _.find(obj, _.matcher(attrs));
  };

  // Return the maximum element (or element-based computation).
  _.max = function(obj, iteratee, context) {
    var result = -Infinity, lastComputed = -Infinity,
        value, computed;
    if (iteratee == null && obj != null) {
      obj = isArrayLike(obj) ? obj : _.values(obj);
      for (var i = 0, length = obj.length; i < length; i++) {
        value = obj[i];
        if (value > result) {
          result = value;
        }
      }
    } else {
      iteratee = cb(iteratee, context);
      _.each(obj, function(value, index, list) {
        computed = iteratee(value, index, list);
        if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
          result = value;
          lastComputed = computed;
        }
      });
    }
    return result;
  };

  // Return the minimum element (or element-based computation).
  _.min = function(obj, iteratee, context) {
    var result = Infinity, lastComputed = Infinity,
        value, computed;
    if (iteratee == null && obj != null) {
      obj = isArrayLike(obj) ? obj : _.values(obj);
      for (var i = 0, length = obj.length; i < length; i++) {
        value = obj[i];
        if (value < result) {
          result = value;
        }
      }
    } else {
      iteratee = cb(iteratee, context);
      _.each(obj, function(value, index, list) {
        computed = iteratee(value, index, list);
        if (computed < lastComputed || computed === Infinity && result === Infinity) {
          result = value;
          lastComputed = computed;
        }
      });
    }
    return result;
  };

  // Shuffle a collection, using the modern version of the
  // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
  _.shuffle = function(obj) {
    var set = isArrayLike(obj) ? obj : _.values(obj);
    var length = set.length;
    var shuffled = Array(length);
    for (var index = 0, rand; index < length; index++) {
      rand = _.random(0, index);
      if (rand !== index) shuffled[index] = shuffled[rand];
      shuffled[rand] = set[index];
    }
    return shuffled;
  };

  // Sample **n** random values from a collection.
  // If **n** is not specified, returns a single random element.
  // The internal `guard` argument allows it to work with `map`.
  _.sample = function(obj, n, guard) {
    if (n == null || guard) {
      if (!isArrayLike(obj)) obj = _.values(obj);
      return obj[_.random(obj.length - 1)];
    }
    return _.shuffle(obj).slice(0, Math.max(0, n));
  };

  // Sort the object's values by a criterion produced by an iteratee.
  _.sortBy = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    return _.pluck(_.map(obj, function(value, index, list) {
      return {
        value: value,
        index: index,
        criteria: iteratee(value, index, list)
      };
    }).sort(function(left, right) {
      var a = left.criteria;
      var b = right.criteria;
      if (a !== b) {
        if (a > b || a === void 0) return 1;
        if (a < b || b === void 0) return -1;
      }
      return left.index - right.index;
    }), 'value');
  };

  // An internal function used for aggregate "group by" operations.
  var group = function(behavior) {
    return function(obj, iteratee, context) {
      var result = {};
      iteratee = cb(iteratee, context);
      _.each(obj, function(value, index) {
        var key = iteratee(value, index, obj);
        behavior(result, value, key);
      });
      return result;
    };
  };

  // Groups the object's values by a criterion. Pass either a string attribute
  // to group by, or a function that returns the criterion.
  _.groupBy = group(function(result, value, key) {
    if (_.has(result, key)) result[key].push(value); else result[key] = [value];
  });

  // Indexes the object's values by a criterion, similar to `groupBy`, but for
  // when you know that your index values will be unique.
  _.indexBy = group(function(result, value, key) {
    result[key] = value;
  });

  // Counts instances of an object that group by a certain criterion. Pass
  // either a string attribute to count by, or a function that returns the
  // criterion.
  _.countBy = group(function(result, value, key) {
    if (_.has(result, key)) result[key]++; else result[key] = 1;
  });

  // Safely create a real, live array from anything iterable.
  _.toArray = function(obj) {
    if (!obj) return [];
    if (_.isArray(obj)) return slice.call(obj);
    if (isArrayLike(obj)) return _.map(obj, _.identity);
    return _.values(obj);
  };

  // Return the number of elements in an object.
  _.size = function(obj) {
    if (obj == null) return 0;
    return isArrayLike(obj) ? obj.length : _.keys(obj).length;
  };

  // Split a collection into two arrays: one whose elements all satisfy the given
  // predicate, and one whose elements all do not satisfy the predicate.
  _.partition = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var pass = [], fail = [];
    _.each(obj, function(value, key, obj) {
      (predicate(value, key, obj) ? pass : fail).push(value);
    });
    return [pass, fail];
  };

  // Array Functions
  // ---------------

  // Get the first element of an array. Passing **n** will return the first N
  // values in the array. Aliased as `head` and `take`. The **guard** check
  // allows it to work with `_.map`.
  _.first = _.head = _.take = function(array, n, guard) {
    if (array == null) return void 0;
    if (n == null || guard) return array[0];
    return _.initial(array, array.length - n);
  };

  // Returns everything but the last entry of the array. Especially useful on
  // the arguments object. Passing **n** will return all the values in
  // the array, excluding the last N.
  _.initial = function(array, n, guard) {
    return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
  };

  // Get the last element of an array. Passing **n** will return the last N
  // values in the array.
  _.last = function(array, n, guard) {
    if (array == null) return void 0;
    if (n == null || guard) return array[array.length - 1];
    return _.rest(array, Math.max(0, array.length - n));
  };

  // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
  // Especially useful on the arguments object. Passing an **n** will return
  // the rest N values in the array.
  _.rest = _.tail = _.drop = function(array, n, guard) {
    return slice.call(array, n == null || guard ? 1 : n);
  };

  // Trim out all falsy values from an array.
  _.compact = function(array) {
    return _.filter(array, _.identity);
  };

  // Internal implementation of a recursive `flatten` function.
  var flatten = function(input, shallow, strict, startIndex) {
    var output = [], idx = 0;
    for (var i = startIndex || 0, length = getLength(input); i < length; i++) {
      var value = input[i];
      if (isArrayLike(value) && (_.isArray(value) || _.isArguments(value))) {
        //flatten current level of array or arguments object
        if (!shallow) value = flatten(value, shallow, strict);
        var j = 0, len = value.length;
        output.length += len;
        while (j < len) {
          output[idx++] = value[j++];
        }
      } else if (!strict) {
        output[idx++] = value;
      }
    }
    return output;
  };

  // Flatten out an array, either recursively (by default), or just one level.
  _.flatten = function(array, shallow) {
    return flatten(array, shallow, false);
  };

  // Return a version of the array that does not contain the specified value(s).
  _.without = function(array) {
    return _.difference(array, slice.call(arguments, 1));
  };

  // Produce a duplicate-free version of the array. If the array has already
  // been sorted, you have the option of using a faster algorithm.
  // Aliased as `unique`.
  _.uniq = _.unique = function(array, isSorted, iteratee, context) {
    if (!_.isBoolean(isSorted)) {
      context = iteratee;
      iteratee = isSorted;
      isSorted = false;
    }
    if (iteratee != null) iteratee = cb(iteratee, context);
    var result = [];
    var seen = [];
    for (var i = 0, length = getLength(array); i < length; i++) {
      var value = array[i],
          computed = iteratee ? iteratee(value, i, array) : value;
      if (isSorted) {
        if (!i || seen !== computed) result.push(value);
        seen = computed;
      } else if (iteratee) {
        if (!_.contains(seen, computed)) {
          seen.push(computed);
          result.push(value);
        }
      } else if (!_.contains(result, value)) {
        result.push(value);
      }
    }
    return result;
  };

  // Produce an array that contains the union: each distinct element from all of
  // the passed-in arrays.
  _.union = function() {
    return _.uniq(flatten(arguments, true, true));
  };

  // Produce an array that contains every item shared between all the
  // passed-in arrays.
  _.intersection = function(array) {
    var result = [];
    var argsLength = arguments.length;
    for (var i = 0, length = getLength(array); i < length; i++) {
      var item = array[i];
      if (_.contains(result, item)) continue;
      for (var j = 1; j < argsLength; j++) {
        if (!_.contains(arguments[j], item)) break;
      }
      if (j === argsLength) result.push(item);
    }
    return result;
  };

  // Take the difference between one array and a number of other arrays.
  // Only the elements present in just the first array will remain.
  _.difference = function(array) {
    var rest = flatten(arguments, true, true, 1);
    return _.filter(array, function(value){
      return !_.contains(rest, value);
    });
  };

  // Zip together multiple lists into a single array -- elements that share
  // an index go together.
  _.zip = function() {
    return _.unzip(arguments);
  };

  // Complement of _.zip. Unzip accepts an array of arrays and groups
  // each array's elements on shared indices
  _.unzip = function(array) {
    var length = array && _.max(array, getLength).length || 0;
    var result = Array(length);

    for (var index = 0; index < length; index++) {
      result[index] = _.pluck(array, index);
    }
    return result;
  };

  // Converts lists into objects. Pass either a single array of `[key, value]`
  // pairs, or two parallel arrays of the same length -- one of keys, and one of
  // the corresponding values.
  _.object = function(list, values) {
    var result = {};
    for (var i = 0, length = getLength(list); i < length; i++) {
      if (values) {
        result[list[i]] = values[i];
      } else {
        result[list[i][0]] = list[i][1];
      }
    }
    return result;
  };

  // Generator function to create the findIndex and findLastIndex functions
  function createPredicateIndexFinder(dir) {
    return function(array, predicate, context) {
      predicate = cb(predicate, context);
      var length = getLength(array);
      var index = dir > 0 ? 0 : length - 1;
      for (; index >= 0 && index < length; index += dir) {
        if (predicate(array[index], index, array)) return index;
      }
      return -1;
    };
  }

  // Returns the first index on an array-like that passes a predicate test
  _.findIndex = createPredicateIndexFinder(1);
  _.findLastIndex = createPredicateIndexFinder(-1);

  // Use a comparator function to figure out the smallest index at which
  // an object should be inserted so as to maintain order. Uses binary search.
  _.sortedIndex = function(array, obj, iteratee, context) {
    iteratee = cb(iteratee, context, 1);
    var value = iteratee(obj);
    var low = 0, high = getLength(array);
    while (low < high) {
      var mid = Math.floor((low + high) / 2);
      if (iteratee(array[mid]) < value) low = mid + 1; else high = mid;
    }
    return low;
  };

  // Generator function to create the indexOf and lastIndexOf functions
  function createIndexFinder(dir, predicateFind, sortedIndex) {
    return function(array, item, idx) {
      var i = 0, length = getLength(array);
      if (typeof idx == 'number') {
        if (dir > 0) {
            i = idx >= 0 ? idx : Math.max(idx + length, i);
        } else {
            length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1;
        }
      } else if (sortedIndex && idx && length) {
        idx = sortedIndex(array, item);
        return array[idx] === item ? idx : -1;
      }
      if (item !== item) {
        idx = predicateFind(slice.call(array, i, length), _.isNaN);
        return idx >= 0 ? idx + i : -1;
      }
      for (idx = dir > 0 ? i : length - 1; idx >= 0 && idx < length; idx += dir) {
        if (array[idx] === item) return idx;
      }
      return -1;
    };
  }

  // Return the position of the first occurrence of an item in an array,
  // or -1 if the item is not included in the array.
  // If the array is large and already in sort order, pass `true`
  // for **isSorted** to use binary search.
  _.indexOf = createIndexFinder(1, _.findIndex, _.sortedIndex);
  _.lastIndexOf = createIndexFinder(-1, _.findLastIndex);

  // Generate an integer Array containing an arithmetic progression. A port of
  // the native Python `range()` function. See
  // [the Python documentation](http://docs.python.org/library/functions.html#range).
  _.range = function(start, stop, step) {
    if (stop == null) {
      stop = start || 0;
      start = 0;
    }
    step = step || 1;

    var length = Math.max(Math.ceil((stop - start) / step), 0);
    var range = Array(length);

    for (var idx = 0; idx < length; idx++, start += step) {
      range[idx] = start;
    }

    return range;
  };

  // Function (ahem) Functions
  // ------------------

  // Determines whether to execute a function as a constructor
  // or a normal function with the provided arguments
  var executeBound = function(sourceFunc, boundFunc, context, callingContext, args) {
    if (!(callingContext instanceof boundFunc)) return sourceFunc.apply(context, args);
    var self = baseCreate(sourceFunc.prototype);
    var result = sourceFunc.apply(self, args);
    if (_.isObject(result)) return result;
    return self;
  };

  // Create a function bound to a given object (assigning `this`, and arguments,
  // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
  // available.
  _.bind = function(func, context) {
    if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
    if (!_.isFunction(func)) throw new TypeError('Bind must be called on a function');
    var args = slice.call(arguments, 2);
    var bound = function() {
      return executeBound(func, bound, context, this, args.concat(slice.call(arguments)));
    };
    return bound;
  };

  // Partially apply a function by creating a version that has had some of its
  // arguments pre-filled, without changing its dynamic `this` context. _ acts
  // as a placeholder, allowing any combination of arguments to be pre-filled.
  _.partial = function(func) {
    var boundArgs = slice.call(arguments, 1);
    var bound = function() {
      var position = 0, length = boundArgs.length;
      var args = Array(length);
      for (var i = 0; i < length; i++) {
        args[i] = boundArgs[i] === _ ? arguments[position++] : boundArgs[i];
      }
      while (position < arguments.length) args.push(arguments[position++]);
      return executeBound(func, bound, this, this, args);
    };
    return bound;
  };

  // Bind a number of an object's methods to that object. Remaining arguments
  // are the method names to be bound. Useful for ensuring that all callbacks
  // defined on an object belong to it.
  _.bindAll = function(obj) {
    var i, length = arguments.length, key;
    if (length <= 1) throw new Error('bindAll must be passed function names');
    for (i = 1; i < length; i++) {
      key = arguments[i];
      obj[key] = _.bind(obj[key], obj);
    }
    return obj;
  };

  // Memoize an expensive function by storing its results.
  _.memoize = function(func, hasher) {
    var memoize = function(key) {
      var cache = memoize.cache;
      var address = '' + (hasher ? hasher.apply(this, arguments) : key);
      if (!_.has(cache, address)) cache[address] = func.apply(this, arguments);
      return cache[address];
    };
    memoize.cache = {};
    return memoize;
  };

  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  _.delay = function(func, wait) {
    var args = slice.call(arguments, 2);
    return setTimeout(function(){
      return func.apply(null, args);
    }, wait);
  };

  // Defers a function, scheduling it to run after the current call stack has
  // cleared.
  _.defer = _.partial(_.delay, _, 1);

  // Returns a function, that, when invoked, will only be triggered at most once
  // during a given window of time. Normally, the throttled function will run
  // as much as it can, without ever going more than once per `wait` duration;
  // but if you'd like to disable the execution on the leading edge, pass
  // `{leading: false}`. To disable execution on the trailing edge, ditto.
  _.throttle = function(func, wait, options) {
    var context, args, result;
    var timeout = null;
    var previous = 0;
    if (!options) options = {};
    var later = function() {
      previous = options.leading === false ? 0 : _.now();
      timeout = null;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    };
    return function() {
      var now = _.now();
      if (!previous && options.leading === false) previous = now;
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0 || remaining > wait) {
        if (timeout) {
          clearTimeout(timeout);
          timeout = null;
        }
        previous = now;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining);
      }
      return result;
    };
  };

  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds. If `immediate` is passed, trigger the function on the
  // leading edge, instead of the trailing.
  _.debounce = function(func, wait, immediate) {
    var timeout, args, context, timestamp, result;

    var later = function() {
      var last = _.now() - timestamp;

      if (last < wait && last >= 0) {
        timeout = setTimeout(later, wait - last);
      } else {
        timeout = null;
        if (!immediate) {
          result = func.apply(context, args);
          if (!timeout) context = args = null;
        }
      }
    };

    return function() {
      context = this;
      args = arguments;
      timestamp = _.now();
      var callNow = immediate && !timeout;
      if (!timeout) timeout = setTimeout(later, wait);
      if (callNow) {
        result = func.apply(context, args);
        context = args = null;
      }

      return result;
    };
  };

  // Returns the first function passed as an argument to the second,
  // allowing you to adjust arguments, run code before and after, and
  // conditionally execute the original function.
  _.wrap = function(func, wrapper) {
    return _.partial(wrapper, func);
  };

  // Returns a negated version of the passed-in predicate.
  _.negate = function(predicate) {
    return function() {
      return !predicate.apply(this, arguments);
    };
  };

  // Returns a function that is the composition of a list of functions, each
  // consuming the return value of the function that follows.
  _.compose = function() {
    var args = arguments;
    var start = args.length - 1;
    return function() {
      var i = start;
      var result = args[start].apply(this, arguments);
      while (i--) result = args[i].call(this, result);
      return result;
    };
  };

  // Returns a function that will only be executed on and after the Nth call.
  _.after = function(times, func) {
    return function() {
      if (--times < 1) {
        return func.apply(this, arguments);
      }
    };
  };

  // Returns a function that will only be executed up to (but not including) the Nth call.
  _.before = function(times, func) {
    var memo;
    return function() {
      if (--times > 0) {
        memo = func.apply(this, arguments);
      }
      if (times <= 1) func = null;
      return memo;
    };
  };

  // Returns a function that will be executed at most one time, no matter how
  // often you call it. Useful for lazy initialization.
  _.once = _.partial(_.before, 2);

  // Object Functions
  // ----------------

  // Keys in IE < 9 that won't be iterated by `for key in ...` and thus missed.
  var hasEnumBug = !{toString: null}.propertyIsEnumerable('toString');
  var nonEnumerableProps = ['valueOf', 'isPrototypeOf', 'toString',
                      'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];

  function collectNonEnumProps(obj, keys) {
    var nonEnumIdx = nonEnumerableProps.length;
    var constructor = obj.constructor;
    var proto = (_.isFunction(constructor) && constructor.prototype) || ObjProto;

    // Constructor is a special case.
    var prop = 'constructor';
    if (_.has(obj, prop) && !_.contains(keys, prop)) keys.push(prop);

    while (nonEnumIdx--) {
      prop = nonEnumerableProps[nonEnumIdx];
      if (prop in obj && obj[prop] !== proto[prop] && !_.contains(keys, prop)) {
        keys.push(prop);
      }
    }
  }

  // Retrieve the names of an object's own properties.
  // Delegates to **ECMAScript 5**'s native `Object.keys`
  _.keys = function(obj) {
    if (!_.isObject(obj)) return [];
    if (nativeKeys) return nativeKeys(obj);
    var keys = [];
    for (var key in obj) if (_.has(obj, key)) keys.push(key);
    // Ahem, IE < 9.
    if (hasEnumBug) collectNonEnumProps(obj, keys);
    return keys;
  };

  // Retrieve all the property names of an object.
  _.allKeys = function(obj) {
    if (!_.isObject(obj)) return [];
    var keys = [];
    for (var key in obj) keys.push(key);
    // Ahem, IE < 9.
    if (hasEnumBug) collectNonEnumProps(obj, keys);
    return keys;
  };

  // Retrieve the values of an object's properties.
  _.values = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var values = Array(length);
    for (var i = 0; i < length; i++) {
      values[i] = obj[keys[i]];
    }
    return values;
  };

  // Returns the results of applying the iteratee to each element of the object
  // In contrast to _.map it returns an object
  _.mapObject = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    var keys =  _.keys(obj),
          length = keys.length,
          results = {},
          currentKey;
      for (var index = 0; index < length; index++) {
        currentKey = keys[index];
        results[currentKey] = iteratee(obj[currentKey], currentKey, obj);
      }
      return results;
  };

  // Convert an object into a list of `[key, value]` pairs.
  _.pairs = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var pairs = Array(length);
    for (var i = 0; i < length; i++) {
      pairs[i] = [keys[i], obj[keys[i]]];
    }
    return pairs;
  };

  // Invert the keys and values of an object. The values must be serializable.
  _.invert = function(obj) {
    var result = {};
    var keys = _.keys(obj);
    for (var i = 0, length = keys.length; i < length; i++) {
      result[obj[keys[i]]] = keys[i];
    }
    return result;
  };

  // Return a sorted list of the function names available on the object.
  // Aliased as `methods`
  _.functions = _.methods = function(obj) {
    var names = [];
    for (var key in obj) {
      if (_.isFunction(obj[key])) names.push(key);
    }
    return names.sort();
  };

  // Extend a given object with all the properties in passed-in object(s).
  _.extend = createAssigner(_.allKeys);

  // Assigns a given object with all the own properties in the passed-in object(s)
  // (https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
  _.extendOwn = _.assign = createAssigner(_.keys);

  // Returns the first key on an object that passes a predicate test
  _.findKey = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = _.keys(obj), key;
    for (var i = 0, length = keys.length; i < length; i++) {
      key = keys[i];
      if (predicate(obj[key], key, obj)) return key;
    }
  };

  // Return a copy of the object only containing the whitelisted properties.
  _.pick = function(object, oiteratee, context) {
    var result = {}, obj = object, iteratee, keys;
    if (obj == null) return result;
    if (_.isFunction(oiteratee)) {
      keys = _.allKeys(obj);
      iteratee = optimizeCb(oiteratee, context);
    } else {
      keys = flatten(arguments, false, false, 1);
      iteratee = function(value, key, obj) { return key in obj; };
      obj = Object(obj);
    }
    for (var i = 0, length = keys.length; i < length; i++) {
      var key = keys[i];
      var value = obj[key];
      if (iteratee(value, key, obj)) result[key] = value;
    }
    return result;
  };

   // Return a copy of the object without the blacklisted properties.
  _.omit = function(obj, iteratee, context) {
    if (_.isFunction(iteratee)) {
      iteratee = _.negate(iteratee);
    } else {
      var keys = _.map(flatten(arguments, false, false, 1), String);
      iteratee = function(value, key) {
        return !_.contains(keys, key);
      };
    }
    return _.pick(obj, iteratee, context);
  };

  // Fill in a given object with default properties.
  _.defaults = createAssigner(_.allKeys, true);

  // Creates an object that inherits from the given prototype object.
  // If additional properties are provided then they will be added to the
  // created object.
  _.create = function(prototype, props) {
    var result = baseCreate(prototype);
    if (props) _.extendOwn(result, props);
    return result;
  };

  // Create a (shallow-cloned) duplicate of an object.
  _.clone = function(obj) {
    if (!_.isObject(obj)) return obj;
    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
  };

  // Invokes interceptor with the obj, and then returns obj.
  // The primary purpose of this method is to "tap into" a method chain, in
  // order to perform operations on intermediate results within the chain.
  _.tap = function(obj, interceptor) {
    interceptor(obj);
    return obj;
  };

  // Returns whether an object has a given set of `key:value` pairs.
  _.isMatch = function(object, attrs) {
    var keys = _.keys(attrs), length = keys.length;
    if (object == null) return !length;
    var obj = Object(object);
    for (var i = 0; i < length; i++) {
      var key = keys[i];
      if (attrs[key] !== obj[key] || !(key in obj)) return false;
    }
    return true;
  };


  // Internal recursive comparison function for `isEqual`.
  var eq = function(a, b, aStack, bStack) {
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
    if (a === b) return a !== 0 || 1 / a === 1 / b;
    // A strict comparison is necessary because `null == undefined`.
    if (a == null || b == null) return a === b;
    // Unwrap any wrapped objects.
    if (a instanceof _) a = a._wrapped;
    if (b instanceof _) b = b._wrapped;
    // Compare `[[Class]]` names.
    var className = toString.call(a);
    if (className !== toString.call(b)) return false;
    switch (className) {
      // Strings, numbers, regular expressions, dates, and booleans are compared by value.
      case '[object RegExp]':
      // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
      case '[object String]':
        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
        // equivalent to `new String("5")`.
        return '' + a === '' + b;
      case '[object Number]':
        // `NaN`s are equivalent, but non-reflexive.
        // Object(NaN) is equivalent to NaN
        if (+a !== +a) return +b !== +b;
        // An `egal` comparison is performed for other numeric values.
        return +a === 0 ? 1 / +a === 1 / b : +a === +b;
      case '[object Date]':
      case '[object Boolean]':
        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
        // millisecond representations. Note that invalid dates with millisecond representations
        // of `NaN` are not equivalent.
        return +a === +b;
    }

    var areArrays = className === '[object Array]';
    if (!areArrays) {
      if (typeof a != 'object' || typeof b != 'object') return false;

      // Objects with different constructors are not equivalent, but `Object`s or `Array`s
      // from different frames are.
      var aCtor = a.constructor, bCtor = b.constructor;
      if (aCtor !== bCtor && !(_.isFunction(aCtor) && aCtor instanceof aCtor &&
                               _.isFunction(bCtor) && bCtor instanceof bCtor)
                          && ('constructor' in a && 'constructor' in b)) {
        return false;
      }
    }
    // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.

    // Initializing stack of traversed objects.
    // It's done here since we only need them for objects and arrays comparison.
    aStack = aStack || [];
    bStack = bStack || [];
    var length = aStack.length;
    while (length--) {
      // Linear search. Performance is inversely proportional to the number of
      // unique nested structures.
      if (aStack[length] === a) return bStack[length] === b;
    }

    // Add the first object to the stack of traversed objects.
    aStack.push(a);
    bStack.push(b);

    // Recursively compare objects and arrays.
    if (areArrays) {
      // Compare array lengths to determine if a deep comparison is necessary.
      length = a.length;
      if (length !== b.length) return false;
      // Deep compare the contents, ignoring non-numeric properties.
      while (length--) {
        if (!eq(a[length], b[length], aStack, bStack)) return false;
      }
    } else {
      // Deep compare objects.
      var keys = _.keys(a), key;
      length = keys.length;
      // Ensure that both objects contain the same number of properties before comparing deep equality.
      if (_.keys(b).length !== length) return false;
      while (length--) {
        // Deep compare each member
        key = keys[length];
        if (!(_.has(b, key) && eq(a[key], b[key], aStack, bStack))) return false;
      }
    }
    // Remove the first object from the stack of traversed objects.
    aStack.pop();
    bStack.pop();
    return true;
  };

  // Perform a deep comparison to check if two objects are equal.
  _.isEqual = function(a, b) {
    return eq(a, b);
  };

  // Is a given array, string, or object empty?
  // An "empty" object has no enumerable own-properties.
  _.isEmpty = function(obj) {
    if (obj == null) return true;
    if (isArrayLike(obj) && (_.isArray(obj) || _.isString(obj) || _.isArguments(obj))) return obj.length === 0;
    return _.keys(obj).length === 0;
  };

  // Is a given value a DOM element?
  _.isElement = function(obj) {
    return !!(obj && obj.nodeType === 1);
  };

  // Is a given value an array?
  // Delegates to ECMA5's native Array.isArray
  _.isArray = nativeIsArray || function(obj) {
    return toString.call(obj) === '[object Array]';
  };

  // Is a given variable an object?
  _.isObject = function(obj) {
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
  };

  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp, isError.
  _.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error'], function(name) {
    _['is' + name] = function(obj) {
      return toString.call(obj) === '[object ' + name + ']';
    };
  });

  // Define a fallback version of the method in browsers (ahem, IE < 9), where
  // there isn't any inspectable "Arguments" type.
  if (!_.isArguments(arguments)) {
    _.isArguments = function(obj) {
      return _.has(obj, 'callee');
    };
  }

  // Optimize `isFunction` if appropriate. Work around some typeof bugs in old v8,
  // IE 11 (#1621), and in Safari 8 (#1929).
  if (typeof /./ != 'function' && typeof Int8Array != 'object') {
    _.isFunction = function(obj) {
      return typeof obj == 'function' || false;
    };
  }

  // Is a given object a finite number?
  _.isFinite = function(obj) {
    return isFinite(obj) && !isNaN(parseFloat(obj));
  };

  // Is the given value `NaN`? (NaN is the only number which does not equal itself).
  _.isNaN = function(obj) {
    return _.isNumber(obj) && obj !== +obj;
  };

  // Is a given value a boolean?
  _.isBoolean = function(obj) {
    return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
  };

  // Is a given value equal to null?
  _.isNull = function(obj) {
    return obj === null;
  };

  // Is a given variable undefined?
  _.isUndefined = function(obj) {
    return obj === void 0;
  };

  // Shortcut function for checking if an object has a given property directly
  // on itself (in other words, not on a prototype).
  _.has = function(obj, key) {
    return obj != null && hasOwnProperty.call(obj, key);
  };

  // Utility Functions
  // -----------------

  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
  // previous owner. Returns a reference to the Underscore object.
  _.noConflict = function() {
    root._ = previousUnderscore;
    return this;
  };

  // Keep the identity function around for default iteratees.
  _.identity = function(value) {
    return value;
  };

  // Predicate-generating functions. Often useful outside of Underscore.
  _.constant = function(value) {
    return function() {
      return value;
    };
  };

  _.noop = function(){};

  _.property = property;

  // Generates a function for a given object that returns a given property.
  _.propertyOf = function(obj) {
    return obj == null ? function(){} : function(key) {
      return obj[key];
    };
  };

  // Returns a predicate for checking whether an object has a given set of
  // `key:value` pairs.
  _.matcher = _.matches = function(attrs) {
    attrs = _.extendOwn({}, attrs);
    return function(obj) {
      return _.isMatch(obj, attrs);
    };
  };

  // Run a function **n** times.
  _.times = function(n, iteratee, context) {
    var accum = Array(Math.max(0, n));
    iteratee = optimizeCb(iteratee, context, 1);
    for (var i = 0; i < n; i++) accum[i] = iteratee(i);
    return accum;
  };

  // Return a random integer between min and max (inclusive).
  _.random = function(min, max) {
    if (max == null) {
      max = min;
      min = 0;
    }
    return min + Math.floor(Math.random() * (max - min + 1));
  };

  // A (possibly faster) way to get the current timestamp as an integer.
  _.now = Date.now || function() {
    return new Date().getTime();
  };

   // List of HTML entities for escaping.
  var escapeMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '`': '&#x60;'
  };
  var unescapeMap = _.invert(escapeMap);

  // Functions for escaping and unescaping strings to/from HTML interpolation.
  var createEscaper = function(map) {
    var escaper = function(match) {
      return map[match];
    };
    // Regexes for identifying a key that needs to be escaped
    var source = '(?:' + _.keys(map).join('|') + ')';
    var testRegexp = RegExp(source);
    var replaceRegexp = RegExp(source, 'g');
    return function(string) {
      string = string == null ? '' : '' + string;
      return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
    };
  };
  _.escape = createEscaper(escapeMap);
  _.unescape = createEscaper(unescapeMap);

  // If the value of the named `property` is a function then invoke it with the
  // `object` as context; otherwise, return it.
  _.result = function(object, property, fallback) {
    var value = object == null ? void 0 : object[property];
    if (value === void 0) {
      value = fallback;
    }
    return _.isFunction(value) ? value.call(object) : value;
  };

  // Generate a unique integer id (unique within the entire client session).
  // Useful for temporary DOM ids.
  var idCounter = 0;
  _.uniqueId = function(prefix) {
    var id = ++idCounter + '';
    return prefix ? prefix + id : id;
  };

  // By default, Underscore uses ERB-style template delimiters, change the
  // following template settings to use alternative delimiters.
  _.templateSettings = {
    evaluate    : /<%([\s\S]+?)%>/g,
    interpolate : /<%=([\s\S]+?)%>/g,
    escape      : /<%-([\s\S]+?)%>/g
  };

  // When customizing `templateSettings`, if you don't want to define an
  // interpolation, evaluation or escaping regex, we need one that is
  // guaranteed not to match.
  var noMatch = /(.)^/;

  // Certain characters need to be escaped so that they can be put into a
  // string literal.
  var escapes = {
    "'":      "'",
    '\\':     '\\',
    '\r':     'r',
    '\n':     'n',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
  };

  var escaper = /\\|'|\r|\n|\u2028|\u2029/g;

  var escapeChar = function(match) {
    return '\\' + escapes[match];
  };

  // JavaScript micro-templating, similar to John Resig's implementation.
  // Underscore templating handles arbitrary delimiters, preserves whitespace,
  // and correctly escapes quotes within interpolated code.
  // NB: `oldSettings` only exists for backwards compatibility.
  _.template = function(text, settings, oldSettings) {
    if (!settings && oldSettings) settings = oldSettings;
    settings = _.defaults({}, settings, _.templateSettings);

    // Combine delimiters into one regular expression via alternation.
    var matcher = RegExp([
      (settings.escape || noMatch).source,
      (settings.interpolate || noMatch).source,
      (settings.evaluate || noMatch).source
    ].join('|') + '|$', 'g');

    // Compile the template source, escaping string literals appropriately.
    var index = 0;
    var source = "__p+='";
    text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
      source += text.slice(index, offset).replace(escaper, escapeChar);
      index = offset + match.length;

      if (escape) {
        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
      } else if (interpolate) {
        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
      } else if (evaluate) {
        source += "';\n" + evaluate + "\n__p+='";
      }

      // Adobe VMs need the match returned to produce the correct offest.
      return match;
    });
    source += "';\n";

    // If a variable is not specified, place data values in local scope.
    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

    source = "var __t,__p='',__j=Array.prototype.join," +
      "print=function(){__p+=__j.call(arguments,'');};\n" +
      source + 'return __p;\n';

    try {
      var render = new Function(settings.variable || 'obj', '_', source);
    } catch (e) {
      e.source = source;
      throw e;
    }

    var template = function(data) {
      return render.call(this, data, _);
    };

    // Provide the compiled source as a convenience for precompilation.
    var argument = settings.variable || 'obj';
    template.source = 'function(' + argument + '){\n' + source + '}';

    return template;
  };

  // Add a "chain" function. Start chaining a wrapped Underscore object.
  _.chain = function(obj) {
    var instance = _(obj);
    instance._chain = true;
    return instance;
  };

  // OOP
  // ---------------
  // If Underscore is called as a function, it returns a wrapped object that
  // can be used OO-style. This wrapper holds altered versions of all the
  // underscore functions. Wrapped objects may be chained.

  // Helper function to continue chaining intermediate results.
  var result = function(instance, obj) {
    return instance._chain ? _(obj).chain() : obj;
  };

  // Add your own custom functions to the Underscore object.
  _.mixin = function(obj) {
    _.each(_.functions(obj), function(name) {
      var func = _[name] = obj[name];
      _.prototype[name] = function() {
        var args = [this._wrapped];
        push.apply(args, arguments);
        return result(this, func.apply(_, args));
      };
    });
  };

  // Add all of the Underscore functions to the wrapper object.
  _.mixin(_);

  // Add all mutator Array functions to the wrapper.
  _.each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      var obj = this._wrapped;
      method.apply(obj, arguments);
      if ((name === 'shift' || name === 'splice') && obj.length === 0) delete obj[0];
      return result(this, obj);
    };
  });

  // Add all accessor Array functions to the wrapper.
  _.each(['concat', 'join', 'slice'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      return result(this, method.apply(this._wrapped, arguments));
    };
  });

  // Extracts the result from a wrapped and chained object.
  _.prototype.value = function() {
    return this._wrapped;
  };

  // Provide unwrapping proxy for some methods used in engine operations
  // such as arithmetic and JSON stringification.
  _.prototype.valueOf = _.prototype.toJSON = _.prototype.value;

  _.prototype.toString = function() {
    return '' + this._wrapped;
  };

  // AMD registration happens at the end for compatibility with AMD loaders
  // that may not enforce next-turn semantics on modules. Even though general
  // practice for AMD registration is to be anonymous, underscore registers
  // as a named module because, like jQuery, it is a base library that is
  // popular enough to be bundled in a third party lib, but not be part of
  // an AMD load request. Those cases could generate an error when an
  // anonymous define() is called outside of a loader request.
  if (typeof define === 'function' && define.amd) {
    define('underscore', [], function() {
      return _;
    });
  }
}.call(this));

},{}],100:[function(require,module,exports){
/** @license MIT License (c) copyright 2010-2014 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

(function(define) { 'use strict';
define(function (require) {

	var makePromise = require('./makePromise');
	var Scheduler = require('./Scheduler');
	var async = require('./env').asap;

	return makePromise({
		scheduler: new Scheduler(async)
	});

});
})(typeof define === 'function' && define.amd ? define : function (factory) { module.exports = factory(require); });

},{"./Scheduler":101,"./env":113,"./makePromise":115}],101:[function(require,module,exports){
/** @license MIT License (c) copyright 2010-2014 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

(function(define) { 'use strict';
define(function() {

	// Credit to Twisol (https://github.com/Twisol) for suggesting
	// this type of extensible queue + trampoline approach for next-tick conflation.

	/**
	 * Async task scheduler
	 * @param {function} async function to schedule a single async function
	 * @constructor
	 */
	function Scheduler(async) {
		this._async = async;
		this._running = false;

		this._queue = this;
		this._queueLen = 0;
		this._afterQueue = {};
		this._afterQueueLen = 0;

		var self = this;
		this.drain = function() {
			self._drain();
		};
	}

	/**
	 * Enqueue a task
	 * @param {{ run:function }} task
	 */
	Scheduler.prototype.enqueue = function(task) {
		this._queue[this._queueLen++] = task;
		this.run();
	};

	/**
	 * Enqueue a task to run after the main task queue
	 * @param {{ run:function }} task
	 */
	Scheduler.prototype.afterQueue = function(task) {
		this._afterQueue[this._afterQueueLen++] = task;
		this.run();
	};

	Scheduler.prototype.run = function() {
		if (!this._running) {
			this._running = true;
			this._async(this.drain);
		}
	};

	/**
	 * Drain the handler queue entirely, and then the after queue
	 */
	Scheduler.prototype._drain = function() {
		var i = 0;
		for (; i < this._queueLen; ++i) {
			this._queue[i].run();
			this._queue[i] = void 0;
		}

		this._queueLen = 0;
		this._running = false;

		for (i = 0; i < this._afterQueueLen; ++i) {
			this._afterQueue[i].run();
			this._afterQueue[i] = void 0;
		}

		this._afterQueueLen = 0;
	};

	return Scheduler;

});
}(typeof define === 'function' && define.amd ? define : function(factory) { module.exports = factory(); }));

},{}],102:[function(require,module,exports){
/** @license MIT License (c) copyright 2010-2014 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

(function(define) { 'use strict';
define(function() {

	/**
	 * Custom error type for promises rejected by promise.timeout
	 * @param {string} message
	 * @constructor
	 */
	function TimeoutError (message) {
		Error.call(this);
		this.message = message;
		this.name = TimeoutError.name;
		if (typeof Error.captureStackTrace === 'function') {
			Error.captureStackTrace(this, TimeoutError);
		}
	}

	TimeoutError.prototype = Object.create(Error.prototype);
	TimeoutError.prototype.constructor = TimeoutError;

	return TimeoutError;
});
}(typeof define === 'function' && define.amd ? define : function(factory) { module.exports = factory(); }));
},{}],103:[function(require,module,exports){
/** @license MIT License (c) copyright 2010-2014 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

(function(define) { 'use strict';
define(function() {

	makeApply.tryCatchResolve = tryCatchResolve;

	return makeApply;

	function makeApply(Promise, call) {
		if(arguments.length < 2) {
			call = tryCatchResolve;
		}

		return apply;

		function apply(f, thisArg, args) {
			var p = Promise._defer();
			var l = args.length;
			var params = new Array(l);
			callAndResolve({ f:f, thisArg:thisArg, args:args, params:params, i:l-1, call:call }, p._handler);

			return p;
		}

		function callAndResolve(c, h) {
			if(c.i < 0) {
				return call(c.f, c.thisArg, c.params, h);
			}

			var handler = Promise._handler(c.args[c.i]);
			handler.fold(callAndResolveNext, c, void 0, h);
		}

		function callAndResolveNext(c, x, h) {
			c.params[c.i] = x;
			c.i -= 1;
			callAndResolve(c, h);
		}
	}

	function tryCatchResolve(f, thisArg, args, resolver) {
		try {
			resolver.resolve(f.apply(thisArg, args));
		} catch(e) {
			resolver.reject(e);
		}
	}

});
}(typeof define === 'function' && define.amd ? define : function(factory) { module.exports = factory(); }));



},{}],104:[function(require,module,exports){
/** @license MIT License (c) copyright 2010-2014 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

(function(define) { 'use strict';
define(function(require) {

	var state = require('../state');
	var applier = require('../apply');

	return function array(Promise) {

		var applyFold = applier(Promise);
		var toPromise = Promise.resolve;
		var all = Promise.all;

		var ar = Array.prototype.reduce;
		var arr = Array.prototype.reduceRight;
		var slice = Array.prototype.slice;

		// Additional array combinators

		Promise.any = any;
		Promise.some = some;
		Promise.settle = settle;

		Promise.map = map;
		Promise.filter = filter;
		Promise.reduce = reduce;
		Promise.reduceRight = reduceRight;

		/**
		 * When this promise fulfills with an array, do
		 * onFulfilled.apply(void 0, array)
		 * @param {function} onFulfilled function to apply
		 * @returns {Promise} promise for the result of applying onFulfilled
		 */
		Promise.prototype.spread = function(onFulfilled) {
			return this.then(all).then(function(array) {
				return onFulfilled.apply(this, array);
			});
		};

		return Promise;

		/**
		 * One-winner competitive race.
		 * Return a promise that will fulfill when one of the promises
		 * in the input array fulfills, or will reject when all promises
		 * have rejected.
		 * @param {array} promises
		 * @returns {Promise} promise for the first fulfilled value
		 */
		function any(promises) {
			var p = Promise._defer();
			var resolver = p._handler;
			var l = promises.length>>>0;

			var pending = l;
			var errors = [];

			for (var h, x, i = 0; i < l; ++i) {
				x = promises[i];
				if(x === void 0 && !(i in promises)) {
					--pending;
					continue;
				}

				h = Promise._handler(x);
				if(h.state() > 0) {
					resolver.become(h);
					Promise._visitRemaining(promises, i, h);
					break;
				} else {
					h.visit(resolver, handleFulfill, handleReject);
				}
			}

			if(pending === 0) {
				resolver.reject(new RangeError('any(): array must not be empty'));
			}

			return p;

			function handleFulfill(x) {
				/*jshint validthis:true*/
				errors = null;
				this.resolve(x); // this === resolver
			}

			function handleReject(e) {
				/*jshint validthis:true*/
				if(this.resolved) { // this === resolver
					return;
				}

				errors.push(e);
				if(--pending === 0) {
					this.reject(errors);
				}
			}
		}

		/**
		 * N-winner competitive race
		 * Return a promise that will fulfill when n input promises have
		 * fulfilled, or will reject when it becomes impossible for n
		 * input promises to fulfill (ie when promises.length - n + 1
		 * have rejected)
		 * @param {array} promises
		 * @param {number} n
		 * @returns {Promise} promise for the earliest n fulfillment values
		 *
		 * @deprecated
		 */
		function some(promises, n) {
			/*jshint maxcomplexity:7*/
			var p = Promise._defer();
			var resolver = p._handler;

			var results = [];
			var errors = [];

			var l = promises.length>>>0;
			var nFulfill = 0;
			var nReject;
			var x, i; // reused in both for() loops

			// First pass: count actual array items
			for(i=0; i<l; ++i) {
				x = promises[i];
				if(x === void 0 && !(i in promises)) {
					continue;
				}
				++nFulfill;
			}

			// Compute actual goals
			n = Math.max(n, 0);
			nReject = (nFulfill - n + 1);
			nFulfill = Math.min(n, nFulfill);

			if(n > nFulfill) {
				resolver.reject(new RangeError('some(): array must contain at least '
				+ n + ' item(s), but had ' + nFulfill));
			} else if(nFulfill === 0) {
				resolver.resolve(results);
			}

			// Second pass: observe each array item, make progress toward goals
			for(i=0; i<l; ++i) {
				x = promises[i];
				if(x === void 0 && !(i in promises)) {
					continue;
				}

				Promise._handler(x).visit(resolver, fulfill, reject, resolver.notify);
			}

			return p;

			function fulfill(x) {
				/*jshint validthis:true*/
				if(this.resolved) { // this === resolver
					return;
				}

				results.push(x);
				if(--nFulfill === 0) {
					errors = null;
					this.resolve(results);
				}
			}

			function reject(e) {
				/*jshint validthis:true*/
				if(this.resolved) { // this === resolver
					return;
				}

				errors.push(e);
				if(--nReject === 0) {
					results = null;
					this.reject(errors);
				}
			}
		}

		/**
		 * Apply f to the value of each promise in a list of promises
		 * and return a new list containing the results.
		 * @param {array} promises
		 * @param {function(x:*, index:Number):*} f mapping function
		 * @returns {Promise}
		 */
		function map(promises, f) {
			return Promise._traverse(f, promises);
		}

		/**
		 * Filter the provided array of promises using the provided predicate.  Input may
		 * contain promises and values
		 * @param {Array} promises array of promises and values
		 * @param {function(x:*, index:Number):boolean} predicate filtering predicate.
		 *  Must return truthy (or promise for truthy) for items to retain.
		 * @returns {Promise} promise that will fulfill with an array containing all items
		 *  for which predicate returned truthy.
		 */
		function filter(promises, predicate) {
			var a = slice.call(promises);
			return Promise._traverse(predicate, a).then(function(keep) {
				return filterSync(a, keep);
			});
		}

		function filterSync(promises, keep) {
			// Safe because we know all promises have fulfilled if we've made it this far
			var l = keep.length;
			var filtered = new Array(l);
			for(var i=0, j=0; i<l; ++i) {
				if(keep[i]) {
					filtered[j++] = Promise._handler(promises[i]).value;
				}
			}
			filtered.length = j;
			return filtered;

		}

		/**
		 * Return a promise that will always fulfill with an array containing
		 * the outcome states of all input promises.  The returned promise
		 * will never reject.
		 * @param {Array} promises
		 * @returns {Promise} promise for array of settled state descriptors
		 */
		function settle(promises) {
			return all(promises.map(settleOne));
		}

		function settleOne(p) {
			var h = Promise._handler(p);
			if(h.state() === 0) {
				return toPromise(p).then(state.fulfilled, state.rejected);
			}

			h._unreport();
			return state.inspect(h);
		}

		/**
		 * Traditional reduce function, similar to `Array.prototype.reduce()`, but
		 * input may contain promises and/or values, and reduceFunc
		 * may return either a value or a promise, *and* initialValue may
		 * be a promise for the starting value.
		 * @param {Array|Promise} promises array or promise for an array of anything,
		 *      may contain a mix of promises and values.
		 * @param {function(accumulated:*, x:*, index:Number):*} f reduce function
		 * @returns {Promise} that will resolve to the final reduced value
		 */
		function reduce(promises, f /*, initialValue */) {
			return arguments.length > 2 ? ar.call(promises, liftCombine(f), arguments[2])
					: ar.call(promises, liftCombine(f));
		}

		/**
		 * Traditional reduce function, similar to `Array.prototype.reduceRight()`, but
		 * input may contain promises and/or values, and reduceFunc
		 * may return either a value or a promise, *and* initialValue may
		 * be a promise for the starting value.
		 * @param {Array|Promise} promises array or promise for an array of anything,
		 *      may contain a mix of promises and values.
		 * @param {function(accumulated:*, x:*, index:Number):*} f reduce function
		 * @returns {Promise} that will resolve to the final reduced value
		 */
		function reduceRight(promises, f /*, initialValue */) {
			return arguments.length > 2 ? arr.call(promises, liftCombine(f), arguments[2])
					: arr.call(promises, liftCombine(f));
		}

		function liftCombine(f) {
			return function(z, x, i) {
				return applyFold(f, void 0, [z,x,i]);
			};
		}
	};

});
}(typeof define === 'function' && define.amd ? define : function(factory) { module.exports = factory(require); }));

},{"../apply":103,"../state":116}],105:[function(require,module,exports){
/** @license MIT License (c) copyright 2010-2014 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

(function(define) { 'use strict';
define(function() {

	return function flow(Promise) {

		var resolve = Promise.resolve;
		var reject = Promise.reject;
		var origCatch = Promise.prototype['catch'];

		/**
		 * Handle the ultimate fulfillment value or rejection reason, and assume
		 * responsibility for all errors.  If an error propagates out of result
		 * or handleFatalError, it will be rethrown to the host, resulting in a
		 * loud stack track on most platforms and a crash on some.
		 * @param {function?} onResult
		 * @param {function?} onError
		 * @returns {undefined}
		 */
		Promise.prototype.done = function(onResult, onError) {
			this._handler.visit(this._handler.receiver, onResult, onError);
		};

		/**
		 * Add Error-type and predicate matching to catch.  Examples:
		 * promise.catch(TypeError, handleTypeError)
		 *   .catch(predicate, handleMatchedErrors)
		 *   .catch(handleRemainingErrors)
		 * @param onRejected
		 * @returns {*}
		 */
		Promise.prototype['catch'] = Promise.prototype.otherwise = function(onRejected) {
			if (arguments.length < 2) {
				return origCatch.call(this, onRejected);
			}

			if(typeof onRejected !== 'function') {
				return this.ensure(rejectInvalidPredicate);
			}

			return origCatch.call(this, createCatchFilter(arguments[1], onRejected));
		};

		/**
		 * Wraps the provided catch handler, so that it will only be called
		 * if the predicate evaluates truthy
		 * @param {?function} handler
		 * @param {function} predicate
		 * @returns {function} conditional catch handler
		 */
		function createCatchFilter(handler, predicate) {
			return function(e) {
				return evaluatePredicate(e, predicate)
					? handler.call(this, e)
					: reject(e);
			};
		}

		/**
		 * Ensures that onFulfilledOrRejected will be called regardless of whether
		 * this promise is fulfilled or rejected.  onFulfilledOrRejected WILL NOT
		 * receive the promises' value or reason.  Any returned value will be disregarded.
		 * onFulfilledOrRejected may throw or return a rejected promise to signal
		 * an additional error.
		 * @param {function} handler handler to be called regardless of
		 *  fulfillment or rejection
		 * @returns {Promise}
		 */
		Promise.prototype['finally'] = Promise.prototype.ensure = function(handler) {
			if(typeof handler !== 'function') {
				return this;
			}

			return this.then(function(x) {
				return runSideEffect(handler, this, identity, x);
			}, function(e) {
				return runSideEffect(handler, this, reject, e);
			});
		};

		function runSideEffect (handler, thisArg, propagate, value) {
			var result = handler.call(thisArg);
			return maybeThenable(result)
				? propagateValue(result, propagate, value)
				: propagate(value);
		}

		function propagateValue (result, propagate, x) {
			return resolve(result).then(function () {
				return propagate(x);
			});
		}

		/**
		 * Recover from a failure by returning a defaultValue.  If defaultValue
		 * is a promise, it's fulfillment value will be used.  If defaultValue is
		 * a promise that rejects, the returned promise will reject with the
		 * same reason.
		 * @param {*} defaultValue
		 * @returns {Promise} new promise
		 */
		Promise.prototype['else'] = Promise.prototype.orElse = function(defaultValue) {
			return this.then(void 0, function() {
				return defaultValue;
			});
		};

		/**
		 * Shortcut for .then(function() { return value; })
		 * @param  {*} value
		 * @return {Promise} a promise that:
		 *  - is fulfilled if value is not a promise, or
		 *  - if value is a promise, will fulfill with its value, or reject
		 *    with its reason.
		 */
		Promise.prototype['yield'] = function(value) {
			return this.then(function() {
				return value;
			});
		};

		/**
		 * Runs a side effect when this promise fulfills, without changing the
		 * fulfillment value.
		 * @param {function} onFulfilledSideEffect
		 * @returns {Promise}
		 */
		Promise.prototype.tap = function(onFulfilledSideEffect) {
			return this.then(onFulfilledSideEffect)['yield'](this);
		};

		return Promise;
	};

	function rejectInvalidPredicate() {
		throw new TypeError('catch predicate must be a function');
	}

	function evaluatePredicate(e, predicate) {
		return isError(predicate) ? e instanceof predicate : predicate(e);
	}

	function isError(predicate) {
		return predicate === Error
			|| (predicate != null && predicate.prototype instanceof Error);
	}

	function maybeThenable(x) {
		return (typeof x === 'object' || typeof x === 'function') && x !== null;
	}

	function identity(x) {
		return x;
	}

});
}(typeof define === 'function' && define.amd ? define : function(factory) { module.exports = factory(); }));

},{}],106:[function(require,module,exports){
/** @license MIT License (c) copyright 2010-2014 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */
/** @author Jeff Escalante */

(function(define) { 'use strict';
define(function() {

	return function fold(Promise) {

		Promise.prototype.fold = function(f, z) {
			var promise = this._beget();

			this._handler.fold(function(z, x, to) {
				Promise._handler(z).fold(function(x, z, to) {
					to.resolve(f.call(this, z, x));
				}, x, this, to);
			}, z, promise._handler.receiver, promise._handler);

			return promise;
		};

		return Promise;
	};

});
}(typeof define === 'function' && define.amd ? define : function(factory) { module.exports = factory(); }));

},{}],107:[function(require,module,exports){
/** @license MIT License (c) copyright 2010-2014 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

(function(define) { 'use strict';
define(function(require) {

	var inspect = require('../state').inspect;

	return function inspection(Promise) {

		Promise.prototype.inspect = function() {
			return inspect(Promise._handler(this));
		};

		return Promise;
	};

});
}(typeof define === 'function' && define.amd ? define : function(factory) { module.exports = factory(require); }));

},{"../state":116}],108:[function(require,module,exports){
/** @license MIT License (c) copyright 2010-2014 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

(function(define) { 'use strict';
define(function() {

	return function generate(Promise) {

		var resolve = Promise.resolve;

		Promise.iterate = iterate;
		Promise.unfold = unfold;

		return Promise;

		/**
		 * @deprecated Use github.com/cujojs/most streams and most.iterate
		 * Generate a (potentially infinite) stream of promised values:
		 * x, f(x), f(f(x)), etc. until condition(x) returns true
		 * @param {function} f function to generate a new x from the previous x
		 * @param {function} condition function that, given the current x, returns
		 *  truthy when the iterate should stop
		 * @param {function} handler function to handle the value produced by f
		 * @param {*|Promise} x starting value, may be a promise
		 * @return {Promise} the result of the last call to f before
		 *  condition returns true
		 */
		function iterate(f, condition, handler, x) {
			return unfold(function(x) {
				return [x, f(x)];
			}, condition, handler, x);
		}

		/**
		 * @deprecated Use github.com/cujojs/most streams and most.unfold
		 * Generate a (potentially infinite) stream of promised values
		 * by applying handler(generator(seed)) iteratively until
		 * condition(seed) returns true.
		 * @param {function} unspool function that generates a [value, newSeed]
		 *  given a seed.
		 * @param {function} condition function that, given the current seed, returns
		 *  truthy when the unfold should stop
		 * @param {function} handler function to handle the value produced by unspool
		 * @param x {*|Promise} starting value, may be a promise
		 * @return {Promise} the result of the last value produced by unspool before
		 *  condition returns true
		 */
		function unfold(unspool, condition, handler, x) {
			return resolve(x).then(function(seed) {
				return resolve(condition(seed)).then(function(done) {
					return done ? seed : resolve(unspool(seed)).spread(next);
				});
			});

			function next(item, newSeed) {
				return resolve(handler(item)).then(function() {
					return unfold(unspool, condition, handler, newSeed);
				});
			}
		}
	};

});
}(typeof define === 'function' && define.amd ? define : function(factory) { module.exports = factory(); }));

},{}],109:[function(require,module,exports){
/** @license MIT License (c) copyright 2010-2014 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

(function(define) { 'use strict';
define(function() {

	return function progress(Promise) {

		/**
		 * @deprecated
		 * Register a progress handler for this promise
		 * @param {function} onProgress
		 * @returns {Promise}
		 */
		Promise.prototype.progress = function(onProgress) {
			return this.then(void 0, void 0, onProgress);
		};

		return Promise;
	};

});
}(typeof define === 'function' && define.amd ? define : function(factory) { module.exports = factory(); }));

},{}],110:[function(require,module,exports){
/** @license MIT License (c) copyright 2010-2014 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

(function(define) { 'use strict';
define(function(require) {

	var env = require('../env');
	var TimeoutError = require('../TimeoutError');

	function setTimeout(f, ms, x, y) {
		return env.setTimer(function() {
			f(x, y, ms);
		}, ms);
	}

	return function timed(Promise) {
		/**
		 * Return a new promise whose fulfillment value is revealed only
		 * after ms milliseconds
		 * @param {number} ms milliseconds
		 * @returns {Promise}
		 */
		Promise.prototype.delay = function(ms) {
			var p = this._beget();
			this._handler.fold(handleDelay, ms, void 0, p._handler);
			return p;
		};

		function handleDelay(ms, x, h) {
			setTimeout(resolveDelay, ms, x, h);
		}

		function resolveDelay(x, h) {
			h.resolve(x);
		}

		/**
		 * Return a new promise that rejects after ms milliseconds unless
		 * this promise fulfills earlier, in which case the returned promise
		 * fulfills with the same value.
		 * @param {number} ms milliseconds
		 * @param {Error|*=} reason optional rejection reason to use, defaults
		 *   to a TimeoutError if not provided
		 * @returns {Promise}
		 */
		Promise.prototype.timeout = function(ms, reason) {
			var p = this._beget();
			var h = p._handler;

			var t = setTimeout(onTimeout, ms, reason, p._handler);

			this._handler.visit(h,
				function onFulfill(x) {
					env.clearTimer(t);
					this.resolve(x); // this = h
				},
				function onReject(x) {
					env.clearTimer(t);
					this.reject(x); // this = h
				},
				h.notify);

			return p;
		};

		function onTimeout(reason, h, ms) {
			var e = typeof reason === 'undefined'
				? new TimeoutError('timed out after ' + ms + 'ms')
				: reason;
			h.reject(e);
		}

		return Promise;
	};

});
}(typeof define === 'function' && define.amd ? define : function(factory) { module.exports = factory(require); }));

},{"../TimeoutError":102,"../env":113}],111:[function(require,module,exports){
/** @license MIT License (c) copyright 2010-2014 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

(function(define) { 'use strict';
define(function(require) {

	var setTimer = require('../env').setTimer;
	var format = require('../format');

	return function unhandledRejection(Promise) {

		var logError = noop;
		var logInfo = noop;
		var localConsole;

		if(typeof console !== 'undefined') {
			// Alias console to prevent things like uglify's drop_console option from
			// removing console.log/error. Unhandled rejections fall into the same
			// category as uncaught exceptions, and build tools shouldn't silence them.
			localConsole = console;
			logError = typeof localConsole.error !== 'undefined'
				? function (e) { localConsole.error(e); }
				: function (e) { localConsole.log(e); };

			logInfo = typeof localConsole.info !== 'undefined'
				? function (e) { localConsole.info(e); }
				: function (e) { localConsole.log(e); };
		}

		Promise.onPotentiallyUnhandledRejection = function(rejection) {
			enqueue(report, rejection);
		};

		Promise.onPotentiallyUnhandledRejectionHandled = function(rejection) {
			enqueue(unreport, rejection);
		};

		Promise.onFatalRejection = function(rejection) {
			enqueue(throwit, rejection.value);
		};

		var tasks = [];
		var reported = [];
		var running = null;

		function report(r) {
			if(!r.handled) {
				reported.push(r);
				logError('Potentially unhandled rejection [' + r.id + '] ' + format.formatError(r.value));
			}
		}

		function unreport(r) {
			var i = reported.indexOf(r);
			if(i >= 0) {
				reported.splice(i, 1);
				logInfo('Handled previous rejection [' + r.id + '] ' + format.formatObject(r.value));
			}
		}

		function enqueue(f, x) {
			tasks.push(f, x);
			if(running === null) {
				running = setTimer(flush, 0);
			}
		}

		function flush() {
			running = null;
			while(tasks.length > 0) {
				tasks.shift()(tasks.shift());
			}
		}

		return Promise;
	};

	function throwit(e) {
		throw e;
	}

	function noop() {}

});
}(typeof define === 'function' && define.amd ? define : function(factory) { module.exports = factory(require); }));

},{"../env":113,"../format":114}],112:[function(require,module,exports){
/** @license MIT License (c) copyright 2010-2014 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

(function(define) { 'use strict';
define(function() {

	return function addWith(Promise) {
		/**
		 * Returns a promise whose handlers will be called with `this` set to
		 * the supplied receiver.  Subsequent promises derived from the
		 * returned promise will also have their handlers called with receiver
		 * as `this`. Calling `with` with undefined or no arguments will return
		 * a promise whose handlers will again be called in the usual Promises/A+
		 * way (no `this`) thus safely undoing any previous `with` in the
		 * promise chain.
		 *
		 * WARNING: Promises returned from `with`/`withThis` are NOT Promises/A+
		 * compliant, specifically violating 2.2.5 (http://promisesaplus.com/#point-41)
		 *
		 * @param {object} receiver `this` value for all handlers attached to
		 *  the returned promise.
		 * @returns {Promise}
		 */
		Promise.prototype['with'] = Promise.prototype.withThis = function(receiver) {
			var p = this._beget();
			var child = p._handler;
			child.receiver = receiver;
			this._handler.chain(child, receiver);
			return p;
		};

		return Promise;
	};

});
}(typeof define === 'function' && define.amd ? define : function(factory) { module.exports = factory(); }));


},{}],113:[function(require,module,exports){
(function (process){
/** @license MIT License (c) copyright 2010-2014 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

/*global process,document,setTimeout,clearTimeout,MutationObserver,WebKitMutationObserver*/
(function(define) { 'use strict';
define(function(require) {
	/*jshint maxcomplexity:6*/

	// Sniff "best" async scheduling option
	// Prefer process.nextTick or MutationObserver, then check for
	// setTimeout, and finally vertx, since its the only env that doesn't
	// have setTimeout

	var MutationObs;
	var capturedSetTimeout = typeof setTimeout !== 'undefined' && setTimeout;

	// Default env
	var setTimer = function(f, ms) { return setTimeout(f, ms); };
	var clearTimer = function(t) { return clearTimeout(t); };
	var asap = function (f) { return capturedSetTimeout(f, 0); };

	// Detect specific env
	if (isNode()) { // Node
		asap = function (f) { return process.nextTick(f); };

	} else if (MutationObs = hasMutationObserver()) { // Modern browser
		asap = initMutationObserver(MutationObs);

	} else if (!capturedSetTimeout) { // vert.x
		var vertxRequire = require;
		var vertx = vertxRequire('vertx');
		setTimer = function (f, ms) { return vertx.setTimer(ms, f); };
		clearTimer = vertx.cancelTimer;
		asap = vertx.runOnLoop || vertx.runOnContext;
	}

	return {
		setTimer: setTimer,
		clearTimer: clearTimer,
		asap: asap
	};

	function isNode () {
		return typeof process !== 'undefined' &&
			Object.prototype.toString.call(process) === '[object process]';
	}

	function hasMutationObserver () {
		return (typeof MutationObserver === 'function' && MutationObserver) ||
			(typeof WebKitMutationObserver === 'function' && WebKitMutationObserver);
	}

	function initMutationObserver(MutationObserver) {
		var scheduled;
		var node = document.createTextNode('');
		var o = new MutationObserver(run);
		o.observe(node, { characterData: true });

		function run() {
			var f = scheduled;
			scheduled = void 0;
			f();
		}

		var i = 0;
		return function (f) {
			scheduled = f;
			node.data = (i ^= 1);
		};
	}
});
}(typeof define === 'function' && define.amd ? define : function(factory) { module.exports = factory(require); }));

}).call(this,require('_process'))
},{"_process":88}],114:[function(require,module,exports){
/** @license MIT License (c) copyright 2010-2014 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

(function(define) { 'use strict';
define(function() {

	return {
		formatError: formatError,
		formatObject: formatObject,
		tryStringify: tryStringify
	};

	/**
	 * Format an error into a string.  If e is an Error and has a stack property,
	 * it's returned.  Otherwise, e is formatted using formatObject, with a
	 * warning added about e not being a proper Error.
	 * @param {*} e
	 * @returns {String} formatted string, suitable for output to developers
	 */
	function formatError(e) {
		var s = typeof e === 'object' && e !== null && (e.stack || e.message) ? e.stack || e.message : formatObject(e);
		return e instanceof Error ? s : s + ' (WARNING: non-Error used)';
	}

	/**
	 * Format an object, detecting "plain" objects and running them through
	 * JSON.stringify if possible.
	 * @param {Object} o
	 * @returns {string}
	 */
	function formatObject(o) {
		var s = String(o);
		if(s === '[object Object]' && typeof JSON !== 'undefined') {
			s = tryStringify(o, s);
		}
		return s;
	}

	/**
	 * Try to return the result of JSON.stringify(x).  If that fails, return
	 * defaultValue
	 * @param {*} x
	 * @param {*} defaultValue
	 * @returns {String|*} JSON.stringify(x) or defaultValue
	 */
	function tryStringify(x, defaultValue) {
		try {
			return JSON.stringify(x);
		} catch(e) {
			return defaultValue;
		}
	}

});
}(typeof define === 'function' && define.amd ? define : function(factory) { module.exports = factory(); }));

},{}],115:[function(require,module,exports){
(function (process){
/** @license MIT License (c) copyright 2010-2014 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

(function(define) { 'use strict';
define(function() {

	return function makePromise(environment) {

		var tasks = environment.scheduler;
		var emitRejection = initEmitRejection();

		var objectCreate = Object.create ||
			function(proto) {
				function Child() {}
				Child.prototype = proto;
				return new Child();
			};

		/**
		 * Create a promise whose fate is determined by resolver
		 * @constructor
		 * @returns {Promise} promise
		 * @name Promise
		 */
		function Promise(resolver, handler) {
			this._handler = resolver === Handler ? handler : init(resolver);
		}

		/**
		 * Run the supplied resolver
		 * @param resolver
		 * @returns {Pending}
		 */
		function init(resolver) {
			var handler = new Pending();

			try {
				resolver(promiseResolve, promiseReject, promiseNotify);
			} catch (e) {
				promiseReject(e);
			}

			return handler;

			/**
			 * Transition from pre-resolution state to post-resolution state, notifying
			 * all listeners of the ultimate fulfillment or rejection
			 * @param {*} x resolution value
			 */
			function promiseResolve (x) {
				handler.resolve(x);
			}
			/**
			 * Reject this promise with reason, which will be used verbatim
			 * @param {Error|*} reason rejection reason, strongly suggested
			 *   to be an Error type
			 */
			function promiseReject (reason) {
				handler.reject(reason);
			}

			/**
			 * @deprecated
			 * Issue a progress event, notifying all progress listeners
			 * @param {*} x progress event payload to pass to all listeners
			 */
			function promiseNotify (x) {
				handler.notify(x);
			}
		}

		// Creation

		Promise.resolve = resolve;
		Promise.reject = reject;
		Promise.never = never;

		Promise._defer = defer;
		Promise._handler = getHandler;

		/**
		 * Returns a trusted promise. If x is already a trusted promise, it is
		 * returned, otherwise returns a new trusted Promise which follows x.
		 * @param  {*} x
		 * @return {Promise} promise
		 */
		function resolve(x) {
			return isPromise(x) ? x
				: new Promise(Handler, new Async(getHandler(x)));
		}

		/**
		 * Return a reject promise with x as its reason (x is used verbatim)
		 * @param {*} x
		 * @returns {Promise} rejected promise
		 */
		function reject(x) {
			return new Promise(Handler, new Async(new Rejected(x)));
		}

		/**
		 * Return a promise that remains pending forever
		 * @returns {Promise} forever-pending promise.
		 */
		function never() {
			return foreverPendingPromise; // Should be frozen
		}

		/**
		 * Creates an internal {promise, resolver} pair
		 * @private
		 * @returns {Promise}
		 */
		function defer() {
			return new Promise(Handler, new Pending());
		}

		// Transformation and flow control

		/**
		 * Transform this promise's fulfillment value, returning a new Promise
		 * for the transformed result.  If the promise cannot be fulfilled, onRejected
		 * is called with the reason.  onProgress *may* be called with updates toward
		 * this promise's fulfillment.
		 * @param {function=} onFulfilled fulfillment handler
		 * @param {function=} onRejected rejection handler
		 * @param {function=} onProgress @deprecated progress handler
		 * @return {Promise} new promise
		 */
		Promise.prototype.then = function(onFulfilled, onRejected, onProgress) {
			var parent = this._handler;
			var state = parent.join().state();

			if ((typeof onFulfilled !== 'function' && state > 0) ||
				(typeof onRejected !== 'function' && state < 0)) {
				// Short circuit: value will not change, simply share handler
				return new this.constructor(Handler, parent);
			}

			var p = this._beget();
			var child = p._handler;

			parent.chain(child, parent.receiver, onFulfilled, onRejected, onProgress);

			return p;
		};

		/**
		 * If this promise cannot be fulfilled due to an error, call onRejected to
		 * handle the error. Shortcut for .then(undefined, onRejected)
		 * @param {function?} onRejected
		 * @return {Promise}
		 */
		Promise.prototype['catch'] = function(onRejected) {
			return this.then(void 0, onRejected);
		};

		/**
		 * Creates a new, pending promise of the same type as this promise
		 * @private
		 * @returns {Promise}
		 */
		Promise.prototype._beget = function() {
			return begetFrom(this._handler, this.constructor);
		};

		function begetFrom(parent, Promise) {
			var child = new Pending(parent.receiver, parent.join().context);
			return new Promise(Handler, child);
		}

		// Array combinators

		Promise.all = all;
		Promise.race = race;
		Promise._traverse = traverse;

		/**
		 * Return a promise that will fulfill when all promises in the
		 * input array have fulfilled, or will reject when one of the
		 * promises rejects.
		 * @param {array} promises array of promises
		 * @returns {Promise} promise for array of fulfillment values
		 */
		function all(promises) {
			return traverseWith(snd, null, promises);
		}

		/**
		 * Array<Promise<X>> -> Promise<Array<f(X)>>
		 * @private
		 * @param {function} f function to apply to each promise's value
		 * @param {Array} promises array of promises
		 * @returns {Promise} promise for transformed values
		 */
		function traverse(f, promises) {
			return traverseWith(tryCatch2, f, promises);
		}

		function traverseWith(tryMap, f, promises) {
			var handler = typeof f === 'function' ? mapAt : settleAt;

			var resolver = new Pending();
			var pending = promises.length >>> 0;
			var results = new Array(pending);

			for (var i = 0, x; i < promises.length && !resolver.resolved; ++i) {
				x = promises[i];

				if (x === void 0 && !(i in promises)) {
					--pending;
					continue;
				}

				traverseAt(promises, handler, i, x, resolver);
			}

			if(pending === 0) {
				resolver.become(new Fulfilled(results));
			}

			return new Promise(Handler, resolver);

			function mapAt(i, x, resolver) {
				if(!resolver.resolved) {
					traverseAt(promises, settleAt, i, tryMap(f, x, i), resolver);
				}
			}

			function settleAt(i, x, resolver) {
				results[i] = x;
				if(--pending === 0) {
					resolver.become(new Fulfilled(results));
				}
			}
		}

		function traverseAt(promises, handler, i, x, resolver) {
			if (maybeThenable(x)) {
				var h = getHandlerMaybeThenable(x);
				var s = h.state();

				if (s === 0) {
					h.fold(handler, i, void 0, resolver);
				} else if (s > 0) {
					handler(i, h.value, resolver);
				} else {
					resolver.become(h);
					visitRemaining(promises, i+1, h);
				}
			} else {
				handler(i, x, resolver);
			}
		}

		Promise._visitRemaining = visitRemaining;
		function visitRemaining(promises, start, handler) {
			for(var i=start; i<promises.length; ++i) {
				markAsHandled(getHandler(promises[i]), handler);
			}
		}

		function markAsHandled(h, handler) {
			if(h === handler) {
				return;
			}

			var s = h.state();
			if(s === 0) {
				h.visit(h, void 0, h._unreport);
			} else if(s < 0) {
				h._unreport();
			}
		}

		/**
		 * Fulfill-reject competitive race. Return a promise that will settle
		 * to the same state as the earliest input promise to settle.
		 *
		 * WARNING: The ES6 Promise spec requires that race()ing an empty array
		 * must return a promise that is pending forever.  This implementation
		 * returns a singleton forever-pending promise, the same singleton that is
		 * returned by Promise.never(), thus can be checked with ===
		 *
		 * @param {array} promises array of promises to race
		 * @returns {Promise} if input is non-empty, a promise that will settle
		 * to the same outcome as the earliest input promise to settle. if empty
		 * is empty, returns a promise that will never settle.
		 */
		function race(promises) {
			if(typeof promises !== 'object' || promises === null) {
				return reject(new TypeError('non-iterable passed to race()'));
			}

			// Sigh, race([]) is untestable unless we return *something*
			// that is recognizable without calling .then() on it.
			return promises.length === 0 ? never()
				 : promises.length === 1 ? resolve(promises[0])
				 : runRace(promises);
		}

		function runRace(promises) {
			var resolver = new Pending();
			var i, x, h;
			for(i=0; i<promises.length; ++i) {
				x = promises[i];
				if (x === void 0 && !(i in promises)) {
					continue;
				}

				h = getHandler(x);
				if(h.state() !== 0) {
					resolver.become(h);
					visitRemaining(promises, i+1, h);
					break;
				} else {
					h.visit(resolver, resolver.resolve, resolver.reject);
				}
			}
			return new Promise(Handler, resolver);
		}

		// Promise internals
		// Below this, everything is @private

		/**
		 * Get an appropriate handler for x, without checking for cycles
		 * @param {*} x
		 * @returns {object} handler
		 */
		function getHandler(x) {
			if(isPromise(x)) {
				return x._handler.join();
			}
			return maybeThenable(x) ? getHandlerUntrusted(x) : new Fulfilled(x);
		}

		/**
		 * Get a handler for thenable x.
		 * NOTE: You must only call this if maybeThenable(x) == true
		 * @param {object|function|Promise} x
		 * @returns {object} handler
		 */
		function getHandlerMaybeThenable(x) {
			return isPromise(x) ? x._handler.join() : getHandlerUntrusted(x);
		}

		/**
		 * Get a handler for potentially untrusted thenable x
		 * @param {*} x
		 * @returns {object} handler
		 */
		function getHandlerUntrusted(x) {
			try {
				var untrustedThen = x.then;
				return typeof untrustedThen === 'function'
					? new Thenable(untrustedThen, x)
					: new Fulfilled(x);
			} catch(e) {
				return new Rejected(e);
			}
		}

		/**
		 * Handler for a promise that is pending forever
		 * @constructor
		 */
		function Handler() {}

		Handler.prototype.when
			= Handler.prototype.become
			= Handler.prototype.notify // deprecated
			= Handler.prototype.fail
			= Handler.prototype._unreport
			= Handler.prototype._report
			= noop;

		Handler.prototype._state = 0;

		Handler.prototype.state = function() {
			return this._state;
		};

		/**
		 * Recursively collapse handler chain to find the handler
		 * nearest to the fully resolved value.
		 * @returns {object} handler nearest the fully resolved value
		 */
		Handler.prototype.join = function() {
			var h = this;
			while(h.handler !== void 0) {
				h = h.handler;
			}
			return h;
		};

		Handler.prototype.chain = function(to, receiver, fulfilled, rejected, progress) {
			this.when({
				resolver: to,
				receiver: receiver,
				fulfilled: fulfilled,
				rejected: rejected,
				progress: progress
			});
		};

		Handler.prototype.visit = function(receiver, fulfilled, rejected, progress) {
			this.chain(failIfRejected, receiver, fulfilled, rejected, progress);
		};

		Handler.prototype.fold = function(f, z, c, to) {
			this.when(new Fold(f, z, c, to));
		};

		/**
		 * Handler that invokes fail() on any handler it becomes
		 * @constructor
		 */
		function FailIfRejected() {}

		inherit(Handler, FailIfRejected);

		FailIfRejected.prototype.become = function(h) {
			h.fail();
		};

		var failIfRejected = new FailIfRejected();

		/**
		 * Handler that manages a queue of consumers waiting on a pending promise
		 * @constructor
		 */
		function Pending(receiver, inheritedContext) {
			Promise.createContext(this, inheritedContext);

			this.consumers = void 0;
			this.receiver = receiver;
			this.handler = void 0;
			this.resolved = false;
		}

		inherit(Handler, Pending);

		Pending.prototype._state = 0;

		Pending.prototype.resolve = function(x) {
			this.become(getHandler(x));
		};

		Pending.prototype.reject = function(x) {
			if(this.resolved) {
				return;
			}

			this.become(new Rejected(x));
		};

		Pending.prototype.join = function() {
			if (!this.resolved) {
				return this;
			}

			var h = this;

			while (h.handler !== void 0) {
				h = h.handler;
				if (h === this) {
					return this.handler = cycle();
				}
			}

			return h;
		};

		Pending.prototype.run = function() {
			var q = this.consumers;
			var handler = this.handler;
			this.handler = this.handler.join();
			this.consumers = void 0;

			for (var i = 0; i < q.length; ++i) {
				handler.when(q[i]);
			}
		};

		Pending.prototype.become = function(handler) {
			if(this.resolved) {
				return;
			}

			this.resolved = true;
			this.handler = handler;
			if(this.consumers !== void 0) {
				tasks.enqueue(this);
			}

			if(this.context !== void 0) {
				handler._report(this.context);
			}
		};

		Pending.prototype.when = function(continuation) {
			if(this.resolved) {
				tasks.enqueue(new ContinuationTask(continuation, this.handler));
			} else {
				if(this.consumers === void 0) {
					this.consumers = [continuation];
				} else {
					this.consumers.push(continuation);
				}
			}
		};

		/**
		 * @deprecated
		 */
		Pending.prototype.notify = function(x) {
			if(!this.resolved) {
				tasks.enqueue(new ProgressTask(x, this));
			}
		};

		Pending.prototype.fail = function(context) {
			var c = typeof context === 'undefined' ? this.context : context;
			this.resolved && this.handler.join().fail(c);
		};

		Pending.prototype._report = function(context) {
			this.resolved && this.handler.join()._report(context);
		};

		Pending.prototype._unreport = function() {
			this.resolved && this.handler.join()._unreport();
		};

		/**
		 * Wrap another handler and force it into a future stack
		 * @param {object} handler
		 * @constructor
		 */
		function Async(handler) {
			this.handler = handler;
		}

		inherit(Handler, Async);

		Async.prototype.when = function(continuation) {
			tasks.enqueue(new ContinuationTask(continuation, this));
		};

		Async.prototype._report = function(context) {
			this.join()._report(context);
		};

		Async.prototype._unreport = function() {
			this.join()._unreport();
		};

		/**
		 * Handler that wraps an untrusted thenable and assimilates it in a future stack
		 * @param {function} then
		 * @param {{then: function}} thenable
		 * @constructor
		 */
		function Thenable(then, thenable) {
			Pending.call(this);
			tasks.enqueue(new AssimilateTask(then, thenable, this));
		}

		inherit(Pending, Thenable);

		/**
		 * Handler for a fulfilled promise
		 * @param {*} x fulfillment value
		 * @constructor
		 */
		function Fulfilled(x) {
			Promise.createContext(this);
			this.value = x;
		}

		inherit(Handler, Fulfilled);

		Fulfilled.prototype._state = 1;

		Fulfilled.prototype.fold = function(f, z, c, to) {
			runContinuation3(f, z, this, c, to);
		};

		Fulfilled.prototype.when = function(cont) {
			runContinuation1(cont.fulfilled, this, cont.receiver, cont.resolver);
		};

		var errorId = 0;

		/**
		 * Handler for a rejected promise
		 * @param {*} x rejection reason
		 * @constructor
		 */
		function Rejected(x) {
			Promise.createContext(this);

			this.id = ++errorId;
			this.value = x;
			this.handled = false;
			this.reported = false;

			this._report();
		}

		inherit(Handler, Rejected);

		Rejected.prototype._state = -1;

		Rejected.prototype.fold = function(f, z, c, to) {
			to.become(this);
		};

		Rejected.prototype.when = function(cont) {
			if(typeof cont.rejected === 'function') {
				this._unreport();
			}
			runContinuation1(cont.rejected, this, cont.receiver, cont.resolver);
		};

		Rejected.prototype._report = function(context) {
			tasks.afterQueue(new ReportTask(this, context));
		};

		Rejected.prototype._unreport = function() {
			if(this.handled) {
				return;
			}
			this.handled = true;
			tasks.afterQueue(new UnreportTask(this));
		};

		Rejected.prototype.fail = function(context) {
			this.reported = true;
			emitRejection('unhandledRejection', this);
			Promise.onFatalRejection(this, context === void 0 ? this.context : context);
		};

		function ReportTask(rejection, context) {
			this.rejection = rejection;
			this.context = context;
		}

		ReportTask.prototype.run = function() {
			if(!this.rejection.handled && !this.rejection.reported) {
				this.rejection.reported = true;
				emitRejection('unhandledRejection', this.rejection) ||
					Promise.onPotentiallyUnhandledRejection(this.rejection, this.context);
			}
		};

		function UnreportTask(rejection) {
			this.rejection = rejection;
		}

		UnreportTask.prototype.run = function() {
			if(this.rejection.reported) {
				emitRejection('rejectionHandled', this.rejection) ||
					Promise.onPotentiallyUnhandledRejectionHandled(this.rejection);
			}
		};

		// Unhandled rejection hooks
		// By default, everything is a noop

		Promise.createContext
			= Promise.enterContext
			= Promise.exitContext
			= Promise.onPotentiallyUnhandledRejection
			= Promise.onPotentiallyUnhandledRejectionHandled
			= Promise.onFatalRejection
			= noop;

		// Errors and singletons

		var foreverPendingHandler = new Handler();
		var foreverPendingPromise = new Promise(Handler, foreverPendingHandler);

		function cycle() {
			return new Rejected(new TypeError('Promise cycle'));
		}

		// Task runners

		/**
		 * Run a single consumer
		 * @constructor
		 */
		function ContinuationTask(continuation, handler) {
			this.continuation = continuation;
			this.handler = handler;
		}

		ContinuationTask.prototype.run = function() {
			this.handler.join().when(this.continuation);
		};

		/**
		 * Run a queue of progress handlers
		 * @constructor
		 */
		function ProgressTask(value, handler) {
			this.handler = handler;
			this.value = value;
		}

		ProgressTask.prototype.run = function() {
			var q = this.handler.consumers;
			if(q === void 0) {
				return;
			}

			for (var c, i = 0; i < q.length; ++i) {
				c = q[i];
				runNotify(c.progress, this.value, this.handler, c.receiver, c.resolver);
			}
		};

		/**
		 * Assimilate a thenable, sending it's value to resolver
		 * @param {function} then
		 * @param {object|function} thenable
		 * @param {object} resolver
		 * @constructor
		 */
		function AssimilateTask(then, thenable, resolver) {
			this._then = then;
			this.thenable = thenable;
			this.resolver = resolver;
		}

		AssimilateTask.prototype.run = function() {
			var h = this.resolver;
			tryAssimilate(this._then, this.thenable, _resolve, _reject, _notify);

			function _resolve(x) { h.resolve(x); }
			function _reject(x)  { h.reject(x); }
			function _notify(x)  { h.notify(x); }
		};

		function tryAssimilate(then, thenable, resolve, reject, notify) {
			try {
				then.call(thenable, resolve, reject, notify);
			} catch (e) {
				reject(e);
			}
		}

		/**
		 * Fold a handler value with z
		 * @constructor
		 */
		function Fold(f, z, c, to) {
			this.f = f; this.z = z; this.c = c; this.to = to;
			this.resolver = failIfRejected;
			this.receiver = this;
		}

		Fold.prototype.fulfilled = function(x) {
			this.f.call(this.c, this.z, x, this.to);
		};

		Fold.prototype.rejected = function(x) {
			this.to.reject(x);
		};

		Fold.prototype.progress = function(x) {
			this.to.notify(x);
		};

		// Other helpers

		/**
		 * @param {*} x
		 * @returns {boolean} true iff x is a trusted Promise
		 */
		function isPromise(x) {
			return x instanceof Promise;
		}

		/**
		 * Test just enough to rule out primitives, in order to take faster
		 * paths in some code
		 * @param {*} x
		 * @returns {boolean} false iff x is guaranteed *not* to be a thenable
		 */
		function maybeThenable(x) {
			return (typeof x === 'object' || typeof x === 'function') && x !== null;
		}

		function runContinuation1(f, h, receiver, next) {
			if(typeof f !== 'function') {
				return next.become(h);
			}

			Promise.enterContext(h);
			tryCatchReject(f, h.value, receiver, next);
			Promise.exitContext();
		}

		function runContinuation3(f, x, h, receiver, next) {
			if(typeof f !== 'function') {
				return next.become(h);
			}

			Promise.enterContext(h);
			tryCatchReject3(f, x, h.value, receiver, next);
			Promise.exitContext();
		}

		/**
		 * @deprecated
		 */
		function runNotify(f, x, h, receiver, next) {
			if(typeof f !== 'function') {
				return next.notify(x);
			}

			Promise.enterContext(h);
			tryCatchReturn(f, x, receiver, next);
			Promise.exitContext();
		}

		function tryCatch2(f, a, b) {
			try {
				return f(a, b);
			} catch(e) {
				return reject(e);
			}
		}

		/**
		 * Return f.call(thisArg, x), or if it throws return a rejected promise for
		 * the thrown exception
		 */
		function tryCatchReject(f, x, thisArg, next) {
			try {
				next.become(getHandler(f.call(thisArg, x)));
			} catch(e) {
				next.become(new Rejected(e));
			}
		}

		/**
		 * Same as above, but includes the extra argument parameter.
		 */
		function tryCatchReject3(f, x, y, thisArg, next) {
			try {
				f.call(thisArg, x, y, next);
			} catch(e) {
				next.become(new Rejected(e));
			}
		}

		/**
		 * @deprecated
		 * Return f.call(thisArg, x), or if it throws, *return* the exception
		 */
		function tryCatchReturn(f, x, thisArg, next) {
			try {
				next.notify(f.call(thisArg, x));
			} catch(e) {
				next.notify(e);
			}
		}

		function inherit(Parent, Child) {
			Child.prototype = objectCreate(Parent.prototype);
			Child.prototype.constructor = Child;
		}

		function snd(x, y) {
			return y;
		}

		function noop() {}

		function initEmitRejection() {
			/*global process, self, CustomEvent*/
			if(typeof process !== 'undefined' && process !== null
				&& typeof process.emit === 'function') {
				// Returning falsy here means to call the default
				// onPotentiallyUnhandledRejection API.  This is safe even in
				// browserify since process.emit always returns falsy in browserify:
				// https://github.com/defunctzombie/node-process/blob/master/browser.js#L40-L46
				return function(type, rejection) {
					return type === 'unhandledRejection'
						? process.emit(type, rejection.value, rejection)
						: process.emit(type, rejection);
				};
			} else if(typeof self !== 'undefined' && typeof CustomEvent === 'function') {
				return (function(noop, self, CustomEvent) {
					var hasCustomEvent = false;
					try {
						var ev = new CustomEvent('unhandledRejection');
						hasCustomEvent = ev instanceof CustomEvent;
					} catch (e) {}

					return !hasCustomEvent ? noop : function(type, rejection) {
						var ev = new CustomEvent(type, {
							detail: {
								reason: rejection.value,
								key: rejection
							},
							bubbles: false,
							cancelable: true
						});

						return !self.dispatchEvent(ev);
					};
				}(noop, self, CustomEvent));
			}

			return noop;
		}

		return Promise;
	};
});
}(typeof define === 'function' && define.amd ? define : function(factory) { module.exports = factory(); }));

}).call(this,require('_process'))
},{"_process":88}],116:[function(require,module,exports){
/** @license MIT License (c) copyright 2010-2014 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

(function(define) { 'use strict';
define(function() {

	return {
		pending: toPendingState,
		fulfilled: toFulfilledState,
		rejected: toRejectedState,
		inspect: inspect
	};

	function toPendingState() {
		return { state: 'pending' };
	}

	function toRejectedState(e) {
		return { state: 'rejected', reason: e };
	}

	function toFulfilledState(x) {
		return { state: 'fulfilled', value: x };
	}

	function inspect(handler) {
		var state = handler.state();
		return state === 0 ? toPendingState()
			 : state > 0   ? toFulfilledState(handler.value)
			               : toRejectedState(handler.value);
	}

});
}(typeof define === 'function' && define.amd ? define : function(factory) { module.exports = factory(); }));

},{}],117:[function(require,module,exports){
/** @license MIT License (c) copyright 2010-2014 original author or authors */

/**
 * Promises/A+ and when() implementation
 * when is part of the cujoJS family of libraries (http://cujojs.com/)
 * @author Brian Cavalier
 * @author John Hann
 */
(function(define) { 'use strict';
define(function (require) {

	var timed = require('./lib/decorators/timed');
	var array = require('./lib/decorators/array');
	var flow = require('./lib/decorators/flow');
	var fold = require('./lib/decorators/fold');
	var inspect = require('./lib/decorators/inspect');
	var generate = require('./lib/decorators/iterate');
	var progress = require('./lib/decorators/progress');
	var withThis = require('./lib/decorators/with');
	var unhandledRejection = require('./lib/decorators/unhandledRejection');
	var TimeoutError = require('./lib/TimeoutError');

	var Promise = [array, flow, fold, generate, progress,
		inspect, withThis, timed, unhandledRejection]
		.reduce(function(Promise, feature) {
			return feature(Promise);
		}, require('./lib/Promise'));

	var apply = require('./lib/apply')(Promise);

	// Public API

	when.promise     = promise;              // Create a pending promise
	when.resolve     = Promise.resolve;      // Create a resolved promise
	when.reject      = Promise.reject;       // Create a rejected promise

	when.lift        = lift;                 // lift a function to return promises
	when['try']      = attempt;              // call a function and return a promise
	when.attempt     = attempt;              // alias for when.try

	when.iterate     = Promise.iterate;      // DEPRECATED (use cujojs/most streams) Generate a stream of promises
	when.unfold      = Promise.unfold;       // DEPRECATED (use cujojs/most streams) Generate a stream of promises

	when.join        = join;                 // Join 2 or more promises

	when.all         = all;                  // Resolve a list of promises
	when.settle      = settle;               // Settle a list of promises

	when.any         = lift(Promise.any);    // One-winner race
	when.some        = lift(Promise.some);   // Multi-winner race
	when.race        = lift(Promise.race);   // First-to-settle race

	when.map         = map;                  // Array.map() for promises
	when.filter      = filter;               // Array.filter() for promises
	when.reduce      = lift(Promise.reduce);       // Array.reduce() for promises
	when.reduceRight = lift(Promise.reduceRight);  // Array.reduceRight() for promises

	when.isPromiseLike = isPromiseLike;      // Is something promise-like, aka thenable

	when.Promise     = Promise;              // Promise constructor
	when.defer       = defer;                // Create a {promise, resolve, reject} tuple

	// Error types

	when.TimeoutError = TimeoutError;

	/**
	 * Get a trusted promise for x, or by transforming x with onFulfilled
	 *
	 * @param {*} x
	 * @param {function?} onFulfilled callback to be called when x is
	 *   successfully fulfilled.  If promiseOrValue is an immediate value, callback
	 *   will be invoked immediately.
	 * @param {function?} onRejected callback to be called when x is
	 *   rejected.
	 * @param {function?} onProgress callback to be called when progress updates
	 *   are issued for x. @deprecated
	 * @returns {Promise} a new promise that will fulfill with the return
	 *   value of callback or errback or the completion value of promiseOrValue if
	 *   callback and/or errback is not supplied.
	 */
	function when(x, onFulfilled, onRejected, onProgress) {
		var p = Promise.resolve(x);
		if (arguments.length < 2) {
			return p;
		}

		return p.then(onFulfilled, onRejected, onProgress);
	}

	/**
	 * Creates a new promise whose fate is determined by resolver.
	 * @param {function} resolver function(resolve, reject, notify)
	 * @returns {Promise} promise whose fate is determine by resolver
	 */
	function promise(resolver) {
		return new Promise(resolver);
	}

	/**
	 * Lift the supplied function, creating a version of f that returns
	 * promises, and accepts promises as arguments.
	 * @param {function} f
	 * @returns {Function} version of f that returns promises
	 */
	function lift(f) {
		return function() {
			for(var i=0, l=arguments.length, a=new Array(l); i<l; ++i) {
				a[i] = arguments[i];
			}
			return apply(f, this, a);
		};
	}

	/**
	 * Call f in a future turn, with the supplied args, and return a promise
	 * for the result.
	 * @param {function} f
	 * @returns {Promise}
	 */
	function attempt(f /*, args... */) {
		/*jshint validthis:true */
		for(var i=0, l=arguments.length-1, a=new Array(l); i<l; ++i) {
			a[i] = arguments[i+1];
		}
		return apply(f, this, a);
	}

	/**
	 * Creates a {promise, resolver} pair, either or both of which
	 * may be given out safely to consumers.
	 * @return {{promise: Promise, resolve: function, reject: function, notify: function}}
	 */
	function defer() {
		return new Deferred();
	}

	function Deferred() {
		var p = Promise._defer();

		function resolve(x) { p._handler.resolve(x); }
		function reject(x) { p._handler.reject(x); }
		function notify(x) { p._handler.notify(x); }

		this.promise = p;
		this.resolve = resolve;
		this.reject = reject;
		this.notify = notify;
		this.resolver = { resolve: resolve, reject: reject, notify: notify };
	}

	/**
	 * Determines if x is promise-like, i.e. a thenable object
	 * NOTE: Will return true for *any thenable object*, and isn't truly
	 * safe, since it may attempt to access the `then` property of x (i.e.
	 *  clever/malicious getters may do weird things)
	 * @param {*} x anything
	 * @returns {boolean} true if x is promise-like
	 */
	function isPromiseLike(x) {
		return x && typeof x.then === 'function';
	}

	/**
	 * Return a promise that will resolve only once all the supplied arguments
	 * have resolved. The resolution value of the returned promise will be an array
	 * containing the resolution values of each of the arguments.
	 * @param {...*} arguments may be a mix of promises and values
	 * @returns {Promise}
	 */
	function join(/* ...promises */) {
		return Promise.all(arguments);
	}

	/**
	 * Return a promise that will fulfill once all input promises have
	 * fulfilled, or reject when any one input promise rejects.
	 * @param {array|Promise} promises array (or promise for an array) of promises
	 * @returns {Promise}
	 */
	function all(promises) {
		return when(promises, Promise.all);
	}

	/**
	 * Return a promise that will always fulfill with an array containing
	 * the outcome states of all input promises.  The returned promise
	 * will only reject if `promises` itself is a rejected promise.
	 * @param {array|Promise} promises array (or promise for an array) of promises
	 * @returns {Promise} promise for array of settled state descriptors
	 */
	function settle(promises) {
		return when(promises, Promise.settle);
	}

	/**
	 * Promise-aware array map function, similar to `Array.prototype.map()`,
	 * but input array may contain promises or values.
	 * @param {Array|Promise} promises array of anything, may contain promises and values
	 * @param {function(x:*, index:Number):*} mapFunc map function which may
	 *  return a promise or value
	 * @returns {Promise} promise that will fulfill with an array of mapped values
	 *  or reject if any input promise rejects.
	 */
	function map(promises, mapFunc) {
		return when(promises, function(promises) {
			return Promise.map(promises, mapFunc);
		});
	}

	/**
	 * Filter the provided array of promises using the provided predicate.  Input may
	 * contain promises and values
	 * @param {Array|Promise} promises array of promises and values
	 * @param {function(x:*, index:Number):boolean} predicate filtering predicate.
	 *  Must return truthy (or promise for truthy) for items to retain.
	 * @returns {Promise} promise that will fulfill with an array containing all items
	 *  for which predicate returned truthy.
	 */
	function filter(promises, predicate) {
		return when(promises, function(promises) {
			return Promise.filter(promises, predicate);
		});
	}

	return when;
});
})(typeof define === 'function' && define.amd ? define : function (factory) { module.exports = factory(require); });

},{"./lib/Promise":100,"./lib/TimeoutError":102,"./lib/apply":103,"./lib/decorators/array":104,"./lib/decorators/flow":105,"./lib/decorators/fold":106,"./lib/decorators/inspect":107,"./lib/decorators/iterate":108,"./lib/decorators/progress":109,"./lib/decorators/timed":110,"./lib/decorators/unhandledRejection":111,"./lib/decorators/with":112}],118:[function(require,module,exports){

/**
 * Module dependencies.
 */

var global = (function() { return this; })();

/**
 * WebSocket constructor.
 */

var WebSocket = global.WebSocket || global.MozWebSocket;

/**
 * Module exports.
 */

module.exports = WebSocket ? ws : null;

/**
 * WebSocket constructor.
 *
 * The third `opts` options object gets ignored in web browsers, since it's
 * non-standard, and throws a TypeError if passed to the constructor.
 * See: https://github.com/einaros/ws/issues/227
 *
 * @param {String} uri
 * @param {Array} protocols (optional)
 * @param {Object) opts (optional)
 * @api public
 */

function ws(uri, protocols, opts) {
  var instance;
  if (protocols) {
    instance = new WebSocket(uri, protocols);
  } else {
    instance = new WebSocket(uri);
  }
  return instance;
}

if (WebSocket) ws.prototype = WebSocket.prototype;

},{}]},{},[66]);
