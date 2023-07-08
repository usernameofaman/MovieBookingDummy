"use client";
import Head from "next/head";
import Slider from "./components/home/Slider/slider";
import movies from "./components/home/movies";

export default function Home(): JSX.Element {
  return (
    <div>
      <Head>
        <title>BookMySeat</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Slider movies={movies}></Slider>

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
