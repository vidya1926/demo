import { test } from "../customFixtures/salesForceFixture"
import { FakerData } from "../helpers/fakerUtils"
import { readDataFromCSV } from '../helpers/csvUtil';
import { updateJSONFile } from "../helpers/jsonDataHandler";
import { accountData } from "../data/account.interface";
import { SalesforceProductPage } from "../pages/salesforceProductpage";
const csvFilePath = './data/accounts.csv';

//test.use({ storageState: "./logins/salesforceLogin.json" })
test('Handling Window', async ({ SalesforceLogin, SalesforceHome ,SalesforceProduct}) => {
    test.info().annotations.push(
        { type: 'Author', description: 'Vidya' },
        { type: 'TestCase', description: 'Handling Window' },
        { type: 'Test Description', description: "Switch between the windows" }
    );
     
        await SalesforceLogin.salesforceLogin("ADMINLOGIN");
        //await SalesforceLogin.verifyHomeLabel();
        await SalesforceHome.appLauncher()     
        await SalesforceHome.clickConfirm();   
        await SalesforceProduct.clickTesttab()
     });