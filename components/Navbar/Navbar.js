import React from 'react'
import Link from 'next/link'
import { Menu } from 'semantic-ui-react'
import { IconoHome } from '../general/IconoHome'

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <IconoHome />
            <span className="m-2">Intranet</span>
          </a>

          <menu>
            <Link href="/">
              <a>Home</a>
            </Link>

            <Link href="/about">
              <a>About</a>
            </Link>
          </menu>
        </div>
      </nav>
    </div>
  )
}

export { Navbar }
