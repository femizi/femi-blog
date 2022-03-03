import React from 'react'
import { BlogPost } from './BlogPost'


export const BlogWrapper = React.forwardRef(function  BlogWrapper({ onClick, href, post }, ref)  {
    return (
      <a href={href} onClick={onClick} ref={ref}>
       <BlogPost post={post}/>
      </a>
    )
  })
  
  