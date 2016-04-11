var ActionSpriteScene = cc.Scene.extend(
   {

       bgSprite: null,
       deltaX: null,
       bg: null,
       onEnter: function () {
           this._super();


       },
       ctor: function (inputX) {
           this._super();
           var size = cc.winSize;

           this.bgSprite = new MySprite("res/sushi_1n.png");
           this.bgSprite.x = size.width / 2;
           this.bgSprite.y = size.height - 10;
           //this.bgSprite.anchorX = 0;//这里有个疑问
           //this.bgSprite.anchorY = 0;
           this.addChild(this.bgSprite);
           this.deltaX = 1;
           this.bg = new cc.DrawNode();      //用于记录球的运动轨迹
           this.addChild(this.bg);
           this.initControl();
           //this.scheduleUpdate();
           //var action = new cc.MoveTo(2, cc.p(0, 0));
           //bgSprit.runAction(action);

       },
       initControl: function () {
           var item1 = new cc.MenuItemFont("actionMoveTo", this.actionMoveTo, this);
           var item2 = new cc.MenuItemFont("actionMoveBy", this.actionMoveBy, this);
           var item3 = new cc.MenuItemFont("actionScaleTo", this.actionScaleTo, this);
           var item4 = new cc.MenuItemFont("actionScaleBy", this.actionScaleBy, this);
           var item5 = new cc.MenuItemFont("programAction", this.programAction, this);
           var item6 = new cc.MenuItemFont("sequenceAction", this.sequenceAction, this);
           var item6 = new cc.MenuItemFont("fadeout", this.fadeOut, this);
           var menu = new cc.Menu(item1, item2, item3, item4, item5, item6);
           menu.alignItemsVertically();
           this.addChild(menu, 1);

       },
       fadeOut:function()
       {
           console.log(this.bgSprite.status);
           this.bgSprite.status = 3;

           this.bgSprite.run();
       },
       actionMoveTo: function () {


           this.bgSprite.status = 1;
           this.bgSprite.run();
       },
       actionMoveBy: function () {
           this.bgSprite.status = 2;
           this.bgSprite.run();
          
          
       },
       actionScaleTo: function () {
           var action = cc.scaleTo(2, 2, 4);
           this.bgSprite.runAction(action);
       },
       actionScaleBy: function () {
           var action = cc.scaleBy(2, 2, 2);
           this.bgSprite.runAction(action);
       },
       sequenceAction: function () {
           var action1 = cc.moveTo(2, cc.p(200, 300));
           var action2 = cc.scaleTo(2, 2, 4);
           var callback = cc.callFunc(this.resultAction, this, "aaa");
           var sequence = cc.sequence(action1, action2, callback);
           var spawn = cc.spawn(action1, action2);
           this.bgSprite.runAction(sequence);


       },
       resultAction: function (message) {
           alert("action is finish" + message);
       },



   }
   );
