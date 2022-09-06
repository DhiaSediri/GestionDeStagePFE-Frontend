import { Depot } from "./depot";
import { User } from "./user";

export class Commentaire {

    id!: number;
	contenu?: string;
    toOrderDateCommentaire?: Date;
    toDisplayDateCommentaire?: string;
    commentateur?: User
}
