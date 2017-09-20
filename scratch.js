exports.handler = function(event, context, callback) {

    var responseCode = 200;

    var bucketName = process.env.ECHO_PHRASE;

    var responseBody = {
        message: "Bucket: " + bucketName + "!",
        input: event
    };

    var response = {
        statusCode: responseCode,
        headers: {
            "x-custom-header" : "custom header val"
        },
        body: JSON.stringify(responseBody)
    };

    console.log("response: " + JSON.stringify(response));

    callback(null, response);  // SUCCESS with message
};
