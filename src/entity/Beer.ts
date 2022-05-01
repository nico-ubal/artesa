import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"


@Entity("Beer",{schema:'ArtesaDev'})
export class Beer{

    @PrimaryGeneratedColumn()
    Id:number

    @Column()
    Name:string

    @Column()
    Type:string

    @Column()
    Created_At:string;
}