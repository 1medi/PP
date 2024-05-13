import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Courses.module.css";
import { Montserrat } from "next/font/google";
import Oscar from "@/Components/Oscar"
import Button3 from "@/Components/Buttons/Button3";
import Images from "@/Components/images";
import Header from "@/Components/Header";
import NavBar from "@/Components/Navbar";
import Link from "next/link";
import Circles from "@/Components/Shapes/Circles";
const montserrat = Montserrat({ subsets: ['latin'] })
export default function Home() {

  return (
    <>
      <Head>
        <title>Goals</title>
        <meta name="description" content="Displays goal adding" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.mobileContainer}>
      <Circles title="Ask" />
        <main className={`${styles.main} ${montserrat.className}`}>

          <Oscar />
          <div className={styles.textContainer}>
            <h1 className={styles.header}>Huzzah!</h1>
            <p className={styles.body}>Your subject and goals have been added to your account!</p>
            <hr className={styles.lineBreak} />
            <p className={styles.body}>You can track your goals, progress,
              and resources for this subject
              from your profile.</p>
          </div>
          <div className={styles.buttonContainer}>
            <Link
            href={'/SuccessDashboard/SuccessDashboard'}
            >
          <Button3
          name={"Track"}
          />              
            </Link>
         
          </div>
          <NavBar />
        </main>
      </div>

    </>
  );
}
