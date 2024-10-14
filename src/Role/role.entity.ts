import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../user/user.entity";
import { Permission } from "../feature/permissions.entity";
import { UserRoleEnum } from "../user/user.interface";

@Entity()
export class Role {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({
        unique: true,
        enum: UserRoleEnum
    })
    name!: string;

    @OneToMany(() => User, (user) => user.role)
    user!: User[];

    @OneToMany(() => Permission, (permission) => permission.permission)
    permissions!: Permission[];
}
