import styles from './Modal.module.scss';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { closeModal } from '../../store/slices/modalSlice';
import { ModalContent } from '../../constants/constants';

interface IModalProps {
  title?: string | ModalContent | null,
  children: React.ReactNode,
}

const Modal: React.FC<IModalProps> = ({ title, children }: IModalProps) => {
  const dispatch = useAppDispatch();

  return (
    <>
      <div className={ styles.modal }>
        <span className={ styles.modal__close } onClick={ () => dispatch(closeModal()) }></span>

        { title && <h3 className={ styles.modal__title }>{ title }</h3> }
        
        { children }
      </div>

      <div className={ styles.overlay } onClick={ () => dispatch(closeModal()) } />
    </>
  );
}

export default Modal;