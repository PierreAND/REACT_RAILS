import React from 'react'
import { useEffect, useState} from 'react';
import APIManager from '../api/axios'



function Home() {
  const [articles, setArticles] = useState ([])

useEffect (()=>{
 getArticle();
}, [])


  const getArticle = async () => {


    try {
      const response = await APIManager.getArticles()
      setArticles(response.data);
      console.log(response)
    } catch (err) {
      console.error(err)
    }
  };

  return (
    <>
    <div className="card-article">
   {articles.map((article) =>(
     <ul key={article.id}>
      <li className='card-art'>
        <h1 className='card-title'> {article.title} </h1>
        <p className='card-body'>{article.content}</p>
        <img className='card-image' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" alt="logo" width={40}/>
      </li>
    </ul>
   ))}
   </div>
    </>
  )
}
export default Home