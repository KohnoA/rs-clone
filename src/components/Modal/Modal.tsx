import styles from './Modal.module.scss';

interface IModalProps {
  title: string,
  children: React.ReactNode,
  closeModal: () => void
}

const Modal: React.FC<IModalProps> = ({ title, children, closeModal }: IModalProps) => {
  return (
    <>
      <div className={ styles.modal }>
        <span className={ styles.modal__close } onClick={ closeModal }></span>

        <h3 className={ styles.modal__title }>{ title }</h3>
        
        { children }
      </div>

      <div className={ styles.overlay } onClick={ closeModal } />
    </>
  );
}

export default Modal;