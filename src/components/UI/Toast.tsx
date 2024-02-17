import { Toast as ToastBootstrap, ToastContainer } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { closeToast } from '../../store/UI/uiSlice';

type ToastProps = {
	message: string;
	variant: 'success' | 'danger';
};

export function Toast({ message, variant }: ToastProps) {
	const isToastOpen = useSelector((state: RootState) => state.ui.isToastOpens);
	const dispatch = useDispatch<AppDispatch>();

	return (
		<ToastContainer position="top-center" className="p-4 fixed-top">
			<ToastBootstrap
				bg={variant === 'success' ? 'success' : variant === 'danger' ? 'danger' : 'primary'}
				show={isToastOpen}
				onClose={() => dispatch(closeToast())}
				autohide
				delay={2000}
			>
				<ToastBootstrap.Header>
					<strong>Draw Your LoL Draft</strong>
				</ToastBootstrap.Header>
				<ToastBootstrap.Body className="text-white">{message}</ToastBootstrap.Body>
			</ToastBootstrap>
		</ToastContainer>
	);
}
