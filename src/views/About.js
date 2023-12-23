import React from "react";
import GridContainer from "../CommonComponents/GridContainer";
import GridItem from "../CommonComponents/GridItem";

export default function About (){
    return(
        <div className ="Container" id="About">
            <GridContainer>
                <GridItem xs={12} sm={12} md ={12} lg={12} style={{textAlign:'center'}} >
                    About
                </GridItem>
            </GridContainer>
        </div>
    )
}