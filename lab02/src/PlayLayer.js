var PlayLayer = cc.Layer.extend({

    mapArr: null,
    ctor: function () {
        this._super();
        var size=cc.winSize;
        //var mapLayer = new cc.Layer();
        this.x = (size.width - Constant.CANDY_WIDTH * Constant.MAP_SIZE) / 2;;
        this.y = (size.height - Constant.CANDY_WIDTH * Constant.MAP_SIZE) / 2;

        //this.addChild(mapLayer);

        this.mapArr = [];

        //
        for (var i = 0; i < Constant.MAP_SIZE; i++) {//列
            var column = [];
            for (var j = 0; j < Constant.MAP_SIZE; j++) {

                var candy = CandySprite.createRandomType(i, j);
               
                candy.x = i * Constant.CANDY_WIDTH + Constant.CANDY_WIDTH / 2;
                candy.y = j * Constant.CANDY_WIDTH + Constant.CANDY_WIDTH / 2;
               
                this.addChild(candy);
                column.push(candy );
            }
            this.mapArr.push(column);
           

        }

        //10*10


    }




});