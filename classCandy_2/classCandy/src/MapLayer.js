var MapLayer = cc.Layer.extend({
    mapArr:null,
    ctor: function () {
        this._super();
        var size = cc.winSize;
        this.x = (size.width - (Constant.CANDY_WIDTH * Constant.MAX_SIZE)) / 2;
        this.y = (size.height - (Constant.CANDY_WIDTH * Constant.MAX_SIZE)) / 2;
        this.mapArr = [];
        for (var i = 0; i < Constant.MAX_SIZE; i++) {//列
            var column=[];
            for (var j = 0; j < Constant.MAX_SIZE; j++) {//行
                var candy = new CandySprite();
                // candy.x = 64 * j + 32;
                candy.column = i;
                candy.row = j;
                candy.x = Constant.CANDY_WIDTH * i+ Constant.CANDY_WIDTH / 2;
                candy.y = Constant.CANDY_WIDTH * j + Constant.CANDY_WIDTH / 2;
                this.addChild(candy);
                column.push(candy
                    );

            }
            this.mapArr.push(column);

        }

    }




});