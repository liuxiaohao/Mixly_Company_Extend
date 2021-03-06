﻿///<jscompress sourcefile="BT_Blocks.js" />
'use strict';

goog.provide('Blockly.Blocks.Microduino');

goog.require('Blockly.Blocks');


// var colorSet=230;
var colorSet='#6c91ac';

var mCookie_PORTS =[[Blockly.newMicroduinoBT, "0"],[Blockly.oldmCookie, "1"], [Blockly.oldMicroduino, "2"]];

Blockly.Blocks.bluetoothMicroduinoBegin = {

  init: function() {
    this.setColour(colorSet);

    this.appendDummyInput("")
        .appendField(new Blockly.FieldImage("../../media/Microduino/mCookie_BT.png", 45, 32))
        .appendTitle(Blockly.bluePrepare)
        .appendTitle(Blockly.productType)
        .appendTitle(new Blockly.FieldDropdown(mCookie_PORTS), "PIN");

    this.setPreviousStatement(true);
    this.setNextStatement(true);


  }
};


Blockly.Blocks.bluetoothMicroduinoReciver = {
  init: function() {
    this.setColour(colorSet);
    this.appendDummyInput("")
        .appendField(new Blockly.FieldImage("../../media/Microduino/mCookie_BT.png", 45, 32))
        .appendTitle(Blockly.microduinoBlueReciver);
    
    this.appendStatementInput("reciverDataInput");

    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};


Blockly.Blocks.btMicroduinoReciverData = {

  init: function() {
    this.setColour(colorSet);
    this.appendDummyInput("")
        .appendTitle(Blockly.BTReciverData);

	this.setOutput(true, String);
  }
};


Blockly.Blocks.btMicroduinoSenderData = {

  init: function() {
    this.setColour(colorSet);
    this.appendDummyInput("")
        .appendTitle(Blockly.BTSenderData);

    this.appendValueInput('senderText')
        .setCheck(String)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.BTSende);

    this.setPreviousStatement(true);
    this.setNextStatement(true);

  }
};

