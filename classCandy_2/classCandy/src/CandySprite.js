var CandySprite = cc.Sprite.extend({
    type: 1,
    column: 0,
    row:0,
    ctor: function () {
        this._super();
        var type = Math.floor(Math.random() * 5) + 1;
        this.type = type;
        this._super("res/"+type+".png");


    }



});