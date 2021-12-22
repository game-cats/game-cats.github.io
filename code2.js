gdjs.gameCode = {};
gdjs.gameCode.GDcatObjects1= [];
gdjs.gameCode.GDcatObjects2= [];
gdjs.gameCode.GDbgObjects1= [];
gdjs.gameCode.GDbgObjects2= [];
gdjs.gameCode.GDcucObjects1= [];
gdjs.gameCode.GDcucObjects2= [];
gdjs.gameCode.GDfishObjects1= [];
gdjs.gameCode.GDfishObjects2= [];
gdjs.gameCode.GDnoskObjects1= [];
gdjs.gameCode.GDnoskObjects2= [];
gdjs.gameCode.GDschObjects1= [];
gdjs.gameCode.GDschObjects2= [];
gdjs.gameCode.GDdogObjects1= [];
gdjs.gameCode.GDdogObjects2= [];
gdjs.gameCode.GDNewObjectObjects1= [];
gdjs.gameCode.GDNewObjectObjects2= [];
gdjs.gameCode.GDtimeObjects1= [];
gdjs.gameCode.GDtimeObjects2= [];

gdjs.gameCode.conditionTrue_0 = {val:false};
gdjs.gameCode.condition0IsTrue_0 = {val:false};
gdjs.gameCode.condition1IsTrue_0 = {val:false};
gdjs.gameCode.condition2IsTrue_0 = {val:false};
gdjs.gameCode.conditionTrue_1 = {val:false};
gdjs.gameCode.condition0IsTrue_1 = {val:false};
gdjs.gameCode.condition1IsTrue_1 = {val:false};
gdjs.gameCode.condition2IsTrue_1 = {val:false};


gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDcucObjects1Objects = Hashtable.newFrom({"cuc": gdjs.gameCode.GDcucObjects1});gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDcatObjects1Objects = Hashtable.newFrom({"cat": gdjs.gameCode.GDcatObjects1});gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDcucObjects1Objects = Hashtable.newFrom({"cuc": gdjs.gameCode.GDcucObjects1});gdjs.gameCode.eventsList0 = function(runtimeScene) {

{


gdjs.gameCode.condition0IsTrue_0.val = false;
{
{gdjs.gameCode.conditionTrue_1 = gdjs.gameCode.condition0IsTrue_0;
gdjs.gameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8293732);
}
}if (gdjs.gameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "zvuk-puzyr-efe.mp3", false, 60, 1);
}{runtimeScene.getVariables().getFromIndex(0).add(1);
}}

}


};gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDfishObjects1Objects = Hashtable.newFrom({"fish": gdjs.gameCode.GDfishObjects1});gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDcatObjects1Objects = Hashtable.newFrom({"cat": gdjs.gameCode.GDcatObjects1});gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDfishObjects1Objects = Hashtable.newFrom({"fish": gdjs.gameCode.GDfishObjects1});gdjs.gameCode.eventsList1 = function(runtimeScene) {

{


gdjs.gameCode.condition0IsTrue_0.val = false;
{
{gdjs.gameCode.conditionTrue_1 = gdjs.gameCode.condition0IsTrue_0;
gdjs.gameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8296460);
}
}if (gdjs.gameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "a3f66032fbe4f26.mp3", false, 60, 1.5);
}{runtimeScene.getVariables().getFromIndex(0).add(2);
}}

}


};gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDnoskObjects1Objects = Hashtable.newFrom({"nosk": gdjs.gameCode.GDnoskObjects1});gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDcatObjects1Objects = Hashtable.newFrom({"cat": gdjs.gameCode.GDcatObjects1});gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDnoskObjects1Objects = Hashtable.newFrom({"nosk": gdjs.gameCode.GDnoskObjects1});gdjs.gameCode.eventsList2 = function(runtimeScene) {

{


gdjs.gameCode.condition0IsTrue_0.val = false;
{
{gdjs.gameCode.conditionTrue_1 = gdjs.gameCode.condition0IsTrue_0;
gdjs.gameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8299980);
}
}if (gdjs.gameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "brue.mp3", false, 60, 1.5);
}{runtimeScene.getVariables().getFromIndex(0).sub(1);
}}

}


};gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDdogObjects1Objects = Hashtable.newFrom({"dog": gdjs.gameCode.GDdogObjects1});gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDcatObjects1Objects = Hashtable.newFrom({"cat": gdjs.gameCode.GDcatObjects1});gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDdogObjects1Objects = Hashtable.newFrom({"dog": gdjs.gameCode.GDdogObjects1});gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDcatObjects1Objects = Hashtable.newFrom({"cat": gdjs.gameCode.GDcatObjects1});gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDdogObjects1Objects = Hashtable.newFrom({"dog": gdjs.gameCode.GDdogObjects1});gdjs.gameCode.eventsList3 = function(runtimeScene) {

{


gdjs.gameCode.condition0IsTrue_0.val = false;
{
gdjs.gameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.gameCode.condition0IsTrue_0.val) {
{gdjs.evtsExt__YandexGamesSDK__InitSDK.func(runtimeScene, true, "landscape", true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


gdjs.gameCode.condition0IsTrue_0.val = false;
{
gdjs.gameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.gameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "shrivera-storm.mp3", false, 20, 1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "time");
}}

}


{


gdjs.gameCode.condition0IsTrue_0.val = false;
{
gdjs.gameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.gameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("cat"), gdjs.gameCode.GDcatObjects1);
{for(var i = 0, len = gdjs.gameCode.GDcatObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDcatObjects1[i].addForce(350, 0, 0);
}
}}

}


{


gdjs.gameCode.condition0IsTrue_0.val = false;
{
gdjs.gameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.gameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("cat"), gdjs.gameCode.GDcatObjects1);
{for(var i = 0, len = gdjs.gameCode.GDcatObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDcatObjects1[i].addForce(-(350), 0, 0);
}
}}

}