Blockly.Blocks.bluetoothmtankBegin = {

  init: function() {

    var Type_md_mc = [[Blockly.newMicroduinoBT, "0"],
                 [Blockly.oldmCookie, '1'],
                 [Blockly.oldMicroduino, '2'],
              ];

    this.setColour(colorSet);

    this.appendDummyInput("")
        .appendField(new Blockly.FieldImage("../../media/Microduino/mCookie_BT.png", 45, 32))
        .appendTitle(Blockly.blueMtank)
        .appendTitle(Blockly.productType)
        .appendTitle(new Blockly.FieldDropdown(Type_md_mc), "Type_md_mc");

    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};

Blockly.Blocks.bluetoothmTankReciver = {
  init: function() {
    this.setColour(colorSet);
    this.appendDummyInput("")
        .appendField(new Blockly.FieldImage("../../media/Microduino/mCookie_BT.png", 45, 32))
        .appendTitle(Blockly.mTankBlueReciver);
        
    
    this.appendStatementInput("reciverDataInput");

    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};

Blockly.Blocks.bluetoothmTankdata= {
  init: function() {

  var mTankchooseNumber = [
              [Blockly.mtankDIR1, '0'],
              [Blockly.mTankthr1, '1'],
              [Blockly.mtankDIR2, '2'],
              [Blockly.mTankthr2, '3'],
              ['aux1(1000,2000)', '4'],
              ['aux2(1000,2000)', '5'],
              ['aux3(1000,2000)', '6'],
              ['aux4(1000,2000)', '7'],
              ];


    this.setColour(colorSet);
    this.appendDummyInput("")
        .appendTitle(Blockly.mTankchannel)
        .appendField(new Blockly.FieldDropdown(mTankchooseNumber), 'mTankchooseNumber');

    this.setOutput(true, Number);
  }
};

Blockly.Blocks.bluetoothcolorled = {

  init: function() {
    this.setColour(colorSet);

    this.appendDummyInput("")
        .appendTitle(Blockly.blueled)
        .appendField(new Blockly.FieldImage("../../media/Microduino/mCookie_BT.png", 45, 32))
        .appendTitle(Blockly.ColorLEDControl)
        .appendField(new Blockly.FieldImage("../../media/Microduino/colorLEDBegin.png", 80, 32));

    this.setPreviousStatement(true);
    this.setNextStatement(true);


  }
};


///<jscompress sourcefile="GSM_Blocks.js" />
'use strict';

goog.provide('Blockly.Blocks.Microduino');

goog.require('Blockly.Blocks');

//var colorSet=230;
var colorSet='#6c91ac';

Blockly.Blocks.GSM_SMS = {
  init: function() {
    this.setColour(colorSet);
    this.appendDummyInput("")
         .appendTitle(Blockly.GSM)
         .appendField(new Blockly.FieldImage("../../media/Microduino/GSM.jpg", 45, 32))
         .appendTitle(Blockly.GSM_SMS)
         .appendTitle(new Blockly.FieldTextInput('xxxxxxxxxxx'),'TELNUM')
         .appendTitle(Blockly.GSM_Read);
    this.appendValueInput('text')
        .setCheck(String)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.GSM_CONTENT);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};
///<jscompress sourcefile="IIC_Blocks.js" />
'use strict';

goog.provide('Blockly.Blocks.Microduino');

goog.require('Blockly.Blocks');


// var colorSet=230;
var colorSet='#6c91ac';

Blockly.Blocks.microduinoIICSendToSlaver = {
  init: function() {

    var TYPE = [[Blockly.IICMasterSendTypeString, 'string'],
                [Blockly.IICMasterSendTypeVar, 'var']
                ];

    this.setColour(colorSet);

    this.appendValueInput("numSlaver", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.IICMasterSendToSlaver);

    this.appendDummyInput("")
        .appendTitle(Blockly.IICMasterSendType)
        .appendField(new Blockly.FieldDropdown(TYPE), 'TYPE');

    this.appendValueInput("numByte", String)
        .setCheck(String)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.IICMasterSendData);

    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};


Blockly.Blocks.microduinoIICRequest = {
  init: function() {
    this.setColour(colorSet);

    this.appendValueInput("numSlaver", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.IICMasterTo);

    this.appendValueInput("numByte", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.NumberSlaverRequest);

    this.appendDummyInput("")
        .appendTitle(Blockly.IICByteData);

    this.appendStatementInput("success")
        .appendTitle(Blockly.IICIfSuccess);

    this.appendStatementInput("fail")
        .appendTitle(Blockly.IICIfFail);

    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};


Blockly.Blocks.microduinoIICReadCache = {
  init: function() {
    this.setColour(colorSet);
    this.appendDummyInput("")
        .appendTitle(Blockly.IICReadByte);
    this.setInputsInline(true);
    this.setOutput(true, String);
  }
};


Blockly.Blocks.microduinoIICCacheLen = {
  init: function() {
    this.setColour(colorSet);
    this.appendDummyInput("")
        .appendTitle(Blockly.IICCacheLen);
    this.setInputsInline(true);
    this.setOutput(true, Number);
  }
};

Blockly.Blocks.microduinoIMIICSlaver = {
  init: function() {
    this.setColour(colorSet);

    this.appendValueInput("numSlaver", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.IAMIIC);

    this.appendDummyInput("")
        .appendTitle(Blockly.IICNumberSlaver);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};



Blockly.Blocks.reciverIICMasterRequest = {
  init: function() {
    this.setColour(colorSet);

    this.appendDummyInput("")
        .appendTitle(Blockly.IICReciverMasterRequest);

    this.appendStatementInput("requireEventDo");

    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};

Blockly.Blocks.microduinoIICSendToMaster = {
  init: function() {

    var TYPE = [[Blockly.IICMasterSendTypeString, 'string'],
                [Blockly.IICMasterSendTypeVar, 'var']
                ];

    this.setColour(colorSet);

    this.appendDummyInput("")
        .appendTitle(Blockly.IICMasterSendType)
        .appendField(new Blockly.FieldDropdown(TYPE), 'TYPE');

    this.appendValueInput("numByte", String)
        .setCheck(String)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.IICSendtoMaster);

    //this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};

Blockly.Blocks.reciverIICMasterData = {
  init: function() {
    this.setColour(colorSet);

    this.appendDummyInput("")
        .appendTitle(Blockly.reciverIICMasterData);

    this.appendStatementInput("reciverEventDo");

    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};
///<jscompress sourcefile="IRCommunication_Blocks.js" />
'use strict';

goog.provide('Blockly.Blocks.Microduino');

goog.require('Blockly.Blocks');


//var colorSet=230;
var colorSet='#6c91ac';


Blockly.Blocks.IRSenderCode = {

  init: function() {
    
    var TYPE = [['NEC', 'NEC'],['Whynter', 'Whynter'],['Sony', 'Sony'],['RC5', 'RC5'],['RC6', 'RC6'],['DISH', 'DISH'],['SharpRaw', 'SharpRaw'],['SAMSUNG', 'SAMSUNG']];
    this.setColour(colorSet);
    this.appendDummyInput("")
    .appendField(new Blockly.FieldImage("../../media/Microduino/IR_S.png", 40, 30))
      .appendTitle(Blockly.MIXLY_IR_SEND_NEC1)
      .appendField(new Blockly.FieldDropdown(TYPE), 'TYPE')
      // .appendTitle(Blockly.LKL_IR_SEND_NEC2)
      // .appendTitle(new Blockly.FieldDropdown([["3", "3"],["6", "6"],["8", "8"]]), "PIN");
    this.appendValueInput('data')
      .setCheck(Number)
      .appendTitle(' '+Blockly.MIXLY_DATA);
    this.appendValueInput('bits')
      .setCheck(Number)
      .appendTitle(' '+Blockly.MIXLY_BITS);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip(Blockly.MIXLY_IR_SEND_NEC_TOOLTIP);

  }
};


Blockly.Blocks.IRSenderRaw = {
  init: function() {
    this.setColour(colorSet);

  this.appendDummyInput("")
  .appendField(new Blockly.FieldImage("../../media/Microduino/IR_S.png", 40, 30))
      .appendTitle(Blockly.MIXLY_IR_SEND_RAW);
  //     .appendTitle(new Blockly.FieldDropdown([["3", "3"],["6", "6"],["8", "8"]]), "PIN");
    this.appendDummyInput("")
        .appendTitle(' '+Blockly.MIXLY_LIST_NAME)
        .appendTitle(new Blockly.FieldTextInput('0,0,0'), 'TEXT');
  this.appendValueInput('length')
        .setCheck(Number)
        .appendTitle(' '+Blockly.MIXLY_LIST_LENGTH);
  this.appendValueInput('freq')
        .setCheck(Number)
        .appendTitle(' '+Blockly.MIXLY_FREQUENCY);
  this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  this.setTooltip(Blockly.MIXLY_IR_SEND_RAW_TOOLTIP);

  }
};


Blockly.Blocks.IRReciver = {
  init: function() {
    this.setColour(colorSet);
  this.appendValueInput("PIN", Number)
  .appendField(new Blockly.FieldImage("../../media/Microduino/IR_R.png", 40, 30))
    .appendTitle(new Blockly.FieldTextInput('ir_item'), 'VAR')
        .appendTitle(Blockly.MIXLY_IR_RECEIVE)
        .setCheck(Number);
  this.appendStatementInput('DO')
        .appendTitle(Blockly.MIXLY_IR_RECEIVE_YES);
  this.appendStatementInput('DO2')
        .appendTitle(Blockly.MIXLY_IR_RECEIVE_NO);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  this.setTooltip(Blockly.MIXLY_IR_RECIEVE_TOOLTIP);
  },
  getVars: function() {
    return [this.getFieldValue('VAR')];
  },
  renameVar: function(oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getFieldValue('VAR'))) {
      this.setTitleValue(newName, 'VAR');
    }
  }
};


Blockly.Blocks.IRReciverRaw = {
  init: function() {
    this.setColour(colorSet);
  this.appendValueInput("PIN", Number)
  .appendField(new Blockly.FieldImage("../../media/Microduino/IR_R.png", 40, 30))
        .appendTitle(Blockly.MIXLY_IR_RECEIVE_RAW)
        .setCheck(Number);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  this.setTooltip(Blockly.MIXLY_IR_RECIEVE_RAW_TOOLTIP);
  }
};


Blockly.Blocks.IRReciverEnable = {
  init: function() {
    this.setColour(colorSet);
  this.appendValueInput("PIN", Number)
  .appendField(new Blockly.FieldImage("../../media/Microduino/IR_R.png", 40, 30))
        .appendTitle(Blockly.IRReciverEnable)
        .setCheck(Number);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  this.setTooltip(Blockly.MIXLY_IR_RECIEVE_RAW_TOOLTIP);
  }
};
///<jscompress sourcefile="NFC_Blocks.js" />
'use strict';

goog.provide('Blockly.Blocks.Microduino');

goog.require('Blockly.Blocks');

//var colorSet=230;
var colorSet='#6c91ac';

Blockly.Blocks.NFC_Format = {
  init: function() {
    this.setColour(colorSet);
    this.appendDummyInput("")
         .appendTitle(Blockly.NFC)
         .appendField(new Blockly.FieldImage("../../media/Microduino/mCookie_NFC.png", 45, 32))
         .appendTitle(Blockly.NFC_Format_Classic);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};

Blockly.Blocks.NFC_Read = {
  init: function() {
    this.setColour(colorSet);
    this.appendDummyInput("")
         .appendTitle(Blockly.NFC)
         .appendField(new Blockly.FieldImage("../../media/Microduino/mCookie_NFC.png", 45, 32))
         .appendTitle(Blockly.NFC_Read);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};
///<jscompress sourcefile="nRF24_Blocks.js" />
'use strict';

goog.provide('Blockly.Blocks.Microduino');

goog.require('Blockly.Blocks');

//var colorSet=230;
var colorSet='#6c91ac';

Blockly.Blocks.nRF_Init = {
  init: function() {

    this.setColour(colorSet);
    this.appendDummyInput("")
         .appendTitle(Blockly.nRF_Init)
         .appendField(new Blockly.FieldImage("../../media/Microduino/mCookie_nRF24.png", 45, 32))
         .appendTitle(Blockly.nRF_Interval)
         .appendField(new Blockly.FieldTextInput('200'), 'INTERVAL')
         .appendTitle(Blockly.nRF_Channel)
         .appendTitle(new Blockly.FieldTextInput('70'),'CHANNEL');
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};

Blockly.Blocks.nRF_Send = {
  init: function() {
    this.setColour(colorSet);
    this.appendDummyInput("")
         .appendTitle(Blockly.nRF_Send)
         .appendField(new Blockly.FieldImage("../../media/Microduino/mCookie_nRF24.png", 45, 32));
   // this.setInputsInline(true);
    this.appendStatementInput("DO");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};

Blockly.Blocks.nRF_Read = {
  init: function() {
    this.setColour(colorSet);
    this.appendDummyInput("")
         .appendTitle(Blockly.nRF_Read)
         .appendField(new Blockly.FieldImage("../../media/Microduino/mCookie_nRF24.png", 45, 32));
         // .appendTitle("#")
         // .appendTitle(Blockly.Read_INFO)
         // .appendTitle(new Blockly.FieldTextInput('Structure name'),'Struct_Name');
   // this.setInputsInline(true);
   this.appendStatementInput("DO");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};

///<jscompress sourcefile="smartRF_Blocks.js" />
'use strict';

goog.provide('Blockly.Blocks.Microduino');

goog.require('Blockly.Blocks');

//var colorSet=230;
var colorSet='#6c91ac';

Blockly.Blocks.smartRF_Init_Send = {
  init: function() {
        var BAUD = [['9600 baud', '9600'],
                    ['38400 baud', '38400'],
                    ['57600 baud', '57600'],
                    ['115200 baud', '115200'],
                    ['300 baud', '300'],
                    ['1200 baud', '1200'],
                    ['2400 baud', '2400'],
                    ['4800 baud', '4800'],
                    ['19200 baud', '19200'],
                    ['230400 baud', '230400'],
                    ['250000 baud', '250000']];
        var FREQ = [['433', 'CFREQ_433'],
                    ['868', 'CFREQ_868'],
                    ['915', 'CFREQ_915']];

    this.setColour(colorSet);
    this.appendDummyInput("")
    	   .appendTitle(Blockly.smartRF)
        .appendField(new Blockly.FieldImage("../../media/Microduino/smartRF.jpg", 45, 32))
        .appendTitle(Blockly.smartRF_Init_Send)
        .appendTitle(Blockly.Zigbee_Baud)
        .appendField(new Blockly.FieldDropdown(BAUD), 'BAUD')
		    .appendTitle(Blockly.Frequency)
        .appendField(new Blockly.FieldDropdown(FREQ), 'FREQ')
        .appendTitle(Blockly.SENDADDR)
        .appendTitle(new Blockly.FieldTextInput('4'),'SenderADDRESS')
        .appendTitle(Blockly.RECADDR)
        .appendTitle(new Blockly.FieldTextInput('5'),'ReceiverADDRESS');
    //this.appendStatementInput('DO')
   	 this.setPreviousStatement(true, null);
   	 this.setNextStatement(true, null);
     this.setInputsInline(true);
    },
};

Blockly.Blocks.smartRF_Init_Read = {
  init: function() {
        var BAUD = [['9600 baud', '9600'],
                    ['38400 baud', '38400'],
                    ['57600 baud', '57600'],
                    ['115200 baud', '115200'],
                    ['300 baud', '300'],
                    ['1200 baud', '1200'],
                    ['2400 baud', '2400'],
                    ['4800 baud', '4800'],
                    ['19200 baud', '19200'],
                    ['230400 baud', '230400'],
                    ['250000 baud', '250000']];
        var FREQ = [['433', 'CFREQ_433'],
                    ['868', 'CFREQ_868'],
                    ['915', 'CFREQ_915']];
    this.setColour(colorSet);
    this.appendDummyInput("")
        .appendTitle(Blockly.smartRF)
        .appendField(new Blockly.FieldImage("../../media/Microduino/smartRF.jpg", 45, 32))
        .appendTitle(Blockly.smartRF_Init_Read)
        .appendTitle(Blockly.Zigbee_Baud)
        .appendField(new Blockly.FieldDropdown(BAUD), 'BAUD')
        .appendTitle(Blockly.Frequency)
        .appendField(new Blockly.FieldDropdown(FREQ), 'FREQ')
        .appendTitle(Blockly.RECADDR)
        .appendTitle(new Blockly.FieldTextInput('5'),'ReceiverADDRESS');
    //this.appendStatementInput('DO')
     this.setPreviousStatement(true, null);
     this.setNextStatement(true, null);
     this.setInputsInline(true);
    },
};

Blockly.Blocks.smartRF_Send = {
  init: function() {
    this.setColour(colorSet);
    this.appendDummyInput("")
      .appendTitle(Blockly.smartRF)
      .appendField(new Blockly.FieldImage("../../media/Microduino/smartRF.jpg", 45, 32))
      .appendTitle(Blockly.smartRF_Send)
      .appendTitle(new Blockly.FieldTextInput('data'),'smartRF_Data')
      .appendTitle(Blockly.smartRF_Send_Length)
      .appendTitle(new Blockly.FieldTextInput('length'),'smartRF_Data_Length');
    this.appendStatementInput('DO');
    //this.setOutput(true, Boolean);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
  }
};

Blockly.Blocks.smartRF_Read = {
  init: function() {
    this.setColour(colorSet);
    this.appendDummyInput("")
      .appendTitle(Blockly.smartRF)
      .appendField(new Blockly.FieldImage("../../media/Microduino/smartRF.jpg", 45, 32))
      .appendTitle(Blockly.smartRF_Read)
      .appendTitle(new Blockly.FieldTextInput('data'),'smartRF_REC_Data')
    //this.appendStatementInput('DO');
    //this.setOutput(true, Boolean);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
  }
};

///<jscompress sourcefile="W5500_Blocks.js" />
'use strict';

goog.provide('Blockly.Blocks.Microduino');

goog.require('Blockly.Blocks');

//var colorSet=230;
var colorSet='#6c91ac';

Blockly.Blocks.W5500_Init = {
  init: function() {
    this.setColour(colorSet);
    this.appendDummyInput("")
      .appendTitle(Blockly.W5500)
    .appendField(new Blockly.FieldImage("../../media/Microduino/Zigbee.jpg", 45, 32))
    .appendTitle("#")
    .appendTitle(Blockly.W5500_Init);
    this.setOutput(true, Boolean);
  this.setInputsInline(true);
 // this.setPreviousStatement(true, null);
 //   this.setNextStatement(true, null);
  }
};
///<jscompress sourcefile="WIFI_Blocks.js" />
'use strict';

goog.provide('Blockly.Blocks.Microduino');

goog.require('Blockly.Blocks');


//var colorSet=230;
var colorSet='#6c91ac';



Blockly.Blocks.WiFi = {
  init: function() {
    this.setColour(colorSet);

    this.appendDummyInput()
    .appendField(Blockly.WiFi);


    this.appendDummyInput()
    .appendField(Blockly.WiFiSSID)
    .appendField(new Blockly.FieldTextInput(Blockly.typeSSID), "SSID")

    this.appendDummyInput()
    .appendField(Blockly.WiFiPass)
    .appendField(new Blockly.FieldTextInput(Blockly.typePass), "WiFiPASS")

    this.appendDummyInput()
    .appendField(Blockly.HOST_NAME)
    .appendField(new Blockly.FieldTextInput("www.baidu.com"), "HOST_NAME")

    this.appendDummyInput()
    .appendField(Blockly.HOST_PORT)
    .appendField(new Blockly.FieldTextInput("80"), "HOST_PORT")

    this.appendDummyInput()
    .appendField(Blockly.WEBPAGE)
    .appendField(new Blockly.FieldTextInput("/"), "WEBPAGE")

    this.appendStatementInput("WiFiInput");

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    //this.setOutput(true, String);

  }
};




Blockly.Blocks.WiFiBlynk = {
  init: function() {
    this.setColour(colorSet);

    this.appendDummyInput()
    .appendField(Blockly.WiFi);


    this.appendDummyInput()
    .appendField(Blockly.WiFiSSID)
    .appendField(new Blockly.FieldTextInput(Blockly.typeSSID), "SSID")

    this.appendDummyInput()
    .appendField(Blockly.WiFiPass)
    .appendField(new Blockly.FieldTextInput(Blockly.typePass), "WiFiPASS")

    this.appendDummyInput()
    .appendField(Blockly.AuthToken)
    .appendField(new Blockly.FieldTextInput(Blockly.TypeAuthToken), "authToken")


    //this.appendStatementInput("WiFiInput");

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    //this.setOutput(true, String);

  }
};



Blockly.Blocks.BLYNK_READ = {
  init: function() {
    this.setColour(colorSet);

    this.appendDummyInput()
    .appendField(Blockly.BLYNK_READ);

    this.appendDummyInput()
    .appendField(Blockly.virtualPort)
    .appendField(new Blockly.FieldTextInput("V0"), "virtualPort")

    this.appendValueInput("blynkReadInput", [Number,String])
    .setCheck([Number,String])
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendTitle(Blockly.inputValue);

    var tip="发送数据到Blynk\n";
    tip+="发送频率请在你的APP中设置\n";
    this.setTooltip(tip);

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    //this.setOutput(true, String);

  }
};


Blockly.Blocks.BLYNK_WRITE = {
  init: function() {
    this.setColour(colorSet);

    this.appendDummyInput()
    .appendField(Blockly.BLYNK_WRITE);


    this.appendDummyInput()
    .appendField(Blockly.virtualPort)
    .appendField(new Blockly.FieldTextInput("V0"), "virtualPort")


    this.appendStatementInput("blynkWriteInput");

    // this.appendValueInput("blynkReadInput", [Number,String])
    // .setCheck([Number,String])
    // .setAlign(Blockly.ALIGN_RIGHT)
    // .appendTitle("inputValue");

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    //this.setOutput(true, String);

  }
};


Blockly.Blocks.BLYNKParamOne = {   
  init: function() {
    this.setColour(colorSet);
    this.appendDummyInput("")
        .appendTitle(Blockly.SoloParam)
        .appendTitle(Blockly.paramType)
        .appendTitle(new Blockly.FieldDropdown([[Blockly.BLYNKString, "asStr()"], 
            [Blockly.BLYNKInt, "asInt()"], [Blockly.BLYNKDouble, "asDouble()"]]),'paramType');


    var tip="获取一个来自Blynk的值\n";
    tip+="返回一个值\n";
    this.setTooltip(tip);

    this.setInputsInline(true);
    // this.setPreviousStatement(true);
    // this.setNextStatement(true);
    this.setOutput(true);
  }
};


Blockly.Blocks.BLYNKParamArray = {   
  init: function() {
    this.setColour(colorSet);

    this.appendDummyInput("")
        .appendTitle(Blockly.ArrayParam)
        .appendTitle(Blockly.paramType)
        .appendTitle(new Blockly.FieldDropdown([[Blockly.BLYNKString, "asStr()"], 
            [Blockly.BLYNKInt, "asInt()"], [Blockly.BLYNKDouble, "asDouble()"]]),'paramType');


    this.appendValueInput("paramNum", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.paramIndex);



    var tip="获取来自Blynk的数组值中的一个元素\n";
    tip+="返回一个值\n";
    this.setTooltip(tip);

    this.setInputsInline(true);
    // this.setPreviousStatement(true);
    // this.setNextStatement(true);
    this.setOutput(true);
  }
};


Blockly.Blocks.WiFiBlynkTimer = {   
  init: function() {
    this.setColour(colorSet);

    this.appendDummyInput("")
        .appendTitle(Blockly.BlynkTimer)
        .appendTitle(Blockly.timerName)
        .appendTitle(new Blockly.FieldTextInput("tempture"), "timerName")
        .appendTitle(Blockly.interval)
        .appendTitle(new Blockly.FieldTextInput("1000"), "duration");

    this.appendStatementInput("blynkTimerDoing");

    var tip="设置一个定时器用来上传数据到Blynk\n";
    tip+="\n";
    this.setTooltip(tip);

    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    //this.setOutput(true);
  }
};


Blockly.Blocks.WiFiBlynkVirtualWrite = {   
  init: function() {
    this.setColour(colorSet);

    this.appendDummyInput("")
        .appendTitle(Blockly.BLYNK_READ)
        .appendTitle(Blockly.virtualPort)
        .appendTitle(new Blockly.FieldTextInput("V0"), "virtualPort");


    this.appendValueInput("senderDataToBlynk", [Number,String])
        .setCheck([Number,String])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.inputValue);


    var tip="上传数据到Blynk\n";
    tip+="\n";
    this.setTooltip(tip);

    //this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    //this.setOutput(true);
  }
};
///<jscompress sourcefile="Zigbee_Blocks.js" />
'use strict';

goog.provide('Blockly.Blocks.Microduino');

goog.require('Blockly.Blocks');


//var colorSet=230;
var colorSet='#6c91ac';


var mCookie_PORTS =[["Serial0", "Serial"],["Serial1", "Serial1"],["SoftwareSerial(2,3)", "mySerial(2, 3)"],["SoftwareSerial(4,5)", "mySerial(4, 5)"]];

Blockly.Blocks.Zigbee_AT = {
  init: function() {
    this.setColour(colorSet);
    this.appendDummyInput("")
      .appendTitle(Blockly.Zigbee)
    .appendField(new Blockly.FieldImage("../../media/Microduino/mCookie_Zigbee.png", 45, 32))
    .appendTitle("#")
      .appendTitle(new Blockly.FieldDropdown(mCookie_PORTS), "PIN")
    .appendTitle(Blockly.Zigbee_SetAT);
  this.setInputsInline(true);
  }
};

Blockly.Blocks.Zigbee_Init = {
  init: function() {
    this.setColour(colorSet);
    this.appendDummyInput("")
         .appendTitle(Blockly.Zigbee_Init)
         .appendField(new Blockly.FieldImage("../../media/Microduino/mCookie_Zigbee.png", 45, 32))
         .appendTitle("#")
          .appendTitle(new Blockly.FieldDropdown(mCookie_PORTS), "PIN")
    this.appendValueInput("BRate", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.Zigbee_Baud);
  this.setInputsInline(true);
      this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};


Blockly.Blocks.Zigbee_Available = {
  init: function() {
    this.setColour(colorSet);
    this.appendDummyInput("")
      .appendTitle(Blockly.Zigbee)
    .appendField(new Blockly.FieldImage("../../media/Microduino/mCookie_Zigbee.png", 45, 32))
    .appendTitle("#")
    .appendTitle(Blockly.Zigbee_Available);
    this.setOutput(true, Boolean);
  this.setInputsInline(true);
  }
};

Blockly.Blocks.Zigbee_Send = {
  init: function() {
    this.setColour(colorSet);
    this.appendDummyInput("")
      .appendTitle(Blockly.Zigbee)
    .appendField(new Blockly.FieldImage("../../media/Microduino/mCookie_Zigbee.png", 45, 32))
    .appendTitle("#")
    .appendTitle(Blockly.Zigbee_Send);
  this.appendValueInput('text')
        .setCheck(String)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle("Text:");
    //this.setOutput(true, Boolean);
    //  this.setInputsInline(true);
      this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

Blockly.Blocks.Zigbee_Read = {
  init: function() {
    this.setColour(colorSet);
    this.appendDummyInput("")
      .appendTitle(Blockly.Zigbee)
      .appendField(new Blockly.FieldImage("../../media/Microduino/mCookie_Zigbee.png", 45, 32))
      .appendTitle("#")
      .appendTitle(Blockly.Zigbee_Read);
  this.setOutput(true,String);
  }
};


Blockly.Blocks.VariableIs = {
  init: function() {
    this.setColour(colorSet);

    this.appendValueInput('VariableName', String)
        .setCheck([Number,String])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.VariableName);
  this.appendValueInput('VariableIs', String)
        .setCheck([Number,String])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.VariableIs);
    this.setOutput(true, Boolean);
  this.setInputsInline(true);
  }
};
///<jscompress sourcefile="serial_Blocks.js" />
'use strict';

goog.provide('Blockly.Blocks.Microduino');

goog.require('Blockly.Blocks');


//var colorSet=0;
var colorSet='#e36a69';

Blockly.Blocks.serialBegin = {
  init: function() {

        var FLIP = [['9600 baud', '9600'],
                    ['38400 baud', '38400'],
                    ['57600 baud', '57600'],
                    ['115200 baud', '115200'],
                    ['300 baud', '300'],
                    ['1200 baud', '1200'],
                    ['2400 baud', '2400'],
                    ['4800 baud', '4800'],
                    ['19200 baud', '19200'],
                    ['230400 baud', '230400'],
                    ['250000 baud', '250000']];

    //this.setColour(Blockly.Blocks.Microduino.HUE);
    this.setColour(colorSet);

    this.appendDummyInput("")
        //.appendField(new Blockly.FieldImage("../../media/Microduino/CoreUSB.png", 60, 90))
        .appendTitle(Blockly.serialSetup)
        
        .appendField(new Blockly.FieldDropdown(FLIP), 'FLIP')


    //this.appendStatementInput('DO')
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
//    this.setTooltip("test");  
    this.setInputsInline(true);
    },
};



Blockly.Blocks.serialPrint = {
  init: function() {
    this.setColour(colorSet);
    
    this.appendValueInput("serialData")
    .appendTitle(Blockly.serialPrint);

    // this.appendDummyInput("")
    //     .appendTitle(Blockly.serialPrint)

    //this.appendStatementInput('DO')
    // this.setPreviousStatement(true, null);
    // this.setNextStatement(true, null);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
//    this.setTooltip("test");  
    //this.setInputsInline(true);
    },
};


Blockly.Blocks.serialPrintln = {
  init: function() {
    this.setColour(colorSet);
    
    this.appendValueInput("serialData")
    .appendTitle(Blockly.serialPrintln);

    this.setPreviousStatement(true);
    this.setNextStatement(true);
//    this.setTooltip("test");  
    //this.setInputsInline(true);
    },
};


Blockly.Blocks.microduinoAnaloyWrite = { 
  init: function() {

  var mCookie_pwmPin =[["3", "3"], ["4", "4"], ["5", "5"],
                    ["6", "6"], ["7", "7"], ["8", "8"], 
                    ["9", "9"], ["10", "10"], ["11", "11"]];


    this.setColour(colorSet);


    this.appendDummyInput("")
    .appendTitle(Blockly.MIXLY_ANALOGWRITE_PIN)
    .appendTitle(new Blockly.FieldDropdown(mCookie_pwmPin), "mCookie_pwmPin")
    .appendTitle(Blockly.MIXLY_VALUE2);
    
    this.appendValueInput("pwmNumber", Number)
      .setCheck(Number)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendTitle(Blockly.LKL_VALUE2);


    var tip="设置指定管脚值(0~255)\n";
    //tip+="数字接口\n";
    this.setTooltip(tip);

    this.setPreviousStatement(true,null);
    this.setNextStatement(true,null);
    this.setInputsInline(true);
  },
};


Blockly.Blocks.microduinoWatting = { 
  init: function() {

    this.setColour(colorSet);
    this.appendDummyInput("")
        .appendTitle(Blockly.microduinoWatting)
    this.appendValueInput('wait')
        .setCheck([Number,Boolean]);

    var tip="符合条件时等待...\n";
    this.setTooltip(tip);

    this.setPreviousStatement(true,null);
    this.setNextStatement(true,null);
    this.setInputsInline(true);
  }
};

Blockly.Blocks.microduinoWhile = { 
  init: function() {

    this.setColour(colorSet);
    this.appendDummyInput("")
        .appendTitle(Blockly.microduinoWhile);
    this.appendValueInput('wait')
        .setCheck([Number,Boolean]);
    this.appendDummyInput("")
        .appendTitle(Blockly.microduinoSo);

    this.appendStatementInput('DO')
    .appendTitle(Blockly.microduinoRepeatDoing);

    var tip="当满足条件时重复执行...\n";
    this.setTooltip(tip);

    this.setPreviousStatement(true,null);
    this.setNextStatement(true,null);
    this.setInputsInline(true);
  }
};


Blockly.Blocks.microduinoFor = {
  init: function() {
    this.setColour(colorSet);
    this.appendDummyInput()
        .appendTitle(Blockly.MicroduinoForPerTime)
        .appendTitle(new Blockly.FieldTextInput('i'), 'VAR');
    this.appendValueInput('FROM')
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.LANG_CONTROLS_FOR_INPUT_FROM);
    this.appendValueInput('TO')
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.LANG_CONTROLS_FOR_INPUT_TO);
    this.appendDummyInput()
        .appendTitle(Blockly.MicroduinoEvery)
        .appendTitle(new Blockly.FieldTextInput('1',
        Blockly.FieldTextInput.math_number_validator), 'STEP');
    this.appendDummyInput()
        .appendTitle(Blockly.MicroduinoStep);
    this.appendStatementInput('DO')
        .appendTitle(Blockly.LANG_CONTROLS_FOR_INPUT_DO);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    var thisBlock = this;
    this.setTooltip(function() {
      return Blockly.Msg.CONTROLS_FOR_TOOLTIP.replace('%1',
          thisBlock.getFieldValue('VAR'));
    });
  },
  getVars: function() {
    return [this.getFieldValue('VAR')];
  },
  renameVar: function(oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getFieldValue('VAR'))) {
      this.setTitleValue(newName, 'VAR');
    }
  }
};


Blockly.Blocks.microduinoAnaloyRead = {
  init: function() {
    this.setColour(colorSet);

    this.appendDummyInput()
    .appendField(Blockly.MIXLY_ANALOGREAD_PIN)
    .appendField(new Blockly.FieldTextInput("A6"), "analogPin");

    var tip="获取一个模拟值\n";
    tip+="返回一个模拟值\n";
    tip+="模拟接口\n";
    this.setTooltip(tip);
    this.setOutput(true, Number);

  }
};


Blockly.Blocks.microduinoSerailAvailable = {
  init: function() {



  var serailType =[["Serial", "Serial"], 
    ["SoftwareSerial", "mySerial"]];


    this.setColour(colorSet);

    this.appendDummyInput()
    .appendTitle(new Blockly.FieldDropdown(serailType), "serailType")
    .appendTitle(Blockly.serailAvalibleLength);

    var tip="获取串口数据长度\n";
    tip+="返回一个数字值\n";
    this.setTooltip(tip);
    this.setOutput(true, Number);

  }
};

///<jscompress sourcefile="softwareSerial_Blocks.js" />
'use strict';

goog.provide('Blockly.Blocks.Microduino');

goog.require('Blockly.Blocks');


Blockly.Blocks.Microduino.HUE=20;

//Blockly.Blocks.core.softwareSerial_Blocks.RED=20;


Blockly.Blocks.ws2812Begin = {
  init: function() {
    //this.setColour(Blockly.Blocks.Microduino.RED);
    this.setColour(Blockly.Blocks.Microduino.HUE);

    this.appendDummyInput("")
        .appendTitle(Blockly.ColorLEDInit)
        .appendField(new Blockly.FieldImage("../../media/Microduino/colorLEDBegin.png", 80, 32))

    this.appendValueInput("LEDNumber", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.ColorLEDNumber);
    this.appendValueInput("LEDPin", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.ColorLEDPin);

    //this.appendStatementInput('DO')
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
//    this.setTooltip("test");  
    this.setInputsInline(true);
    },
};



Blockly.Blocks.ws2812Doing = {
  init: function() {
    //var FLIP = [['none', 'undoRotation'],['90', 'setRot90'],['180', 'setRot180'],['270', 'setRot270']];

    //this.setColour(Blockly.Blocks.Microduino.RED);
    this.setColour(Blockly.Blocks.Microduino.HUE);


    this.appendDummyInput("")
        .appendTitle(Blockly.ColorLEDControl)
        .appendField(new Blockly.FieldImage("../../media/Microduino/colorLEDCntrol.png", 40, 32))

    this.appendValueInput("LEDIndex", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.ColorLEDIndex);

    this.appendValueInput("R", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.ColorLEDRed);
    this.appendValueInput("G", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.ColorLEDGreen);
    this.appendValueInput("B", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.ColorLEDBlue);


    //this.appendStatementInput('DO')
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
//    this.setTooltip("test");  
    this.setInputsInline(true);
    },
};
///<jscompress sourcefile="DotMatrix_Blocks.js" />
'use strict';

goog.provide('Blockly.Blocks.Microduino');

goog.require('Blockly.Blocks');


//var colorSet = 120;
var colorSet='#27b6ac';


Blockly.Blocks.DotMatrix = {
  init: function() {
    this.setColour(colorSet);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("../../media/Microduino/DotMatrix.png", 50, 38))
        .appendTitle(Blockly.DotMatrix);

    this.appendDummyInput()
    .appendTitle(Blockly.DotMatrixName)
    .appendField(new Blockly.FieldTextInput("1"), "dotName")
    .appendTitle(Blockly.DotMatrixAddress)
    .appendField(new Blockly.FieldTextInput("64"), "dotAddress");


    this.appendValueInput("row0", String)
        .setCheck([String,Number])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.MatrixRow0);
    this.appendValueInput("row1", String)
        .setCheck([String,Number])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.MatrixRow1)
    this.appendValueInput("row2", String)
        .setCheck([String,Number])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.MatrixRow2);
    this.appendValueInput("row3", String)
        .setCheck([String,Number])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.MatrixRow3)
    this.appendValueInput("row4", String)
        .setCheck([String,Number])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.MatrixRow4);
    this.appendValueInput("row5", String)
        .setCheck([String,Number])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.MatrixRow5)
    this.appendValueInput("row6", String)
        .setCheck([String,Number])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.MatrixRow6);
    this.appendValueInput("row7", String)
        .setCheck([String,Number])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.MatrixRow7)

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};


