#include "MePS2.h"
#include "MeSerial.h"
#include "Arduino.h"
#include "MePort.h"
#include "SoftwareSerial.h"
#include "MeMCore.h"
MeDCMotor MotorL(M1);
MeDCMotor MotorR(M2);
MePS2 MePS2(PORT_5);               //使用MCore装在PORT_5
void Forward()                     //前进
{
  MotorL.run(-200);
  MotorR.run(200);
}

void Backward()                    //后退
{
  MotorL.run(200);
  MotorR.run(-200);
}

void TurnLeft()                    //左转
{
  MotorL.run(-200/4);
  MotorR.run(200);
}

void TurnRight()                   //右转
{
  MotorL.run(-200);
  MotorR.run(200/4);
}

void Stop()                        //停止
{
   MotorL.run(0);
   MotorR.run(0);
}

void setup()
{
  MePS2.begin(115200);              //设置串口波特率
  Stop();
}

void loop()
{
  MePS2.loop();
  if(MePS2.ButtonPressed(UP))         //若按下UP
  {
    Forward();                        //前进
  }
  if(MePS2.ButtonPressed(DOWN))   //若按下DOWN 
  {

    Backward();                       //后退
  }
  if(MePS2.ButtonPressed(LEFT))  //若按下LEFT
  {

    TurnLeft();                       //左转
  }
  if(MePS2.ButtonPressed(RIGHT)) //若按下RIGHT
  {
    TurnRight();                      //右转
  }
  else                                //若什么都不按
  {
    Stop();                           //停止
  }
}
