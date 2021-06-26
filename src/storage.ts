export class Storage {
  readonly padKey: string;
  private readonly storage: globalThis.Storage;
  /**padKey 可用仓库名 */
  constructor(padKey: string, storage: globalThis.Storage) {
    this.padKey = padKey;
    this.storage = storage;
  }
  getKey(key: string) {
    return `${this.padKey}${key}`;
  }
  setItem(key: string, value: string) {
    this.storage.setItem(this.getKey(key), value);
  }
  getItem(key: string) {
    return this.storage.getItem(this.getKey(key));
  }
  removeItem(key: string) {
    this.storage.removeItem(this.getKey(key));
  }
  private keys() {
    const result: string[] = [];
    const len = this.storage.length;
    for (let i = 0; i < len; i++) {
      const key = this.storage.key(i);
      if (key && key.indexOf(this.padKey) === 0) {
        const originKey = key.substring(this.padKey.length);
        if (originKey) {
          result.push(originKey);
        }
      }
    }
    return result;
  }
  clear(key: string) {
    const keys = this.keys();
    keys.forEach((key) => {
      this.removeItem(key);
    });
  }
  get length() {
    return this.keys().length;
  }
}
