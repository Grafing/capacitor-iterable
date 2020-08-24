declare module '@capacitor/core' {
  interface PluginRegistry {
    Iterable: IterablePlugin;
  }
}

export interface IterablePlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
