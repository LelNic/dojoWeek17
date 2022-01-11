import { config } from "dotenv";
import { createConnection } from "mysql2";
config(process.cwd(), ".env");

const dbConnect = createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

dbConnect.connect((err) => {
  if (err) console.log(`🆘 Mysql connection error: `, err);
  else console.log(`✅ Mysql connected on DB ${process.env.DB_NAME}`);
});

export default dbConnect;
