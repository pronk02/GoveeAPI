"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpTrigger = void 0;
const apiKey = process.env.GOVEE_API_KEY;
const mac = process.env.TABLE_LIGHT_MAC_ADDRESS;
const model = process.env.TABLE_LIGHT_MODEL;
const baseUrl = process.env.BASEURL;
function lightOn() {
    return __awaiter(this, void 0, void 0, function* () {
    });
}
const httpTrigger = (context, req) => __awaiter(void 0, void 0, void 0, function* () {
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
    req.headers = headers;
    //const name = req.query.name || (req.body && req.body.name);
    const responseMessage = `API Key: ${apiKey}`;
    context.res = {
        body: responseMessage
    };
});
exports.httpTrigger = httpTrigger;
exports.default = exports.httpTrigger;
//# sourceMappingURL=index.js.map