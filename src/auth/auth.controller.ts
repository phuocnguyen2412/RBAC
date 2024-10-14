import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { getRepository } from "typeorm";
import AppDataSource from "../config/database.config";
import { User } from "../user/user.entity";

// Giả sử bạn có một entity User

export class AuthController {
    static async login(req: Request, res: Response) {
        const { username, password } = req.body;
        const userRepository = AppDataSource.getRepository(User);
        const user = await userRepository.findOne({
            where: { username, password },
        });

        if (!user) {
            res.status(401).send({ message: "Sai pass hoặc mật khẩu!" });
            return;
        }

        const token = jwt.sign({ userId: user.id, role: user.role }, "123", {
            expiresIn: "1h",
        });

        res.send({ accessToken: token });
    }
}
