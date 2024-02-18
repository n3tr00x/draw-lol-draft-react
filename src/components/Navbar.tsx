import { Container, Nav, Stack } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import { openModal, openToast } from '../store/UI/uiSlice';
import { draw, saveDraft } from '../store/draw/drawSlice';

export function Navbar() {
	const drawnDraft = useSelector((state: RootState) => state.draw.drawnChampions);
	const dispatch = useDispatch<AppDispatch>();

	const openSavedDraftsModal = () => dispatch(openModal());
	const drawDraft = () => dispatch(draw());

	const saveDraftHandler = () => {
		dispatch(saveDraft(drawnDraft));
		dispatch(openToast());
	};

	return (
		<header className="bg-white shadow-sm p-4">
			<Container fluid="md">
				<Stack direction="horizontal" className="nav-container justify-content-center">
					<h1 className="text-uppercase text-center display-6 fs-2">
						Draw Your LoL Draft
					</h1>
					<nav className="nav justify-content-center bg-white fixed-bottom p-2 shadow-lg rounded-4">
						<Nav>
							<Nav.Link
								className="nav-button fw-bold text-uppercase"
								onClick={saveDraftHandler}
							>
								save
							</Nav.Link>
							<Nav.Link
								className="nav-button fw-bold text-uppercase"
								onClick={drawDraft}
							>
								draw
							</Nav.Link>
							<Nav.Link
								className="nav-button fw-bold text-uppercase"
								onClick={openSavedDraftsModal}
							>
								drafts
							</Nav.Link>
						</Nav>
					</nav>
				</Stack>
			</Container>
		</header>
	);
}
