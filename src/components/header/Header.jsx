import React from "react";
import classNames from "classnames";
import styles from "./Header.module.scss";
import Grid from "@mui/material/Grid";
import Logo from '../logo/Logo'
import SearchIcon from '@mui/icons-material/Search'
import { ButtonBase, InputBase } from "@mui/material";
import Button from '@mui/material/Button'

export default function Header() {

    return (
            <Grid container justify={'space-between'} alignItems={"center"} className={classNames(styles.container)}>
                <Grid item xs={2}>
                    <Logo> </Logo>
                </Grid>
                <Grid item xs={6}  >
                    <div className={classNames(styles.searchContainer)}>
                        <SearchIcon />
                        <InputBase
                            placeholder="Find assets, users and activity..."
                            className={classNames(styles.searchField)}
                        />
                    </div>
                </Grid>
                <Grid item xs={4} columnGap={6} justify="flex-end" alignItems={'center'} className={classNames(styles.buttonContainer)}>
                        <ButtonBase variant="contained" color="primary" className={classNames(styles.buttonBase)}>Home</ButtonBase>
                        <ButtonBase variant="contained" color="primary" className={classNames(styles.buttonBase)}>Activity</ButtonBase>
                        <Button variant="contained" color="primary"  className={classNames(styles.button)} style={{ color: "white", fontSize: '16px' }}>EXPLORE</Button>
                </Grid>
            </Grid>
    )
}
