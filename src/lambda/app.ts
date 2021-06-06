exports.lambdaHandler=async (event: any)=>{
    console.log("starting lambda container");
    const lambda_event=JSON.stringify(event, null, 2);
    console.log("lambda event: "+lambda_event);
    const bodys= {
        "hello": "lambda",
        "world": "container"
    };
    const post_response = {
        statusCode: 200,
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(bodys)
    };
    return post_response;
}
