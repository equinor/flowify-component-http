/*
Modified from https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/samples/msal-node-samples/client-credentials/index.js
 */
import * as msal from "@azure/msal-node";
import * as log from './log.js'




async function getToken(){
    const clientConfig = {
        auth: {
            clientId: process.env.CLIENT_ID,
            authority: `https://login.microsoftonline.com/${process.env.TENANT_ID}`,
            clientSecret: process.env.CLIENT_SECRET
        }
    };
    const cca = new msal.ConfidentialClientApplication(clientConfig);
    
    const clientCredentialRequest = {
        scopes: [`${process.env.RESOURCE_ID}/.default`],
        skipCache: true, // (optional) this skips the cache and forces MSAL to get a new token from Azure AD
    };
    try {
        const response = await cca.acquireTokenByClientCredential(clientCredentialRequest);
        return response.accessToken;
    } catch (error){
        log.error(error);
    }
    
}

export {getToken}