var MenuScene = cc.Scene.extend(
   {

       
       onEnter: function () {
           this._super();


       },
       ctor: function (inputX) {
           this._super();
           var label = new cc.LabelTTF("学习目录", "arias", "24");
           label.x = 100;
           label.y = 400;
           this.addChild(label);
           this.initControl();
           //this.scheduleUpdate();
           //var action = new cc.MoveTo(2, cc.p(0, 0));
           //bgSprit.runAction(action);

       },
       initControl: function () {
           var item1 = new cc.MenuItemFont("lab2_2", this.lab22, this);
           var item2 = new cc.MenuItemFont("lab2_2_E", this.lab22E, this);
           var menu = new cc.Menu(item1,item2);
           menu.alignItemsVertically();
           this.addChild(menu, 1);

       },
       lab22: function ()
       {
           cc.director.runScene(new ActionScene());
       },
       lab22E: function () {
           cc.director.runScene(new ActionSpriteScene());
       }

   }
   );
