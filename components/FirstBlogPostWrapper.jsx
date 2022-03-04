import React from 'react'
import { FirstBlogPost } from './FirstBlogPost'


export const FirstBlogPostWrapper = React.forwardRef(function  FirstBlogPostWrapper({ onClick, href, first }, ref)  {
    return (
      <a href={href} onClick={onClick} ref={ref}>
       <FirstBlogPost first={first}/>
      </a>
    )
  })
  
  