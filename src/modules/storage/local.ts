export class LocalStorage {
  private static readonly ENCRYPTION_KEY = "myEncryptionKey"; // Change this to your desired encryption key

  private static encrypt(value: string): string {
    // Simple encryption algorithm
    let encryptedValue = "";
    for (let i = 0; i < value.length; i++) {
      const charCode = value.charCodeAt(i);
      encryptedValue += String.fromCharCode(charCode + 1);
    }
    return encryptedValue;
  }

  private static decrypt(encryptedValue: string): string {
    // Simple decryption algorithm
    let decryptedValue = "";
    for (let i = 0; i < encryptedValue.length; i++) {
      const charCode = encryptedValue.charCodeAt(i);
      decryptedValue += String.fromCharCode(charCode - 1);
    }
    return decryptedValue;
  }

  static setItem(key: string, value: string): void {
    try {
      const encryptedValue = this.encrypt(value);
      localStorage.setItem(key, encryptedValue);
    } catch (error) {
      console.error(`Error setting item in local storage: ${error}`);
    }
  }

  static getItem(key: string): string | null {
    try {
      const encryptedValue = localStorage.getItem(key);
      if (encryptedValue) {
        const decryptedValue = this.decrypt(encryptedValue);
        return decryptedValue;
      }
      return null;
    } catch (error) {
      console.error(`Error getting item from local storage: ${error}`);
      return null;
    }
  }

  static removeItem(key: string): void {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error(`Error removing item from local storage: ${error}`);
    }
  }
}
