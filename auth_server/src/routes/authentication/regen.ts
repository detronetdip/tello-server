import { Router } from "express";
import { handelRegeneration } from "../../controllers/regenerate";
import { validateRegenerateRequest } from "../../middleware/validateRegeneration";

const route = Router();
route.get("/api/v1/regen", validateRegenerateRequest, handelRegeneration);
export default route;
