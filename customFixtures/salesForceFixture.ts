import { test as baseTest } from '@playwright/test'
import { SalesforceHomePage } from '../pages/salesforceHomePage'
import { SalesforceLeadPage } from '../pages/salesforceLeadPage'
import { SalesforceAccountPage } from '../pages/salesforceAccountPage'
import { SalesforceLoginPage } from '../pages/salesforceLogin'
import { SalesforceProductPage } from '../pages/salesforceProductpage'


type expertusFixture = {
  
    SalesforceHome: SalesforceHomePage
    SalesforceLead: SalesforceLeadPage
    SalesforceAccount: SalesforceAccountPage
    SalesforceLogin: SalesforceLoginPage
    SalesforceProduct:SalesforceProductPage
}

export const test = baseTest.extend<expertusFixture>({ 

    SalesforceLogin: async ({ page, context }, use) => {
        const salesforceLogin = new SalesforceLoginPage(page, context);
        await use(salesforceLogin);
    },

    SalesforceHome: async ({ page, context }, use) => {
        const SalesforceHome = new SalesforceHomePage(page, context);
        await use(SalesforceHome);
    },

    SalesforceLead: async ({ page, context }, use) => {
        const SalesforceLead = new SalesforceLeadPage(page, context);
        await use(SalesforceLead)
    },

    SalesforceAccount: async ({ page, context }, use) => {
        const SalesforceAccount = new SalesforceAccountPage(page, context);
        await use(SalesforceAccount)
    },
    SalesforceProduct:async({page,context},use)=>{
        const SalesforceProduct = new SalesforceProductPage(page, context);
        await use(SalesforceProduct)
    }

})
/* test.beforeAll(async ({ SalesforceLogin }) => {
    await SalesforceLogin.salesforceLogin("ADMINLOGIN")
});
 */
/* test.afterEach(async ({}, testInfo) => {
    jiraIssueKey = await logADefectInJira(testInfo);
});

test.afterAll(async ({}) => {
   const filePath= process.cwd()
   const resultFile=await glob(filePath+"/test-results",{absolute:true})
   console.log(resultFile)
    if (jiraIssueKey && resultFile.length> 0) {
        await updateJiraIssue(jiraIssueKey,resultFile[0]); // Replace with the actual folder path
    }
}); */

