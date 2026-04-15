module.exports = async function (context, req) {
    context.res = {
        status: 200,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            "x-ms-original-url": req.headers["x-ms-original-url"] || null
        })
    };
};
api/echoheaders/function.json

{
  "bindings": [
    {
      "authLevel": "anonymous",
      "type": "httpTrigger",
      "direction": "in",
      "name": "req",
      "methods": ["get"]
    },
    {
      "type": "http",
      "direction": "out",
      "name": "res"
    }
  ]
}
