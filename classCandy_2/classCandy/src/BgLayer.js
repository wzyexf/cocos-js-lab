var BgLayer = cc.Layer.extend(
    {
        ctor: function () {
            this._super();

            var size = cc.winSize;
             
            var bgSprite = new cc.Sprite("res/bg.jpg");
            bgSprite.x = size.width / 2;
            bgSprite.y = size.height / 2;
            this.addChild(bgSprite);

            

        }


    }
    );