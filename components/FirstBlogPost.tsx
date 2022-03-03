/* eslint-disable @next/next/no-img-element */
import React from "react";
export function FirstBlogPost({first}) {
  return <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div>
            <img className="rounded-md" src="/assets/images/thumbnail.jpeg" alt="thumbnail" />
          </div>
          <div className="p-1">
            <section>
              <time className="text-sm">{first.frontMatter.date}</time>
              <h3 className="font-bold text-4xl py-2">{first.frontMatter.title}</h3>
              <p className="">
               {first.frontMatter.description}
              </p>
            </section>
          </div>
        </div>;
}
  