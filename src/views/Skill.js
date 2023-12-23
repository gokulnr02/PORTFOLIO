import React from "react";
import GridContainer from "../CommonComponents/GridContainer";
import GridItem from "../CommonComponents/GridItem";

export default function Skill(){
    return(
        <div className ="Container" id="Skill">
            <GridContainer>
                <GridItem xs={12} sm={12} md ={12} lg={12} style={{textAlign:'center'}} >
                    Skill
                </GridItem>
            </GridContainer>
        </div>
    )
}