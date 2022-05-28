import styles from "./Loading.module.css";
import spinner from "../images/rotate-solid.svg";

const Loading = () => (
  <img src={spinner} alt="Loading indicator" className={styles.spinner} />
);

export default Loading;
