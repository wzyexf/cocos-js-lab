var MainScene = cc.Scene.extend({

    playLayer:null,
    onEnter: function () {

        this._super();
        //导入背景
        var bgLayer = new BgLayer();
        this.addChild(bgLayer);

        //导入ui层
        var uiLayer = new UiLayer();
        this.addChild(uiLayer);

        //导入游戏层

        this.playLayer = new PlayLayer();
        this.addChild(this.playLayer);

        this._BindEvent();
    },
    _BindEvent: function () {

        cc.eventManager.addListener({
            event: cc.EventListener.MOUSE,
            onMouseDown: this._onMouseDown.bind(this),

                



        }, this.playLayer);
    },
         _onMouseDown: function (event) {
            // var pos = event.getLocation();
             var column = Math.floor((event.getLocation().x - this.playLayer.x) / Constant.CANDY_WIDTH);
             var row = Math.floor((event.getLocation().y - this.playLayer.y) / Constant.CANDY_WIDTH);
            //console.log(column + ":" + row);
            this._popCandy(column, row);


        },
         _popCandy: function (column, row) {


             var joinCandys = [this.playLayer.mapArr[column][row]];
             var pushIntoCandys = function (element) {
                 if (joinCandys.indexOf(element) < 0)
                     joinCandys.push(element);
             };

             var index = 0;
             while (index < joinCandys.length) {
                 var candy = joinCandys[index];
                 if (this._checkCandyExisit(column + 1, row) && candy.type == this.playLayer.mapArr[column + 1][row].type) {
                     pushIntoCandys(this.playLayer.mapArr[column + 1][row]);
                 }
                 if (this._checkCandyExisit(column - 1, row) && candy.type == this.playLayer.mapArr[column - 1][row].type) {
                     pushIntoCandys(this.playLayer.mapArr[column - 1][row]);
                 }
                 if (this._checkCandyExisit(column, row - 1) && candy.type == this.playLayer.mapArr[column][row - 1].type) {
                     pushIntoCandys(this.playLayer.mapArr[column][row - 1]);
                 }
                 if (this._checkCandyExisit(column, row + 1) && candy.type == this.playLayer.mapArr[column][row + 1].type) {
                     pushIntoCandys(this.playLayer.mapArr[column][row + 1]);
                 }
                 index++;
             }

             if (joinCandys.length <= 1) {
                 return;
             }
             //计分
             //清除candy
             for (var i = 0; i < joinCandys.length; i++) {
                 var candy = joinCandys[i];
                 this.playLayer.removeChild(candy);
                 this.playLayer.mapArr[candy.column][candy.row] = null;

             }

             //生成新的

             //掉下来动画


         },
         _checkCandyExisit: function (i, j) {

             if (i >= 0 && i < Constant.MAP_SIZE && j >= 0 && j < Constant.MAP_SIZE) {
                 return true;
             }
             return false;
         }
});