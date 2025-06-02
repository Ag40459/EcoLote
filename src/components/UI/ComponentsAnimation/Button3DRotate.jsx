import styles from './Button3DRotate.module.css';

const Button3DRotate = ({ text = "Quero Fazer Parte", link = "#contact" }) => {
  return (
    <a href={link} className={styles['button-3d']}>
      <span>{text}</span>
      <span>{text}</span>
      <span>{text}</span>
      <span>{text}</span>
    </a>
  );
};

export default Button3DRotate;
