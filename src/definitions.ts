declare global {
  interface PluginRegistry {
    IterablePlugin: IterableProtocol;
  }
}

export interface IterableProtocol {
  setEmail(options: {
    email?: string;
  }): Promise<void>;
  setUserId(options: {
    userId?: string;
  }): Promise<void>;
  registerForPush(): Promise<void>;
  unregisterPush(): Promise<void>;
  refreshToken(options: {
    token?: string
  }): Promise<void>;

  updateUserInfo(options:{
    street1?: string;
    street2?: string;
    city?: string;
    state?: string;
    zip?: string;
  }): Promise<void>;

  trackEvent(options: {
    name?: string;
    data: any;
  }): Promise<void>

  showInbox(): Promise<void>;

  getNumberOfUnreadMessages(): Promise<any>;
}
