"use strict";
exports.lambdaHandler = async (event) => {
    console.log("starting lambda container");
    const lambda_event = JSON.stringify(event, null, 2);
    console.log("lambda event: " + lambda_event);
    const bodys = {
        "hello": "lambda",
        "world": "container"
    };
    const post_response = {
        statusCode: 200,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bodys)
    };
    return post_response;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLENBQUMsYUFBYSxHQUFDLEtBQUssRUFBRSxLQUFVLEVBQUMsRUFBRTtJQUN0QyxPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixDQUFDLENBQUM7SUFDekMsTUFBTSxZQUFZLEdBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2xELE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEdBQUMsWUFBWSxDQUFDLENBQUM7SUFDM0MsTUFBTSxLQUFLLEdBQUU7UUFDVCxPQUFPLEVBQUUsUUFBUTtRQUNqQixPQUFPLEVBQUUsV0FBVztLQUN2QixDQUFDO0lBQ0YsTUFBTSxhQUFhLEdBQUc7UUFDbEIsVUFBVSxFQUFFLEdBQUc7UUFDZixPQUFPLEVBQUUsRUFBQyxjQUFjLEVBQUUsa0JBQWtCLEVBQUM7UUFDN0MsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDO0tBQzlCLENBQUM7SUFDRixPQUFPLGFBQWEsQ0FBQztBQUN6QixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzLmxhbWJkYUhhbmRsZXI9YXN5bmMgKGV2ZW50OiBhbnkpPT57XG4gICAgY29uc29sZS5sb2coXCJzdGFydGluZyBsYW1iZGEgY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IGxhbWJkYV9ldmVudD1KU09OLnN0cmluZ2lmeShldmVudCwgbnVsbCwgMik7XG4gICAgY29uc29sZS5sb2coXCJsYW1iZGEgZXZlbnQ6IFwiK2xhbWJkYV9ldmVudCk7XG4gICAgY29uc3QgYm9keXM9IHtcbiAgICAgICAgXCJoZWxsb1wiOiBcImxhbWJkYVwiLFxuICAgICAgICBcIndvcmxkXCI6IFwiY29udGFpbmVyXCJcbiAgICB9O1xuICAgIGNvbnN0IHBvc3RfcmVzcG9uc2UgPSB7XG4gICAgICAgIHN0YXR1c0NvZGU6IDIwMCxcbiAgICAgICAgaGVhZGVyczoge1wiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwifSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9keXMpXG4gICAgfTtcbiAgICByZXR1cm4gcG9zdF9yZXNwb25zZTtcbn1cbiJdfQ==