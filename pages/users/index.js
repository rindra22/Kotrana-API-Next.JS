import React from 'react'
import Link from 'next/link';
import Head from 'next/head';

export default function index({users}) {
  return (
    <>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Users</title>
        </Head>
        <div className="container mt-4">
            <h1 className='text-center'>Liste des utilisateurs.</h1>
            {users.map((item,index) => (
                <div className="card mt-3" key={index}>
                    <div className="card-body">
                        <div className='d-flex justify-content-between'>
                            <div>
                                <p>{item.name}</p>
                            </div>
                            <div>
                                <Link href={`/users/contact/${item.id}`}>
                                    <a className='text-decoration-underline'>Contacter</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </>
  )
}

export async function getServerSideProps(){
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await data.json();
  return {
    props: {
        users
    }
  }
}
