const Promise = require("bluebird");
const mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const database = require("./config.db");

const readData = async (input) => {
    const Connection = mysql.createConnection(database);

    await Connection.connectAsync();
    const query = "SELECT email, uPassword FROM user WHERE email=? AND uPssword=?";

    await Connection.queryAsync(query, [
        input.email,
        input.uPassword,
    ]);

    await Connection.endAsync();

};

// const updateData = async (input) => {
//     const Connection = mysql.createConnection(database);

//     await Connection.connectAsync();
//     const query = "UPDATE ";

//     await Connection.queryAsync(query, [
//         input.email,
//         input.uPassword,
//     ]);

//     await Connection.endAsync();

// };

module.exports = { readData };
