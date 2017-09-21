# About

This is the backend api for serverless cross region re:Invent project.


# TODO
- [ ] still have to manually add CORS to API options pre-flight 
requests, cfn'ify it.
- [ ] automate via code pipeline



# Commands

Package
aws cloudformation package \
--template-file ticket-service.yaml \
--output-template-file ticket-service-output.yaml \
--s3-bucket ticket-service-deployment

Deploy
aws cloudformation deploy \
--template-file ticket-service-output.yaml \
--stack-name ticket-service-api \
--capabilities CAPABILITY_IAM




