import { Role } from '../../types';
import { getDefaultChampionSplashArt } from '../../utilities/getDefaultChampionSplashArt';
import { SplashArt } from '../SplashArt';

type ChampionProps = {
	id: string;
	role: Role;
	name: string;
	onImageLoad: () => void;
};

export function Champion({ id, role, name, onImageLoad }: ChampionProps) {
	const splashArtUrl = getDefaultChampionSplashArt(id);

	return (
		<figure>
			<figcaption className="fs-5 fw-bold text-center text-uppercase">{role}</figcaption>
			<SplashArt url={splashArtUrl} championName={name} onLoad={onImageLoad} />
			<figcaption className="fs-5 fst-italic text-center">{name}</figcaption>
		</figure>
	);
}
