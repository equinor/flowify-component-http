# flowify-component-http

[Flowify](https://flowify-docs.equinor.com/) componenet for http requests

Set the following environmental variables
## Common settings
```
# http method to call. Currently support GET and POST
export HTTP_METHOD
export URL

# JSON payload for POST request. Base64 encoded
export DATA
```

## Optional: Authentication using Azure Service Principal
```
export AUTH=SERVICE_PRINCIPAL
export CLIENT_ID 
export CLIENT_SECRET
export RESOURCE_ID

#Tenant ID default to Equinor if using docker image
export TENANT_ID
```
## Options
```
#Additonal headers. Base64 encoded JSON
export EXTRA_HEADERS

# Log level
export LOG_LEVEL=4
```
