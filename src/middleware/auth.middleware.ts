import { Request, Response, NextFunction, RequestHandler } from "express";
import jwt from "jsonwebtoken";

export const authenticateJWT: RequestHandler = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const token = req.header("Authorization")?.split(" ")[1];

    if (token) {
        const jwtDecoded = jwt.verify(token, "123");
        if (typeof jwtDecoded === "string") {
            res.sendStatus(401);
            return;
        }
        req.jwtDecoded = jwtDecoded;
        next();
    } else {
        res.sendStatus(401);
    }
};
