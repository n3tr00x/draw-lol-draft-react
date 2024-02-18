import { DrawnChampion } from '../../types';
import { getDefaultChampionSplashArt } from '../../utilities/getDefaultChampionSplashArt';
import { SplashArt } from '../SplashArt';

type SavedDraftChampionProps = DrawnChampion;

export function SavedDraftChampion({ championId, championName, role }: SavedDraftChampionProps) {
	const splashArtUrl = getDefaultChampionSplashArt(championId);

	return (
		<figure>
			<figcaption className="text-uppercase text-center">{role}</figcaption>
			<SplashArt url={splashArtUrl} championName={championName} />
		</figure>
	);
}
