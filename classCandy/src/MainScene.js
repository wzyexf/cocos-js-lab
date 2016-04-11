var MainScene = cc.Scene.extend(
    {
        onEnter: function () {

            this._super();

            var bg = new BgLayer();
            this.addChild(bg);

            var Ui = new UiLayer();
            this.addChild(Ui);






        }



    }
    );

