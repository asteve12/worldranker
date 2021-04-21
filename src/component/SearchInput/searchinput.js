import styles from "../SearchInput/searchinput.module.css";
import SearchRounded from "@material-ui/icons/SearchRounded";

function Searchinput(props) {
  return (
    <div className={styles.wrapper}>
      <SearchRounded color="inherit"></SearchRounded>
      <input className={styles.input} {...props} />
    </div>
  );
}

export default Searchinput;
