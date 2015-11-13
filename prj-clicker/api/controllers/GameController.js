var game = {
    state: {
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
    },
    steal: function(userIdFrom, userIdTo, gold){
        if(gold == null) gold = 2;
        // проверки

        // крадем золото
        this.state.users[userIdFrom].gold -= gold;
        this.state.users[userIdTo].gold += gold;

        // начисляем очки
        this.state.users[userIdTo].score += gold * 100;
        this.state.users[userIdTo].clicks += 1;

    }
};


var GameController;
module.exports = GameController = {
    index: function (req, res) {
        return res.render("game/index", {game: game})

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
};