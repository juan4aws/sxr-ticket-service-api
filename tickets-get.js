'use strict';

const AWS = require("aws-sdk");
const table = process.env.TABLE_NAME;

exports.handler = (event, context, callback) => {

    const docClient = new AWS.DynamoDB.DocumentClient();

    const params = {
        TableName: table
    };

    docClient.scan(params, function (err, data) {
        if (err)
            console.log(JSON.stringify(err, null, 2));
        else {

            let response = {
                statusCode: 200,
                body: JSON.stringify(data)
            };

            callback(null, response);
        }
    });

};