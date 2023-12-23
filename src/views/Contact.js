import React from "react";
import GridContainer from "../CommonComponents/GridContainer";
import GridItem from "../CommonComponents/GridItem";

export default function Contact(){
    return(
        <div className ="Container" id="Contact">
            <GridContainer>
                <GridItem xs={12} sm={12} md ={12} lg={12} style={{textAlign:'center'}} >
                    Contact
                </GridItem>
            </GridContainer>
        </div>
    )
}