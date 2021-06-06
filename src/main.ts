import { App, Construct, Stack, StackProps, Tags } from '@aws-cdk/core';
import * as lambda from "@aws-cdk/aws-lambda";
import { LambdaRestApi } from "@aws-cdk/aws-apigateway";
import * as path from 'path';

export class MyStack extends Stack {
  constructor(scope: Construct, id: string, props: StackProps = {}) {
    super(scope, id, props);

    const handler = new lambda.DockerImageFunction(this, 'helloLambdaContainer', {
      code: lambda.DockerImageCode.fromImageAsset(path.join(__dirname, './lambda')),
      environment: {
        KEY1: "VALUE1"
      }
    });
    const apigw = new LambdaRestApi(this, 'hello-Lambda-apigw', { 
      handler,
      restApiName: 'hello-Lambda-apigw',
      deploy: false
     })
     
    const deployment = new apigw.deploymentStage(this, 'cdk-deployment', { apigw })
  }
}

// for development, use account/region from cdk cli
const devEnv = {
  account: process.env.CDK_DEFAULT_ACCOUNT,
  region: process.env.CDK_DEFAULT_REGION,
};

const app = new App();

const lambdaStack = new MyStack(app, 'my-stack-dev', { env: devEnv });
// new MyStack(app, 'my-stack-prod', { env: prodEnv });
Tags.of(lambdaStack).add('Env', 'dev')
Tags.of(lambdaStack).add('Owner', 'Shengzhen')
Tags.of(lambdaStack).add('App', 'lambda-hello-world')
app.synth();