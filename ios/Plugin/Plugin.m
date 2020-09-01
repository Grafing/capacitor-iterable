#import <Foundation/Foundation.h>
#import <Capacitor/Capacitor.h>

// Define the plugin using the CAP_PLUGIN Macro, and
// each method the plugin supports using the CAP_PLUGIN_METHOD macro.
CAP_PLUGIN(IterablePlugin, "IterableSDK",
           CAP_PLUGIN_METHOD(setEmail, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(setUserId, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(registerForPush, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(unregisterPush, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(updateUserInfo, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(trackEvent, CAPPluginReturnPromise);
)
