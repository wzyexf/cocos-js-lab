var UiLayer = cc.Layer.extend(
    {
        txtScore: null,

        ctor: function () {
            this._super();
           

            var size = cc.winSize;
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