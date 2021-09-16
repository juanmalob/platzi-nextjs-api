//snipet rafce
import { Navbar } from '../Navbar/Navbar'

import React from 'react'
//module CSS
//import styles from './layout.module.css'

const Layout = ({ children }) => {
  /*Esto iria dentro del return <div className={styles.container}>*/
  return (
    <div>
      <Navbar />
      {children}
      <footer className="container">This is the footer</footer>
      {/* <!-- inline css js --> */}
      <style jsx>{`
        .container {
          background: salmon;
        }
      `}</style>
    </div>
  )
}

export default Layout
