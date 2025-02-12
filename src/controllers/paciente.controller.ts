import { Router, Context } from "jsr:@oak/oak";
import { PacienteService } from "../services/paciente.service.ts";
import { Paciente } from "../interfaces/Paciente.ts";
import { renderFileToString } from "https://deno.land/x/dejs@0.10.3/mod.ts";

const router = new Router();
const basePathAPI = "/v1/pacientes";

// Renderizar tela de pacientes
router.get("/", async (ctx: Context) => {
  const pacientes = PacienteService.getAllPacientes();
  const html = await renderFileToString(`${Deno.cwd()}/src/views/index.ejs`, { pacientes });
  ctx.response.body = html;
  ctx.response.headers.set("Content-Type", "text/html");
});

// Cadastrar paciente
router.post(basePathAPI, async (ctx) => {
  const body = await ctx.request.body.json();
  ctx.response.status = 201;
  ctx.response.body = PacienteService.createPaciente(body);
});

// Buscar todos os pacientes
router.get(basePathAPI, (ctx) => {
  ctx.response.body = PacienteService.getAllPacientes();
});

// Obter um paciente por ID
router.get(`${basePathAPI}/:id`, (ctx) => {
  const id = ctx.params.id;
  ctx.response.body = PacienteService.getPacienteById(id);
});

// Atualizar paciente
router.put(`${basePathAPI}/:id`, async (ctx) => {
  const id = ctx.params.id;
  const { nome, cpf, data_nascimento } = await ctx.request.body.json();
  const paciente:Paciente = {id: +id, nome, cpf, data_nascimento};
  ctx.response.body = PacienteService.updatePaciente(paciente);
});

// Deletar pessoa
router.delete(`${basePathAPI}/:id`, (ctx) => {
  const id = ctx.params.id;
  ctx.response.body = PacienteService.deletePaciente(id);
});

export default router;
