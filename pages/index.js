import React, {Component, useState, useEffect } from 'react';
import axios from 'axios';
import { render } from 'react-dom';
import Link from "next/link";
import { useRouter } from 'next/router';
import styles from '../style/styles.module.css';

function Index({ itens }) {
    return(
    <div className={styles.container}>
        <div className={styles.BoxTitle}>
            <h1 className={styles.title}>Test NextJs + React + Vercel</h1>
        </div>
        <div className={styles.box}>
            <ul >
                {itens.map(registro =>(
                    <li className={styles.BoxProfile} key={registro.login.uuid}>
                        <img  className={styles.image} src={registro.picture.large}/>
                        <div className={styles.infoprofile}>
                            <h2 className={styles.name}>{registro.name.first} {registro.name.last}</h2>
                            <p className={styles.p}>{registro.email}</p>
                        </div>
                    </li>
                ))}

            </ul>
        </div>
        <style jsx global>
        { ` 
            body { 
                background-color: #485461;
background-image: linear-gradient(315deg, #485461 0%, #28313b 74%);
            } 
        `} 
        </style>  
    </div>
    )
}


Index.getInitialProps = async (context) =>{
    const response = await axios.get(
        'https://randomuser.me/api/?page=1&results=20'
    );

    return { itens: response.data.results}
};

export default Index