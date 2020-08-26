package com.tmavrin.plugins.iterable;

import com.getcapacitor.JSObject;
import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.iterable.iterableapi.IterableApi;
import com.iterable.iterableapi.IterableConfig;
import com.iterable.iterableapi.IterableFirebaseMessagingService;
import org.json.JSONException;
import org.json.JSONObject;

@NativePlugin
public class IterablePlugin extends Plugin {
    public static final String CONFIG_KEY_PREFIX = "plugins.IterablePlugin.";

    @Override()
    public void load() {
        String apiKey = this.bridge.getConfig().getString(CONFIG_KEY_PREFIX + "apiKey", "ADD_IN_CAPACITOR_CONFIG_JSON");
        String pushIntegrationName = this.bridge.getConfig().getString(CONFIG_KEY_PREFIX + "pushIntegrationName", "ADD_IN_CAPACITOR_CONFIG_JSON");

        IterableConfig.Builder configBuilder = new IterableConfig.Builder().setPushIntegrationName(pushIntegrationName).setAutoPushRegistration(false);
        IterableApi.initialize(this.bridge.getContext(), apiKey, configBuilder.build());

        super.load();
    }

    @PluginMethod()
    public void setEmail(PluginCall call){
        String email = call.getString("email");
        IterableApi.getInstance().setEmail(email);

        call.success();
    }

    @PluginMethod()
    public void setUserId(PluginCall call){
        String userId = call.getString("userId");
        IterableApi.getInstance().setEmail(userId);

        call.success();
    }

    @PluginMethod()
    public void registerForPush(PluginCall call){
        IterableApi.getInstance().registerForPush();
        call.success();
    }

    @PluginMethod()
    public void refreshToken(PluginCall call){
        IterableFirebaseMessagingService.handleTokenRefresh();
        call.success();
    }

    @PluginMethod()
    public void unregisterPush(PluginCall call){
        IterableApi.getInstance().disablePush();
        call.success();
    }

    @PluginMethod()
    public void updateUserInfo(PluginCall call){
        String street1 = call.getString("street1");
        String street2 = call.getString("street2");
        String city = call.getString("city");
        String state = call.getString("state");
        String zip = call.getString("zip");

        JSONObject address = new JSONObject();
        JSONObject dataFields = new JSONObject();

        try {
            address.put("Street1", street1);
            if(!street2.isEmpty()) {
                address.put("Street2", street2);
            }
            address.put("City", city);
            address.put("State", state);
            address.put("Zip", zip);

            dataFields.put("dataFields", address);
        } catch (JSONException e) {
            e.printStackTrace();
            call.reject("Error creating JSON object");
        }
        IterableApi.getInstance().updateUser(dataFields);

        call.success();
    }

    @PluginMethod()
    public void trackEvent(PluginCall call){
        String eventName = call.getString("name");
        JSObject dataFields = call.getObject("data");
        IterableApi.getInstance().track(eventName, dataFields);

        call.success();
    }
}
