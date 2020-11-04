import React from "react";
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export const Contact = ({formData, setForm, navigation }) =>{
    const {phone, email}= formData;

    return (
        <Container maxWidth='xs'>
            <h1>Contact</h1>

            <TextField label="Phone" name = 'phone' value={phone}  onChange={setForm}
                       margin='normal' variant='outlined' autoComplete='off' fullWidth/>
            <TextField label="Email" name = 'email' value={email}  onChange={setForm}
                       margin='normal' variant='outlined' autoComplete='off' fullWidth/>
            <div style={{marginTop: "1rem"}}>
                <Button style={{marginRight: "1rem"}} variant="contained" color="secondary"  onClick = {()=> navigation.previous()}>Back</Button>
                <Button variant="contained" color="primary"  onClick = {()=> navigation.next()}>Next</Button>

            </div>

        </Container>
    )
};