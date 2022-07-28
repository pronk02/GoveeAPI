import {AzureFunction, Context, HttpRequest} from "@azure/functions";
import Govee from "node-govee-led"

function lightOn() {

    const GoveeClient = new Govee({
        apiKey: process.env.GOVEE_API_KEY,
        mac: process.env.TABLE_LIGHT_MAC_ADDRESS,
        model: process.env.TABLE_LIGHT_MODEL,
    });
    
    GoveeClient.turnOn
}

export const httpTrigger: AzureFunction = async (
    context: Context,
    req: HttpRequest
): Promise<void> => {
    context.log("HTTP trigger: Turn On.");
    const name = req.query.name || (req.body && req.body.name);
    const responseMessage = name
        ? "Hello, " +
          name +
          ". This HTTP triggered function executed successfully."
        : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";
    //Test Again
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage,
    };
};

export default httpTrigger;
