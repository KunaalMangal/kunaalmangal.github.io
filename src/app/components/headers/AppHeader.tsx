import React from "react";
import { AppHeaderNavBar } from "..";

export const AppHeader = (props: any) => {    
    return(
        <div className={props.className}>
        <AppHeaderNavBar/>
        </div>
    )
}