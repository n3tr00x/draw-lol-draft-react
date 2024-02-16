const DATA_DRAGON_URL = 'http://ddragon.leagueoflegends.com';

export const getDefaultChampionSplashArt = (championId: string) => {
	return `${DATA_DRAGON_URL}/cdn/img/champion/loading/${championId}_0.jpg`;
};
