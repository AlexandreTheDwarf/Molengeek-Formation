import "./FormConnexion.scss"

function FormConnexion() {
  return (
    <div className="FormConnexion">
        <div className="form_area">
            <p className="title">LOGIN UP</p>
            <form action="">
                <div className="form_group">
                    <label className="sub_title" for="email">Email</label>
                    <input placeholder="Enter your email" id="email" className="form_style" type="email"/>
                </div>
                <div className="form_group">
                    <label className="sub_title" for="password">Password</label>
                    <input placeholder="Enter your password" id="password" className="form_style" type="password"/>
                </div>
                <div>
                    <button className="btn">LOGGIN UP</button>
                </div>
             </form>
        </div>
    </div>
  )
}

export default FormConnexion