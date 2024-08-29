/**
 * Generates a random serial number in the format of XXX-XXX-XXX where X can be a digit or an uppercase letter.
 * @returns {string} The generated serial number.
 */
export function generateRandomSerialNumber(): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const serialNumberLength = 9;
    let serialNumber = '';
  
    for (let i = 0; i < serialNumberLength; i++) {
      if (i > 0 && i % 3 === 0) {
        serialNumber += '-';
      }
      serialNumber += characters.charAt(Math.floor(Math.random() * characters.length));
    }
  
    return serialNumber;
  }
  