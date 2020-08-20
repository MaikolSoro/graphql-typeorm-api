import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity()
 export class Product {

	@PrimaryGeneratedColumn()
	id!: number;

	@Column()
	name: string;

	@Column("int", {default: 0})
	quantity!: number;

	@CreateDateColumn({type: 'timestamp'})
	createdAt!: string;
}