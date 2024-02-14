import { Container, Nav, Stack } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store';
import { openModal } from '../store/UI/uiSlice';

export function Navbar() {
	const dispatch = useDispatch<AppDispatch>();

	const openSavedDraftsModal = () => dispatch(openModal());

	return (
		<header className="bg-white shadow-sm p-4">
			<Container fluid="md">
				<Stack direction="horizontal" className="nav-container justify-content-center">
					<h1 className="text-uppercase text-center display-6 fs-2">
						Draw Your LoL Draft
					</h1>
					<nav className="nav justify-content-center bg-white fixed-bottom p-2 shadow-lg rounded-4">
						<Nav>
							<Nav.Link className="nav-button fw-bold text-uppercase">save</Nav.Link>
							<Nav.Link className="nav-button fw-bold text-uppercase">draw</Nav.Link>
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
