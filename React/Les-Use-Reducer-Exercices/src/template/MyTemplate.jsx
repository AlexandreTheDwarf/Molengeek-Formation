import React from 'react'
import "./MyTemplate.scss"
import NavBar from '../components/NavBar/NavBar'

function MyTemplate({children}) {
  return (
    <section className='MyTemplate'>
        <NavBar/>
        <div className='container'>
            {children}
        </div>
    </section>
  )
}

export default MyTemplate