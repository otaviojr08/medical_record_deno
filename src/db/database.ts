import { Database } from "jsr:@db/sqlite";

// Conectar ao banco SQLite
const db = new Database("medical_record.db");

// Exportar a instância do banco
export default db;
