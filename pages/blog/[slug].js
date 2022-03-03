import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import SyntaxHighlighter from "react-syntax-highlighter";
import Header from "../../components/Header";
import { useState } from "react";

const components = {  SyntaxHighlighter }

const PostPage = ({ frontMatter: { title, date }, mdxSource }) => {
  const [dark, setdark] = useState(false)
  
  function setTheme() {
    setDark(!dark);
  }
  // const systemPrefersDark = useMediaQuery(
  //   {
  //     query: '(prefers-color-scheme: dark)',
  //   },
  //   undefined,
  //   (isSystemDark) => setDark(isSystemDark)
  // );
  return (
    <div >
     <Header setTheme={setTheme}/> 
     <main className="px-24 py-12">
     <h1 className="fontbold text-6xl pb-4">{title}</h1>
      <MDXRemote {...mdxSource} components={components}/>
     </main>
    </div>
  )
}

const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join('posts'))

  const paths = files.map(filename => ({
    params: {
      slug: filename.replace('.mdx', '')
    }
  }))

  return {
    paths,
    fallback: false
  }
}

const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithMeta = fs.readFileSync(path.join('posts',
    slug + '.mdx'), 'utf-8')

  const { data: frontMatter, content } = matter(markdownWithMeta)
  const mdxSource = await serialize(content)

  return {
    props: {
      frontMatter,
      slug,
      mdxSource
    }
  }
}

export { getStaticProps, getStaticPaths }
export default PostPage
