var MySprite = cc.Sprite.extend({

    status:null,
    onEnter:function()
    {
        this.status = 1;
        this._super();
        console.log(this.constructor);
        this.run();

    },
    onExit:function(){
        this._super();
    },
    run: function () {
        switch (this.status) {
            case 1:
                var action = cc.moveTo(2, cc.p(200, 300));
                this.runAction(action);
                break;
            case 2:
                var action = cc.moveBy(2, cc.p(50, 50));
                this.runAction(action);
                break;
        }
    }


});