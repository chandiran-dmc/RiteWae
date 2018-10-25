// Try running in the console below.
  
exports = function(payload) {
  var queryArg = payload.query.arg || '';
  var body = {};
  if (payload.body) {
    body = EJSON.parse(payload.body.text());
  }
  arg = body;
  var collection = context.services.get("mongodb-atlas").db("CarReports").collection("BigData");
  collection.insertOne({
    loc: { type: "Point", coordinates: [parseFloat(arg.loc.coordinates[0]), parseFloat(arg.loc.coordinates[1])] },
    name: arg.name,
    category: arg.category
  });
  return queryArg + body.msg;
};
