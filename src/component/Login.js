const Login =(props) =>{

    return(
     <>
      <section className="login-page">
          <div className="container-fluid">
               <div className="bg-img"/>
               <div className="row ">
                <div className="col-md-12 d-flex flex-column justify-content-center  align-items-center text-center">
                  <img className="login-img mb-2" src="./images/cta-logo-one.png" alt="logo"/>
                   <button className="btn p-2 btn-primary mb-2">GET ALL THERE</button>
                   <p>Get Premier Access to Raya and the Last Dragon for additional fee with a Disney+subscripation. As of 03/10/2023, the price of Disney+ and The Diseny Bundle will increase by $1</p>
                   <img className="login-img-two" src="./images/cta-logo-two.png"/>
                </div>
               </div>
           </div>
      </section>
     </>
    )
}

export default Login;