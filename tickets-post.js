'use strict';

const AWS = require("aws-sdk");
const table = process.env.TABLE_NAME;

exports.handler = (event, context, callback) => {

    console.log('Received event:', JSON.stringify(event, null, 2));

    let body = JSON.parse(event.body);

    let statusCode = 200;

    const docClient = new AWS.DynamoDB.DocumentClient();

    const params = {
        TableName: table,
        Item: {
            "id": body.id,
            "description": body.description,
            "assigned": body.assigned,
            "priority": body.priority,
            "status": body.status,
            "createdBy": body.createdBy,
            "createdOn": new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')
        }
    };

    console.log("Adding a new ticket...");

    docClient.put(params, function (err, data) {
        if (err) {
            console.error("Unable to add ticket. Error JSON:", JSON.stringify(err, null, 2));
            this.statusCode = '500';
        } else {
            console.log("Added ticket:", JSON.stringify(data, null, 2));
            this.statusCode = '200';
        }
    });

    const response = {
        statusCode: this.statusCode,
        body: JSON.stringify({
            message: 'added ticket successfully!',
            record: params.ticket
        })
    };

    callback(null, response);

};
