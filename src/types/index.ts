export type Roles = Readonly<['top', 'jungle', 'mid', 'adc', 'support']>;

export type Role = 'top' | 'jungle' | 'mid' | 'adc' | 'support';

export type Champion = {
	id: string;
	name: string;
	roles: Role[];
};

export type DrawnChampion = {
	championId: string;
	championName: string;
	role: Role;
};

export type SavedDraft = {
	id: number;
	draft: DrawnChampion[];
};
