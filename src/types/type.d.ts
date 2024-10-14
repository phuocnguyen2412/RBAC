import { JwtPayload } from "jsonwebtoken";
import { Role } from "./Role/role.entity";

declare global {
    namespace Express {
        interface Request {
            jwtDecoded?: {
                userId: number;
                role: Role;
            } | JwtPayload;
        }
    }
}