Blockly.Blocks.DotMatrixRow = {
  init: function() {

    this.setColour(colorSet);

    this.appendDummyInput("")
    	.appendTitle(" ")
        .appendField(new Blockly.FieldColour("#000000"), "Dot0");
    this.appendDummyInput("")
    	.appendTitle(" ")
        .appendField(new Blockly.FieldColour("#000000"), "Dot1");
    this.appendDummyInput("")
    	.appendTitle(" ")
        .appendField(new Blockly.FieldColour("#000000"), "Dot2");
    this.appendDummyInput("")
    	.appendTitle(" ")
        .appendField(new Blockly.FieldColour("#000000"), "Dot3");
    this.appendDummyInput("")
    	.appendTitle(" ")
        .appendField(new Blockly.FieldColour("#000000"), "Dot4");
    this.appendDummyInput("")
    	.appendTitle(" ")
        .appendField(new Blockly.FieldColour("#000000"), "Dot5");
    this.appendDummyInput("")
    	.appendTitle(" ")
        .appendField(new Blockly.FieldColour("#000000"), "Dot6");
    this.appendDummyInput("")
    	.appendTitle(" ")
        .appendField(new Blockly.FieldColour("#000000"), "Dot7");

    //this.appendStatementInput('DO')
    //this.setPreviousStatement(true, null);
    //this.setNextStatement(true, null);
//    this.setTooltip("test");  
    this.setInputsInline(true);
    this.setOutput(true, String);
    },
};


Blockly.Blocks.DotMatrixAddArray = {
  /**
   * Block for creating a list with any number of elements of any type.
   * @this Blockly.Block
   */
  init: function() {
    this.setColour(colorSet);
    this.appendDummyInput("")
      .appendTitle(Blockly.dotMatrixAddVarArray)
        // .appendTitle(new Blockly.FieldTextInput('Addr'), 'arrayVAR')
        .appendTitle('[]')
        //.appendTitle(new Blockly.FieldTextInput('3',Blockly.FieldTextInput.math_number_validator), 'SIZE')
        .appendTitle('[]');
    this.itemCount_ = 1;
    this.updateShape_();
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setMutator(new Blockly.Mutator(['lists_create_with_item']));
    this.setTooltip("为矩阵点阵屏设置地址");
  },
  /**
   * Create XML to represent list inputs.
   * @return {Element} XML storage element.
   * @this Blockly.Block
   */
  mutationToDom: function() {
    var container = document.createElement('mutation');
    container.setAttribute('items', this.itemCount_);
    return container;
  },
  /**
   * Parse XML to restore the list inputs.
   * @param {!Element} xmlElement XML storage element.
   * @this Blockly.Block
   */
  domToMutation: function(xmlElement) {
    this.itemCount_ = parseInt(xmlElement.getAttribute('items'), 10);
    this.updateShape_();
  },
  /**
   * Populate the mutator's dialog with this block's components.
   * @param {!Blockly.Workspace} workspace Mutator's workspace.
   * @return {!Blockly.Block} Root block in mutator.
   * @this Blockly.Block
   */
  decompose: function(workspace) {
    var containerBlock =
        Blockly.Block.obtain(workspace, 'lists_create_with_container');
    containerBlock.initSvg();
    var connection = containerBlock.getInput('STACK').connection;
    for (var i = 0; i < this.itemCount_; i++) {
      var itemBlock = Blockly.Block.obtain(workspace, 'lists_create_with_item');
      itemBlock.initSvg();
      connection.connect(itemBlock.previousConnection);
      connection = itemBlock.nextConnection;
    }
    return containerBlock;
  },
  /**
   * Reconfigure this block based on the mutator dialog's components.
   * @param {!Blockly.Block} containerBlock Root block in mutator.
   * @this Blockly.Block
   */
  compose: function(containerBlock) {
    var itemBlock = containerBlock.getInputTargetBlock('STACK');
    // Count number of inputs.
    var connections = [];
    var i = 0;
    while (itemBlock) {
      connections[i] = itemBlock.valueConnection_;
      itemBlock = itemBlock.nextConnection &&
          itemBlock.nextConnection.targetBlock();
      i++;
    }
    this.itemCount_ = i;
    this.updateShape_();
    // Reconnect any child blocks.
    for (var i = 0; i < this.itemCount_; i++) {
      if (connections[i]) {
        this.getInput('ADD' + i).connection.connect(connections[i]);
      }
    }
  },
  /**
   * Store pointers to any connected child blocks.
   * @param {!Blockly.Block} containerBlock Root block in mutator.
   * @this Blockly.Block
   */
  saveConnections: function(containerBlock) {
    var itemBlock = containerBlock.getInputTargetBlock('STACK');
    var i = 0;
    while (itemBlock) {
      var input = this.getInput('ADD' + i);
      itemBlock.valueConnection_ = input && input.connection.targetConnection;
      i++;
      itemBlock = itemBlock.nextConnection &&
          itemBlock.nextConnection.targetBlock();
    }
  },
  /**
   * Modify this block to have the correct number of inputs.
   * @private
   * @this Blockly.Block
   */
  updateShape_: function() {
    // Delete everything.
    if (this.getInput('EMPTY')) {
      this.removeInput('EMPTY');
    } else {
      var i = 0;
      while (this.getInput('ADD' + i)) {
        this.removeInput('ADD' + i);
        i++;
      }
    }
    // Rebuild block.
    if (this.itemCount_ == 0) {
      this.appendDummyInput('EMPTY')
          .appendField(Blockly.Msg.LISTS_CREATE_EMPTY_TITLE);
    } else {
      for (var i = 0; i < this.itemCount_; i++) {
        var input = this.appendValueInput('ADD' + i);
        if (i == 0) {
          input.appendField(Blockly.Msg.LISTS_CREATE_WITH_INPUT_WITH);
        }
      }
    }
  }
};


Blockly.Blocks.DotMatrixAddNum = {
  init: function() {
    this.setColour(colorSet);
    this.appendValueInput('addInput') 
     .setCheck(Number)
     .setAlign(Blockly.ALIGN_RIGHT)
     .appendTitle(Blockly.dotMatrixAddVar)
     .appendTitle(new Blockly.FieldTextInput('64'),'NUM');
    this.setOutput(true, Number);
    this.setTooltip(Blockly.Msg.MATH_NUMBER_TOOLTIP);
  }
};


Blockly.Blocks.getMatrixNum = {
  init: function() {
    this.setColour(colorSet);
    this.appendDummyInput("")
    .appendTitle(Blockly.getMatrixNum);
    this.setOutput(true, Number);
    this.setTooltip("得到一共级联了几个点阵屏");
  }
};


Blockly.Blocks.getMatrixDeviceAddr = {
  init: function() {
    this.setColour(colorSet);
    this.appendValueInput("MatrixIndex", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.getDeviceAddr);
    var tip="得到指定点阵屏的地址\n";
    this.setTooltip(tip);
    this.setInputsInline(true);
    this.setOutput(true, Number);
    },
};


Blockly.Blocks.getMatrixHeight = {
  init: function() {
    this.setColour(colorSet);
    this.appendDummyInput("")
    .appendTitle(Blockly.getMatrixHeight);
    this.setOutput(true, Number);
    this.setTooltip("得到级联点阵屏的竖排个数");
  }
};

Blockly.Blocks.getMatrixWidth = {
  init: function() {
    this.setColour(colorSet);
    this.appendDummyInput("")
    .appendTitle(Blockly.getMatrixWidth);
    this.setOutput(true, Number);
    this.setTooltip("得到级联点阵屏的横排个数");
  }
};


Blockly.Blocks.setMatrixLedColor = {
  init: function() {
    this.setColour(colorSet);

    this.appendValueInput("MatrixIndexX", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.MatrixIndexX);

    this.appendValueInput("MatrixIndexY", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.MatrixIndexY);

    this.appendValueInput("MatrixIndexRed", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.MatrixIndexRed);

    this.appendValueInput("MatrixIndexGreen", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.MatrixIndexGreen);

    this.appendValueInput("MatrixIndexBlue", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.MatrixIndexBlue);

    var tip="设置点阵屏中指定LED的颜色\n";
    this.setTooltip(tip);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    //this.setOutput(true, Number);
    },
};


Blockly.Blocks.clearMatrixDisplay = {
  init: function() {
    this.setColour(colorSet);

    this.appendDummyInput("")
    .appendTitle(Blockly.clearMatrixDisplay);


    var tip="清屏\n";
    this.setTooltip(tip);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    //this.setOutput(true, Number);
    },
};



Blockly.Blocks.setMatrixColor = {
  init: function() {
    this.setColour(colorSet);

    this.appendValueInput("MatrixRed", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.MatrixIndexRed);

    this.appendValueInput("MatrixGreen", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.MatrixIndexGreen);

    this.appendValueInput("MatrixBlue", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.MatrixIndexBlue);

    var tip="设置点阵屏显示颜色\n";
    this.setTooltip(tip);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    //this.setOutput(true, Number);
    },
};



Blockly.Blocks.clearMatrixColor = {
  init: function() {
    this.setColour(colorSet);

    this.appendDummyInput("")
    .appendTitle(Blockly.clearMatrixColor);


    var tip="清除颜色\n";
    this.setTooltip(tip);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    //this.setOutput(true, Number);
    },
};



