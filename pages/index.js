import Head from "next/head"
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Gaming Vibes</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div className={styles.home}>
        <h2>Welcome to Gaming Vibes</h2>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            deleniti rem aspernatur odit hic autem neque repellat alias? Debitis
            veniam inventore ipsum similique quos animi ipsa asperiores fuga
            dolor id. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Officiis deleniti rem aspernatur odit hic autem neque repellat
            alias? Debitis veniam inventore ipsum similique quos animi ipsa
            asperiores fuga dolor id. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Officiis deleniti rem aspernatur odit hic autem
            neque repellat alias? Debitis veniam inventore ipsum similique quos
            animi ipsa asperiores fuga dolor id.
          </p>
        </div>
      </div>
    </>
  );
}
