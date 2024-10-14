import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
export enum PermissionEnum {
    DELETE_COMMENT = "DELETE_COMMENT",
    WRITE_COMMENT = "WRITE_COMMENT",
    DELETE_BOOK = "DELETE_BOOK",
    CREATE_BOOK = "CREATE_BOOK",
    DELETE_BOOKS = "DELETE_BOOKS",
    EDIT_BOOK = "EDIT_BOOK",
}

@Entity()
export class Permission {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({
        unique: true,
        type: "enum",
        enum: PermissionEnum,
    })
    permission!: string;
}
