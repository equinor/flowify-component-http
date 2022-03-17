# flowify-component-http

[Flowify](https://flowify-docs.equinor.com/) componenet for http requests

Set the following environmental variables

Variables denoted with * can be set by run arguments by setting them as lowercase
## Common settings
```
# http method to call. Currently support GET and POST *
export HTTP_METHOD

# Request URL *
export URL

# Path to save results from request. File name will be output.json *
# Not necessary if using Docker. The path will be /tmp/files/
export SAVE_PATH 
```

## For POST request
```
# JSON payload for POST request *
export DATA
```

## Optional: Authentication using Azure Service Principal
```
export AUTH=SERVICE_PRINCIPAL *
export CLIENT_ID 
export CLIENT_SECRET
export RESOURCE_ID
export TENANT_ID
```
## Options
```
#Additonal headers (JSON) *
export EXTRA_HEADERS

# Log level
export LOG_LEVEL=4
```
