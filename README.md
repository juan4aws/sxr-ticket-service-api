# About

This is the backend api for serverless cross region re:Invent project.


# Instructions

- create an s3 bucket to store your lambda code, e.g. ` aws s3 mb s3://[bucket_name] --region us-east-1 `
- run the the following 2 commands to deploy your api tier. 
NOTE: substitute bucket_name with name of bucket created in previous step

```bash
aws cloudformation package \
--template-file ticket-service.yaml \
--output-template-file ticket-service-output.yaml \
--s3-bucket [bucket_name]
```

```bash
aws cloudformation deploy \
--template-file ticket-service-output.yaml \
--stack-name ticket-service-api \
--capabilities CAPABILITY_IAM
```

- You should now have your api gateway configured and lambda 
functions deployed. 
- Record the api url from outputs section of cloud formation stack.


# TODO
- [X] still have to manually add CORS to API options pre-flight 
requests, cfn'ify it. [JL:09/24]
- [X] display api url in cfn outputs section. [JL:09/24]
- [ ] nice to have - automate via code pipeline.