gdjs.loseCode = {};
gdjs.loseCode.GDfonObjects1= [];
gdjs.loseCode.GDfonObjects2= [];
gdjs.loseCode.GDcatObjects1= [];
gdjs.loseCode.GDcatObjects2= [];
gdjs.loseCode.GDNewObjectObjects1= [];
gdjs.loseCode.GDNewObjectObjects2= [];

gdjs.loseCode.conditionTrue_0 = {val:false};
gdjs.loseCode.condition0IsTrue_0 = {val:false};
gdjs.loseCode.condition1IsTrue_0 = {val:false};
gdjs.loseCode.condition2IsTrue_0 = {val:false};
gdjs.loseCode.condition3IsTrue_0 = {val:false};
gdjs.loseCode.conditionTrue_1 = {val:false};
gdjs.loseCode.condition0IsTrue_1 = {val:false};
gdjs.loseCode.condition1IsTrue_1 = {val:false};
gdjs.loseCode.condition2IsTrue_1 = {val:false};
gdjs.loseCode.condition3IsTrue_1 = {val:false};


gdjs.loseCode.mapOfGDgdjs_46loseCode_46GDcatObjects1Objects = Hashtable.newFrom({"cat": gdjs.loseCode.GDcatObjects1});gdjs.loseCode.eventsList0 = function(runtimeScene) {

{


gdjs.loseCode.condition0IsTrue_0.val = false;
{
gdjs.loseCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.loseCode.condition0IsTrue_0.val) {
{gdjs.evtsExt__YandexGamesSDK__InitSDK.func(runtimeScene, true, "landscape", true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


gdjs.loseCode.condition0IsTrue_0.val = false;
gdjs.loseCode.condition1IsTrue_0.val = false;
{
gdjs.loseCode.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}if ( gdjs.loseCode.condition0IsTrue_0.val ) {
{
{gdjs.loseCode.conditionTrue_1 = gdjs.loseCode.condition1IsTrue_0;
gdjs.loseCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8326172);
}
}}
if (gdjs.loseCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("cat"), gdjs.loseCode.GDcatObjects1);
{gdjs.evtTools.sound.playMusic(runtimeScene, "7a20fba2afcc0c0.mp3", false, 20, 1);
}{for(var i = 0, len = gdjs.loseCode.GDcatObjects1.length ;i < len;++i) {
    gdjs.loseCode.GDcatObjects1[i].setOpacity(150);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("cat"), gdjs.loseCode.GDcatObjects1);

gdjs.loseCode.condition0IsTrue_0.val = false;
gdjs.loseCode.condition1IsTrue_0.val = false;
gdjs.loseCode.condition2IsTrue_0.val = false;
{
gdjs.loseCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.loseCode.mapOfGDgdjs_46loseCode_46GDcatObjects1Objects, runtimeScene, true, false);
}if ( gdjs.loseCode.condition0IsTrue_0.val ) {
{
gdjs.loseCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.loseCode.condition1IsTrue_0.val ) {
{
{gdjs.loseCode.conditionTrue_1 = gdjs.loseCode.condition2IsTrue_0;
gdjs.loseCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8327492);
}
}}
}
if (gdjs.loseCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "intro", true);
}{gdjs.evtsExt__YandexGamesSDK__ShowFullscreenAd.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};

gdjs.loseCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.loseCode.GDfonObjects1.length = 0;
gdjs.loseCode.GDfonObjects2.length = 0;
gdjs.loseCode.GDcatObjects1.length = 0;
gdjs.loseCode.GDcatObjects2.length = 0;
gdjs.loseCode.GDNewObjectObjects1.length = 0;
gdjs.loseCode.GDNewObjectObjects2.length = 0;

gdjs.loseCode.eventsList0(runtimeScene);
return;

}

gdjs['loseCode'] = gdjs.loseCode;
