import { Request, Response, NextFunction, RequestHandler } from "express";
import AppDataSource from "../config/database.config";
import { Role } from "../Role/role.entity";

export function checkPermission(allowedPermissions: string[]) {
    return async (req: Request, res: Response, next: NextFunction) => {
        if (!req.jwtDecoded) {
            res.status(401).json({ message: "Unauthorized" });
            return;
        }
        const { role } = req.jwtDecoded;
        const permissions = await AppDataSource.getRepository(Role).findOne({
            where: {
                name: role,
            },
        });
        allowedPermissions.forEach((allowedPermission) => {
            if (
                !role ||
                !permissions?.permissions.some(
                    (permission) => permission.permission === allowedPermission
                )
            ) {
                res.status(403).json({ message: "Forbidden" });
            }
        });

        next();
    };
}
