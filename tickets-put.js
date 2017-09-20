'use strict';

const AWS = require("aws-sdk");

exports.handler = (event, context, callback) => {

    const docClient = new AWS.DynamoDB.DocumentClient();

    let table = "Movies";

    let year = 2015;
    let title = "The Big New Movie";

    let params = {
        TableName: table,
        Item: {
            "year": year,
            "title": title,
            "info": {
                "plot": "Nothing happens at all.",
                "rating": 4
            }
        }
    };

    console.log("Adding a new item...");
    docClient.put(params, function (err, data) {
        if (err) {
            console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
        } else {
            console.log("Added item:", JSON.stringify(data, null, 2));
        }
    });

    const response = {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Your function executed successfully!',
            input: event
        })
    };

    callback(null, response);

};
