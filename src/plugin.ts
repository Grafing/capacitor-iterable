import { Plugins } from '@capacitor/core';
import { IterableProtocol } from './definitions';

const { IterablePlugin } = Plugins;

export class Iterable implements IterableProtocol {
    setEmail(options: { email?: string; }): Promise<void> {
        return IterablePlugin.setEmail(options);
    }
    setUserId(options: { userId?: string; }): Promise<void> {
        return IterablePlugin.setUserId(options);
    }
    registerForPush(): Promise<void> {
        return IterablePlugin.registerForPush();
    }
    unregisterPush(): Promise<void> {
        return IterablePlugin.unregisterPush();
    }
    updateUserInfo(options: { street1?: string; street2?: string; city?: string; state?: string; zip?: string; }): Promise<void> {
        return IterablePlugin.updateUserInfo(options);
    }
    trackEvent(options: { name?: string; data: any; }): Promise<void> {
        return IterablePlugin.trackEvent(options);
    }

}
