var GameUi = cc.Layer.extend({

    txtScore: null,//分数
    txtLevel: null,//等级
    txtStep: null,//步数
    gameLayer:null,
    ctor: function (game) {
        this._super();
        this._initUi();
        this.gameLayer = game;

    },
    _initUi: function () {
        var size = cc.winSize;
        txtScore = new cc.LabelTTF("1", "arial", 24);
        txtScore.x = 100;
        txtScore.y = size.height - 20;
        this.addChild(txtScore);
        var lblScore = new cc.LabelTTF("Score", "arial", 24);
        lblScore.x = 50;
        lblScore.y = size.height -20;
        this.addChild(lblScore);

        
        txtLevel = new cc.LabelTTF("2", "arial", 24);
        txtLevel.x = 200;
        txtLevel.y = size.height - 20;
        this.addChild(txtLevel);
        var lblLevel = new cc.LabelTTF("Level", "arial", 24);
        lblLevel.x = 150;
        lblLevel.y = size.height - 20;
        this.addChild(lblLevel);


        
        txtStep = new cc.LabelTTF("3", "arial", 24);
        txtStep.x = 300;
        txtStep.y = size.height - 20;
        this.addChild(txtStep);
        var lblStep = new cc.LabelTTF("Step", "arial", 24);
        lblStep.x = 250;
        lblStep.y = size.height - 20;
        this.addChild(lblStep);
    },
    showSucess: function () {
        var bg = new cc.LayerColor(cc.color(255, 255, 255), 500, 500);
        this.addChild(bg);
        var size = cc.winSize;
        bg.x = (size.width - bg.width) / 2;
        bg.y = (size.height - bg.height) / 2;
        var stepText = new cc.LabelTTF("恭喜 已完成第");
        stepText.x = 250;
        stepText.y = 250;
        bg.addChild(stepText);
    },
    showFail: function () {
        var bg = new cc.LayerColor(cc.color(255, 255, 255), 500, 500);
        this.addChild(bg);
        var size = cc.winSize;
        bg.x = (size.width - bg.width) / 2;
        bg.y = (size.height - bg.height) / 2;
        var stepText = new cc.LabelTTF("失败了，从头再来");
        stepText.x = 250;
        stepText.y = 250;
        bg.addChild(stepText);
    }



});