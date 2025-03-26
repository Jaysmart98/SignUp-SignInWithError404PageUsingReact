import React, {useState} from "react";
import { Child } from "./Child";

export const Parent = () => {
    const [edit, setEdit] = useState({
        name : "Edit",
        color : "Blue"
});
    const [trash, setTrash] = useState(
        {
            name : "Trash",
            color : "Red"
        }
    );
    const [add, setAdd] = useState(
        {
            name : "Add",
            color : "Green"
        }
    );

    const [submit, setSubmit] = useState(
        {
            name : "Submit",
            color : "darkblue",
            backgroundColor : "lightblue"
        }
    );

    const Alat = (buttonName) => {
        alert(buttonName)
    }


    return (
        <div>
            <Child
                buttonProps={edit}
                alertFunc={Alat}
            />

            <Child
                buttonProps={trash}
                alertFunc={Alat}
            />

            <Child
               buttonProps={add}
               alertFunc={Alat}
            />

            <Child
             buttonProps={submit}
             alertFunc={Alat}
            />
        </div>
    )

};