import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Link from "../link/Link";
import styles from "./Test.module.scss";
import classNames from "classnames";
import Logo from "../logo/Logo"
import Header from "../header/Header"
import Avatar from "../avatar/Avatar"
import User from "../user/User"
import NftCard from "../card/Card"


const nft = {
  name: 'Clock',
  likes: 1100,
  mediaUrl: '/images/nft.jpg',
  user: {
    avatar: {
      url: '/images/avatar.png'
    },
    verified: true
  },
  price: '12.2',
  currency: 'ETH'
};

export default function Test() {
  return (
    <div className={classNames(styles.wrapper)}>
      <NftCard {...nft}/>
    </div>
  );
}
