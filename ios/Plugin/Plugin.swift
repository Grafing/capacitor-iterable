import Foundation
import Capacitor
import IterableSDK


@objc(IterablePlugin)
public class IterablePlugin: CAPPlugin {

    public override func load() {
        let apiKey = getConfigValue("apiKey") as? String ?? "ADD_IN_CAPACITOR_CONFIG_JSON"

        let config = IterableConfig()
        // TODO
        // IterableConfig.autoPushRegistration to false,
        IterableAPI.initialize(apiKey: apiKey, config: config)
        
        NotificationCenter.default.addObserver(self, selector: #selector(self.didRegisterWithToken(notification:)), name: Notification.Name(CAPNotifications.DidRegisterForRemoteNotificationsWithDeviceToken.name()), object: nil)
    }

    @objc func didRegisterWithToken(notification: NSNotification) {
        guard let deviceToken = notification.object as? Data else {
            return
        }
       IterableAPI.register(token: deviceToken)
  }

    func application(_ application: UIApplication, didRegisterForRemoteNotificationsWithDeviceToken deviceToken: Data) {
        IterableAPI.register(token: deviceToken)
    }

    @objc func setEmail(_ call: CAPPluginCall) {
        let email = call.getString("email")
        IterableAPI.email = email
        call.success()
    }

    @objc func setUserId(_ call: CAPPluginCall) {
        let userId = call.getString("userId")
        IterableAPI.userId = userId
        call.success()

    }

    @objc func updateUser(_ call: CAPPluginCall) {
        let street1 = call.getString("street1")
        let street2 = call.getString("street2")
        let city = call.getString("city")
        let state = call.getString("state")
        let zip = call.getString("zip")

        let dataField : [String: Any] = [
            "Address":[
                "Street1": street1,
                "Street2": street2,
                "City": city,
                "State": state,
                "Zip": zip
            ]
        ]
        IterableAPI.updateUser(dataField, mergeNestedObjects: false, onSuccess: myUserUpdateSuccessHandler, onFailure: myUserUpdateFailureHandler)    
        call.success()
    }

    func myUserUpdateSuccessHandler(data:[AnyHashable:Any]?) -> () {
        // success
        print("sent to Iterable success")
    }

    func myUserUpdateFailureHandler(reason:String?, data:Data?) -> () {
        // failure
        print("sent to Iterable failure")
    }

    @objc func unregisterPush(_ call: CAPPluginCall) {
        IterableAPI.disableDeviceForCurrentUser()
        call.success()
    }

     @objc func trackEvent(_ call: CAPPluginCall) {
        let name = call.getString("name")
        let data = call.getObject("data")
        IterableAPI.track(event: "\(name)" , dataFields: data)
        call.success();
     }

}
