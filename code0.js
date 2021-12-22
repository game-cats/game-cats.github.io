gdjs.startCode = {};
gdjs.startCode.GDphoneObjects1= [];
gdjs.startCode.GDphoneObjects2= [];
gdjs.startCode.GDNewObject2Objects1= [];
gdjs.startCode.GDNewObject2Objects2= [];
gdjs.startCode.GDstartObjects1= [];
gdjs.startCode.GDstartObjects2= [];

gdjs.startCode.conditionTrue_0 = {val:false};
gdjs.startCode.condition0IsTrue_0 = {val:false};
gdjs.startCode.condition1IsTrue_0 = {val:false};
gdjs.startCode.condition2IsTrue_0 = {val:false};
gdjs.startCode.conditionTrue_1 = {val:false};
gdjs.startCode.condition0IsTrue_1 = {val:false};
gdjs.startCode.condition1IsTrue_1 = {val:false};
gdjs.startCode.condition2IsTrue_1 = {val:false};


gdjs.startCode.mapOfGDgdjs_46startCode_46GDstartObjects1Objects = Hashtable.newFrom({"start": gdjs.startCode.GDstartObjects1});gdjs.startCode.eventsList0 = function(runtimeScene) {

{


gdjs.startCode.condition0IsTrue_0.val = false;
gdjs.startCode.condition1IsTrue_0.val = false;
{
gdjs.startCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.startCode.condition0IsTrue_0.val ) {
{
{gdjs.startCode.conditionTrue_1 = gdjs.startCode.condition1IsTrue_0;
gdjs.startCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8271068);
}
}}
if (gdjs.startCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "intro", false);
}{gdjs.evtsExt__YandexGamesSDK__ShowFullscreenAd.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};gdjs.startCode.eventsList1 = function(runtimeScene) {

{


gdjs.startCode.condition0IsTrue_0.val = false;
{
gdjs.startCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.startCode.condition0IsTrue_0.val) {
{gdjs.evtsExt__YandexGamesSDK__InitSDK.func(runtimeScene, true, "landscape", true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("start"), gdjs.startCode.GDstartObjects1);

gdjs.startCode.condition0IsTrue_0.val = false;
{
gdjs.startCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.startCode.mapOfGDgdjs_46startCode_46GDstartObjects1Objects, runtimeScene, false, false);
}if (gdjs.startCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.startCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.startCode.condition0IsTrue_0.val = false;
gdjs.startCode.condition1IsTrue_0.val = false;
{
gdjs.startCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if ( gdjs.startCode.condition0IsTrue_0.val ) {
{
{gdjs.startCode.conditionTrue_1 = gdjs.startCode.condition1IsTrue_0;
gdjs.startCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8272084);
}
}}
if (gdjs.startCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "punch-deck-catharsis.mp3", false, 20, 1);
}}

}


};

gdjs.startCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.startCode.GDphoneObjects1.length = 0;
gdjs.startCode.GDphoneObjects2.length = 0;
gdjs.startCode.GDNewObject2Objects1.length = 0;
gdjs.startCode.GDNewObject2Objects2.length = 0;
gdjs.startCode.GDstartObjects1.length = 0;
gdjs.startCode.GDstartObjects2.length = 0;

gdjs.startCode.eventsList1(runtimeScene);
return;

}

gdjs['startCode'] = gdjs.startCode;
