import React from 'react'
import TextField from '@mui/material/TextField';

function Input(){
    //Allow user to type in address, city name, state, and zipcode
    return (
        <>
            <TextField id="address-label" label="Address" variant="outlined"/>
            <TextField id="city-label" label="City" variant="outlined"/>
            <TextField id="state-label" label="State" variant="outlined"/>
            <TextField id="zipcode-label" label="Zipcode" variant="outlined"/>
        </>

    );
    //Find latitude and longitude

}

export default Input;