export interface Character {
	id?: string;
	about: string;
	info: {
		name: string;
		level: string;
		image: string;
		clan: string;
	};
}

export interface Clan {
	name: string;
}

export interface Classe {
	name: string;
}
