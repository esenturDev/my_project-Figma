import scss from './Modal.module.scss';

const Modal = ({children}) => {
  return (
    <div className={scss.modal}>
      <div className={scss.modal2}>
        {children}
      </div>
    </div>
  )
}

export default Modal