import { driver } from '@wdio/globals';

export class NetworkUtils {
  static async setOffline() {
    try {
      await (driver as any).execute('mobile: shell', {
        command: 'svc',
        args: ['wifi', 'disable'],
      });
      await (driver as any).execute('mobile: shell', {
        command: 'svc',
        args: ['data', 'disable'],
      });
    } catch (err) {
      console.warn('Unable to set offline mode:', err);
    }
  }

  static async setOnline() {
    try {
      await (driver as any).execute('mobile: shell', {
        command: 'svc',
        args: ['wifi', 'enable'],
      });
      await (driver as any).execute('mobile: shell', {
        command: 'svc',
        args: ['data', 'enable'],
      });
    } catch (err) {
      console.warn('Unable to set online mode:', err);
    }
  }
}
