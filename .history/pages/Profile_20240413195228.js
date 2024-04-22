import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Settings.module.css";
import NavBar from "@/Components/Navbar";
import { Montserrat } from "next/font/google"
import Image1 from "@/public/img/nature-4964153_1920.jpg"
import Chart from "@/public/img/chart.png"
import Profile from "@/public/img/user.png"
import Settings from "@/public/img/settings.png"

const montserrat = Montserrat({ 
  subsets: ['latin'],
});
export default function Home() {

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${montserrat.main}`}>
        <div className={styles.container}>
            <div className={styles.imageContainer}>
              <Image
              src={Image1}
              width={275}
              height={275}
              />
            </div>
            <h2 className={styles.name}>Name</h2>
            <h3 className={styles.quote}>"Banana"</h3>
            <h4 className={styles.student}>Student Level: NOOB</h4>
            <div className={styles.optionsContainer}>
              <div className={styles.successContainer}>
              <Image
              className={styles.image}
              src={Chart}
              width={48}
              height={48}
              />
                <h4 className={styles.successText}>Success Dashboard</h4>
              </div>
              <hr className={styles.shape}/>
              <div className={styles.accountContainer}>
              <Image
              src={Profile}
              className={styles.image}
              width={48}
              height={48}
              />
              <h4 className={styles.successText}>Account Settings</h4>
              </div>
              <hr className={styles.shape}/>
              <div className={styles.appContainer}>
              <Image
              src={Settings}
              className={styles.image}
              width={48}
              height={48}
              />
              <h4 className={styles.successText}>App Settings</h4>
              </div>
              <hr className={styles.shape}/>
            </div>
        </div>
      </main>
      <NavBar/>
    </>
  );
}