gdjs.evtsExt__YandexGamesSDK__ShowFullscreenAd = {};

gdjs.evtsExt__YandexGamesSDK__ShowFullscreenAd.conditionTrue_0 = {val:false};
gdjs.evtsExt__YandexGamesSDK__ShowFullscreenAd.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__YandexGamesSDK__ShowFullscreenAd.userFunc0x6c5728 = function(runtimeScene, eventsFunctionContext) {
"use strict";
try {
    ysdk.adv.showFullscreenAdv({
        callbacks: {
            onClose: function(wasShown) {},
            onError: function(error) {
                console.log("Error while showing a fullscreen ad", error);
            }
        }
    });
} catch (err) {
    console.warn("Error trying to show a fullscreen ad", err);
};
};
gdjs.evtsExt__YandexGamesSDK__ShowFullscreenAd.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__YandexGamesSDK__ShowFullscreenAd.userFunc0x6c5728(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__YandexGamesSDK__ShowFullscreenAd.func = function(runtimeScene, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__YandexGamesSDK__ShowFullscreenAd.eventsList0(runtimeScene, eventsFunctionContext);
return;
}

