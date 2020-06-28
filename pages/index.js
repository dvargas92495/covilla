import Head from "next/head";
import MapChart from "./MapChart";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Chamilea</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* <h1 className="title">Welcome to Chamilea!</h1>

        <p className="description">
          We are a community of nomads traveling month-to-month to different
          cities around the world
        </p> */}
        
        <MapChart />
      </main>

      <footer>
        <span>
          Interested in joining during a given month? Email us at
          dvargas92495@gmail.com and nikhilpunwaney@gmail.com
        </span>
      </footer>
    </div>
  );
}
