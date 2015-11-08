var RequestController;
module.exports = RequestController = {
    index: function (req, res) {
        Request.find({}, function (err, requests) {

            if (err) {
                return res.serverError(err);
            }
            return res.json(requests);
        });
        //return res.send("request/index");
    },
    //add: function(req, res) {
    //        return res.json({qwe:123});
    //},
    new: function (req, res) {
        var request = {
            fio: req.param("fio"),
            price: req.param("price")
        };
        Request.create(request, function (err, request) {
            if (err) {
                return res.serverError(err);
            }

            return res.json(request);
        });
    }

};

// blueprints
// autoreload
//
