import { Router } from "jsr:@oak/oak";
import pacienteRoutes from "../controllers/paciente.controller.ts";

const router = new Router();
router.use(pacienteRoutes.routes());

export default router;
