import React from 'react'
import {TextField, Button} from '@mui/material';

function Input(){
    //Allow user to type in address, city name, state, and zipcode
    return (
        <>
            <h2>Insert your location here</h2>
            <TextField className="input" label="Address" variant="outlined"/>
            <TextField className="input" label="City" variant="outlined"/>
            <TextField className="input" label="State" variant="outlined"/>
            <TextField className="input" label="Zipcode" variant="outlined"/>
            <Button variant="contained">Get Weather Forecast</Button>
        </>

    );
    //Find latitude and longitude

}

export default Input;