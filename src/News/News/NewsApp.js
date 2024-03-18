import React, { useEffect, useRef, useState } from 'react'
import News from './News';
import './NewsApp.css';
import { styled, Button } from "@mui/material";

const Butt = styled(Button)`
  display: block;
  width:20%;
  margin-inline: auto;
  padding-block: 8px;
  background-color: black;
  color: white !important;
  margin-bottom : 20px;
  border-radius: 10px;
  cursor: pointer;
`;

function NewsApp() {
   
    const apikey = '36f8fe0a02774387a90bd4d05f1959e2';
    const [newsList, setNewsList] = useState([]);
    const [query, setQuery] = useState('tesla');
    const apiUrl = `https://newsapi.org/v2/everything?q=${query}&from=2024-02-18&sortBy=publishedAt&apiKey=${apikey}`;

    const queryInputRef = useRef(null);

    useEffect(() => {
        fetchData();
    }, [query]);

    async function fetchData() {
        try {
            
            console.log('fetch')
            const response = await fetch(apiUrl);
            const jsonData = await response.json();
           
            setNewsList(jsonData.articles);

        } catch (e) {
            console.log(e, "error occured");
        }
    }


    function handleSubmit(event) {
        event.preventDefault();
        const queryValue = queryInputRef.current.value;
        setQuery(queryValue);
    }


    return (
        <div className="container">
            <h1 style={{fontFamily:'monospace', fontSize:"3rem", textAlign:"center", marginBottom:'20px'}}>News Daily</h1>

            <form onSubmit={handleSubmit}>
                <input className="query-input" type="text" ref={queryInputRef} placeholder='Search here' />
                <Butt variant="contained"onClick={handleSubmit}>Submit</Butt>

            </form>

            <div>
                {newsList.map((news) => {
                    return <News key={news.url} news={news} />
                })}
            </div>
        </div>
    );
}

export default NewsApp;