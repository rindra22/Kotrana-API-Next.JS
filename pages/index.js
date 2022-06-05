import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Accueil</title>
      </Head>
      <div className="container mt-3">
        <h1>Bienvenue sur Code.io</h1>
        <p className='text-muted'>Le blog communautaire des affichanodos de développement web.</p>
        <div className="row">
            <div className="col-md-6">
                <div className="card">
                    <div className="card-body">
                        <h3 className="card-title">Lisez les articles</h3>
                        <span className='text-muted'>Maximisez votre culture web</span>
                        <p className="card-text">
                        Chaque auteur tente vous apportez le plus de valeur possible par article.
                        </p>
                        <Link href={'/blog'}>
                        <a className='text-decoration-underline'>Visitez le blog</a>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="card">
                    <div className="card-body">
                        <h3 className="card-title">Faites un tour vers la liste de membres</h3>
                        <span className='text-muted'>Faites-vous des amis</span>
                        <p className="card-text">
                        Ajoutez,invitez et discutez avec les différents membres .
                        </p>
                        <Link href={'/users'}>
                        <a className='text-decoration-underline'>Découvrez la liste de membres</a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}
