import { Button, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import React from 'react'
import { makeStyles } from '@mui/styles'
import { categories } from '../../constants/data'
import { NavLink,Link } from 'react-router-dom'


const  usestyle=makeStyles({
table:{
    border:"1px solid rgba(224,224,224,1)"
}
})

const Categories = () => {
    const classes =usestyle()
 
    
    return (
        <>
        <Link to='/create' style={{textDecoration:"none"}}>

        <Button variant="contained" style={{margin:20}}>Create Post</Button>
        </Link>

            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell >
                        <NavLink to={'/'} style={{textDecoration:"none",color:"inherit"}}> 
                        All Categories
                        </NavLink>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    
                        {categories.map(category =>{
                            return(

                            <TableRow>
                            <TableCell>
                           <NavLink to={`/?category=${category}`} style={{textDecoration:"none",color:"inherit"}}> 
                            {category}
                            </NavLink>
                           
                            </TableCell>
                            </TableRow>
                            )
                        })}
                </TableBody>
            </Table>
        </>
    )
}

export default Categories