{


gdjs.gameCode.condition0IsTrue_0.val = false;
{
gdjs.gameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "cuc");
}if (gdjs.gameCode.condition0IsTrue_0.val) {
gdjs.gameCode.GDcucObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDcucObjects1Objects, gdjs.random(720), 0, "");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "cuc");
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("cuc"), gdjs.gameCode.GDcucObjects1);
{for(var i = 0, len = gdjs.gameCode.GDcucObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDcucObjects1[i].addForce(0, 400, 0);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("cat"), gdjs.gameCode.GDcatObjects1);
{for(var i = 0, len = gdjs.gameCode.GDcatObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDcatObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("cat"), gdjs.gameCode.GDcatObjects1);
gdjs.copyArray(runtimeScene.getObjects("cuc"), gdjs.gameCode.GDcucObjects1);

gdjs.gameCode.condition0IsTrue_0.val = false;
{
gdjs.gameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDcatObjects1Objects, gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDcucObjects1Objects, false, runtimeScene, true);
}if (gdjs.gameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.gameCode.GDcatObjects1 */
/* Reuse gdjs.gameCode.GDcucObjects1 */
{for(var i = 0, len = gdjs.gameCode.GDcatObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDcatObjects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.gameCode.GDcucObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDcucObjects1[i].hide();
}
}
{ //Subevents
gdjs.gameCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.gameCode.condition0IsTrue_0.val = false;
{
gdjs.gameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2, "cuc1");
}if (gdjs.gameCode.condition0IsTrue_0.val) {
gdjs.gameCode.GDfishObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDfishObjects1Objects, gdjs.random(720), 0, "");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "cuc1");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("cat"), gdjs.gameCode.GDcatObjects1);
gdjs.copyArray(runtimeScene.getObjects("fish"), gdjs.gameCode.GDfishObjects1);

