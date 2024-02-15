import { Container, Stack } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

export function DrawnChampions() {
	const drawnDraft = useSelector((state: RootState) => state.draw.drawnChampions);

	return (
		<Container as="main" fluid>
			<Stack direction="horizontal" className="mt-3">
				<ul>
					{drawnDraft.map(champion => (
						<li>{champion.championName}</li>
					))}
				</ul>
			</Stack>
		</Container>
	);
}
