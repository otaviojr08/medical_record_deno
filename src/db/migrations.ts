import db from "./database.ts";

// Criar tabelas no SQLite
db.exec(`
    CREATE TABLE IF NOT EXISTS Paciente (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT NOT NULL,
        data_nascimento TEXT NOT NULL,
        cpf TEXT UNIQUE NOT NULL
    );

    CREATE TABLE IF NOT EXISTS Medico (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT NOT NULL,
        especialidade TEXT NOT NULL,
        crm TEXT UNIQUE NOT NULL
    );

    CREATE TABLE IF NOT EXISTS Exame (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT NOT NULL,
        descricao TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS Prontuario (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        paciente_id INTEGER NOT NULL,
        medico_id INTEGER NOT NULL,
        exame_id INTEGER NOT NULL,
        data_atendimento TEXT NOT NULL,
        diagnostico TEXT,
        FOREIGN KEY (paciente_id) REFERENCES Paciente(id),
        FOREIGN KEY (medico_id) REFERENCES Medico(id),
        FOREIGN KEY (exame_id) REFERENCES Exame(id)
    );
`);

console.log("📌 Migrations executadas com sucesso!");
