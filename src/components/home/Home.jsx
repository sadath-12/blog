import React from 'react'
import { Grid } from '@mui/material'
import Categories from './Categories'
import Posts from './Posts'
import Banner from './Banner'

const Home = () => {
    return (
        <>
        <Banner/>
        <Grid container>
        <Grid item lg={2} sm={2} xs={12}>
 
        <Categories/>
        </Grid>
        <Grid container item lg={10} xs={12} sm={10}>
        <Posts/>
 
        </Grid>
 
        </Grid>
        </>
    )
}

export default Home

