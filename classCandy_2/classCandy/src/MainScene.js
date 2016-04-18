var MainScene = cc.Scene.extend(
    {
        Map:null,
        onEnter: function () {

            this._super();

            var bg = new BgLayer();
            this.addChild(bg);

            var Ui = new UiLayer();
            this.addChild(Ui);

          
            this.Map = new MapLayer();
            this.addChild(this.Map);

            this._BindEvent();







        },

        _BindEvent: function () {

            cc.eventManager.addListener({
                event: cc.EventListener.MOUSE,
                onMouseDown: this._onMouseDown.bind(this),

                



            }, this.Map);
        },
        _onMouseDown: function (event) {
                // var pos = event.getLocation();
                var column = Math.floor((event.getLocation().x - this.Map.x) / Constant.CANDY_WIDTH);
                var row = Math.floor((event.getLocation().y - this.Map.y) / Constant.CANDY_WIDTH);
            //console.log(column + ":" + row);
                this._popCandy(column, row);


        },
        _popCandy: function (column, row) {

           
            var joinCandys = [this.Map.mapArr[column][row]];
            var pushIntoCandys = function (element)
            {
                if (joinCandys.indexOf(element) < 0)
                    joinCandys.push(element);
            };
           
            var index = 0;
            while (index < joinCandys.length) {
                var candy=joinCandys[index];
                if (this._checkCandyExisit(column + 1, row) && candy.type == this.Map.mapArr[column + 1][row].type) {
                    pushIntoCandys(this.Map.mapArr[column + 1][row]);
                }
                if (this._checkCandyExisit(column - 1,row) && candy.type == this.Map.mapArr[column - 1][row].type) {
                    pushIntoCandys(this.Map.mapArr[column - 1][row]);
                }
                if (this._checkCandyExisit(column,row - 1) && candy.type == this.Map.mapArr[column][row - 1].type) {
                    pushIntoCandys(this.Map.mapArr[column ][row-1]);
                }
                if (this._checkCandyExisit(column,row + 1) && candy.type == this.Map.mapArr[column][row + 1].type) {
                    pushIntoCandys(this.Map.mapArr[column ][row+1]);
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
                this.Map.removeChild(candy);
                this.Map.mapArr[candy.column][candy.row] = null;

            }

            //生成新的

            //掉下来动画


        },


        
        _checkCandyExisit: function (i,j) {
            
            if (i >= 0 && i < Constant.MAP_SIZE && j >= 0 && j < Constant.MAP_SIZE) {
                 return true;
             }
             return false;
        }

    }
    );

