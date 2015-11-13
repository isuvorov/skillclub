var Game;

Game = (function () {
    function Game() {
    }

    Game.prototype.state = {
        users: {
            "user1": {
                id: "user1",
                name: "Daniel Craig",
                gold: 100,
                clicks: 0,
                score: 0
            },
            "user2": {
                id: "user2",
                name: "Brad Pitt",
                gold: 100,
                clicks: 0,
                score: 0
            }
        }
    };


    Game.prototype.addUser = function (name) {


        var userId = "user" + (Object.keys(this.state.users).length + 1);
        console.log("this.state", this.state, "name", name, "userId", userId);

        var user = {
            id: userId,
            name: name,
            gold: 100,
            clicks: 0,
            score: 0
        };

        this.state.users[userId] = user;

        sendToSockets("addUser", user);
        sendToSockets("setState", this.state);

        return user;
    };
    Game.prototype.steal = function (userIdFrom, userIdTo, gold) {
        if (gold == null) gold = 2;


        // проверки

        // крадем золото
        this.state.users[userIdFrom].gold -= gold;
        this.state.users[userIdTo].gold += gold;

        // начисляем очки
        this.state.users[userIdTo].score += gold * 100;
        this.state.users[userIdTo].clicks += 1;


        sendToSockets("steal", {userIdFrom: userIdFrom, userIdTo: userIdTo, gold: gold});
        sendToSockets("setState", this.state);
    };

    return Game;

})();


var game = new Game();

var sockets = [];

var sendToSockets = function (event, data) {
    sockets.forEach(function (socketId) {
        try {
            sails.sockets.emit(socketId, event, data);
        } catch (err) {
        }
    });
};





var GameController;
module.exports = GameController = {
    index: function (req, res) {
        var authUser = req.session.user;

        return res.render("game/index", {game: game, authUser: authUser})

    },
    auth: function (req, res) {
        var name = req.param("name");
        var user = game.addUser(name);
        req.session.user = user;


        return res.redirect("/");
    },

    rand: function (req, res) {
        req.session.user = Math.random();
        return res.json(req.session);

    },

    session: function (req, res) {
        return res.json(req.session);

    },
    user: function (req, res) {
        return res.json(req.user);

    },
    subscribe: function (req, res) {
        if (!req.isSocket) {
            return res.badRequest('Only a client socket can subscribe to Louies.  You, sir, appear to be something... _else_.');
        }


        return res.json(req.user);

    },
    steal: function (req, res) {
        game.steal(req.param("userIdFrom"), req.param("userIdTo"));

        return res.json(game.state);

    },
    test: function (req, res) {

        return res.json({sockets: sockets});

    },
    test2: function (req, res) {
        if (!req.isSocket) {
           return res.json({isSocket:false});
        }

        if (sockets.indexOf(req.socket.id) === -1) {
            sockets.push(req.socket.id);
        }
        return res.json({socketId:req.socket.id})
    },

};