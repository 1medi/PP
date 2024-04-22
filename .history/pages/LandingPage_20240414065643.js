import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";

export default function Home() {
  const [data, setData] = useState([]);

  var apiKeyInfo = process.env.NEXT_PUBLIC_API_KEY; 
  var url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKeyInfo}`

  useEffect(()=> {
    fetch(url)
    .then((res) => res.json())
    .then((info) => {
      setData(info.articles);
      console.log(info.articles);
    })
  },[])

  return (
    <>
      <Head>
        <title>CLanding page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main}`}>
      
      </main>
    </>
  );
}