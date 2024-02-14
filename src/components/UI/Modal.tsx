import { ReactNode } from 'react';
import { Button, Modal as ModalBootstrap } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { closeModal } from '../../store/UI/uiSlice';

type ModalProps = {
	children: ReactNode;
	title: string;
};

export function Modal({ children, title }: ModalProps) {
	const isModalOpens = useSelector((state: RootState) => state.ui.isModalOpens);

	const dispatch = useDispatch<AppDispatch>();

	const closeModalHandler = () => dispatch(closeModal());

	return (
		<ModalBootstrap show={isModalOpens} onHide={closeModalHandler} className="modal-lg">
			<ModalBootstrap.Header className="justify-content-center" closeButton>
				<ModalBootstrap.Title className="fs-2">{title}</ModalBootstrap.Title>
			</ModalBootstrap.Header>
			<ModalBootstrap.Body>{children}</ModalBootstrap.Body>
			<ModalBootstrap.Footer>
				<Button variant="danger" onClick={closeModalHandler}>
					Close
				</Button>
			</ModalBootstrap.Footer>
		</ModalBootstrap>
	);
}
