import React from 'react'

export default function blog(props) {
       
  return (
    <>
        <div className="container mt-5">
            <h1 className='text-center'>{props.post.title}</h1>
            <p className='text-center'>{props.post.body}</p>
        </div>
    </>
  )
}


export async function getStaticProps(context) {
  const slug = context.params.slug;
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await data.json();

  const post = posts.find(element => element.id == slug);

  // console.log(post);
  if(!post){
      return {
          notFound : true
      }
  }

  return {
      props: {
            post
        }
    }
}

export async function getStaticPaths(){
    const data = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await data.json();
    const paths = posts.map(item => ({
        params: { slug: item.id.toString() }
    }))
    return {
        paths,
        fallback: false
    }
}




