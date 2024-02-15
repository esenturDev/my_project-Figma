import scss from './Button.module.scss';

export const Button = ({onClick, children}) => {
  return <button className={scss.buttons} onClick={onClick}>{children}</button>
}
