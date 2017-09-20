'use strict';

exports.handler = (event, context, callback) => {

    const response = {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Your function executed successfully!',
            input: event
        })
    };

    callback(null, response);

};
