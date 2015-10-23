
module.exports = {


    r: function () {
        return Math.random();
    },


    hello: function () {
        console.log("Hello " + this.name);
    },

    asyncR: function (next) {

        //next("bad");
        //next(null, 12345678);

        setTimeout(function () {
            var rand = Math.random();
            if (rand < 0.5) {
                return next("bad request");
                //return next(new Error("Bad request"));
            } else {
                return next(null, rand);
            }
        }, 2000);
    }
};
