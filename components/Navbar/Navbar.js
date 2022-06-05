import Link from 'next/link'
import React from 'react'
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse d-flex justify-content-center align-items-center text-center" id="navbarText">
                <div>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link href={'/'}>
                                <a className={styles.knavlink}>Accueil</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href={'/blogs'}>
                                <a className={styles.knavlink}>Blog</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href={'/users'}>
                                <a className={styles.knavlink}>Users</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
  )
}
