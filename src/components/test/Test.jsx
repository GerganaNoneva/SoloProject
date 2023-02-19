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
import Trending from "../trending/Trending"

const nftCards=[ {
   "name":"Ivy",
   "user":{
      "avatar":{
         "url":"images/avatar.png"
      },
      "verified":true
   },
   "mediaUrl":"images/nft.jpg",
   "price":1,
   "currency":"ETH"
},
{
   "name":"Judie",
   "user":{
      "avatar":{
         "url":"images/avatar.png"
      },
      "verified":true
   },
   "mediaUrl":"images/nft.jpg",
   "price":2.3,
   "currency":"ETH"
},
{
   "name":"Juniper",
   "user":{
      "avatar":{
         "url":"images/avatar.png"
      },
      "verified":true
   },
   "mediaUrl":"images/nft.jpg",
   "price":5,
   "currency":"ETH"
},
{
   "name":"Maple",
   "user":{
      "avatar":{
         "url":"images/avatar.png"
      },
      "verified":true
   },
   "mediaUrl":"images/nft.jpg",
   "price":10,
   "currency":"ETH"
}];

const card= {
   "name":"Ivy",
   "user":{
      "avatar":{
         "url":"images/avatar.png"
      },
      "verified":true
   },
   "mediaUrl":"images/nft.jpg",
   "price":1,
   "currency":"ETH",
   "timeLeft":100000
}

export default function Test() {
  return (
    <div className={classNames(styles.wrapper)}>
      <NftCard  {...card}/>
    </div>
  );
}

//
//      <NftCard {...nft}/>
// <Trending cards={nftCards}/>
//
//     <User name="terika77" info="125 items" avatar='images/avatar.png' verified='true'/>

