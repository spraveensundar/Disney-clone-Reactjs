import { auth, provider } from "../firebase";
import { useSelector, useDispatch} from "react-redux";
import { useHistory } from "react-router-dom";
import { setUserLoginDetails,selectUserName,selectUserPhoto,setSignOutState} from "../features/user/userSlice";
import { useEffect } from "react";

const Headers =(props) =>{

   const dispatch = useDispatch();
   const history = useHistory();
   const username = useSelector(selectUserName);
   const userphoto = useSelector(selectUserPhoto);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        history.push("/home");
      }
    });
  }, [username]);

  const handleAuth = () => {
    if (!username) {
      auth
        .signInWithPopup(provider)
        .then((result) => {
          setUser(result.user);
        })
        .catch((error) => {
          alert(error.message);
        });
    } else if (username) {
      auth
        .signOut()
        .then(() => {
          dispatch(setSignOutState());
          history.push("/");
        })
        .catch((err) => alert(err.message));
    }
  };

  const setUser = (user)=>{
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email:user.email,
        photo:user.photoURL,
      })
    )
  }

    return(
   //Navbar
   <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top p-2">
     <div class="container-fluid ms-5 ">

    <a class="navbar-brand" href="#">
      <img src="./images/logo.svg" alt="disney" width={80}/>
    </a>

      {
        !username ? (
          <div class="login-pos">
         <button onClick={handleAuth} className="btn btn-login">Login</button>
      </div>
        ) : (
<div className="me-auto">

<ul class="navbar-nav me-auto mb-2 mb-lg-0">

<li class="nav-item mx-4">
  <a class="nav-link active" aria-current="page" href="/home"><span className="me-2"><i class="fa-solid fa-house"></i></span>HOME</a>
</li>

<li class="nav-item mx-4">
  <a class="nav-link" href="#"><span className="me-2"><i class="fa-solid fa-magnifying-glass"></i></span>SEARCH</a>
</li>

<li class="nav-item mx-4">
  <a class="nav-link" href="#"><span className="me-2"><i class="fa-solid fa-plus"></i></span>WATCHLIST</a>
</li>

<li class="nav-item mx-4">
  <a class="nav-link" href="#"><span className="me-2"><i class="fa-solid fa-star"></i></span>ORIGINALS</a>
</li>

<li class="nav-item mx-4">
  <a class="nav-link" href="#"><span className="me-2"><i class="fa-solid fa-video"></i></span>MOVIES</a>
</li>

<li class="nav-item mx-4">
  <a class="nav-link" href="#"><span className="me-2"><i class="fa-solid fa-film"></i></span>SERIES</a>
</li>
</ul>
 <div className="dropdown login-imgs">
     <div className="" data-bs-toggle="dropdown" id="dropdown1">
        <img  src={userphoto} className="login-round"  alt={username}/>
     </div>
   <ul className="dropdown-menu">
    <li><a onClick={handleAuth} className="dropdown-item" href="#">Sing out</a></li>
   </ul>
 </div>  
</div>
)}
      
      
      
      
    </div>
</nav>
    )
}

export default Headers;