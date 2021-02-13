import React, {Component, useState, useEffect } from 'react';
import axios from 'axios';
import { render } from 'react-dom';
import Link from "next/link";
import { useRouter } from 'next/router'


function Index({ itens, page }) {
    return(
        <div>
            <h1>Test NextJs + React + Vercel</h1>
            <div>Page: {page}</div>
            <Link href={{ pathname: '/index/[slug]', query: { slug: '2' }, }} >aa</Link>
            <ul>
                {itens.map(registro =>(
                    <li className="container" key={registro.id}>
                        <h2>{registro.name.first} {registro.name.last}</h2>
                        <p >{registro.email}</p>
                        <img src={registro.picture.large}/>
                    </li>
                ))}
            </ul>
            <style jsx>{`
            .container {
            margin: 30px;
            float:left;
            }
            p {
            color: blue;
            }
        `}</style>
        </div>
    )
}


Index.getInitialProps = async ({ query: { page } }) =>{
    console.log("Server->"+page)
    const response = await axios.get(
        `https://randomuser.me/api/?page=${page}&results=10`
    );
    return { itens: response.data.results, page}
};

export default Index