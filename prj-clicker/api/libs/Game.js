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
        var userId = "user" + Object.keys(this.state).length + 1;

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


module.exports = Game;

