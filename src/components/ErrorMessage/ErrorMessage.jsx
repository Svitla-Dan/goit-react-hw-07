import style from './ErrorMessage.module.css';

export default function ErrorMessage({ children }) {
  return <div className={style.errorMessage}>{children}</div>;
}
