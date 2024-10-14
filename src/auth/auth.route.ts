import { Application, Router } from "express";
import { AuthController } from "./auth.controller";

const authRoute = Router();

authRoute.post("/login", AuthController.login);

export default authRoute;
