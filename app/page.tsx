import React from 'react'
import Link from "next/link";
import { Link as TransitionLink } from "next-transition-router";
const page = () => {
  return (
    <div>
      <h1>I am home</h1>
      <Link  href='/about'>about</Link>
      
    </div>
  )
}


export default page