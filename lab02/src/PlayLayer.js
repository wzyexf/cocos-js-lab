var PlayLayer = cc.Layer.extend({


    ctor: function () {
        this._super();
        var size=cc.winSize;
        var mapLayer = new cc.Layer();
        mapLayer.x = (size.width - Constant.CANDY_WIDTH * Constant.MAP_SIZE) / 2;;
        mapLayer.y = (size.height - Constant.CANDY_WIDTH * Constant.MAP_SIZE) / 2;

        this.addChild(mapLayer);

        for (var i = 0; i < Constant.MAP_SIZE; i++) {
          
            for (var j = 0; j < Constant.MAP_SIZE; j++) {

                var candy = CandySprite.createRandomType(i, j);
               
                candy.x = i * Constant.CANDY_WIDTH + Constant.CANDY_WIDTH / 2;
                candy.y = j * Constant.CANDY_WIDTH + Constant.CANDY_WIDTH / 2;
               
                mapLayer.addChild(candy);
            }
           

        }

        //10*10


    }




});