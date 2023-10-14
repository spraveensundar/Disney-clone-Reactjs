import ComingSoon from "./Coming";
import ImgSlider from "./ImgSlider";
import Latest from "./Latest";
import Originals from "./Originals";
import Popular from "./Popular";
import Viewers from "./Viewers";
import { useEffect } from "react";
import { useSelector, useDispatch} from "react-redux";
import { setMovie } from "../features/moive/moiveSlice";
import { selectUserName } from "../features/user/userSlice";
import db from "../firebase";


const Home =(props)=>{

    const dispatch = useDispatch();
    const username = useSelector(selectUserName);
    let latests=[];
    let populars=[];
    let originals=[];
    let comings=[];


    useEffect(() => {
      db.collection("movies").onSnapshot((snapshot) => {
        snapshot.docs.map((doc) => {
          switch (doc.data().type) {
            case "recommend":
              latests = [...latests, { id: doc.id, ...doc.data() }];
              break;
  
            case "new":
              populars = [...populars, { id: doc.id, ...doc.data() }];
              break;
  
            case "original":
              originals = [...originals, { id: doc.id, ...doc.data() }];
              break;
  
            case "trending":
              comings = [...comings, { id: doc.id, ...doc.data() }];
              break;
          }
        });
  
        dispatch(
          setMovie({
            Latest: latests,
            Popular: populars,
            Originals: originals,
            Coming: comings,
          })
        );
      });
    }, [username]);


    return( 
        <section className="home-section">
            <div className="container-fluid">
              <div className="home">
                    <ImgSlider/>
                    <Viewers/>
                    <Latest/>
                    <Popular/>
                    <Originals/>
                    <ComingSoon/>
               </div>
                
            </div>
        </section>
    )
}

export default Home;