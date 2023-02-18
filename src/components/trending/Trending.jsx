import React from 'react';
import styles from './Trending.module.scss';
import classNames from "classnames";
import { Container, Grid, Select, MenuItem } from '@mui/material';
import NftCard from '../card/Card';

export default function Trending({cards=[]}) {

  return (
    <Container className={classNames(styles.container)} maxWidth="xl">
      <div className={classNames(styles.containerMenu)}>
      <h2 className={classNames(styles.heading)}>Trending</h2>
      <Select label="this week" placeholder='this week' className={classNames(styles.selectMenu)}><MenuItem>This week</MenuItem></Select>
      </div>
      <Container maxWidth="xl">
      <Grid container style={{width: '100%'}} justifyContent="space-between">
        {cards.map((card, index) => (
          <Grid item  xs={2} sm={6} md={3} key={index} columnGap={0}>
            <NftCard {...card} />
          </Grid>
        ))}
      </Grid>
      </Container>
    </Container>
  );
}
