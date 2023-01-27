import React from 'react'
import HeaderStyles from  '../styles/Header.module.css'

function Header() {
    const x =1;
  return (
    <div>
        <h2 className={HeaderStyles.title}>
        <span>Web Dev </span> News
        </h2>
        <p className={HeaderStyles.description }>Keep Up to date with web dev news...!</p>
        {/* This way of styling makes code larger use Conditionally */}
        <style jsx>
            {
                `.title{
                    color:${x>3?'red':'blue'};
                }
                `
            }
        </style>
    </div>
  )
}

export default Header