exports.handler = function(event, context, callback) {

    const responseCode = 200;

    const bucketName = process.env.ECHO_PHRASE;

    const responseBody = {
        message: "Bucket: " + bucketName + "!",
        input: event
    };

    const response = {
        statusCode: responseCode,
        headers: {
            "x-custom-header" : "custom header val"
        },
        body: JSON.stringify(responseBody)
    };

    console.log("response: " + JSON.stringify(response));

    callback(null, response);  // SUCCESS with message
};
