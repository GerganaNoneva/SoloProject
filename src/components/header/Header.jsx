import React from "react";
import classNames from "classnames";
import styles from "./Header.module.scss";
import Grid from "@mui/material/Grid";
import Logo from '../logo/Logo'
import SearchIcon from '@mui/icons-material/Search'
import { ButtonBase, InputBase } from "@mui/material";
import Button from '@mui/material/Button'
import { makeStyles } from '@material-ui/core/styles';


const useStyles1 = makeStyles({
  fontFamily1: {
    fontFamily: `Montserrat', sans-serif`,
    src: `url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap') format('truetype')`,
    fontSize: '14px',
    fontWeight: '600',
  },
});

const useStyles2 = makeStyles({
    fontFamily2: {
      fontFamily: `Laca', sans-serif`,
      src: `url('../../fonts/laca-cufonfonts-webfont/Laca Bold.woff') format('truetype')`,
      fontSize: '16px',
      fontWeight: '700',
    },
  });
  const useStyles3 = makeStyles({
    input: {
      fontFamily: 'Montserrat',
      fontWeight: '400',
      fontStyle: 'normal',
      width: '100%',
      src: `url('../../fonts/Montserrat/static/Montserrat-Regular.ttf') format('truetype')`,
      '&::placeholder': {
        fontFamily: 'YourCustomFont',
        fontSize: '16px',
        color: '#E1E1FC',
      },
    },
  });

  const useStyles4 = makeStyles((theme) => ({
    container: {
      justifyContent: 'space-between',
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        maxWidth: theme.breakpoints.values.sm,
      },
      [theme.breakpoints.up('md')]: {
        maxWidth: theme.breakpoints.values.md,
      },
      [theme.breakpoints.up('lg')]: {
        maxWidth: theme.breakpoints.values.lg,
      },
      [theme.breakpoints.up('xl')]: {
        maxWidth: theme.breakpoints.values.xl,
      },
    },
  }));


export default function Header() {

    const classes1 = useStyles1();
    const classes2 = useStyles2();
    const classes3 = useStyles3();
    const classes4 = useStyles4();


    return (
            <Grid container justify={'space-between'} alignItems={"center"} className={classes4.container} style={{background:'#181828'}}>
                <Grid item xs={2}>
                    <Logo> </Logo>
                </Grid>
                <Grid item xs={6}  >
                    <div className={classNames(styles.searchField)}>
                        <SearchIcon />
                        <InputBase
                            placeholder="Find assets, users and activity..."
                            className={classes3.input}
                        />
                    </div>
                </Grid>
                <Grid item xs={4} columnGap={6} justify="flex-end" alignItems={'center'} className={classNames(styles.buttonContainer)}>
                        <ButtonBase variant="contained" color="primary" className={classes1.fontFamily1}>Home</ButtonBase>
                        <ButtonBase variant="contained" color="primary" className={classes1.fontFamily1}>Activity</ButtonBase>
                        <Button variant="contained" color="primary"  className={classes2.fontFamily2} style={{ color: "white", fontSize: '16px' }}>EXPLORE</Button>
                </Grid>
            </Grid>
    )
}
