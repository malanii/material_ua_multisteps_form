import React from "react";
import Container from '@material-ui/core/Container';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button'

export const Review = ({formData,navigation}) => {
    const {go}=navigation;
    const {
        firstName,
        lastName,
        nickName,
        address,
        city,
        zip,
        country,
        phone,
        email
    } = formData;
    return (
        <Container maxWidth="sm">
            <h1>Review</h1>
            <RenderAccordion summery='Names' go={go} details={[{'First Name': firstName}, {'Last Name': lastName}, {'Nick Name': nickName}]}/>
            <RenderAccordion summery='Address' go={go} details={[{Address: address}, {City: city}, {Zip: zip},{Country: country}]}/>
            <RenderAccordion summery='Contact' go={go} details={[{Phone: phone}, {Email: email}]}/>
            <Button variant="contained" onClick = {()=> go('submit') } color="primary" style={{marginTop: "1rem"}}>Submit</Button>

        </Container>
    )
};

export const RenderAccordion = ({summery, details,go}) => {
    return (
        <Accordion>
            <AccordionSummary expandIcon = {<ExpandMoreIcon />}>{summery}</AccordionSummary>
            <AccordionDetails>
                <div>
                    {
                        details.map((data, index) => {
                            const objKey = Object.keys(data)[0];
                            const objValue = data[Object.keys(data)[0]];

                            return <ListItemText key={index}>{`${objKey}: ${objValue}`}</ListItemText>



                        })

                    }
                    <IconButton color='primary' component='span' onClick = {()=> go(`${summery.toLowerCase()}`)}>
                        <EditIcon></EditIcon>
                    </IconButton>
                </div>
            </AccordionDetails>
        </Accordion>
    )

};