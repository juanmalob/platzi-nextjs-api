//snipet rafce
import Navbar from '@components/Navbar/Navbar'
import React from 'react'
//module CSS
//import styles from './layout.module.css'

const Layout: React.FC = ({ children }) => {
  /*Esto iria dentro del return <div className={styles.container}>*/
  return (
    <div>
      <Navbar />
      {children}
      <footer className="container">This is the footer</footer>
      {/* <!-- Texto --> */}
      <style jsx>{`
        .container {
          background: salmon;
        }
      `}</style>
    </div>
  )
}

export default Layout
