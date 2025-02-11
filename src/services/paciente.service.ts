// services/paciente.service.ts
import db from "../db/database.ts";
import { Paciente } from "../interfaces/Paciente.ts";

export class PacienteService {
  static createPaciente(paciente: Paciente) {
    try {
      const { nome, cpf, data_nascimento } = paciente;
      db.exec("INSERT INTO Paciente (nome, cpf, data_nascimento) VALUES (?,?,?)", nome, cpf, data_nascimento);
      return { id: db.lastInsertRowId, nome, cpf, data_nascimento };
    } catch (error) {
      throw new Error(`Failure in Insert operation - ${error}`);
    }
  }

  static getAllPacientes() {
    return db.prepare("SELECT * FROM Paciente").all();
  }

  static getPacienteById(id: string | number): Paciente | undefined {
    return db.prepare("SELECT * FROM Paciente WHERE id = ?").get(id);
  }

  static updatePaciente(paciente: Paciente) {
    let result = 0;
    const { id, nome, cpf, data_nascimento } = paciente;
    result = db.prepare("UPDATE Paciente SET nome = ?, cpf = ?, data_nascimento = ? WHERE id = ?")
      .run(nome, cpf, data_nascimento, id);
    
    return result > 0 ? { message: "Paciente atualizado com sucesso" } : { message: "Failure in update operation" };
  }

  static deletePaciente(id: string) {
    const result = db.prepare("DELETE FROM Paciente WHERE id = ?").run(id);
    return result > 0 ? { message: "Paciente removido com sucesso" } : { message: "Failure in deletion operation" };
  }
}
