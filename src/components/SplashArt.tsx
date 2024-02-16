type SplashArtProps = {
	url: string;
	championName: string;
	onLoad?: () => void;
};

export function SplashArt({ url, championName, onLoad }: SplashArtProps) {
	return (
		<img src={url} alt={`${championName} splash art.`} className="splash-art" onLoad={onLoad} />
	);
}
