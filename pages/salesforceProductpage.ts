
import { SalesforceHomePage } from "./salesforceHomePage";


export class SalesforceProductPage extends SalesforceHomePage {


   
    public async clickTesttab(){
        await this.clickwithnewInstance(this.selectors.product.confirmButton)      
    }

}