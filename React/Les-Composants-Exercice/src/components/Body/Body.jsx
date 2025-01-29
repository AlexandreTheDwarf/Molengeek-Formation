import "./Body.scss"
import NavBar from "../NavBar/NavBar"
import SectionArticle from "../SectionArticle/SectionArticle"
import Footer from "../Footer/Footer"


function Body () {
  return (
    <div className="Body">
        <NavBar/>
        <SectionArticle/>
        <SectionArticle/>
        <Footer/>
    </div>
  )
}

export default Body