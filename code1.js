gdjs.introCode = {};
gdjs.introCode.GDfonObjects1= [];
gdjs.introCode.GDfonObjects2= [];
gdjs.introCode.GDogurecObjects1= [];
gdjs.introCode.GDogurecObjects2= [];
gdjs.introCode.GDnosokObjects1= [];
gdjs.introCode.GDnosokObjects2= [];
gdjs.introCode.GDdogObjects1= [];
gdjs.introCode.GDdogObjects2= [];
gdjs.introCode.GDfishObjects1= [];
gdjs.introCode.GDfishObjects2= [];
gdjs.introCode.GDtext1Objects1= [];
gdjs.introCode.GDtext1Objects2= [];
gdjs.introCode.GDtextogObjects1= [];
gdjs.introCode.GDtextogObjects2= [];
gdjs.introCode.GDtextfishObjects1= [];
gdjs.introCode.GDtextfishObjects2= [];
gdjs.introCode.GDtextnosokObjects1= [];
gdjs.introCode.GDtextnosokObjects2= [];
gdjs.introCode.GDtextdogObjects1= [];
gdjs.introCode.GDtextdogObjects2= [];
gdjs.introCode.GDBuffArrow3Objects1= [];
gdjs.introCode.GDBuffArrow3Objects2= [];

gdjs.introCode.conditionTrue_0 = {val:false};
gdjs.introCode.condition0IsTrue_0 = {val:false};
gdjs.introCode.condition1IsTrue_0 = {val:false};
gdjs.introCode.condition2IsTrue_0 = {val:false};
gdjs.introCode.conditionTrue_1 = {val:false};
gdjs.introCode.condition0IsTrue_1 = {val:false};
gdjs.introCode.condition1IsTrue_1 = {val:false};
gdjs.introCode.condition2IsTrue_1 = {val:false};


gdjs.introCode.mapOfGDgdjs_46introCode_46GDBuffArrow3Objects1Objects = Hashtable.newFrom({"BuffArrow3": gdjs.introCode.GDBuffArrow3Objects1});gdjs.introCode.eventsList0 = function(runtimeScene) {

{


gdjs.introCode.condition0IsTrue_0.val = false;
{
gdjs.introCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.introCode.condition0IsTrue_0.val) {
{gdjs.evtsExt__YandexGamesSDK__InitSDK.func(runtimeScene, true, "landscape", true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("dog"), gdjs.introCode.GDdogObjects1);
{for(var i = 0, len = gdjs.introCode.GDdogObjects1.length ;i < len;++i) {
    gdjs.introCode.GDdogObjects1[i].setOpacity(220);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BuffArrow3"), gdjs.introCode.GDBuffArrow3Objects1);

gdjs.introCode.condition0IsTrue_0.val = false;
gdjs.introCode.condition1IsTrue_0.val = false;
{
gdjs.introCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.introCode.mapOfGDgdjs_46introCode_46GDBuffArrow3Objects1Objects, runtimeScene, true, false);
}if ( gdjs.introCode.condition0IsTrue_0.val ) {
{
gdjs.introCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.introCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "game", true);
}}

}


{


gdjs.introCode.condition0IsTrue_0.val = false;
{
{gdjs.introCode.conditionTrue_1 = gdjs.introCode.condition0IsTrue_0;
gdjs.introCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8278916);
}
}if (gdjs.introCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "Genne Zis Angry.mp3", false, 20, 1);
}}

}


};

gdjs.introCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.introCode.GDfonObjects1.length = 0;
gdjs.introCode.GDfonObjects2.length = 0;
gdjs.introCode.GDogurecObjects1.length = 0;
gdjs.introCode.GDogurecObjects2.length = 0;
gdjs.introCode.GDnosokObjects1.length = 0;
gdjs.introCode.GDnosokObjects2.length = 0;
gdjs.introCode.GDdogObjects1.length = 0;
gdjs.introCode.GDdogObjects2.length = 0;
gdjs.introCode.GDfishObjects1.length = 0;
gdjs.introCode.GDfishObjects2.length = 0;
gdjs.introCode.GDtext1Objects1.length = 0;
gdjs.introCode.GDtext1Objects2.length = 0;
gdjs.introCode.GDtextogObjects1.length = 0;
gdjs.introCode.GDtextogObjects2.length = 0;
gdjs.introCode.GDtextfishObjects1.length = 0;
gdjs.introCode.GDtextfishObjects2.length = 0;
gdjs.introCode.GDtextnosokObjects1.length = 0;
gdjs.introCode.GDtextnosokObjects2.length = 0;
gdjs.introCode.GDtextdogObjects1.length = 0;
gdjs.introCode.GDtextdogObjects2.length = 0;
gdjs.introCode.GDBuffArrow3Objects1.length = 0;
gdjs.introCode.GDBuffArrow3Objects2.length = 0;

gdjs.introCode.eventsList0(runtimeScene);
return;

}

gdjs['introCode'] = gdjs.introCode;
