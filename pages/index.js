import React, {Component, useState, useEffect } from 'react';
import axios from 'axios';
import { render } from 'react-dom';
import Link from "next/link";
import { useRouter } from 'next/router'


function Index({ itens }) {
    return(
        <div className="container">
        <h1>Test NextJs + React + Vercel</h1>
        <ul className="container">
            
            {itens.map(registro =>(
                <li className="BoxProfile" key={registro.login.uuid}>
                    <img  className="image" src={registro.picture.large}/>
                    <h2>{registro.name.first} {registro.name.last}</h2>
                    <p >{registro.email}</p>
                </li>
            ))}
            
        </ul>
        <style jsx>{`
        .container {
          text-align:center;
        }
        .BoxProfile {
            margin: 30px;
            float:left;
            text-align:center;
            list-style-type: none; 
          }
        .image {
            border-radius:100px;
            border: 1px solid #ff3131;
          }
        p {
          color: blue;
        }
      `}</style>
    </div>
    )
}


Index.getInitialProps = async (context) =>{
    const response = await axios.get(
        'https://randomuser.me/api/?page=1&results=10'
    );

    return { itens: response.data.results}
};

export default Index