import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { User } from "../user/user.entity";
import { Comment } from "../comment/comment.entity";


@Entity()
export class Book {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    title!: string;

    @Column()
    description!: string;

    @ManyToOne(() => User)
    author!: User;

    @OneToMany(() => Comment, (comment) => comment.book)
    comments!: Comment[];
}
