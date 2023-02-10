import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Link from "../link/Link";
import styles from "./Test.module.scss";
import classNames from "classnames";
import Logo from "../logo/Logo"
import Header from "../header/Header"
import Avatar from "../avatar/Avatar"
import User from "../user/User"

export default function Test() {
  return (
    <div className={classNames(styles.wrapper)}>
      <User name="Gery" info="134 items" avatar='/images/avatar.png' verified='true' />
    </div>
  );
}
