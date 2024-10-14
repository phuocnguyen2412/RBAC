import { Entity, Column, OneToMany } from "typeorm";
import { PrimaryGeneratedColumn } from "typeorm";
import { UserRole, UserRoleEnum } from "./user.interface";
import { Book } from "../book/book.entity";
import { Comment } from "../comment/comment.entity";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({
        unique: true,
    })
    username!: string;

    @Column()
    password!: string;

    @Column({
        type: "enum",
        enum: UserRoleEnum,
    })
    role!: UserRole;

    @OneToMany(() => Book, (book) => book.author)
    books!: Book[];

    @OneToMany(() => Comment, (comment) => comment.user)
    comments!: Comment[];

    
}