gdjs.gameCode.condition0IsTrue_0.val = false;
{
gdjs.gameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDcatObjects1Objects, gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDfishObjects1Objects, false, runtimeScene, true);
}if (gdjs.gameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.gameCode.GDcatObjects1 */
/* Reuse gdjs.gameCode.GDfishObjects1 */
{for(var i = 0, len = gdjs.gameCode.GDcatObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDcatObjects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.gameCode.GDfishObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDfishObjects1[i].hide();
}
}
{ //Subevents
gdjs.gameCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("fish"), gdjs.gameCode.GDfishObjects1);
{for(var i = 0, len = gdjs.gameCode.GDfishObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDfishObjects1[i].addForce(0, 400, 0);
}
}}

}


{


gdjs.gameCode.condition0IsTrue_0.val = false;
{
gdjs.gameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2, "cuc2");
}if (gdjs.gameCode.condition0IsTrue_0.val) {
gdjs.gameCode.GDnoskObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDnoskObjects1Objects, gdjs.random(720), 0, "");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "cuc2");
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("nosk"), gdjs.gameCode.GDnoskObjects1);
{for(var i = 0, len = gdjs.gameCode.GDnoskObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDnoskObjects1[i].addForce(0, 400, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("cat"), gdjs.gameCode.GDcatObjects1);
gdjs.copyArray(runtimeScene.getObjects("nosk"), gdjs.gameCode.GDnoskObjects1);

gdjs.gameCode.condition0IsTrue_0.val = false;
{
gdjs.gameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDcatObjects1Objects, gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDnoskObjects1Objects, false, runtimeScene, true);
}if (gdjs.gameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.gameCode.GDcatObjects1 */
/* Reuse gdjs.gameCode.GDnoskObjects1 */
{for(var i = 0, len = gdjs.gameCode.GDcatObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDcatObjects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.gameCode.GDnoskObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDnoskObjects1[i].hide();
}
}
{ //Subevents
gdjs.gameCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("sch"), gdjs.gameCode.GDschObjects1);
{for(var i = 0, len = gdjs.gameCode.GDschObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDschObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().getFromIndex(0)));
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("time"), gdjs.gameCode.GDtimeObjects1);
{for(var i = 0, len = gdjs.gameCode.GDtimeObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDtimeObjects1[i].setString(gdjs.evtTools.common.toString(Math.round(Math.abs(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "time") - 30))));
}
}}

}


{


gdjs.gameCode.condition0IsTrue_0.val = false;
{
gdjs.gameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3, "cuc3");
}if (gdjs.gameCode.condition0IsTrue_0.val) {
gdjs.gameCode.GDdogObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDdogObjects1Objects, gdjs.random(900), -(100), "");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "cuc3");
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("dog"), gdjs.gameCode.GDdogObjects1);
{for(var i = 0, len = gdjs.gameCode.GDdogObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDdogObjects1[i].addForce(0, 300, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("cat"), gdjs.gameCode.GDcatObjects1);
gdjs.copyArray(runtimeScene.getObjects("dog"), gdjs.gameCode.GDdogObjects1);

gdjs.gameCode.condition0IsTrue_0.val = false;
gdjs.gameCode.condition1IsTrue_0.val = false;
{
gdjs.gameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDcatObjects1Objects, gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDdogObjects1Objects, false, runtimeScene, true);
}if ( gdjs.gameCode.condition0IsTrue_0.val ) {
{
{gdjs.gameCode.conditionTrue_1 = gdjs.gameCode.condition1IsTrue_0;
gdjs.gameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8303604);
}
}}
if (gdjs.gameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.gameCode.GDcatObjects1 */
/* Reuse gdjs.gameCode.GDdogObjects1 */
{for(var i = 0, len = gdjs.gameCode.GDdogObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDdogObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.gameCode.GDcatObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDcatObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("time"), gdjs.gameCode.GDtimeObjects1);

gdjs.gameCode.condition0IsTrue_0.val = false;
{
{gdjs.gameCode.conditionTrue_1 = gdjs.gameCode.condition0IsTrue_0;
gdjs.gameCode.condition0IsTrue_1.val = false;
gdjs.gameCode.condition1IsTrue_1.val = false;
{
gdjs.gameCode.condition0IsTrue_1.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 40;
}if ( gdjs.gameCode.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.gameCode.GDtimeObjects1.length;i<l;++i) {
    if ( gdjs.gameCode.GDtimeObjects1[i].getString() > "0" ) {
        gdjs.gameCode.condition1IsTrue_1.val = true;
        gdjs.gameCode.GDtimeObjects1[k] = gdjs.gameCode.GDtimeObjects1[i];
        ++k;
    }
}
gdjs.gameCode.GDtimeObjects1.length = k;}}
gdjs.gameCode.conditionTrue_1.val = true && gdjs.gameCode.condition0IsTrue_1.val && gdjs.gameCode.condition1IsTrue_1.val;
}
}if (gdjs.gameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "win", true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("cat"), gdjs.gameCode.GDcatObjects1);
gdjs.copyArray(runtimeScene.getObjects("dog"), gdjs.gameCode.GDdogObjects1);

