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
/*
const cards = [
   {
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
   }
];*/
/*
const cards=[{
   name: 'Clock',
   likes:1000000,
   mediaUrl: '/images/nft.jpg',
   user: {
     avatar: {
       url: '/images/avatar.png'
     },
     verified: true
   },
   price: '12.2',
   currency: 'ETH'
 }]
*/

const nft = {
  name: 'Clock',
  likes:1000000,
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

// <Trending cards={cardsInfo}/>
//      <NftCard {...nft}/>



