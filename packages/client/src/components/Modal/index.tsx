import UploadModal from './UploadModal';
import Modal from './Modal';

export interface Props {
	open: boolean;
	closeHandler: () => void;
}

export { Modal, UploadModal };
