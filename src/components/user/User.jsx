import styles from "./User.module.scss";
import Avatar from "../avatar/Avatar"

export default function User ({ name = '', info = '', avatar = '', size = 55, verified = false }) {
    return (
      <div className={styles.user}>
        <Avatar url={avatar} size={size} verified={verified} />
        <div className={styles.infoContainer}>
            <p className={styles.name} style={{ fontSize: `1rem` }}>{name}</p>
            <p className={styles.info} style={{ fontSize: `0.75rem` }}>{info}</p>
        </div>
      </div>
    );
  };
  
