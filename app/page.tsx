"use client"
import Head from "next/head";
import Slider from "./components/home/Slider/slider";

export default function Home(): JSX.Element {
  return (
    <div>
      <Head>
        <title>BookMySeat</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Slider
        movies={[
          {
            url: "https://m.media-amazon.com/images/I/71QcRDosnsL.jpg",
            name: "Spider-Man",
          },
          {
            url: "https://hips.hearstapps.com/hmg-prod/images/best-new-comedy-movies-2023-shazam-1670021757.jpg",
            name : "Shazam"
          },
          {
            url: "https://www.tallengestore.com/cdn/shop/products/Joker_-_Put_On_A_Happy_Face_-_Joaquin_Phoenix_-_Hollywood_English_Movie_Poster_3_1f3f78b1-3366-4394-a8b2-4d8431592dac.jpg",
            name : "Joker"
          },
          {
            url: "https://mlpnk72yciwc.i.optimole.com/cqhiHLc.IIZS~2ef73/w:auto/h:auto/q:75/https://bleedingcool.com/wp-content/uploads/2022/07/oppenheimer_xlg.jpeg",
            name : "Oppenheimer"
          },
          {
            url: "https://images.mid-day.com/images/images/2023/may/bloddydaddmainposter_d.jpg",
            name : "Bloody Daddy"
          },
        ]}
      ></Slider>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
