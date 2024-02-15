import championsPoll from '../../data/champions.json';
import { Champion, DrawnChampion, Roles } from '../../types';

const ROLES: Roles = ['top', 'jungle', 'mid', 'adc', 'support'];

export const drawChampions = () => {
	const draft: DrawnChampion[] = [];
	let champions = championsPoll as Champion[];

	ROLES.forEach(role => {
		const matchedChampions = champions.filter(champion => champion.roles.includes(role));
		const randomNumber = Math.floor(Math.random() * matchedChampions.length);
		const drawnChampion = matchedChampions[randomNumber];

		draft.push({
			championId: drawnChampion.id,
			championName: drawnChampion.name,
			role: role,
		});

		champions = champions.filter(champion => champion.id !== drawnChampion.id);
	});

	return draft;
};
