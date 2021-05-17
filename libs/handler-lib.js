//creating handler function that we use as a wrapper around lambda function
export default function handler(lambda) {
    return async function (event, context) {
      let body, statusCode;
      try {
        // Run the Lambda
        body = await lambda(event, context);
        statusCode = 200;
      } catch (e) {
        //print out full error
        console.log(e);
        body = { error: e.message };
        statusCode = 500;
      }
      // Return HTTP response
      return {
        statusCode,
        body: JSON.stringify(body),
      };
    };
  }