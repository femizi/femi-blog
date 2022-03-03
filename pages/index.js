import { Footer } from "../components/Footer";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

import { FirstBlogPost } from "../components/FirstBlogPost";
import { Title } from "../components/Title";
import Header from "../components/Header";
import Overlay from "../components/Overlay";
import { BlogWrapper } from "../components/BlogWrapper";
import { useState } from "react";

export default function Home({ posts }) {
  const [dark, setDark] = useState(false);

  function setTheme() {
    setDark(!dark);
  }
  const first = posts[0];
  const remainder = posts.slice(1);
  console.log(remainder);
  const d = new Date();
  let year = d.getFullYear();

  return (
    <div
      className={
        dark
          ? "relative dark:text-slate-200 dark:bg-gray-900 dark"
          : "relative dark:text-slate-200 dark:bg-gray-900"
      }
    >
      <Overlay />
      <Header setTheme={setTheme} />
      <main className="px-24 py-12 dark:text-slate-400 dark:bg-gray-900 dark:z-50">
        <Title  />
        <FirstBlogPost first={first} />
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
