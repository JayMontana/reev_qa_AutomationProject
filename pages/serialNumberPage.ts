
import { Page } from '@playwright/test';

export class SerialNumberPage {
  constructor(private page: Page) {}

  // Locators
  private serialNumberInput = this.page.locator('input[name="input-serial-number"]');
  private addButton = this.page.locator('button.addButton');
  private serialNumberList = this.page.locator('ul.list');
  private deleteButton = (serialNumber: string) => this.page.locator(`//div[contains(text(), "${serialNumber}")]//following-sibling::button[@class="list-button"]`);

  // Methods
  async addSerialNumber(serialNumber: string) {
    await this.serialNumberInput.fill(serialNumber);
    await this.addButton.click();
  }


  async deleteSerialNumber(serialNumber: string) {
    const button = this.deleteButton(serialNumber);
    await button.waitFor({ state: 'visible', timeout: 30000 }); // Ensure button is visible
    await button.click();
  }

  async isSerialNumberPresent(serialNumber: string): Promise<boolean> {
    return this.serialNumberList.locator(`text=${serialNumber}`).isVisible();
  }

  
}
