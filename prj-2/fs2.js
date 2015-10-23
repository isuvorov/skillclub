//https://github.com/isuvorov/skillclub/blob/master/prj-2/fs2.js

module.exports = {
    readFile: function (filename, next) {
        setTimeout(function () {
            require("fs").readFile(filename, next);
        }, 3000);
    }
};

