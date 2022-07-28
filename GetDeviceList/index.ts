import {AzureFunction, Context, HttpRequest} from "@azure/functions";
import Govee from "node-govee-led"

const apiKey = process.env.GOVEE_API_KEY
const mac = process.env.TABLE_LIGHT_MAC_ADDRESS
const model = process.env.TABLE_LIGHT_MODEL
const baseUrl = process.env.BASEURL

async function lightOn() {


}

export const httpTrigger: AzureFunction = async (
    context: Context,
    req: HttpRequest
): Promise<void> => {
    context.log("HTTP trigger: Turn On.");

    const headers = {
        "Govee-API-Key": apiKey,
        "Content-Type": "application/json"
    };
    //req.headers.add("Govee-API-Key", apiKey);
    /* req = {
        body: "Hello",
        headers: headers,
        method: "PUT",
        url: baseUrl,
        query: null,
        params: null,
        parseFormBody: null,
        user: null
    }; */
    req.headers = headers

    //const name = req.query.name || (req.body && req.body.name);
    const responseMessage = `API Key: ${apiKey}`
    context.res = {
        body: responseMessage
    }
};

export default httpTrigger;
