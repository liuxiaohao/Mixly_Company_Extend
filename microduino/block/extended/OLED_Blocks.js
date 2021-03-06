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

