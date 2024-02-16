import { Container, Stack } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { useEffect, useState } from 'react';
import { Champion } from './Champion';

export function DrawnChampions() {
	const [amountLoadedImages, setAmountLoadedImages] = useState(0);
	const drawnDraft = useSelector((state: RootState) => state.draw.drawnChampions);

	useEffect(() => {
		setAmountLoadedImages(0);
	}, [drawnDraft]);

	const handleAmountLoadedImages = () => {
		setAmountLoadedImages(prevAmount => prevAmount + 1);
	};

	const isImagesLoaded = amountLoadedImages === drawnDraft.length;

	return (
		<Container as="main" fluid>
			<section>
				<Stack
					direction="horizontal"
					className={`${
						isImagesLoaded ? 'd-flex' : 'd-none'
					} justify-content-center flex-wrap mt-3`}
				>
					{drawnDraft.map(({ championId, championName, role }) => (
						<Champion
							key={championId}
							id={championId}
							name={championName}
							role={role}
							onImageLoad={handleAmountLoadedImages}
						/>
					))}
				</Stack>
			</section>
		</Container>
	);
}
