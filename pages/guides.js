import Head from "next/head";
import { useContext, useEffect, useState } from "react";
import styles from "../styles/Guides.module.css";
import AuthContext from "../stores/authContext";

export default function Guides() {
  const { user, authReady } = useContext(AuthContext);
  const [guides, setGuides] = useState(null);
  const [error, setError] = useState(null);

  useEffect(async () => {
    if (authReady) {
      try {
        const res = await fetch(
          "/.netlify/functions/guides",
          user && {
            headers: {
              Authorization: "Bearer " + user.token.access_token,
            },
          }
        );

        if (!res.ok) {
          throw Error("You must be logged in to view this content");
        }

        const data = await res.json();

        setError(null);
        setGuides(data);
      } catch (error) {
        setError(error.message);
        setGuides(null);
      }
    }
  }, [user, authReady]);

  return (
    <>
      <Head>
        <title>Guides | Gaming Vibes</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div className={styles.guides}>
        <h2>All Guides</h2>
        {!authReady && <div>Loading...</div>}
        {error && (
          <div className={styles.error}>
            <p>{error}</p>
          </div>
        )}

        {guides &&
          guides.map((guide) => (
            <div key={guide.title} className={styles.card}>
              <h3>{guide.title}</h3>
              <h4>written by {guide.author}</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. At
                corrupti iste ab magnam dignissimos id maxime rerum quae minima.
                Delectus maxime culpa est consequatur veritatis, perspiciatis
                cum corrupti possimus quis?
              </p>
            </div>
          ))}
      </div>
    </>
  );
}
