import React from "react"
export const GrandChild = ({buttonProps, alertFunc}) => { 
    return (
        <div>
            <button style={{ color:buttonProps.color, backgroundColor: buttonProps.backgroundColor, width: buttonProps.width}}
                onClick={()=>{alertFunc(buttonProps.name)}}
            >
                {buttonProps.name}
            </button>
        </div>
    )
}