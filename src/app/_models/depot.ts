import { User } from "./user";

export class Depot {

	id!: number;
	typeDepot?:string;
	etatDepot?:string;	
	dateDepot?:Date;
	etudiant?:User;
}
