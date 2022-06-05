import Head from 'next/head';
import React from 'react'

export default function user({user}) {
    console.log(user);
  return (
    <>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Contact | {user.username}</title>
        </Head>
        <div className="card mt-5">
            <div className="card-header">
                <h1 className='text-center'>User : {user.name}</h1>
            </div>
            <div className="card-body">
               <table className='table table-bordered table-hover'>
                    <tbody>
                        <tr>
                            <td>Email</td>
                            <td>{user.email}</td>
                        </tr>
                        <tr>
                            <td>Phone</td>
                            <td>{user.phone}</td>
                        </tr>
                        <tr>
                            <td>Website</td>
                            <td>{user.website}</td>
                        </tr>
                        <tr>
                            <td>
                                Address
                            </td>
                            <td>
                                <ul>
                                    <li>Street : {user.address.street}</li>
                                    <li>Suite : {user.address.suite}</li>
                                    <li>City : {user.address.city}</li>
                                    <li>Zipcode : {user.address.zipcode}</li>
                                    <li>Latitude : {user.address.geo.lat}</li>
                                    <li>Longitude : {user.address.geo.lng}</li>
                                </ul>
                            </td>
                        </tr>
                    </tbody>
               </table>

            </div>
        </div>
    </>
  )
}

export async function getStaticProps(context) {
    const userId = context.params.user;
    const data = await fetch("https://jsonplaceholder.typicode.com/users/" + userId);
    const user = await data.json();
  
   // const post = posts.find(element => element.id == slug);
  
    // console.log(post);
    if(!user){
        return {
            notFound : true
        }
    }
  
    return {
        props: {
            user
          }
      }
  }
  
  export async function getStaticPaths(){
      const data = await fetch("https://jsonplaceholder.typicode.com/users");
      const users = await data.json();
      const paths = users.map(item => ({
          params: { user: item.id.toString() }
      }))
      return {
          paths,
          fallback: false
      }
  }
