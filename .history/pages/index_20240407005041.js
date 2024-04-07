import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Carousel from "@/Components/Carousel";


export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main}`}>
        <Carousel />
        <Link href={'/Components'}>Components </Link>
        <Link href={'/LandingPage'}>LandingPage </Link>
        <Link href={'/Profile'}>Profile </Link>
        <Link href={'/QuizPage'}>Quiz</Link>
        <Link href={'/Settings'}>Settings</Link>
        <Link href={'/Subjects'}>Subjects</Link>
      </main>
    </>
  );
}
