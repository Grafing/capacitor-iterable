declare global {
  interface PluginRegistry {
    IterablePlugin: IterablePlugin;
  }
}

export interface IterablePlugin {
  setEmail(options: {
    email?: string;
  }): Promise<void>;
  setUserId(options: {
    userId?: string;
  }): Promise<void>;
  registerForPush(): Promise<void>;
  unregisterPush(): Promise<void>;

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
}
