import React from 'react'
import "./Home.scss"
import MyTemplate from '../../template/MyTemplate'
import ArticleContainer from '../../components/ArticleContainer/ArticleContainer'

function Home() {
  return (
    <MyTemplate>
        <section className='Home'>
          <ArticleContainer/>
        </section>
    </MyTemplate>
  )
}

export default Home