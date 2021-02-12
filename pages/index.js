import React, {Component, useState, useEffect } from 'react';
import axios from 'axios';


const Index = ({dados}) => (
    <div>
        <h1>Test NextJs + React + Vercel</h1> 
        {console.log(dados)}
        <ul>
            {dados.data.map(registro =>(
                <li  key={registro.id}>
                    <h2>Name:{registro.first_name}</h2>
                    <p>Email:{registro.email}</p>
                    <img src={registro.avatar}/>
                </li>
            ))}
        </ul>
    </div>
);
   
Index.getInitialProps = async () =>{
    const response = await axios.get(
        'https://reqres.in/api/users?per_page=20'
    );

    return { dados: response.data}
};



export default Index
