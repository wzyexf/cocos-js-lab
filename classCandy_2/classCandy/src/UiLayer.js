/// <reference path="BgLayer.js" />
var UiLayer = cc.Layer.extend(
    {
        txtScore:null,

        ctor: function () {
            this._super();
            //txtScore = new cc.LabelTTF("1", "arial", 24);
            //txtScore.x = 100;
            //txtScore.y = size.height - 20;
            //this.addChild(txtScore);
            //var lblScore = new cc.LabelTTF("Score", "arial", 24);
            //lblScore.x = 50;
            //lblScore.y = size.height - 20;
            //this.addChild(lblScore);

            var size=cc.winSize;
            var lblScore = new cc.LabelTTF("分数", "arial", 48);
            lblScore.setFontFillColor(cc.color.BLACK);
            lblScore.x = 100;
            lblScore.y = size.height - 50;
            this.addChild(lblScore);

            var txtScore = new cc.LabelTTF("100", "arial", 48);
            txtScore.x = 200;
            txtScore.y = size.height - 50;
            this.addChild(txtScore);



        }

    }
    );