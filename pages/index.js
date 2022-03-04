/* eslint-disable react/no-unescaped-entities */
import { Footer } from "../components/Footer";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import dynamic from "next/dynamic";
import { FirstBlogPost } from "../components/FirstBlogPost";
import { Title } from "../components/Title";
import Header from "../components/Header";
import Overlay from "../components/Overlay";
import AvatarOverlay from "../components/AvatarOverlay";
import { BlogWrapper } from "../components/BlogWrapper";
import {FirstBlogPostWrapper} from '../components/FirstBlogPostWrapper'

import { useEffect, useState } from "react";
import Head from "next/head";
FirstBlogPostWrapper

export default function Home({ posts }) {
  const DynamicHeader = dynamic(() => import("../components/Header"), {
    ssr: false,
  });
  const [dark, setDark] = useState(false);

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(dark));
  }, [dark]);
  useEffect(() => {
    const theme = JSON.parse(localStorage.getItem("theme"));
    if (theme) {
      setDark(theme);
    }
  }, []);
  function setTheme() {
    setDark(!dark);
  }
  const first = posts[0];
  const remainder = posts.slice(1);

  const d = new Date();
  let year = d.getFullYear();

  return (
    <div
      className={
        dark
          ? "relative overflow-y-auto min-h-screen text-slate-200 bg-gray-900 dark"
          : "relative overflow-y-auto  min-h-screen "
      }
    >
      <Head>
        <title>Femi's Blog</title>
        <meta
          name="description"
          content="This is a blog talking about tech tips and the
      struggles of a junior developer."
        />

        <meta name="robots" content="index, follow" />
        <meta name="theme" content={dark ? "white" : "#111827"} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Femi's Blog" />
        <meta name="twitter:title" content="Femi's Blog" />
        <meta
          name="twitter:description"
          content="This is a blog talking about tech tips and the
      struggles of a junior developer."
        />
      </Head>
      <Overlay />
      
      <DynamicHeader setTheme={setTheme} />
      <main className="px-8 lg:px-24 py-12 dark:text-slate-400 dark:bg-gray-900 z-10 dark:z-50">
        <Title />
        
        <Link href={"/blog/" + first.slug} passHref >
              <FirstBlogPostWrapper first={first} />
            </Link>
        
        
      


        <section className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {remainder.map((post, index) => (
            <Link href={"/blog/" + post.slug} passHref key={index}>
              <BlogWrapper post={post} />
            </Link>
          ))}
        </section>
      </main>
      <Footer year={year} />
    </div>
  );
}
export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join("posts"));
  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );
    const { data: frontMatter } = matter(markdownWithMeta);
    return {
      frontMatter,
      slug: filename.split(".")[0],
    };
  });
  return {
    props: {
      posts,
    },
  };
};
