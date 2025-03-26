import React from "react";
import { GrandChild } from "./GrandChild";

export const Child = ({buttonProps, alertFunc}) => {
    // console.log(modify,trash);
    return (
        <div>
            {
                <GrandChild
                 buttonProps={buttonProps}
                 alertFunc={alertFunc}
                />
            }
        </div>
    )
}