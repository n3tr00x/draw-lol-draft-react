import { useEffect, useState } from 'react';
import { Container, Stack } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { Loader } from '../UI/Loader';
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
			<section className="d-flex justify-content-center mt-3">
				{!isImagesLoaded && <Loader />}
				<Stack
					direction="horizontal"
					className={`${
						isImagesLoaded ? 'd-flex' : 'd-none'
					} justify-content-center flex-wrap`}
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
