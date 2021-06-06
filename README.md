## This is a Lambda container example with api-gateway and CDK
Pre-requists
- Docker
- Node
- VSCode

install dependencies
```
node .projenrc.js
```
local build and test the lambda
```
cd src/lambda
tsc && sudo docker build -t lambda-container:v1 . && sudo docker run -p 9000:8080 lambda-container:v1

curl -XPOST "http://localhost:9000/2015-03-31/functions/function/invocations" -d '{}'
```
