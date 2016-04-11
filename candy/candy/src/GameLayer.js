var GameLayer = cc.Layer.extend({
    ui: null,
    score: 0,
    level: 0,
    step: 0,
    limitStep: 0,
    targetScore: 0,
    map: null,
    mapPanel:null,

    ctor: function () {

        var size = cc.winSize;
        this._super();
        var bg = new cc.Sprite(res.bg);
        bg.x = size.width / 2;
        bg.y = size.height / 2;
        this.addChild(bg);

        this.ui = new GameUi(this);
        this.ui._name = "ui";
        this.addChild(this.ui);
        


        var clippingPanel = new cc.ClippingNode();
        this.addChild(clippingPanel, 2);

        this.mapPanel = new cc.Layer();
        this.mapPanel._name = "mapPanel";
        this.mapPanel.x = (size.width - Constant.CANDY_WIDTH * Constant.MAP_SIZE) / 2;
        this.mapPanel.y = (size.height - Constant.CANDY_WIDTH * Constant.MAP_SIZE) / 2;


        clippingPanel.addChild(this.mapPanel, 1);
        //this.addChild(this.mapPanel);

        var stencil = new cc.DrawNode();
        stencil.drawRect(cc.p(this.mapPanel.x, this.mapPanel.y),
            cc.p(this.mapPanel.x + Constant.CANDY_WIDTH * Constant.MAP_SIZE, this.mapPanel.y + Constant.CANDY_WIDTH * Constant.MAP_SIZE),
            cc.color(0, 0, 0),
            1,
            cc.color(0, 0, 0)
            );
            
        clippingPanel.stencil = stencil;

        this._init();
        this._bindEvent();

      







    },
    _bindEvent: function () {
        if ("touches" in cc.sys.capabilities) {
            cc.eventManager.addListener(
                {
                    event: cc.EventListener.TOUCH_ONE_BY_ONE,
                    onTouchBegan: this._onTouchBegan.bind(this.mapPanel)
                },this.mapPanel);
        } else {
            cc.eventManager.addListener(
               {
                   event: cc.EventListener.MOUSE,
                   onMouseDown: this._onMouseDown.bind(this.mapPanel)
               }, this.mapPanel);

        }
    },
    _onTouchBegan: function (touch,event) {
        var column = Math.floor();
        console.log(this);
    },
    _onMouseDown: function (event) {
        console.log(this);
    },
    onEnter: function () {
        this._super();
       
    },
    _init:function(){
        this.step = 0;
        this.score = 0;
        this.level = 0;
        this.limitStep = 30;
        this.targetScore = 100;
        this.map = [];
        for (var i = 0; i < Constant.MAP_SIZE; i++) {
            var column = [];
            for (var j = 0; j < Constant.MAP_SIZE; j++) {
                var candy = Candy.createRandomType(i, j);
                this.mapPanel.addChild(candy);
                candy.x = i * Constant.CANDY_WIDTH + Constant.CANDY_WIDTH / 2;
                candy.y = j * Constant.CANDY_WIDTH + Constant.CANDY_WIDTH / 2;
                column.push(candy);
            }
            this.map.push(column);

        }


    }




});