	# About

This is the backend api for serverless cross region re:Invent project...


# Instructions

- create an s3 bucket to store your lambda code, e.g. 
- substitute your bucket name in the first command below
- run the the following 2 commands to deploy your api tier.

    ```bash
    aws cloudformation package \
    --template-file ticket-service.yaml \
    --output-template-file ticket-service-output.yaml \
    --s3-bucket [bucketName]
    ```
    
    ```bash
    aws cloudformation deploy \
    --template-file ticket-service-output.yaml \
    --stack-name ticket-service-api \
    --capabilities CAPABILITY_IAM
    ```

- You should now have your api gateway configured and lambda 
functions deployed

- for now you will have to update api-gateway options request 
with cors headers - see cors section below for headers.


# TODO
- [ ] still have to manually add CORS to API options pre-flight 
requests, cfn'ify it.
- [ ] display api url in cfn outputs section.
- [ ] nice to have - automate via code pipeline.


# Cors

Access-Control-Allow-Headers 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token'
Access-Control-Allow-Origin  '*'
Access-Control-Allow-Methods 'GET'




