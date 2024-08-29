import { test, expect } from '@playwright/test';
import { SerialNumberPage } from '../../pages/serialNumberPage';
import { validSerialNumbers } from '../utils/testData';



// Please refer to the 'TESTING_GUIDELINES.md' file for project documentation of my solution and test-execution
 


test.describe('Serial-Number Test Suite', () => {
  let serialNumberPage: SerialNumberPage;
  let validSerialNumber: string;

  test.beforeEach(async ({ page }) => {
    serialNumberPage = new SerialNumberPage(page);
    await page.goto('http://localhost:3000/');
    validSerialNumber = validSerialNumbers[0];
  });

  test('Add/Delete serial-num Test-Case', async () => {
    // Add the serial number, validate added
    await test.step("Step.1 Add serial number, validate added", async () => {
      await serialNumberPage.addSerialNumber(validSerialNumber);
      expect(await serialNumberPage.isSerialNumberPresent(validSerialNumber)).toBe(true);
    });

    // Delete serial number and validate removal
    await test.step("Step.2 Delete serial number, validate removal", async () => {
      await serialNumberPage.deleteSerialNumber(validSerialNumber);
      expect(await serialNumberPage.isSerialNumberPresent(validSerialNumber)).toBe(false);
    });
  });

  // Cleanup to ensure no leftover data affects other tests
  test.afterEach(async ({page}) => {
    // Wait for 5 seconds before executing the cleanup code
    await page.waitForTimeout(5000); // 5000 ms = 5 seconds

    try {
      if (await serialNumberPage.isSerialNumberPresent(validSerialNumber)) {
        await serialNumberPage.deleteSerialNumber(validSerialNumber);
      }
    } catch (error) {
      console.error('Failed to clean up test data:', error);
    }
  });
  
});





