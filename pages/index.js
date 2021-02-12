import React, {Component, useState, useEffect } from 'react';
import axios from 'axios';


const Index = ({dados}) => (
    <div>
        <h1>Test NextJs + React + Vercel</h1> 
        {console.log(dados)}
        <ul>
            {dados.map(registro =>(
                <li key={registro.id}>
                    <h2>Name:{registro.name}</h2>
                    <p>Website:{registro.website}</p>
                </li>
            ))}
        </ul>
    </div>
);
   
Index.getInitialProps = async () =>{
    const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users/'
    );

    return { dados: response.data}
};



export default Index
