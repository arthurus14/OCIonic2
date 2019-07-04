export class Pret{
	description:string;
	isOn:boolean;
	emprunteur:string;

	constructor(public name:string){
		this.isOn = false;
		this.emprunteur = "";
	}
}
