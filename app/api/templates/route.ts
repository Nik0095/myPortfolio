import { NextResponse } from "next/server";
import mysql from "mysql2/promise";

export async function GET() {
  try {
    const db = await mysql.createConnection({
      host: "127.0.0.1",
      port: 8889,
      user: "root",
      password: "root",
      database: "portfolio_db", // Змініть на вашу базу даних
    });

    const [rows] = await db.execute("SELECT * FROM templates");
    await db.end();

    return NextResponse.json(rows);
  } catch (err) {
    return NextResponse.json({
      error: "Не вдалося підключитися до БД",
      details: err,
    });
  }
}
