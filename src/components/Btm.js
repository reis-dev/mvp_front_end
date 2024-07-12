import styles from "./Btm.module.css";

const Btm = (props) => {
  const { children } = props;
  return (
    <button {...props} className={styles.btn}>
      <span>{children}</span>
    </button>
  );
};

export default Btm;
