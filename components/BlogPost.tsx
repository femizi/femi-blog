/* eslint-disable @next/next/no-img-element */
import React from "react";
export function BlogPost({post}) {
  return <div className="shadow-md dark:shadow-none transition ease-in-out delay-150 hover:scale-105">
          <div>
            <img className="rounded-t-md object-cover" src={post.frontMatter.thumbnailUrl} alt='thumbnail' />
          </div>
          <div className="p-1">
            <section>
              <time className="text-sm">{post.frontMatter.date}</time>
              <h3 className="font-bold text-3xl py-2">{post.frontMatter.title}</h3>
              <p className="">
              {post.frontMatter.description}
              </p>
            </section>
          </div>
          </div>
  ;
}
  