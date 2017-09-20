# About

This is the backend api for serverless cross region re:Invent project.


# TODO
- [ ] still have to manually add CORS to API, cfn'ify it.



# Commands

Package
aws cloudformation package \
--template-file ticket-service.yaml \
--output-template-file ticket-service-output.yaml \
--s3-bucket ticket-service-deployment

Deploy
aws cloudformation deploy \
--template-file ticket-service-output.yaml \
--stack-name ticket-service-stack \
--capabilities CAPABILITY_IAM




