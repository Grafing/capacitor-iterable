import { IterableProtocol } from './definitions';
export declare class Iterable implements IterableProtocol {
    setEmail(options: {
        email?: string;
    }): Promise<void>;
    setUserId(options: {
        userId?: string;
    }): Promise<void>;
    registerForPush(): Promise<void>;
    unregisterPush(): Promise<void>;
    refreshToken(): Promise<void>;
    updateUserInfo(options: {
        street1?: string;
        street2?: string;
        city?: string;
        state?: string;
        zip?: string;
    }): Promise<void>;
    trackEvent(options: {
        name?: string;
        data: any;
    }): Promise<void>;
}
