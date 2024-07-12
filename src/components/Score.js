import styles from "./Score.module.css";

const Score = ({ children }) => {
  return (
    <h3 className={styles.score}>
      Pontuação: <span>{children}</span>
    </h3>
  );
};

export default Score;
