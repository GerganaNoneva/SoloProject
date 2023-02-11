import React from 'react';
import { Container, Grid, Select, Typography } from '@mui/material';
import Card from '../card/Card';

export default function Trending ({ cards = [] }) {
  return (
    <Container maxWidth="md">
      <Typography variant="h5" align="center">Trending</Typography>
      <Select />
      <Grid container spacing={2}>
        {cards.map(card => (
          <Grid item xs={3} key={card.name}>
            <Card card={card} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