Blockly.Blocks.MatrixWriteString = {
  init: function() {

    //var MatrixShowMode =[['MODE_H', 'MODE_H'], ['MODE_V', 'MODE_V']];

    this.setColour(colorSet);

    this.appendDummyInput("")
      // .appendTitle(Blockly.MatrixShowMode)
      // .appendField(new Blockly.FieldDropdown(MatrixShowMode), 'MatrixShowMode')
      .appendTitle(Blockly.stringVar)
      .appendField(new Blockly.FieldTextInput('microduino'),'stringVar');


    this.appendValueInput("startMatrixT", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.startMatrixT);

    this.appendValueInput("startMatrixXY", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.startMatrixXY);


    var tip="在点阵屏上显示字符串\n";
    this.setTooltip(tip);

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);

    this.setInputsInline(true);
    },
};



Blockly.Blocks.MD_Matrix_GeometryLine = {
  init: function() {
    var TYPE = [[Blockly.MD_OLEDPointer, 'point'],
                [Blockly.MD_OLEDLine, 'line'],
                [Blockly.MD_OLEDFrame, 'frame'],
                [Blockly.MD_OLEDBox, 'box'],
                ];

    this.setColour(colorSet);
    this.appendDummyInput("")
        .appendTitle(Blockly.OLEDGeomPointLineArea)
        .appendField(new Blockly.FieldDropdown(TYPE), 'TYPE');

    this.appendValueInput("x0", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle("x0:");
    this.appendValueInput("y0", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle("y0:");

    this.appendValueInput("x1w", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle("x1(w):");
    this.appendValueInput("y1h", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle("y1(h):");

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
//    this.setTooltip("test");  
    this.setInputsInline(true);

    },
};



Blockly.Blocks.MD_Matrix_GeometryCircle = {
  init: function() {
    var TYPE = [[Blockly.MD_OLEDCircle, 'circle'],
                [Blockly.MD_OLEDDisc, 'disc']
                ];

    // var ArcType = [[Blockly.MD_OLEDAllCircle, 'U8G_DRAW_ALL'],
    //             [Blockly.MD_OLEDTopRightCircle, 'U8G_DRAW_UPPER_RIGHT'],
    //             [Blockly.MD_OLEDTopLeftCircle, 'U8G_DRAW_UPPER_LEFT'],
    //             [Blockly.MD_OLEDLowLeftCircle, 'U8G_DRAW_LOWER_LEFT'],
    //             [Blockly.MD_OLEDLowRightCircle, 'U8G_DRAW_LOWER_RIGHT']
    //             ];

    this.setColour(colorSet);
    this.appendDummyInput("")
        .appendTitle(Blockly.OLEDGeomCircle)
        .appendField(new Blockly.FieldDropdown(TYPE), 'TYPE');


    // this.appendDummyInput("")
    //     .appendTitle(Blockly.MD_OLEDArc)
    //     .appendField(new Blockly.FieldDropdown(ArcType), 'ArcType');

    this.appendValueInput("x", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle("x:");
    this.appendValueInput("y", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle("y:");
    this.appendValueInput("rw", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle("r:");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
//    this.setTooltip("test");  
    this.setInputsInline(true);

    },
};
///<jscompress sourcefile="Motor_Blocks.js" />
'use strict';

goog.provide('Blockly.Blocks.Microduino');

goog.require('Blockly.Blocks');


//var colorSet=120;
var colorSet='#27b6ac';


Blockly.Blocks.MotorBegin = {
   init: function() {
    this.setColour(colorSet);
    this.appendDummyInput("")
        .appendField(new Blockly.FieldImage("../../media/Microduino/mCookie_Motor.png", 45, 32))
        .appendTitle(Blockly.CubeCar)
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    }
};

Blockly.Blocks.MotorBeginchange = {
   init: function() {
    this.setColour(colorSet);
    this.appendDummyInput("")
        .appendField(new Blockly.FieldImage("../../media/Microduino/mCookie_Motor.png", 45, 32))
        .appendTitle(Blockly.N20begin)
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    }
};

Blockly.Blocks.Motor_run = {
   init: function() {

    var Break_left_right = [
                 [Blockly.motor_left, '1'],
                 [Blockly.motor_right, '2'],
              ];

    this.setColour(colorSet);
    this.appendDummyInput("")
        .appendTitle(Blockly.N20choose)
        .appendField(new Blockly.FieldDropdown(Break_left_right), 'Break_left_right');
    // this.appendDummyInput("")
    //     .appendField(Blockly.motor_ctrl)
    //     .appendField(new Blockly.FieldTextInput("255"), "motor_ctrl")

          this.appendValueInput('speed')
        .setCheck(Number)
        .appendTitle(' '+Blockly.carSpeed);



    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    }
};

Blockly.Blocks.MotorBreak = {
  init: function() {

  var Break_left_right = [
                 [Blockly.motor_left, '1'],
                 [Blockly.motor_right, '2'],
              ];

    this.setColour(colorSet);
    this.appendDummyInput("")
        .appendTitle(Blockly.N20Break)
        .appendField(new Blockly.FieldDropdown(Break_left_right), 'Break_left_right');

    //this.setOutput(true, Number);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};

Blockly.Blocks.MotorFree = {
  init: function() {

  var Free_left_right = [
                 [Blockly.motor_left, '1'],
                 [Blockly.motor_right, '2'],
              ];

    this.setColour(colorSet);
    this.appendDummyInput("")
        .appendTitle(Blockly.N20Free)
        .appendField(new Blockly.FieldDropdown(Free_left_right), 'Free_left_right');

    //this.setOutput(true, Number);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};




Blockly.Blocks.microduinoCarControl = {
  init: function() {

    this.setColour(colorSet);
        this.appendDummyInput("")
        .appendTitle(Blockly.motor_ctrl);

  this.appendValueInput('leftSpeed')
        .setCheck(Number)
        .appendTitle(' '+Blockly.leftSpeed);
  this.appendValueInput('rightSpeed')
        .setCheck(Number)
        .appendTitle(' '+Blockly.rightSpeed);
        
    //this.setOutput(true, Number);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};










// Blockly.Blocks.Car_MotorBegin = {
//   init: function() {
//     this.setColour(colorSet);

//   this.setInputsInline(true);
//     this.setPreviousStatement(true);
//     this.setNextStatement(true);
//   this.setTooltip(Blockly.LKL_IR_SEND_RAW_TOOLTIP);
//   }
// };

// Blockly.Blocks.mCookie_Motor = {
//    init: function() {
//     this.setColour(colorSet);
//     this.appendDummyInput("")
//         .appendField(Blockly.carSpeed)
//         .appendField(new Blockly.FieldTextInput("255"), "speed")
//         .appendField(Blockly.carAngle)
//         .appendField(new Blockly.FieldTextInput("0"), "angle");
//     this.setPreviousStatement(true);
//     this.setNextStatement(true);
// 	this.setInputsInline(true);
//     }
// };

///<jscompress sourcefile="OLED_Blocks.js" />
'use strict';

goog.provide('Blockly.Blocks.Microduino');

goog.require('Blockly.Blocks');


//var colorSet=120;
var colorSet='#27b6ac';


Blockly.Blocks.OLED_begin = {
  init: function() {
	var FLIP = [['none', 'undoRotation'],['90', 'setRot90'],['180', 'setRot180'],['270', 'setRot270']];

    //this.setColour(Blockly.Blocks.Microduino.HUE);
    this.setColour(colorSet);
    this.appendDummyInput("")
        .appendTitle(Blockly.OLEDBegin)
    this.appendDummyInput("")
		.appendTitle(Blockly.OLEDFlip)
		.appendField(new Blockly.FieldDropdown(FLIP), 'FLIP')
        .appendTitle(Blockly.OLEDBeginEnd)
	this.appendStatementInput('DO')
	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
//    this.setTooltip("test");
	this.setInputsInline(true);
	},
};

Blockly.Blocks.OLED_print = {
  init: function() {
	var TYPE = [['Small', 'setFont_S'],['Middle', 'setFont_M'],['Large', 'setFont_L']];

    // this.setColour(Blockly.Blocks.Microduino.HUE);
    this.setColour(colorSet);
    this.appendDummyInput("")
        .appendTitle(Blockly.OLEDPrint)
    this.appendDummyInput("")
		.appendTitle(Blockly.OLEDFont)
		.appendField(new Blockly.FieldDropdown(TYPE), 'TYPE')
	this.appendValueInput("x", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle("x:");
	this.appendValueInput("y", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle("y:");
	this.appendValueInput("text", String)
        .setCheck([Number,String])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.OLEDContext);
	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
//    this.setTooltip("test");	
	this.setInputsInline(true);

	},
};

Blockly.Blocks.OLED_print_roll = {
  init: function() {
    var TYPE = [['Small', 'setFont_S'],['Middle', 'setFont_M'],['Large', 'setFont_L']];

    // this.setColour(Blockly.Blocks.Microduino.HUE);
    this.setColour(colorSet);
    this.appendDummyInput("")
        .appendTitle(Blockly.OLEDRoll)
    this.appendDummyInput("")
        .appendTitle(Blockly.OLEDFont)
        .appendField(new Blockly.FieldDropdown(TYPE), 'TYPE')
    this.appendValueInput("y", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle("y:");
    this.appendValueInput("x", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.startMatrixT);
    this.appendValueInput("text", String)
        .setCheck([Number,String])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.OLEDContext);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
//    this.setTooltip("test");  
    this.setInputsInline(true);

    },
};


Blockly.Blocks.OLED_simplePrint = {
  init: function() {

    // this.setColour(Blockly.Blocks.Microduino.HUE);
    this.setColour(colorSet);
    this.appendDummyInput("")
        .appendTitle(Blockly.OLEDPrint)

    this.appendValueInput("text", String)
        .setCheck([Number,String])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.OLEDContext);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
//    this.setTooltip("test");  
    this.setInputsInline(true);

    },
};


Blockly.Blocks.MD_OLED_GeometryLine = {
  init: function() {
    var TYPE = [[Blockly.MD_OLEDPointer, 'point'],
                [Blockly.MD_OLEDLine, 'line'],
                // [Blockly.MD_OLEDHLine, 'HLine'],
                // [Blockly.MD_OLEDVLine, 'VLine'],
                //[Blockly.MD_OLEDTriangle, 'triangle'],
                [Blockly.MD_OLEDFrame, 'frame'],
                //[Blockly.MD_OLEDRFrame, 'RFrame'],
                [Blockly.MD_OLEDBox, 'box'],
                //[Blockly.MD_OLEDRBox, 'RBox']
                ];

    this.setColour(colorSet);
    this.appendDummyInput("")
        .appendTitle(Blockly.OLEDGeomPointLineArea)
        .appendField(new Blockly.FieldDropdown(TYPE), 'TYPE');

    this.appendValueInput("x0", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle("x0:");
    this.appendValueInput("y0", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle("y0:");

    this.appendValueInput("x1w", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle("x1(w):");
    this.appendValueInput("y1h", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle("y1(h):");

    // this.appendValueInput("x2r", Number)
    //     .setCheck(Number)
    //     .setAlign(Blockly.ALIGN_RIGHT)
    //     .appendTitle("x2(r):");
    // this.appendValueInput("y2", Number)
    //     .setCheck(Number)
    //     .setAlign(Blockly.ALIGN_RIGHT)
    //     .appendTitle("y2:");


    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
//    this.setTooltip("test");  
    this.setInputsInline(true);

    },
};



Blockly.Blocks.MD_OLED_GeometryCircle = {
  init: function() {
    var TYPE = [[Blockly.MD_OLEDCircle, 'circle'],
                [Blockly.MD_OLEDDisc, 'disc']
                // [Blockly.MD_OLEDEllipse, 'ellipse'],
                // [Blockly.MD_OLEDFilledEllipse, 'filledEllipse']
                ];

    var ArcType = [[Blockly.MD_OLEDAllCircle, 'U8G_DRAW_ALL'],
                [Blockly.MD_OLEDTopRightCircle, 'U8G_DRAW_UPPER_RIGHT'],
                [Blockly.MD_OLEDTopLeftCircle, 'U8G_DRAW_UPPER_LEFT'],
                [Blockly.MD_OLEDLowLeftCircle, 'U8G_DRAW_LOWER_LEFT'],
                [Blockly.MD_OLEDLowRightCircle, 'U8G_DRAW_LOWER_RIGHT']
                ];

    this.setColour(colorSet);
    this.appendDummyInput("")
        .appendTitle(Blockly.OLEDGeomCircle)
        .appendField(new Blockly.FieldDropdown(TYPE), 'TYPE');


    this.appendDummyInput("")
        .appendTitle(Blockly.MD_OLEDArc)
        .appendField(new Blockly.FieldDropdown(ArcType), 'ArcType');

    this.appendValueInput("x", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle("x:");
    this.appendValueInput("y", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle("y:");
    this.appendValueInput("rw", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle("r:");
    // this.appendValueInput("h", Number)
    //     .setCheck(Number)
    //     .setAlign(Blockly.ALIGN_RIGHT)
    //     .appendTitle("h:");

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
//    this.setTooltip("test");  
    this.setInputsInline(true);

    },
};


Blockly.Blocks.MD_OLED_getWidthHigh = {
  init: function() {
    var TYPE = [[Blockly.OLEDWidth, 'width'],
            [Blockly.OLEDHigh, 'high']
            ];
    this.setColour(colorSet);
    this.appendDummyInput("")
    .appendTitle(Blockly.getOLEDWidthHigh)
    .appendField(new Blockly.FieldDropdown(TYPE), 'TYPE');
    this.setOutput(true, Number);
    this.setTooltip("");
  }
};


///<jscompress sourcefile="Stepper_Blocks.js" />
'use strict';

goog.provide('Blockly.Blocks.Microduino');

goog.require('Blockly.Blocks');


//var colorSet=120;
var colorSet='#27b6ac';

Blockly.Blocks.mdStepperBegin = {
   init: function() {
    this.setColour(colorSet);
    this.appendDummyInput("")
        .appendTitle(Blockly.MDStpperBegin);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    }
};


Blockly.Blocks.mdStepperControl = {


   init: function() {

    var StepperChoice = [
                 ['A', 'A'],
                 ['B', 'B'],
                 ['C', 'C'],
                 ['D', 'D']
              ];

    this.setColour(colorSet);
    this.appendDummyInput("")
        .appendTitle(Blockly.StepperChoice)
        .appendField(new Blockly.FieldDropdown(StepperChoice), 'StepperChoice');

  	this.appendValueInput('speed')
        .setCheck(Number)
        .appendTitle(Blockly.StepperSpeed);

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    }
};

///<jscompress sourcefile="Audio_Blocks.js" />
'use strict';

goog.provide('Blockly.Blocks.Microduino');

goog.require('Blockly.Blocks');


//var colorSet=65;
var colorSet='#e5b748';

var mCookie_PORTS =[[Blockly.coreUSBBoard, "coreUSB"], [Blockly.coreBoard, "core"], [Blockly.corePlusBoard, "core+"]];


Blockly.Blocks.mCookie_Audio_Serial={
init:function(){
    var mCookie_MODE =[[Blockly.MODE_ONE, "MODE_ONE"], [Blockly.MODE_ONE_STOP, "MODE_ONE_STOP"], [Blockly.MODE_ALL, "MODE_ALL"],[Blockly.MODE_FOL, "MODE_FOL"],[Blockly.MODE_RAM, "MODE_RAM"]];

    var mCookie_DEVICE =[[Blockly.flashMemory, "DEVICE_FLASH"], [Blockly.tfCard, "DEVICE_TF"]];
    this.setColour(colorSet);
    this.appendDummyInput("")
        .appendTitle(Blockly.chooseAudioPlay);

    this.appendDummyInput("")
        .appendTitle(Blockly.chooseAudioSerial)
        .appendTitle(new Blockly.FieldDropdown(mCookie_PORTS), "PIN")
        .appendTitle(Blockly.memoryDevice)
        .appendTitle(new Blockly.FieldDropdown(mCookie_DEVICE), "PIN1")
        .appendTitle(Blockly.playMode)
        .appendTitle(new Blockly.FieldDropdown(mCookie_MODE), "PIN2")
    this.appendValueInput("Vol", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.volume);
    //this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};

Blockly.Blocks.mCookie_Audio_Play={
init:function(){
    this.setColour(colorSet);
    this.appendDummyInput("")
         .appendTitle(Blockly.AudioPlay)
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};
Blockly.Blocks.mCookie_Audio_Pose={
init:function(){
    this.setColour(colorSet);
    this.appendDummyInput("")
         .appendTitle(Blockly.AudioPause)
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};
Blockly.Blocks.mCookie_Audio_Next={
init:function(){
    this.setColour(colorSet);
    this.appendDummyInput("")
         .appendTitle(Blockly.AudioNext)
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};
Blockly.Blocks.mCookie_Audio_Prev={
init:function(){
    this.setColour(colorSet);
    this.appendDummyInput("")
         .appendTitle(Blockly.AudioPrev)
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};
Blockly.Blocks.mCookie_Audio_VolUp={
init:function(){
    this.setColour(colorSet);
    this.appendDummyInput("")
         .appendTitle(Blockly.AudioVolUp)
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};
Blockly.Blocks.mCookie_Audio_VolDown={
init:function(){
    this.setColour(colorSet);
    this.appendDummyInput("")
         .appendTitle(Blockly.AudioVolDown)
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};



Blockly.Blocks.mCookie_Audio_Control={
init:function(){


    var getType =[[Blockly.AudioPlay, "play()"], 
                  [Blockly.AudioPause, "pause()"], 
                  [Blockly.AudioNext, "next()"], 
                  [Blockly.AudioPrev, "prev()"],
                  [Blockly.AudioVolUp, "volUp()"],
                  [Blockly.AudioVolDown, "volDown()"]
                ];

    this.setColour(colorSet);
    this.appendDummyInput("")
         .appendTitle(Blockly.RTCAudioControl)
         .appendTitle(new Blockly.FieldDropdown(getType), "getType");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    //this.setOutput(true);
  }
};


Blockly.Blocks.mCookie_Audio_Choose = {
  init: function() {
    this.setColour(colorSet);

    this.appendDummyInput("")
        .appendTitle(Blockly.chooseAudioNum)
    this.appendValueInput("audioNumber", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT);

    this.setInputsInline(true);
    var tip="选择音频文件序号\n";
    // tip+="返回一个数字值\n";
    // tip+="数字接口\n";
    this.setTooltip(tip);
    this.setPreviousStatement(true);
    this.setNextStatement(true);

  }
};
///<jscompress sourcefile="AudioPro_Blocks.js" />
'use strict';

goog.provide('Blockly.Blocks.Microduino');

goog.require('Blockly.Blocks');


//var colorSet=65;
var colorSet='#e5b748';


Blockly.Blocks.audioProPrepare={
init:function(){

    var getType =[[Blockly.ACOUSTIC_GRAND_PIANO, "VS1053_GM1_ACOUSTIC_GRAND_PIANO"], 
                  [Blockly.PIANO, "VS1053_GM1_PIANO"], 
                  [Blockly.ELECTRIC_GRAND_PIANO, "VS1053_GM1_ELECTRIC_GRAND_PIANO"], 
                  [Blockly.HONKY_TONK_PIANO, "VS1053_GM1_HONKY_TONK_PIANO"],
                  [Blockly.RHODES_PIANO, "VS1053_GM1_RHODES_PIANO"],
                  [Blockly.CHORUSED_PIANO, "VS1053_GM1_CHORUSED_PIANO"],
                  [Blockly.OCARINA, "VS1053_GM1_OCARINA"],
                  [Blockly.OCARINB, "VS1053_GM1_OCARINB"],
                  [Blockly.OCARINC, "VS1053_GM1_OCARINC"]
                ];

    this.setColour(colorSet);
    this.appendDummyInput("")
         .appendTitle(Blockly.AudioProPrepare)
         .appendTitle(new Blockly.FieldDropdown(getType), "getType");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    //this.setOutput(true);
  }
};



Blockly.Blocks.audioProInstrument={
init:function(){

    var getType =[[Blockly.ACOUSTIC_GRAND_PIANO, "VS1053_GM1_ACOUSTIC_GRAND_PIANO"], 
                  [Blockly.PIANO, "VS1053_GM1_PIANO"], 
                  [Blockly.ELECTRIC_GRAND_PIANO, "VS1053_GM1_ELECTRIC_GRAND_PIANO"], 
                  [Blockly.HONKY_TONK_PIANO, "VS1053_GM1_HONKY_TONK_PIANO"],
                  [Blockly.RHODES_PIANO, "VS1053_GM1_RHODES_PIANO"],
                  [Blockly.CHORUSED_PIANO, "VS1053_GM1_CHORUSED_PIANO"],
                  [Blockly.OCARINA, "VS1053_GM1_OCARINA"],
                  [Blockly.OCARINB, "VS1053_GM1_OCARINB"],
                  [Blockly.OCARINC, "VS1053_GM1_OCARINC"]
                ];

    this.setColour(colorSet);
    this.appendDummyInput("")
         .appendTitle(Blockly.AudioProInstrument)
         .appendTitle(new Blockly.FieldDropdown(getType), "getType");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    //this.setOutput(true);
  }
};

Blockly.Blocks.audioProControl = {
  init: function() {
    this.setColour(colorSet);

    var getType =[[Blockly.AudioProPlay, "midiNoteOn"],
                  [Blockly.AudioProPause, "midiNoteOff"]
                ];

    this.appendDummyInput("")
         .appendTitle(Blockly.AudioProControl)
         .appendTitle(new Blockly.FieldDropdown(getType), "getType");


    this.appendDummyInput("")
        .appendTitle(Blockly.audioProMelody)
    this.appendValueInput("audioProMelody", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT);

    this.appendDummyInput("")
        .appendTitle(Blockly.audioProVolume)
    this.appendValueInput("audioProVolume", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT);

    this.appendDummyInput("")
        .appendTitle(Blockly.audioProDuration)
    this.appendValueInput("audioProDuration", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT);

    this.setInputsInline(true);
    var tip="音调/音量范围(0~127)\n";
    this.setTooltip(tip);
    this.setPreviousStatement(true);
    this.setNextStatement(true);

  }
};
///<jscompress sourcefile="GPS_Blocks.js" />
'use strict';

goog.provide('Blockly.Blocks.Microduino');

goog.require('Blockly.Blocks');


//var colorSet=65;
var colorSet='#e5b748';


Blockly.Blocks.GPS = {
  init: function() {
    this.setColour(colorSet);

    this.appendDummyInput()
    .appendField(Blockly.GPS);

    this.appendDummyInput()
    .appendField(Blockly.GPSUpdate)
    //.setCheck(Number)
    .appendField(new Blockly.FieldTextInput("2"), "GPSUPDATE")
    .appendField(Blockly.GPSSeconds);
    this.appendStatementInput("GPSInput");

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    //this.setOutput(true, String);

  }
};



Blockly.Blocks.GPSShows = {
  init: function() {
    this.setColour(colorSet);

    this.appendDummyInput()
    .appendField(Blockly.GPSShow);



    this.appendValueInput("GPSHour", String)
        .setCheck([String,Number])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.GPSHour);
    this.appendValueInput("GPSMinute", String)
        .setCheck([String,Number])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.GPSMinute);
    this.appendValueInput("GPSSeconds", String)
        .setCheck([String,Number])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.GPSSeconds);
    this.appendValueInput("GPSDay", String)
        .setCheck([String,Number])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.GPSDay);
    this.appendValueInput("GPSMonth", String)
        .setCheck([String,Number])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.GPSMonth);
    this.appendValueInput("GPSYear", String)
        .setCheck([String,Number])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.GPSYear);

    // this.appendValueInput("GPSFix", String)
    //     .setCheck([String,Number])
    //     .setAlign(Blockly.ALIGN_RIGHT)
    //     .appendField(Blockly.GPSFix);

    this.appendValueInput("GPSFix", String)
        .setCheck([Boolean])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.GPSFix);

    this.appendValueInput("GPSQuality", String)
        .setCheck([String,Number])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.GPSQuality);
    this.appendValueInput("GPSLatitude", String)
        .setCheck([String,Number])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.GPSLatitude);
    this.appendValueInput("GPSLat", String)
        .setCheck([String,Number])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.GPSLat);
    this.appendValueInput("GPSLongitude", String)
        .setCheck([String,Number])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.GPSLongitude);
    this.appendValueInput("GPSLon", String)
        .setCheck([String,Number])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.GPSLon);
    this.appendValueInput("GPSSpeed", String)
        .setCheck([String,Number])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.GPSSpeed);
    this.appendValueInput("GPSAngle", String)
        .setCheck([String,Number])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.GPSAngle);
    this.appendValueInput("GPSAltitude", String)
        .setCheck([String,Number])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.GPSAltitude);
    this.appendValueInput("GPSSatellites", String)
        .setCheck([String,Number])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.GPSSatellites);




    this.setPreviousStatement(true, null);
    //this.setNextStatement(true, null);

  }
};




Blockly.Blocks.GPSHour = {
  init: function() {
    this.setColour(colorSet);
    this.appendDummyInput()
    .appendField(Blockly.GPSHour)
    this.setOutput(true, String);

  }
};

Blockly.Blocks.GPSMinute = {
  init: function() {
    this.setColour(colorSet);
    this.appendDummyInput()
    .appendField(Blockly.GPSMinute)
    this.setOutput(true, String);

  }
};

Blockly.Blocks.GPSSeconds = {
  init: function() {
    this.setColour(colorSet);
    this.appendDummyInput()
    .appendField(Blockly.GPSSeconds)
    this.setOutput(true, String);

  }
};


Blockly.Blocks.GPSDay = {
  init: function() {
    this.setColour(colorSet);
    this.appendDummyInput()
    .appendField(Blockly.GPSDay)
    this.setOutput(true, String);

  }
};

Blockly.Blocks.GPSMonth = {
  init: function() {
    this.setColour(colorSet);
    this.appendDummyInput()
    .appendField(Blockly.GPSMonth)
    this.setOutput(true, String);

  }
};

Blockly.Blocks.GPSYear = {
  init: function() {
    this.setColour(colorSet);
    this.appendDummyInput()
    .appendField(Blockly.GPSYear)
    this.setOutput(true, String);

  }
};

Blockly.Blocks.GPSFix = {
  init: function() {
    this.setColour(colorSet);
    this.appendDummyInput()
    .appendField(Blockly.GPSFix)
    this.setOutput(true, Boolean);

  }
};

Blockly.Blocks.GPSQuality = {
  init: function() {
    this.setColour(colorSet);
    this.appendDummyInput()
    .appendField(Blockly.GPSQuality)
    this.setOutput(true, String);

  }
};

Blockly.Blocks.GPSLatitude = {
  init: function() {
    this.setColour(colorSet);
    this.appendDummyInput()
    .appendField(Blockly.GPSLatitude)
    this.setOutput(true, String);

  }
};

Blockly.Blocks.GPSLat = {
  init: function() {
    this.setColour(colorSet);
    this.appendDummyInput()
    .appendField(Blockly.GPSLat)
    this.setOutput(true, String);

  }
};

Blockly.Blocks.GPSLongitude = {
  init: function() {
    this.setColour(colorSet);
    this.appendDummyInput()
    .appendField(Blockly.GPSLongitude)
    this.setOutput(true, String);

  }
};

Blockly.Blocks.GPSLon = {
  init: function() {
    this.setColour(colorSet);
    this.appendDummyInput()
    .appendField(Blockly.GPSLon)
    this.setOutput(true, String);

  }
};

Blockly.Blocks.GPSSpeed = {
  init: function() {
    this.setColour(colorSet);
    this.appendDummyInput()
    .appendField(Blockly.GPSSpeed)
    this.setOutput(true, String);

  }
};

Blockly.Blocks.GPSAngle = {
  init: function() {
    this.setColour(colorSet);
    this.appendDummyInput()
    .appendField(Blockly.GPSAngle)
    this.setOutput(true, String);

  }
};

Blockly.Blocks.GPSAltitude = {
  init: function() {
    this.setColour(colorSet);
    this.appendDummyInput()
    .appendField(Blockly.GPSAltitude)
    this.setOutput(true, String);

  }
};

Blockly.Blocks.GPSSatellites = {
  init: function() {
    this.setColour(colorSet);
    this.appendDummyInput()
    .appendField(Blockly.GPSSatellites)
    this.setOutput(true, String);

  }
};
///<jscompress sourcefile="motion_Blocks.js" />
'use strict';

goog.provide('Blockly.Blocks.Microduino');

goog.require('Blockly.Blocks');


//var colorSet=65;
var colorSet='#e5b748';


Blockly.Blocks.motionAccGyro = {
  init: function() {
    this.setColour(colorSet);

    this.appendDummyInput("")
        .appendField(new Blockly.FieldImage("../../media/Microduino/motion.png", 45, 32))
        .appendTitle(Blockly.motionInit);
        

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
//    this.setTooltip("test");  
    this.setInputsInline(true);
    },
};



Blockly.Blocks.getMotionValue={
init:function(){

    var getType =[[Blockly.accX, "accX"], 
                  [Blockly.accY, "accY"], 
                  [Blockly.accZ, "accZ"], 
                  [Blockly.gyroX, "gyroX"],
                  [Blockly.gyroY, "gyroY"],
                  [Blockly.gyroZ, "gyroZ"]
                ];

    this.setColour(colorSet);
    this.appendDummyInput("")
         .appendTitle(Blockly.GetMotion)
         .appendTitle(new Blockly.FieldDropdown(getType), "getType");
    this.setInputsInline(true);
    // this.setPreviousStatement(true);
    // this.setNextStatement(true);
    this.setOutput(true);
  }
};


Blockly.Blocks.motionDMP = {
  init: function() {
    this.setColour(colorSet);

    this.appendDummyInput("")
        .appendField(new Blockly.FieldImage("../../media/Microduino/motion.png", 45, 32))
        .appendTitle(Blockly.motionDMP);
        

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
//    this.setTooltip("test");  
    this.setInputsInline(true);
    },
};

Blockly.Blocks.motionSoft = {
  init: function() {


    var getType =[[Blockly.motionNoMagic, '0'], 
                  [Blockly.motionMagic, '1']
                ];


    this.setColour(colorSet);

    this.appendDummyInput("")
        .appendField(new Blockly.FieldImage("../../media/Microduino/motion.png", 45, 32))
        .appendTitle(Blockly.motionSoft);
        

    this.appendDummyInput("")
         .appendTitle(Blockly.motionIsMagic)
         .appendTitle(new Blockly.FieldDropdown(getType), "getType");

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("开启后需要旋转20秒用于磁极校准...");  
    this.setInputsInline(true);
    },
};


Blockly.Blocks.getMotionYawPitchRoll={
init:function(){

    var getType =[[Blockly.motionYaw, "ypr[0]"], 
                  [Blockly.motionPitch, "ypr[1]"], 
                  [Blockly.motionRoll, "ypr[2]"]
                ];

    this.setColour(colorSet);
    this.appendDummyInput("")
         .appendTitle(Blockly.GetMotionDegree)
         .appendTitle(new Blockly.FieldDropdown(getType), "getType");
    this.setInputsInline(true);
    // this.setPreviousStatement(true);
    // this.setNextStatement(true);
    this.setOutput(true);
  }
};
///<jscompress sourcefile="RTC_Blocks.js" />
'use strict';

goog.provide('Blockly.Arduino.Microduino');

goog.require('Blockly.Arduino');

//var colorSet=65;
var colorSet='#e5b748';

Blockly.Blocks.mCookie_RTC_set = {
  init: function() {
    this.setColour(colorSet);
	this.appendValueInput('Year')
		.setCheck(Number)
    .appendField(new Blockly.FieldImage("../../media/Microduino/mCookie_RTC.png", 45, 32))
		.appendTitle(Blockly.SetRTCTime)
		.appendTitle(Blockly.RTCYear);
	this.appendValueInput('Mouth')
		.setCheck(Number)
		.appendTitle(Blockly.RTCMouth);
	this.appendValueInput('Day')
		.setCheck(Number)
		.appendTitle(Blockly.RTCDay);
	this.appendValueInput('Week')
		.setCheck(Number)
		.appendTitle(Blockly.RTCWeek);
    this.appendValueInput('Hour')
		.setCheck(Number)
		.appendTitle(Blockly.RTCHour);
	this.appendValueInput('Minute')
		.setCheck(Number)
		.appendTitle(Blockly.RTCMinute);
    this.appendValueInput('Second')
		.setCheck(Number)
		.appendTitle(Blockly.RTCSecond);	
    this.setPreviousStatement(true);
    this.setNextStatement(true);
	//this.setInputsInline(true);
  }
};


Blockly.Blocks.mCookie_RTC_time={
init:function(){
    this.setColour(colorSet);
    this.appendDummyInput("")
         .appendTitle(Blockly.RTCFormatTime)
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    //this.setOutput(true, String);
  }
};


Blockly.Blocks.mCookie_RTC_date={
init:function(){
    this.setColour(colorSet);
    this.appendDummyInput("")
	     .appendTitle(Blockly.RTCFormatDate)
    this.setOutput(true, String);
    this.setInputsInline(true);
  }
};



Blockly.Blocks.mCookie_RTC_Week={
init:function(){
    this.setColour(colorSet);
    this.appendDummyInput("")
	     .appendTitle(Blockly.RTCFormatWeek)
    this.setInputsInline(true);
    this.setOutput(true);
  }
};

Blockly.Blocks.mCookie_RTC_Hour={
init:function(){
    this.setColour(colorSet);
    this.appendDummyInput("")
	     .appendTitle(Blockly.RTCFormatHour)
    this.setInputsInline(true);
    this.setOutput(true);
  }
};

Blockly.Blocks.mCookie_RTC_Minute={
init:function(){
    this.setColour(colorSet);
    this.appendDummyInput("")
	     .appendTitle(Blockly.RTCFormatMinute)
    this.setInputsInline(true);
    this.setOutput(true);
  }
};

Blockly.Blocks.mCookie_RTC_Second={
init:function(){
    this.setColour(colorSet);
    this.appendDummyInput("")
	     .appendTitle(Blockly.RTCFormatSecond)
    this.setInputsInline(true);
    this.setOutput(true);
  }
};



Blockly.Blocks.mCookie_RTC_Output={
init:function(){


  var getType =[
                [Blockly.RTCYear, "year"],
                [Blockly.RTCMouth, "month"],
                [Blockly.RTCDay, "day"], 
                [Blockly.RTCHour, "hour"], 
                [Blockly.RTCMinute, "minute"], 
                [Blockly.RTCSecond, "second"]
              ];

    this.setColour(colorSet);
    this.appendDummyInput("")
         .appendTitle(Blockly.RTCFormatGetInfo)
         .appendTitle(new Blockly.FieldDropdown(getType), "getType");
    this.setInputsInline(true);
    this.setOutput(true);
  }
};




///<jscompress sourcefile="SD_Blocks.js" />
'use strict';

goog.provide('Blockly.Arduino.Microduino');

goog.require('Blockly.Arduino');

//var colorSet=65;
var colorSet='#e5b748';

Blockly.Blocks.SD_Write={
init:function(){
    this.setColour(colorSet);
    this.appendDummyInput("")
        .appendTitle(Blockly.SD_Write)
        .appendField(new Blockly.FieldImage("../../media/Microduino/mCookie_SD.png", 60, 32))
    this.appendValueInput('File_Name')
		.setCheck(String)
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendTitle(Blockly.File_Name);
    this.appendValueInput('Content')
		.setCheck(String)
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendTitle(Blockly.Content);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setOutput(true, Boolean);
	this.setInputsInline(true);
  }
};


Blockly.Blocks.SD_Read={
init:function(){
    this.setColour(colorSet);
    this.appendDummyInput("")
        .appendTitle(Blockly.SD_Read)
        .appendField(new Blockly.FieldImage("../../media/Microduino/mCookie_SD.png", 60, 32))
    this.appendValueInput('File_Name')
        .setCheck(String)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.File_Name);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setOutput(true, Boolean);
    this.setInputsInline(true);
  }
};
///<jscompress sourcefile="analogRead_Blocks.js" />
'use strict';

goog.provide('Blockly.Blocks.Microduino');

goog.require('Blockly.Blocks');


//var colorSet=518;
var colorSet='#efa752';



Blockly.Blocks.microduinoMicAnal = {
  init: function() {
    this.setColour(colorSet);

    //this.appendValueInput("intValue")
    this.appendDummyInput()
    .appendField(new Blockly.FieldImage("../../media/Microduino/MIC.png", 40, 30))
    .appendField(Blockly.Keyget_Pin)
    .appendField(new Blockly.FieldTextInput("A0"), "analogPin")
    .appendTitle(Blockly.MicSensor)
    .appendTitle(Blockly.MicSensorValue);

    var tip="获取一个模拟值\n";
    tip+="返回一个模拟值\n";
    tip+="模拟接口\n";
    this.setTooltip(tip);
    this.setOutput(true, Number);

  }
};

Blockly.Blocks.microduinoLightAnal = {
  init: function() {
    this.setColour(colorSet);

    //this.appendValueInput("intValue")
    this.appendDummyInput()
    .appendField(new Blockly.FieldImage("../../media/Microduino/ALight.png", 40, 30))
    .appendField(Blockly.Keyget_Pin)
    .appendField(new Blockly.FieldTextInput("A0"), "analogPin")
    .appendTitle(Blockly.LightSensor)
    .appendTitle(Blockly.LightSensorValue);

    var tip="获取一个模拟值\n";
    tip+="返回一个模拟值\n";
    tip+="模拟接口\n";
    this.setTooltip(tip);
    this.setOutput(true, Number);

  }
};


Blockly.Blocks.microduinoIRRactAnal = {
  init: function() {
    this.setColour(colorSet);

    //this.appendValueInput("intValue")
    this.appendDummyInput()
    .appendField(new Blockly.FieldImage("../../media/Microduino/gray.png", 40, 30))
    .appendField(Blockly.Keyget_Pin)
    .appendField(new Blockly.FieldTextInput("A0"), "analogPin")
    .appendTitle(Blockly.IRRaction)
    .appendTitle(new Blockly.FieldDropdown([[Blockly.IRRactionDistance, "distance"], [Blockly.IRRactionBlack, "gray"]]),'action');

    var tip="获取一个模拟值\n";
    tip+="返回一个模拟值\n";
    tip+="模拟接口\n";
    this.setTooltip(tip);
    this.setOutput(true, Number);

  }
};


Blockly.Blocks.MD_Potentiometer = {
  init: function() {
    this.setColour(colorSet);

    this.appendDummyInput()
    .appendField(new Blockly.FieldImage("../../media/Microduino/potentiometer.png", 40, 30))
    .appendField(Blockly.Keyget_Pin)
    .appendField(new Blockly.FieldTextInput("A0"), "analogPin")
    .appendTitle(Blockly.MicroduinoPotentiometer);


    var tip="获取一个模拟值\n";
    tip+="返回一个模拟值\n";
    tip+="模拟接口\n";
    this.setTooltip(tip);
    this.setOutput(true, Number);

  }
};
///<jscompress sourcefile="BreathingLight_Blocks.js" />
'use strict';

goog.provide('Blockly.Blocks.Microduino');

goog.require('Blockly.Blocks');


//var colorSet = 518;
var colorSet='#70bd94';


Blockly.Blocks.BreathingLightH = {
  init: function() {

    var PWMPin =[["3", "3"], ["4", "4"], ["5", "5"], 
                 ["6", "6"], ["7", "7"], ["8", "8"], 
                 ["9", "9"]
                ];

    this.setColour(colorSet);

    this.appendDummyInput("")
        //.appendTitle(Blockly.BreathingLight)
        .appendTitle(Blockly.BreathingLightH)
        .appendTitle(Blockly.ColorLEDPin)
        .appendTitle(new Blockly.FieldDropdown(PWMPin), "LEDPinNumber");


    this.appendValueInput("LEDFrequency", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.LEDBreathingTime);

    this.appendDummyInput("")
        .appendTitle(Blockly.GPSSeconds);


    var tip="定义LED灯的引脚号和呼吸频率\n";
    tip+="数字接口\n";
    this.setTooltip(tip);

    //this.appendStatementInput('DO')
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
   // this.setTooltip("test");  
    this.setInputsInline(true);
    },
};


Blockly.Blocks.BreathingLightX = {
  init: function() {

    var PWMPin =[["3", "3"], ["4", "4"], ["5", "5"], 
                 ["6", "6"], ["7", "7"], ["8", "8"], 
                 ["9", "9"]
                ];

    this.setColour(colorSet);

    this.appendDummyInput("")
        //.appendTitle(Blockly.BreathingLight)
        .appendTitle(Blockly.BreathingLightX)
        .appendTitle(Blockly.ColorLEDPin)
        .appendTitle(new Blockly.FieldDropdown(PWMPin), "LEDPinNumber");


    this.appendValueInput("LEDFrequency", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.LEDBreathingTime);

    this.appendDummyInput("")
        .appendTitle(Blockly.GPSSeconds);


    var tip="定义LED灯的引脚号和呼吸频率\n";
    tip+="数字接口\n";
    this.setTooltip(tip);

    //this.appendStatementInput('DO')
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
   // this.setTooltip("test");  
    this.setInputsInline(true);
    },
};
///<jscompress sourcefile="Buzzer_Blocks.js" />
'use strict';

goog.provide('Blockly.Blocks.Microduino');

goog.require('Blockly.Blocks');


//var colorSet = 518;
var colorSet='#70bd94';


Blockly.Blocks.BuzzerTone = {	
  init: function() {
    this.setColour(colorSet);

    this.appendDummyInput("")
        .appendField(new Blockly.FieldImage("../../media/Microduino/Buzzer.png", 40, 30))
        .appendTitle(Blockly.Buzzer)
		
    // .appendField(Blockly.BuzzerNum)
    // .appendField(new Blockly.FieldTextInput("1"), "buzzerNumber")
  	
  	this.appendValueInput("BuzzerPin", Number)
  		.setCheck(Number)
  		.setAlign(Blockly.ALIGN_RIGHT)
  		.appendTitle(Blockly.BuzzerPin);
  	this.appendValueInput("Frequency", Number)
  		.setCheck(Number)
  		.setAlign(Blockly.ALIGN_RIGHT)
  		.appendTitle(Blockly.Frequency);

    var tip="定义控制蜂鸣器的引脚\n";
    tip+="数字接口\n";
    this.setTooltip(tip);

    this.setPreviousStatement(true,null);
    this.setNextStatement(true,null);
    this.setInputsInline(true);
  },
};



Blockly.Blocks.BuzzerToneMelody = { 
  init: function() {

    var buzzerMelody =[[Blockly.low1DO, "262"], [Blockly.low2RE, "294"], [Blockly.low3MI, "330"],
                       [Blockly.low4FA, "349"], [Blockly.low5SO, "392"], [Blockly.low6LA, "440"],
                       [Blockly.low7XI, "494"], [Blockly.midlle1DO, "523"], [Blockly.midlle2RE, "587"], 
                       [Blockly.midlle3MI, "659"],[Blockly.midlle4FA, "698"], [Blockly.midlle5SO, "784"], 
                       [Blockly.midlle6LA, "880"],[Blockly.midlle7XI, "988"], [Blockly.high1DO, "1046"], 
                       [Blockly.high2RE, "1175"], [Blockly.high3MI, "1318"],[Blockly.high4FA, "1397"], 
                       [Blockly.high5SO, "1568"], [Blockly.high6LA, "1760"],[Blockly.high7XI, "1967"]
                      ];
    this.setColour(colorSet);

    this.appendDummyInput("")
        .appendField(new Blockly.FieldImage("../../media/Microduino/Buzzer.png", 40, 30))
        .appendTitle(Blockly.Buzzer)
    

    this.appendValueInput("BuzzerPin", Number)
      .setCheck(Number)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendTitle(Blockly.BuzzerPin);

    this.appendDummyInput("")
    .appendTitle(Blockly.BuzzerMelody)
    .appendTitle(new Blockly.FieldDropdown(buzzerMelody), "buzzerMelody")

    var tip="定义控制蜂鸣器的引脚和旋律\n";
    tip+="数字接口\n";
    this.setTooltip(tip);

    this.setPreviousStatement(true,null);
    this.setNextStatement(true,null);
    this.setInputsInline(true);
  },
};


Blockly.Blocks.BuzzerToneSong = {
  init: function() {

    var buzzerSong =[[Blockly.BuzzerSong1, "1"], [Blockly.BuzzerSong2, "2"], [Blockly.BuzzerSong3, "3"],
                      [Blockly.BuzzerSong4, "4"], [Blockly.BuzzerSong5, "5"], [Blockly.BuzzerSong6, "6"],
                      [Blockly.BuzzerSong7, "7"], [Blockly.BuzzerSong8, "8"], [Blockly.BuzzerSong9, "9"],
                      [Blockly.BuzzerSong10, "10"]];
    this.setColour(colorSet);

    this.appendDummyInput("")
        .appendField(new Blockly.FieldImage("../../media/Microduino/Buzzer.png", 40, 30))
        .appendTitle(Blockly.Buzzer)
    

    this.appendValueInput("BuzzerPin", Number)
      .setCheck(Number)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendTitle(Blockly.BuzzerPin);

    this.appendDummyInput("")
    .appendTitle(Blockly.BuzzerSong)
    .appendTitle(new Blockly.FieldDropdown(buzzerSong), "buzzerSong")

    var tip="定义控制蜂鸣器的引脚和曲目\n";
    tip+="数字接口\n";
    this.setTooltip(tip);

    this.setPreviousStatement(true,null);
    this.setNextStatement(true,null);
    this.setInputsInline(true);
  },
};





Blockly.Blocks.BuzzerNoTone = { 
  init: function() {
    this.setColour(colorSet);

    this.appendDummyInput("")
        .appendField(new Blockly.FieldImage("../../media/Microduino/Buzzer.png", 40, 30))
        .appendTitle(Blockly.BuzzerNoTone)
    
    // .appendField(Blockly.BuzzerNum)
    // .appendField(new Blockly.FieldTextInput("1"), "buzzerNumber")
    
    this.appendValueInput("BuzzerPin", Number)
      .setCheck(Number)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendTitle(Blockly.BuzzerPin);

    var tip="定义控制蜂鸣器的引脚\n";
    tip+="数字接口\n";
    this.setTooltip(tip);

    this.setPreviousStatement(true,null);
    this.setNextStatement(true,null);
    this.setInputsInline(true);
  },
};








///<jscompress sourcefile="colorLED_Blocks.js" />
'use strict';

goog.provide('Blockly.Blocks.Microduino');

goog.require('Blockly.Blocks');


//var colorSet = 518;
var colorSet='#70bd94';


Blockly.Blocks.ws2812Begin = {
  init: function() {
    this.setColour(colorSet);

    this.appendDummyInput("")
        .appendField(new Blockly.FieldImage("../../media/Microduino/colorLEDBegin.png", 40, 30))
        .appendTitle(Blockly.ColorLEDInit)
        

    this.appendValueInput("LEDNumber", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.ColorLEDNumber);
    this.appendValueInput("LEDPin", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.ColorLEDPin);


    var tip="定义彩灯所需的库函数和对象\n";
    tip+="数字接口\n";
    this.setTooltip(tip);

    //this.appendStatementInput('DO')
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
   // this.setTooltip("test");  
    this.setInputsInline(true);
    },
};



Blockly.Blocks.ws2812Doing = {
  init: function() {
    this.setColour(colorSet);
    this.appendDummyInput("")
        .appendField(new Blockly.FieldImage("../../media/Microduino/colorLEDCntrol.png", 40, 30))
        .appendTitle(Blockly.ColorLEDControl)
    this.appendValueInput("LEDIndex", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.ColorLEDIndex);
    this.appendDummyInput("")
        .appendTitle(Blockly.ColorSet)
        .appendField(new Blockly.FieldColour("#FF0000"), "colorRGB");
    var tip="定义彩灯序号和颜色\n";
    tip+="数字接口\n";
    this.setTooltip(tip);
    //this.appendStatementInput('DO')
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
//    this.setTooltip("test");  
    this.setInputsInline(true);
    },
};


Blockly.Blocks.ws2812DoingRGB = {
  init: function() {
    this.setColour(colorSet);
    this.appendDummyInput("")
        .appendField(new Blockly.FieldImage("../../media/Microduino/colorLEDCntrol.png", 40, 30))
        .appendTitle(Blockly.ColorLEDControl)
    this.appendValueInput("LEDIndex", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.ColorLEDIndex);
    this.appendValueInput("red", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.ColorLEDRed);
    this.appendValueInput("green", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.ColorLEDGreen);
    this.appendValueInput("blue", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.ColorLEDBlue);


    var tip="定义彩灯序号和颜色\n";
    tip+="数字接口\n";
    tip+="红,绿,蓝颜色值在0~255之间\n";
    this.setTooltip(tip);
    //this.appendStatementInput('DO')
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
//    this.setTooltip("test");  
    this.setInputsInline(true);
    },
};

Blockly.Blocks.ws2812BreathRGB = {
  init: function() {
    this.setColour(colorSet);
    this.appendDummyInput("")
        .appendField(new Blockly.FieldImage("../../media/Microduino/colorLEDCntrol.png", 40, 30))
        .appendTitle(Blockly.ColorLEDBreath)
    this.appendValueInput("LEDIndex", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.ColorLEDIndex);
    this.appendValueInput("red", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.ColorLEDRed);
    this.appendValueInput("green", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.ColorLEDGreen);
    this.appendValueInput("blue", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.ColorLEDBlue);


    var tip="定义彩灯序号和颜色\n";
    tip+="数字接口\n";
    tip+="红,绿,蓝颜色值在0~255之间\n";
    this.setTooltip(tip);
    //this.appendStatementInput('DO')
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
//    this.setTooltip("test");  
    this.setInputsInline(true);
    },
};
///<jscompress sourcefile="digitalRead_Blocks.js" />
'use strict';

goog.provide('Blockly.Blocks.Microduino');

goog.require('Blockly.Blocks');


//var colorSet=518;
var colorSet='#efa752';


Blockly.Blocks.microduinoCrash = {
  init: function() {
    this.setColour(colorSet);

    this.appendDummyInput("")
        .appendField(new Blockly.FieldImage("../../media/Microduino/Crash.png", 40, 30))
        .appendTitle(Blockly.Keyget_Pin)
    this.appendValueInput("digitalPin", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT);


    this.appendDummyInput()
    .appendTitle(Blockly.crashButton)
    
    .appendTitle(new Blockly.FieldDropdown([[Blockly.KeyInputPRESS, "down"], [Blockly.KeyInputRELEASE, "up"]]),'action');


    this.setInputsInline(true);
    var tip="获取一个数字值\n";
    tip+="返回一个数字值\n";
    tip+="数字接口\n";
    this.setTooltip(tip);
    this.setOutput(true, Boolean);

  }
};



Blockly.Blocks.microduinoTuch = {
  init: function() {
    this.setColour(colorSet);

    this.appendDummyInput("")
    .appendField(new Blockly.FieldImage("../../media/Microduino/Touch.png", 40, 30))
        .appendTitle(Blockly.Keyget_Pin)
    this.appendValueInput("digitalPin", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT);


    this.appendDummyInput()
    .appendTitle(Blockly.touchButton)
    .appendTitle(new Blockly.FieldDropdown([[Blockly.KeyInputPRESS, "down"], [Blockly.KeyInputRELEASE, "up"]]),'action');

    this.setInputsInline(true);
    var tip="获取一个数字值\n";
    tip+="返回一个数字值\n";
    tip+="数字接口\n";
    this.setTooltip(tip);
    this.setOutput(true, Boolean);

  }
};


Blockly.Blocks.microduinoPIR = {
  init: function() {
    this.setColour(colorSet);


    this.appendDummyInput("")
    .appendField(new Blockly.FieldImage("../../media/Microduino/PIR.png", 40, 30))
    .appendTitle(Blockly.Keyget_Pin)
    this.appendValueInput("digitalPin", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT);

    this.appendDummyInput()
    .appendTitle(Blockly.PIRSensor)
    .appendTitle(new Blockly.FieldDropdown([[Blockly.personAction, "high"], [Blockly.personNoAction, "low"]]),'action');

    this.setInputsInline(true);
    var tip="获取一个数字值\n";
    tip+="返回一个数字值\n";
    tip+="数字接口\n";
    this.setTooltip(tip);
    this.setOutput(true, Boolean);

  }
};


Blockly.Blocks.microduinoMic = {
  init: function() {
    this.setColour(colorSet);

    this.appendDummyInput("")
    .appendField(new Blockly.FieldImage("../../media/Microduino/MIC.png", 40, 30))
    .appendTitle(Blockly.Keyget_Pin)
        
    this.appendValueInput("digitalPin", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT);

    this.appendDummyInput()
    .appendTitle(Blockly.MicSensor)
    .appendTitle(new Blockly.FieldDropdown([[Blockly.sonudHigh, "high"], [Blockly.noSound, "low"]]),'action');

    this.setInputsInline(true);
    var tip="获取一个数字值\n";
    tip+="返回一个数字值\n";
    tip+="数字接口\n";
    this.setTooltip(tip);
    this.setOutput(true, Boolean);

  }
};

Blockly.Blocks.microduinoLight = {
  init: function() {
    this.setColour(colorSet);

    this.appendDummyInput("")
    .appendField(new Blockly.FieldImage("../../media/Microduino/ALight.png", 40, 30))
    .appendTitle(Blockly.Keyget_Pin)
        
    this.appendValueInput("digitalPin", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT);

    this.appendDummyInput()
    .appendTitle(Blockly.LightSensor)
    .appendTitle(new Blockly.FieldDropdown([[Blockly.lightHigh, "high"], [Blockly.lightLow, "low"]]),'action');

    this.setInputsInline(true);
    var tip="获取一个数字值\n";
    tip+="返回一个数字值\n";
    tip+="数字接口\n";
    this.setTooltip(tip);
    this.setOutput(true, Boolean);

  }
};
///<jscompress sourcefile="IR_Receiver_Blocks.js" />
'use strict';

goog.provide('Blockly.Arduino.Microduino');

goog.require('Blockly.Arduino');

//var colorSet = 518;
var colorSet='#3bc647';


Blockly.Blocks.Microduino_ir_remote_begin = {
  init: function() {
    this.setColour(colorSet);

    this.appendDummyInput("")
        .appendTitle(Blockly.ir_r_Init)
        .appendField(new Blockly.FieldImage("../../media/Microduino/IR_R.png", 50, 50))
  this.appendValueInput("Pin", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.ColorLEDPin);
    //this.appendStatementInput('DO')
    this.setPreviousStatement(true, null);
    //this.setNextStatement(true, null); 
    this.setInputsInline(true);
    },
};


Blockly.Blocks.Microduino_ir_remote= {
  init: function() {
    this.setColour(colorSet);        
   	this.appendDummyInput("")
        .appendField(new Blockly.FieldImage("../../media/Microduino/IR_R.png", 50, 50))
	      .appendTitle(Blockly.LKL_MBOT_IR_REMOTE)
	      .appendTitle("#")
		    .appendTitle(new Blockly.FieldDropdown([["power", "0XFFA25D"], ["MENU", "0XFFE21D"],["TEST", "0XFF22DD"],["+", "0XFF02FD"],["back", "0XFFC23D"], ["<<", "0XFFE01F"],[">", "0XFFA857"],[">>", "0XFF906F"],["0", "0XFF6897"],["-", "0XFF9867"],["C", "0XFFB04F"],["1", "0XFF30CF"],["2", "0XFF18E7"],["3", "0XFF7A85"],["4", "0XFF10EF"],["5", "0XFF38C7"],["6", "0XFF5AA5"],["7", "0XFF42BD"],["8", "0XFF4AB5"],["9", "0XFF52AD"]]), "btn")
		    .appendTitle(Blockly.LKL_MBOT_IR_REMOTE_PRESSED);
    this.setOutput(true, Boolean);
  }
};

Blockly.Blocks.IRSend= {
  init: function() {
    var TYPE = [ ['NEC', 'NEC'],
                    ['Sony', 'Sony'],
                    ['RC5', 'RC5'],
                    ['RC6', 'RC6']];
    this.setColour(colorSet);        
    this.appendDummyInput("")
        .appendField(new Blockly.FieldImage("../../media/Microduino/IR_R.png", 50, 50))
        .appendTitle(Blockly.IRSnd)
        .appendTitle("#")
        .appendTitle(Blockly.IRSend_content)
        .appendTitle(new Blockly.FieldTextInput('0xa90'),'IRCONTENT')
        .appendTitle(Blockly.IRSend_byte)
        .appendTitle(new Blockly.FieldTextInput('12'),'IRLENGTH')
        .appendTitle(Blockly.IRTYPE)
        .appendField(new Blockly.FieldDropdown(TYPE), 'TYPE');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null); 
  }
};
///<jscompress sourcefile="joystick_Blocks.js" />
'use strict';

goog.provide('Blockly.Blocks.Microduino');

goog.require('Blockly.Blocks');


//var colorSet=518;
var colorSet='#efa752';


Blockly.Blocks.xyJoystick = {
  init: function() {
    this.setColour(colorSet);

    //this.appendValueInput("intValue")
    this.appendDummyInput()
    .appendField(new Blockly.FieldImage("../../media/Microduino/Joystick.png", 40, 30))
    .appendField(Blockly.Keyget_Pin)
    .appendField(new Blockly.FieldTextInput("A0"), "analogPin")
    .appendField(Blockly.KeygetJoystic)
    .appendTitle(new Blockly.FieldDropdown([[Blockly.Horizontal, "x"], [Blockly.Vertical, "y"]]),'direction')
    .appendField(Blockly.coordinate);


    var tip="获取一个模拟值\n";
    tip+="返回一个模拟值\n";
    tip+="模拟接口\n";
    this.setTooltip(tip);

    // this.setPreviousStatement(true, null);
    // this.setNextStatement(true, null);
    this.setOutput(true, Number);

  }
};




Blockly.Blocks.microduinoJoystick = {
  init: function() {
    this.setColour(colorSet);

    //this.appendValueInput("intValue")
    this.appendDummyInput()
    .appendField(new Blockly.FieldImage("../../media/Microduino/Joystick.png", 40, 30))
    .appendField(Blockly.Keyget_Pin)
    .appendField(new Blockly.FieldTextInput("A0"), "analogPin")
    .appendField(Blockly.KeygetJoystic)
    .appendTitle(new Blockly.FieldDropdown([[Blockly.KeyInputPRESS, "0"], 
                                            [Blockly.KeyDownDir, "1"],
                                            [Blockly.KeyLeftDir, "2"],
                                            [Blockly.KeyUpDir, "3"],
                                            [Blockly.KeyRightDir, "4"],
                                            [Blockly.KeyInputRELEASE, "5"]]),'type');
    // .appendField(Blockly.KeyJoysticState);


    var tip="获取一个摇杆状态\n";
    // tip+="返回一个模拟值\n";
    // tip+="模拟接口\n";
    this.setTooltip(tip);

    // this.setPreviousStatement(true, null);
    // this.setNextStatement(true, null);
    this.setOutput(true, Number);

  }
};
///<jscompress sourcefile="KEY_Blocks.js" />
'use strict';

goog.provide('Blockly.Blocks.Microduino');

goog.require('Blockly.Blocks');

//var colorSet = 518;
var colorSet='#efa752';

Blockly.Blocks.Microduino_KEYDigital = {
  init: function() {
   	 var CHECK = [[Blockly.shortPress, 'SHORT_PRESS'],
                    [Blockly.longPress, 'LONG_PRESS']];                   
    this.setColour(colorSet);
    this.appendDummyInput("")
        .appendField(new Blockly.FieldImage("../../media/Microduino/Crash.png", 40, 30))
		.appendTitle(Blockly.Keyget)
        .appendTitle(Blockly.Keyget_Pin)
        .appendTitle(new Blockly.FieldTextInput('4'),'KPin');
    this.appendDummyInput("")
        .appendTitle(Blockly.Keyget_Check)
        .appendTitle(new Blockly.FieldDropdown(CHECK), "CHECK");

    //this.setOutput(true, Boolean);

    var tip="定义控制按钮的引脚和事件类型\n";
    tip+="数字接口\n";
    this.setTooltip(tip);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.appendStatementInput('DO');
    },
};


Blockly.Blocks.Microduino_KEYAnalog = {
  init: function() {
    var CHECK = [[Blockly.shortPress, 'SHORT_PRESS'],
            [Blockly.longPress, 'LONG_PRESS']]; 

    this.setColour(colorSet);
    this.appendDummyInput("")
        .appendField(new Blockly.FieldImage("../../media/Microduino/Joystick.png", 40, 30))
        .appendTitle(new Blockly.FieldTextInput('left'),'joyStickAction')
        .appendTitle(Blockly.KeygetJoystic)
        .appendTitle(Blockly.Keyget_Pin)
        .appendTitle(new Blockly.FieldTextInput('A0'),'KPin');
    this.appendDummyInput("")
        .appendTitle(Blockly.Keyget_Analog)
        .appendTitle(new Blockly.FieldTextInput('0'),'MIN')
        .appendTitle(Blockly.Keyget_To)
        .appendTitle(new Blockly.FieldTextInput('1023'),'MAX');
    this.appendDummyInput("")
        .appendTitle(Blockly.Keyget_Check)
        .appendTitle(new Blockly.FieldDropdown(CHECK), "CHECK");

    //this.setOutput(true, Boolean);

    var tip="定义控制按钮的引脚和事件类型\n";
    tip+="模拟接口\n";
    this.setTooltip(tip);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.appendStatementInput('DO');
    },
};



Blockly.Blocks.oldKEYDigital = {
  init: function() {
     var CHECK = [[Blockly.KeyInputRELEASE, 'RELEASE'],
                    [Blockly.KeyInputPRESS, 'PRESS']];                   
    this.setColour(colorSet);
    this.appendDummyInput("")
        .appendTitle(Blockly.Keyget)
        .appendTitle(Blockly.Keyget_Pin)
        .appendTitle(new Blockly.FieldTextInput('4'),'KPin')
        .appendTitle(Blockly.Keyget_Check)
        .appendTitle(new Blockly.FieldDropdown(CHECK), "CHECK");

    this.setOutput(true, Boolean);

    var tip="定义控制按钮的引脚和事件类型\n";
    tip+="数字接口\n";
    this.setTooltip(tip);
    // this.setPreviousStatement(true, null);
    // this.setNextStatement(true, null);
    },
};


Blockly.Blocks.oldKEYAnalog = {
  init: function() {                  
    this.setColour(colorSet);
    this.appendDummyInput("")
        .appendTitle(Blockly.Keyget)
        .appendTitle(Blockly.Keyget_Pin)
        .appendTitle(new Blockly.FieldTextInput('A0'),'KPin')
        .appendTitle(Blockly.Keyget_Analog)
        .appendTitle(new Blockly.FieldTextInput('0'),'MIN')
        .appendTitle(Blockly.Keyget_To)
        .appendTitle(new Blockly.FieldTextInput('1023'),'MAX');

    this.setOutput(true, Boolean);

    var tip="定义控制按钮的引脚和事件类型\n";
    tip+="数字接口\n";
    this.setTooltip(tip);
    // this.setPreviousStatement(true, null);
    // this.setNextStatement(true, null);
    },
};

///<jscompress sourcefile="LM75_Blocks.js" />
'use strict';

goog.provide('Blockly.Blocks.Microduino');

goog.require('Blockly.Blocks');


//var colorSet=518;
var colorSet='#efa752';


Blockly.Blocks.lm75 = {
  init: function() {
    this.setColour(colorSet);

    this.appendDummyInput()
    .appendField(new Blockly.FieldImage("../../media/Microduino/LM75.png", 40, 30))
    .appendField(Blockly.MicroduinoLM75)
    this.setOutput(true, Number);

    var tip="获取一个温度值\n";
    tip+="返回一个数字值\n";
    tip+="IIC接口\n";
    this.setTooltip(tip);
    //this.setHelpUrl('https://www.microduino.cn/wiki/index.php/Main_Page/zh');

  }
};



///<jscompress sourcefile="servo_Blocks.js" />
'use strict';

goog.provide('Blockly.Blocks.Microduino');

goog.require('Blockly.Blocks');

var colorSet='#70bd94';

Blockly.Blocks.microduinoServoMove = {
  init: function() {
    this.setColour(colorSet);
	this.appendValueInput("PIN", Number)
        .appendField(Blockly.MIXLY_SERVO)
        .appendField(Blockly.MIXLY_PIN)
        .setCheck(Number);
    this.appendValueInput("DEGREE", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.MIXLY_DEGREE_0_180);
    this.appendValueInput("DELAY_TIME", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.MicroduinoServoSpeed);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_BLOCKGROUP_SERVO_MOVE);
  }
};
///<jscompress sourcefile="TCS3414_Blocks.js" />
'use strict';

goog.provide('Blockly.Blocks.Microduino');

goog.require('Blockly.Blocks');


//var colorSet=518;
var colorSet='#efa752';


Blockly.Blocks.ColorDetPrepare_TCS3414 = {
  init: function() {
    this.setColour(colorSet);

    this.appendDummyInput()
    .appendField(Blockly.TCS3414Ready);

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);

    var tip="获取一个颜色值\n";
    tip+="返回一个数字值\n";
    tip+="IIC接口\n";
    this.setTooltip(tip);
    //this.setHelpUrl('https://www.microduino.cn/wiki/index.php/Main_Page/zh');

  }
};


Blockly.Blocks.ColorGet_TCS3414 = {
  init: function() {


    var getType =[[Blockly.ColorLEDRed, "redColor"], 
                  [Blockly.ColorLEDGreen, "greenColor"], 
                  [Blockly.ColorLEDBlue, "blueColor"]
                ];

    this.setColour(colorSet);

    this.appendDummyInput()
    .appendField(Blockly.TCS3414Get)
    .appendTitle(new Blockly.FieldDropdown(getType), "getType");


    this.setOutput(true, Number);

    var tip="获取一个颜色值\n";
    tip+="返回一个数字值\n";
    tip+="IIC接口\n";
    this.setTooltip(tip);
    //this.setHelpUrl('https://www.microduino.cn/wiki/index.php/Main_Page/zh');

  }
};

///<jscompress sourcefile="Tem_Hum_Blocks.js" />
'use strict';

goog.provide('Blockly.Blocks.Microduino');

goog.require('Blockly.Blocks');


//var colorSet = 518;
var colorSet='#efa752';

Blockly.Blocks.mCookie_AM2321 = {	
  init: function() {
    this.setColour(colorSet);
    this.appendDummyInput("")
    .appendField(new Blockly.FieldImage("../../media/Microduino/AM2321.png", 40, 30))
	    .appendTitle(Blockly.BLE_AM2321)
	    .appendTitle("#")
	    .appendTitle(new Blockly.FieldDropdown([[Blockly.BLE_Tem, "1"], [Blockly.BLE_Hum, "2"]]),'direction')
		.appendTitle(Blockly.BLE_Hum_Tem);

    var tip="获取一个温湿度值\n";
    tip+="返回一个数字值\n";
    tip+="IIC接口\n";
    this.setTooltip(tip);

    this.setInputsInline(true);
    // this.setPreviousStatement(true);
    // this.setNextStatement(true);
    this.setOutput(true);
  }
};

Blockly.Blocks.mCookie_SHT2 = {   
  init: function() {
    this.setColour(colorSet);
    this.appendDummyInput("")
    .appendField(new Blockly.FieldImage("../../media/Microduino/SHT2.png", 40, 30))
        .appendTitle(Blockly.BLE_AM2321)
        .appendTitle(new Blockly.FieldDropdown([[Blockly.BLE_Tem, "1"], [Blockly.BLE_Hum, "2"]]),'direction')
        .appendTitle(Blockly.BLE_Hum_Tem);

    var tip="获取一个温湿度值,采用SHT2芯片\n";
    tip+="返回一个数字值\n";
    tip+="IIC接口\n";
    this.setTooltip(tip);

    this.setInputsInline(true);
    // this.setPreviousStatement(true);
    // this.setNextStatement(true);
    this.setOutput(true);
  }
};
///<jscompress sourcefile="Timer_Blocks.js" />
'use strict';

goog.provide('Blockly.Blocks.Microduino');

goog.require('Blockly.Blocks');


//var colorSet = 518;
var colorSet='#70bd94';


Blockly.Blocks.MicroduinoTimer = {
  init: function() {

  this.setColour(colorSet);
  this.appendDummyInput("")
    .appendTitle(Blockly.interalTime)
    .appendTitle(Blockly.timerName)
    .appendTitle(new Blockly.FieldTextInput('timer1'),'timerName');
		// .appendTitle("interval")
  //       .appendTitle(new Blockly.FieldTextInput('2000'),'intervalTime');

  	this.appendValueInput("intervalTime", Number)
  		.setCheck(Number)
  		.setAlign(Blockly.ALIGN_RIGHT)
  		.appendTitle(Blockly.interval);

  	this.appendDummyInput("")
		.appendTitle(Blockly.interalMILLIS);


    var tip="定义执行的间隔时间\n";
    tip+="\n";
    this.setTooltip(tip);

    this.appendStatementInput('TimerDOing')
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    },
};


Blockly.Blocks.MicroduinoTimerBegin = {
  init: function() {

    this.setColour(colorSet);
  this.appendDummyInput("")
    .appendTitle(Blockly.timeOutBegin)
    .appendTitle(Blockly.timerName)
    .appendTitle(new Blockly.FieldTextInput('timer1'),'timerName');

    // this.appendValueInput("intervalTime", Number)
    //   .setCheck(Number)
    //   .setAlign(Blockly.ALIGN_RIGHT)
    //   .appendTitle(Blockly.interval);

    // this.appendDummyInput("")
    // .appendTitle(Blockly.interalMILLIS);



    var tip="定义执行定时时间\n";
    tip+="\n";
    this.setTooltip(tip);

    //this.appendStatementInput('TimerDOing')
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    },
};


Blockly.Blocks.MicroduinoTimerOut = {
  init: function() {

    this.setColour(colorSet);
  this.appendDummyInput("")
    .appendTitle(Blockly.timeOutDoing)
    .appendTitle(Blockly.timerName)
        .appendTitle(new Blockly.FieldTextInput('timer1'),'timerName');
    this.appendValueInput("intervalTime", Number)
      .setCheck(Number)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendTitle(Blockly.timeOutDuration);

    this.appendDummyInput("")
    .appendTitle(Blockly.interalMILLIS);

    this.setOutput(true, Boolean);

    var tip="定义超时执行时间\n";
    tip+="\n";
    this.setTooltip(tip);

    //this.appendStatementInput('TimerDOing')
    // this.setPreviousStatement(true, null);
    // this.setNextStatement(true, null);
    this.setInputsInline(true);
    },
};


Blockly.Blocks.MicroduinoTimerDuration = {
  init: function() {

    this.setColour(colorSet);
  this.appendDummyInput("")
    .appendTitle(Blockly.MIXLY_DURATION)
    .appendTitle(Blockly.timerName)
    .appendTitle(new Blockly.FieldTextInput('timer1'),'timerName');

    this.setOutput(true, Number);

    var tip="获取持续时间\n";
    tip+="\n";
    this.setTooltip(tip);

    this.setInputsInline(true);
    },
};
///<jscompress sourcefile="TSL2561_Blocks.js" />
'use strict';

goog.provide('Blockly.Blocks.Microduino');

goog.require('Blockly.Blocks');


//var colorSet=518;
var colorSet='#efa752';


Blockly.Blocks.TSL2561LightReady = {
  init: function() {
    this.setColour(colorSet);

    this.appendDummyInput()
    .appendField(Blockly.TSL2561Ready);

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);

    var tip="获取一个光照值\n";
    tip+="返回一个数字值\n";
    tip+="IIC接口\n";
    this.setTooltip(tip);
    //this.setHelpUrl('https://www.microduino.cn/wiki/index.php/Main_Page/zh');

  }
};


Blockly.Blocks.TSL2561Light = {
  init: function() {
    this.setColour(colorSet);

    this.appendDummyInput()
    .appendField(Blockly.TSL2561)
    this.setOutput(true, Number);

    var tip="获取一个光照值\n";
    tip+="返回一个数字值\n";
    tip+="IIC接口\n";
    this.setTooltip(tip);
    //this.setHelpUrl('https://www.microduino.cn/wiki/index.php/Main_Page/zh');

  }
};

///<jscompress sourcefile="NewVariable_Blocks.js" />
'use strict';

goog.provide('Blockly.Blocks.Microduino');

goog.require('Blockly.Blocks');

//var colorSet=220;
var colorSet='#e386a1';

Blockly.Blocks.Defination = {
  init: function() {
        var FLIP = [['uint16_t', 'uint16_t'],     //announce menu
                    ['uint32_t', 'uint32_t'],
                    ['double', 'double']];
  this.setColour(colorSet);  //module color
  //this.setColour('#e184a7');  //module color


    this.appendValueInput('VALUE') 
         .setCheck(Number)                          //as string
         .setAlign(Blockly.ALIGN_RIGHT)             //right side
         .appendTitle(Blockly.GLOBAL_DECLARE)
         .appendTitle(new Blockly.FieldTextInput('item'),'NAME')//put a text label
         .appendTitle(Blockly.LKL_AS)
     // .appendField(new Blockly.FieldImage("../../media/Microduino/CoreUSB.png", 60, 90))
         .appendTitle(new Blockly.FieldDropdown(FLIP), 'FLIP')//put a menu label
         .appendTitle(Blockly.LKL_VALUE);
    //this.appendStatementInput('DO')
    this.setPreviousStatement(true, null);    
    this.setNextStatement(true, null);
//    this.setTooltip("test");  
    this.setOutput(true);
    //this.setInputsInline(true);
    },
};

Blockly.Blocks.Structure = {
  init: function() {
    this.setColour(colorSet);  //module color
      this.appendDummyInput("")
         .setAlign(Blockly.ALIGN_RIGHT)             //right side
         .appendTitle(Blockly.LKL_DECLARE)
         .appendTitle(new Blockly.FieldTextInput('item'),'Struct_NAME')//put a text label
         .appendTitle(Blockly.Struct)
         .appendTitle(Blockly.Struct_DEF)
         .appendTitle(new Blockly.FieldTextInput('ite_m'),'Struct_DEF');//put a text label
     // .appendField(new Blockly.FieldImage("../../media/Microduino/CoreUSB.png", 60, 90))
    this.appendStatementInput('DO');
    this.setPreviousStatement(true, null);    
    this.setNextStatement(true, null);
//    this.setTooltip("test");  
 //   this.setOutput(true);
    //this.setInputsInline(true);
    },
};

Blockly.Blocks.Var_Definations = {
  init: function() {
        var FLIP = [['uint16_t', 'uint16_t'],     //announce menu
                    ['uint32_t', 'uint32_t'],
                    ['uint8_t','uint8_t'],
                    ['long','long'],
                    ['int','int'],
                    ['char','char'],
                    ['String','String'],
                    ['double', 'double']];
    this.setColour(colorSet);  //module color
    this.appendValueInput('VALUE') 
         .setCheck(Number)                          //as string
         .setAlign(Blockly.ALIGN_RIGHT)             //right side
         .appendTitle(Blockly.LKL_DECLARE_STRUCT)
         .appendTitle(new Blockly.FieldTextInput('item'),'NAME')//put a text label
         .appendTitle(Blockly.LKL_AS)
     // .appendField(new Blockly.FieldImage("../../media/Microduino/CoreUSB.png", 60, 90))
         .appendTitle(new Blockly.FieldDropdown(FLIP), 'FLIP')//put a menu label
         .appendTitle(Blockly.LKL_VALUE);
    //this.appendStatementInput('DO')
    this.setPreviousStatement(true, null);    
    this.setNextStatement(true, null);
    //this.setInputsInline(true);
    },
};


Blockly.Blocks.Struct_Var_Definations = {
  init: function() {
    this.setColour(colorSet);  //module color
      this.appendValueInput("VARI")
         .appendTitle(Blockly.STRUCT_CLASS)
         .appendTitle(new Blockly.FieldTextInput('item'),'Struct_NAME')//put a text label
         .appendTitle(Blockly.Struct_TEMP)
         .appendTitle(new Blockly.FieldTextInput('ite_m'),'Struct_Member')//put a text label
         .appendTitle(Blockly.Struct_IS);
    this.setPreviousStatement(true, null);    
    this.setNextStatement(true, null);
//    this.setTooltip("test");  
 //   this.setOutput(true);
    //this.setInputsInline(true);
    },
};


Blockly.Blocks.IntDefine = {
  init: function() {
    this.setColour(colorSet);

    this.appendValueInput("intValue")
    .appendTitle(Blockly.INT)
    .setCheck(Number)
    .appendField(new Blockly.FieldTextInput("i"), "intName");

    //this.setOutput(true, Number);
    this.setOutput(true, Number);
  }
};

Blockly.Blocks.BooleanDefine = {
  init: function() {
    this.setColour(colorSet);

    this.appendValueInput("booleanValue")
    .appendTitle(Blockly.BOOLEAN)
    .setCheck(Boolean)
    .appendField(new Blockly.FieldTextInput("b"), "booleanName");

    //this.setOutput(true, Number);
    this.setOutput(true, Boolean);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};



Blockly.Blocks.melodyBuzzer = {
  init: function() {

  var melodyFraqance = [[Blockly.low1DO, '262'],
              [Blockly.low2RE, '294'],
              [Blockly.low3MI, '330'],
              [Blockly.low4FA, '349'],
              [Blockly.low5SO, '392'],
              [Blockly.low6LA, '440'],
              [Blockly.low7XI, '494'],
              [Blockly.midlle1DO, '523'],
              [Blockly.midlle2RE, '587'],
              [Blockly.midlle3MI, '659'],
              [Blockly.midlle4FA, '698'],
              [Blockly.midlle5SO, '784'],
              [Blockly.midlle6LA, '880'],
              [Blockly.midlle7XI, '988'],
              [Blockly.high1DO, '1046'],
              [Blockly.high2RE, '1175'],
              [Blockly.high3MI, '1318'],
              [Blockly.high4FA, '1397'],
              [Blockly.high5SO, '1568'],
              [Blockly.high6LA, '1760'],
              [Blockly.high7XI, '1967'],
              ];


    this.setColour(colorSet);
    this.appendDummyInput("")
        .appendTitle(Blockly.BuzzerMelody)
        .appendField(new Blockly.FieldDropdown(melodyFraqance), 'melodyFraqance');

    this.setOutput(true, Number);
  }
};


Blockly.Blocks.rhythmBuzzer = {
  init: function() {

  var rhythmNumber = [[Blockly.halfRhythm, '0.5'],
              [Blockly.oneRhythm, '1'],
              [Blockly.twoRhythm, '2'],
              ];


    this.setColour(colorSet);
    this.appendDummyInput("")
        .appendTitle(Blockly.BuzzerMelody)
        .appendField(new Blockly.FieldDropdown(rhythmNumber), 'rhythmNumber');

    this.setOutput(true, Number);
  }
};




Blockly.Blocks.nrfDataStructDefine = {
  init: function() {
    this.setColour(colorSet);
    this.appendDummyInput("")
        .appendTitle(Blockly.nrfDataStructDefine);

    this.appendStatementInput('DO');
    this.setPreviousStatement(true, null);    
    this.setNextStatement(true, null);
//    this.setTooltip("test");  
 //   this.setOutput(true);
    //this.setInputsInline(true);
    },
};

Blockly.Blocks.nrfDataMemberDefine = {
  init: function() {
        var FLIP = [['uint16_t', 'uint16_t'],     //announce menu
                    ['uint32_t', 'uint32_t'],
                    ['uint8_t','uint8_t'],
                    ['long','long'],
                    ['unsigned long','unsigned long'],
                    ['int','int'],
                    ['char','char'],
                    ['String','String'],
                    ['float', 'float'],
                    ['double', 'double']];
    this.setColour(colorSet);  //module color
    this.appendValueInput('VALUE') 
         .setCheck([Number,String])
         .setAlign(Blockly.ALIGN_RIGHT)
         .appendTitle(Blockly.nrfDataMemberDefine)
         .appendTitle(Blockly.nrfDataMemberType)
         .appendTitle(new Blockly.FieldDropdown(FLIP), 'FLIP')
         .appendTitle(Blockly.nrfDataMemberName)
         .appendTitle(new Blockly.FieldTextInput('item'),'NAME');
    this.setPreviousStatement(true, null);    
    this.setNextStatement(true, null);
    //this.setInputsInline(true);
    },
};


Blockly.Blocks.nrfDataSender = {
  init: function() {
    this.setColour(colorSet);
    this.appendDummyInput("")
        .appendTitle(Blockly.nrfDataSender);

    this.appendStatementInput('DO');
    this.setPreviousStatement(true, null);    
    this.setNextStatement(true, null);
//    this.setTooltip("test");  
 //   this.setOutput(true);
    //this.setInputsInline(true);
    },
};

Blockly.Blocks.nrfDataMemberSender = {
  init: function() {

    this.setColour(colorSet);  //module color
    this.appendValueInput('VALUE') 
         .setCheck([Number,String])
         .setAlign(Blockly.ALIGN_RIGHT)
         .appendTitle(Blockly.nrfDataMemberSender);
    this.setPreviousStatement(true, null);    
    this.setNextStatement(true, null);
    //this.setInputsInline(true);
    },
};


Blockly.Blocks.nrfDataMemberReciver = {
  init: function() {
    this.setColour(colorSet);  //module color
    this.appendDummyInput("")
         .appendTitle(Blockly.nrfDataMemberReciver)
         .appendTitle(new Blockly.FieldTextInput('ite_m'),'Struct_Member');
    // this.setPreviousStatement(true, null);    
    // this.setNextStatement(true, null);
//    this.setTooltip("test");  
   this.setOutput(true);
    //this.setInputsInline(true);
    },
};
