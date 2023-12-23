import React from "react";
import GridContainer from "../CommonComponents/GridContainer";
import GridItem from "../CommonComponents/GridItem";

export default function Home (){
    return(
        <div className ="Container" id="Home">
            <GridContainer>
                <GridItem xs={12} sm={12} md ={12} lg={12} style={{textAlign:'center'}} >
                    Home
                </GridItem>
            </GridContainer>
        </div>
    )
}