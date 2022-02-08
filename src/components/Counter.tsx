import { Button, Grid, Typography } from "@mui/material"
import { useState } from "react"

const Counter = () => {
    const [state, setState] = useState(0)

    const increment = () => setState(state => state + 1)
    const decrement = () => setState(state => state - 1)

    return (
        <Grid container
            justifyContent="center"
            alignItems="center"
            sx={{ height: "100%" }}>
            <Grid container>
                <Grid item xs={12} spacing={2}>
                    <Typography textAlign="center">{state < 0 ? "Number is negative" : state}</Typography>
                </Grid>
                <Grid container xs={12} justifyContent="center" spacing={2}>
                    <Grid item>
                        <Button variant="contained" onClick={increment}>Increment</Button>
                    </Grid>
                    <Grid item>
                        <Button variant="contained" onClick={decrement}>Decrement</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Counter