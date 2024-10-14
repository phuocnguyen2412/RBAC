import { DataSource } from "typeorm";
import { Book } from "../book/book.entity";
import { Comment } from "../comment/comment.entity";
import { Permission } from "../feature/permissions.entity";
import { Role } from "../Role/role.entity";
import { User } from "../user/user.entity";

const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3309,
    username: "root",
    password: "root",
    database: "library_management",
    entities: [Book, Comment, Permission, Role, User],
    synchronize: false,
    logging: false,
});
export default AppDataSource;
