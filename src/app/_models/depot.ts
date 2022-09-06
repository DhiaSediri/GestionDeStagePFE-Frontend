import { User } from "./user";

export class Depot {

	id!: number;
	typeDepot?:string;
	etatDepot?:string;	
	toOrderDateDepot?: Date;
    toDisplayDateDepot?: string;
	etudiant?:User;
}
