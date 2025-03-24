import axios from 'axios';
import React, {useState } from 'react';

const Fetch = () => {
    const [data, setData] = useState([]);
    const api = 'https://jsonplaceholder.typicode.com/posts'

    const getData = () => {
        axios.get(api)
        .then((response)=> {
            console.log(response.data)
            setData(response.data)
        })
        .catch(err=>{
            console.log(err);
        })
    }

    return (
        <>
            <div>Fetch</div>
            <button onClick={getData}>Get Information</button>
    {
        data.map((data, i) => {
            <div key={data.id}>
                <p>{i+1}</p>
                <p>{data.name}</p>
                <p>{data.email}</p>
                <p>{data.address.street}</p>
            </div>
        })
    }
        </>
    )
}

export default Fetch