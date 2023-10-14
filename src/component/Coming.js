import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectMovieComing } from "../features/moive/moiveSlice";


const ComingSoon =(props)=>{

  const movies = useSelector(selectMovieComing);

    return(
       <div className="latest">
          <h2 className="mt-4 mb-4">Coming Soon</h2>

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

export default ComingSoon;