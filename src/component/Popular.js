import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectMoviePopular } from "../features/moive/moiveSlice";

const Popular =(props)=>{

   const movies = useSelector(selectMoviePopular);  

    return(
       <div className="latest">
          <h2 className="mb-4">Popular Movies</h2>

          <div className="row mb-4">
          {movies &&
                   movies.map((movie, key) =>{
                    return(
                             <div className="col-md-3 mb-4">
                                  <div className="lastest-content">
                                        <div key={key}>
                                             <Link to={`/detail/` + movie.id}>
                                                 <img src={movie.cardImg} alt={movie.title} />
                                             </Link>
                                        </div>
                                   </div>
                               </div>
                    )
                })}
          </div>
       </div>
    )
}

export default Popular;