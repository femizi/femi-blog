import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Overlay from "../components/Overlay";
export default function Home() {
  return (
    <div>
      <Overlay />
      <Header />
      <main className="px-24 pt-10">
        <div className="grid place-items-start">
          <h1 className="font-bold text-5xl">
            {"Femi's Blog"}
          </h1>
          <h2 className="font-semibold">
            A noob ranting in public
          </h2>
        </div>
      </main>
    </div>
  );
}
