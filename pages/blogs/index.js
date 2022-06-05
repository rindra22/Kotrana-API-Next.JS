import Head from 'next/head'
import React from 'react'
import Link from 'next/link'

export default function blog(props) {
    console.log(props);
  return (
    <>
    <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Blog</title>
    </Head>
    <div className="container mt-4">
        <h1 className='text-center'>Bienvenue sur le blog.</h1>
        <p className='text-muted text-center'>Voir les articles</p>

        <div className="row">
        {props.posts.map((item, index) => (
            <div className="col-md-4 mt-3" key={index}>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{item.title.length > 40 ?
                            `${item.title.substring(0, 40)}...` : item.title
                        }</h5>
                        <p className="card-text">
                        {item.body.length > 80 ?
                            `${item.body.substring(0, 80)}...` : item.body
                        }
                        </p>
                        <Link href={`/blogs/${item.id}`}>
                          <a className='text-decoration-underline'>Lire cet article</a>
                        </Link>
                    </div>
                </div>
            </div>
          ))}
        </div>
    </div>
    </>
  )
}

export async function getServerSideProps(){
    const data = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await data.json();
  return {
    props: {
        posts
    }
  }
}
