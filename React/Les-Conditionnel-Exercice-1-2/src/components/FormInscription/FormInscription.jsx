import "./FormInscription.scss"

function FormInscription() {
  return (
    <div className='FormInscription'>
        <div className="form_area">
            <p className="title">SIGN UP</p>
            <form action="">
                <div className="form_group">
                    <label className="sub_title" for="name">Name</label>
                    <input placeholder="Enter your full name" className="form_style" type="text"/>
                </div>
                <div className="form_group">
                    <label className="sub_title" for="email">Email</label>
                    <input placeholder="Enter your email" id="email" className="form_style" type="email"/>
                </div>
                <div className="form_group">
                    <label className="sub_title" for="password">Password</label>
                    <input placeholder="Enter your password" id="password" className="form_style" type="password"/>
                </div>
                <div>
                    <button className="btn">SIGN UP</button>
                </div>
             </form>
        </div>
    </div>
  )
}

export default FormInscription