import dbConnect from "../config/db_config.js";

const getAll = () => {
  return new Promise((resolve, reject) => {
    dbConnect.query("SELECT * FROM message", (err, results) => {
      if (err) reject(err);
      else resolve(results);
    });
  });
};

const create = (message) => {
  const { author, text } = message;
  return new Promise((resolve, reject) => {
    dbConnect.query("INSERT INTO message (author, text) VALUES (?,?)", [author, text], (err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
};

export default { getAll, create };
