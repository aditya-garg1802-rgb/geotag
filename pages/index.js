import Head from "next/head";
import styles from "@/styles/Home.module.css";
import React from "react";
import dynamic from "next/dynamic";
import Register from "@/components/form";
import { useState,useEffect } from "react";

export default function Home() {
  //render map
  const Map = React.useMemo(
    () =>
      dynamic(
        () => import("../components/map"), // replace '@components/map' with your component's location
        {
          loading: () => <p>A map is loading</p>,
          ssr: false, // This line is important. It's what prevents server-side render
        }
      ),
    [
      /* list variables which should trigger a re-render here */
    ]
  );

  //declare props
  const [register, setRegister] = useState({});
  //   useEffect(() => {
  //     console.log("data" ,register)
  //   })
    
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        <Map positions={register} />
        <div>
          <Register onRegister={setRegister} />
        </div>
      </main>
    </>
  );
}
