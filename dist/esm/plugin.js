import { Plugins } from '@capacitor/core';
const { IterablePlugin } = Plugins;
export class Iterable {
    setEmail(options) {
        return IterablePlugin.setEmail(options);
    }
    setUserId(options) {
        return IterablePlugin.setUserId(options);
    }
    registerForPush() {
        return IterablePlugin.registerForPush();
    }
    unregisterPush() {
        return IterablePlugin.unregisterPush();
    }
    refreshToken(options) {
        return IterablePlugin.refreshToken(options);
    }
    updateUserInfo(options) {
        return IterablePlugin.updateUserInfo(options);
    }
    trackEvent(options) {
        return IterablePlugin.trackEvent(options);
    }
    showInbox() {
        return IterablePlugin.showInbox();
    }
}
//# sourceMappingURL=plugin.js.map