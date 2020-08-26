var capacitorPlugin = (function (exports, core) {
    'use strict';

    const { IterablePlugin } = core.Plugins;
    class Iterable {
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
        refreshToken() {
            return IterablePlugin.refreshToken();
        }
        updateUserInfo(options) {
            return IterablePlugin.updateUserInfo(options);
        }
        trackEvent(options) {
            return IterablePlugin.trackEvent(options);
        }
    }

    exports.Iterable = Iterable;

    return exports;

}({}, capacitorExports));
//# sourceMappingURL=plugin.js.map
