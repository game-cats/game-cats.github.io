gdjs.evtsExt__YandexGamesSDK__InitSDK = {};

gdjs.evtsExt__YandexGamesSDK__InitSDK.conditionTrue_0 = {val:false};
gdjs.evtsExt__YandexGamesSDK__InitSDK.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__YandexGamesSDK__InitSDK.userFunc0x6c5728 = function(runtimeScene, eventsFunctionContext) {
"use strict";
var options = {
    fullscreen: eventsFunctionContext.getArgument("fullscreen"),
    orientation: {
        value: eventsFunctionContext.getArgument("orientation") || "portrait",
        lock: eventsFunctionContext.getArgument("lock")
    }
};
(function(d, s, id) {
    var js,
    fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = "https://yandex.ru/games/sdk/v2";
    js.onload = function () {
        YaGames
            .init(options)
            .then(ysdk => {
                window["ysdk"] = ysdk;
                runtimeScene.getVariables().get("YaGamesSDK_sdkInitResult").setNumber(1);
            });
    };
    fjs.parentNode.insertBefore(js, fjs);
})(document, "script", "yagames-jssdk");
};
gdjs.evtsExt__YandexGamesSDK__InitSDK.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__YandexGamesSDK__InitSDK.userFunc0x6c5728(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__YandexGamesSDK__InitSDK.func = function(runtimeScene, fullscreen, orientation, lock, parentEventsFunctionContext) {
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
if (argName === "fullscreen") return fullscreen;
if (argName === "orientation") return orientation;
if (argName === "lock") return lock;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__YandexGamesSDK__InitSDK.eventsList0(runtimeScene, eventsFunctionContext);
return;
}

