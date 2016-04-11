var MainScene = cc.Scene.extend({


    onEnter: function () {

        this._super();
        //导入背景
        var bgLayer = new BgLayer();
        this.addChild(bgLayer);

        //导入ui层
        var uiLayer = new UiLayer();
        this.addChild(uiLayer);

        //导入游戏层

        var playLayer = new PlayLayer();
        this.addChild(playLayer);
    }



});