gdjs.gameCode.condition0IsTrue_0.val = false;
{
gdjs.gameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDcatObjects1Objects, gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDdogObjects1Objects, false, runtimeScene, true);
}if (gdjs.gameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "lose", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("time"), gdjs.gameCode.GDtimeObjects1);

gdjs.gameCode.condition0IsTrue_0.val = false;
{
{gdjs.gameCode.conditionTrue_1 = gdjs.gameCode.condition0IsTrue_0;
gdjs.gameCode.condition0IsTrue_1.val = false;
gdjs.gameCode.condition1IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.gameCode.GDtimeObjects1.length;i<l;++i) {
    if ( gdjs.gameCode.GDtimeObjects1[i].getString() == "0" ) {
        gdjs.gameCode.condition0IsTrue_1.val = true;
        gdjs.gameCode.GDtimeObjects1[k] = gdjs.gameCode.GDtimeObjects1[i];
        ++k;
    }
}
gdjs.gameCode.GDtimeObjects1.length = k;}if ( gdjs.gameCode.condition0IsTrue_1.val ) {
{
gdjs.gameCode.condition1IsTrue_1.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) <= 40;
}}
gdjs.gameCode.conditionTrue_1.val = true && gdjs.gameCode.condition0IsTrue_1.val && gdjs.gameCode.condition1IsTrue_1.val;
}
}if (gdjs.gameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "lose", false);
}}

}


};

gdjs.gameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.gameCode.GDcatObjects1.length = 0;
gdjs.gameCode.GDcatObjects2.length = 0;
gdjs.gameCode.GDbgObjects1.length = 0;
gdjs.gameCode.GDbgObjects2.length = 0;
gdjs.gameCode.GDcucObjects1.length = 0;
gdjs.gameCode.GDcucObjects2.length = 0;
gdjs.gameCode.GDfishObjects1.length = 0;
gdjs.gameCode.GDfishObjects2.length = 0;
gdjs.gameCode.GDnoskObjects1.length = 0;
gdjs.gameCode.GDnoskObjects2.length = 0;
gdjs.gameCode.GDschObjects1.length = 0;
gdjs.gameCode.GDschObjects2.length = 0;
gdjs.gameCode.GDdogObjects1.length = 0;
gdjs.gameCode.GDdogObjects2.length = 0;
gdjs.gameCode.GDNewObjectObjects1.length = 0;
gdjs.gameCode.GDNewObjectObjects2.length = 0;
gdjs.gameCode.GDtimeObjects1.length = 0;
gdjs.gameCode.GDtimeObjects2.length = 0;

gdjs.gameCode.eventsList3(runtimeScene);
return;

}

gdjs['gameCode'] = gdjs.gameCode;
