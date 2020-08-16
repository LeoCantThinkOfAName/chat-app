import UploadModal from './UploadModal';
import Modal from './Modal';

export interface Props {
	open: boolean;
	closeHandler: React.Dispatch<React.SetStateAction<boolean>>;
}

export { Modal, UploadModal };
