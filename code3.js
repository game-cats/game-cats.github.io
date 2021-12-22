gdjs.winCode = {};
gdjs.winCode.GDfonObjects1= [];
gdjs.winCode.GDfonObjects2= [];
gdjs.winCode.GDcatObjects1= [];
gdjs.winCode.GDcatObjects2= [];
gdjs.winCode.GDNewObjectObjects1= [];
gdjs.winCode.GDNewObjectObjects2= [];

gdjs.winCode.conditionTrue_0 = {val:false};
gdjs.winCode.condition0IsTrue_0 = {val:false};
gdjs.winCode.condition1IsTrue_0 = {val:false};
gdjs.winCode.condition2IsTrue_0 = {val:false};
gdjs.winCode.conditionTrue_1 = {val:false};
gdjs.winCode.condition0IsTrue_1 = {val:false};
gdjs.winCode.condition1IsTrue_1 = {val:false};
gdjs.winCode.condition2IsTrue_1 = {val:false};


gdjs.winCode.mapOfGDgdjs_46winCode_46GDcatObjects1Objects = Hashtable.newFrom({"cat": gdjs.winCode.GDcatObjects1});gdjs.winCode.eventsList0 = function(runtimeScene) {

{


gdjs.winCode.condition0IsTrue_0.val = false;
{
gdjs.winCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.winCode.condition0IsTrue_0.val) {
{gdjs.evtsExt__YandexGamesSDK__InitSDK.func(runtimeScene, true, "landscape", true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


gdjs.winCode.condition0IsTrue_0.val = false;
{
{gdjs.winCode.conditionTrue_1 = gdjs.winCode.condition0IsTrue_0;
gdjs.winCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8319316);
}
}if (gdjs.winCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("cat"), gdjs.winCode.GDcatObjects1);
{gdjs.evtTools.sound.playMusic(runtimeScene, "Lakey Inspired - Elevate _ Без авторских прав (www.hotplayer.ru).mp3", false, 20, 1);
}{for(var i = 0, len = gdjs.winCode.GDcatObjects1.length ;i < len;++i) {
    gdjs.winCode.GDcatObjects1[i].setOpacity(150);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("cat"), gdjs.winCode.GDcatObjects1);

gdjs.winCode.condition0IsTrue_0.val = false;
gdjs.winCode.condition1IsTrue_0.val = false;
{
gdjs.winCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.winCode.mapOfGDgdjs_46winCode_46GDcatObjects1Objects, runtimeScene, true, false);
}if ( gdjs.winCode.condition0IsTrue_0.val ) {
{
gdjs.winCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.winCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "start", true);
}}

}


};

gdjs.winCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.winCode.GDfonObjects1.length = 0;
gdjs.winCode.GDfonObjects2.length = 0;
gdjs.winCode.GDcatObjects1.length = 0;
gdjs.winCode.GDcatObjects2.length = 0;
gdjs.winCode.GDNewObjectObjects1.length = 0;
gdjs.winCode.GDNewObjectObjects2.length = 0;

gdjs.winCode.eventsList0(runtimeScene);
return;

}

gdjs['winCode'] = gdjs.winCode;
