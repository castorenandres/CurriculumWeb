const mysql = require('mysql');

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Root!@#$",
    database: "curricula"
});

exports.getLanguage = (callback) => {
    connection.query("SELECT * FROM lang", function (error, results, fields) {
        if (error) throw error;
        callback(results)
    });
}

exports.getFrameworks = (callback) => {
    connection.query("SELECT * FROM framework", function (error, results, fields) {
        if (error) throw error;
        callback(results)
    });
}

exports.getSpoken = (callback) => {
    connection.query("SELECT * FROM spoken", function (error, results, fields) {
        if (error) throw error;
        callback(results)
    });
}