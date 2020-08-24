import { WebPlugin } from '@capacitor/core';
import { IterablePlugin } from './definitions';

export class IterableWeb extends WebPlugin implements IterablePlugin {
  constructor() {
    super({
      name: 'Iterable',
      platforms: ['web'],
    });
  }

  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}

const Iterable = new IterableWeb();

export { Iterable };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(Iterable);
