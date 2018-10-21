exports = function(arg){

  var collection = context.services.get("mongodb-atlas").db("CarReports").collection("Events");
  var bob = collection.find(
  {
    loc:
      { $near :
          {
            $geometry: { type: "Point",  coordinates: [ parseFloat(arg[0]), parseFloat(arg[1]) ] },
            $minDistance: 1,
            $maxDistance: 3200
          }
      }
  }).toArray();
  bob.then(function(data) {
    return {arg: bob};
  });
};
