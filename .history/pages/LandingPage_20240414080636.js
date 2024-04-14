import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import axios from 'axios'
import {useState, useEffect} from "react";

export default function LandingPage() {
  const [data, setData] = useState([]);

  var type= 'guitar'
  var sortBy= 'publishedAt'
  var apiKey = process.env.NEXT_PUBLIC_API_KEY; 
  
  const url = `https://newsapi.org/v2/everything?q=${type}&from={2024-02-01}&sortBy=${sortBy}&apiKey=${apiKey}`;

  const GrabNews = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(url);
      console.clear();
      setData(response.data.articles); // Ensure you are setting the articles array
      console.log(response.data.articles);
    } catch (err) {
      console.error(err);
      setError('Failed to fetch data');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    GrabNews(); // Fetch news on component mount
  }, []);

  return (
    <>
      <Head>
        <title>Landing page</title>
        <meta name="description" content="On-boarding Process" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main}`}>
      <button onClick={GrabNews} disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Grab Info'}
        </button>
        {error && <p>{error}</p>}
        {data.map((article, index) => (
          <div key={index}>
            <p>Author: {article.author}</p>
            <p>Title: {article.title}</p>
            <p>Content: {article.content}</p>
            <p>URL: <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a></p>
          </div>
        ))}
      </main>
    </>
  );
}
