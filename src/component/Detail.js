import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import db from "../firebase";


const Detail = (props)=>{

    const { id } = useParams();
    const [detail,setDetailData]=useState({});


    useEffect(() => {
        db.collection("movies")
          .doc(id)
          .get()
          .then((doc) => {
            if (doc.exists) {
              setDetailData(doc.data());
            } else {
              console.log("no such document in firebase 🔥");
            }
          })
          .catch((error) => {
            console.log("Error getting document:", error);
          });
      }, [id]);

    return(
        <div className="details">
            <div className="container-fluid">

                 <img className="detl-bg-img" alt={detail.title} src={detail.backgroundImg} />
                
                     <div className="row">

                        <div className="col-md-6 mt-5">
                           <img alt={detail.title} src={detail.titleImg} />

                           <div>
                                 <div className="details-controls">
                                     <button className="btn btn-0"><i class="fa-solid fa-play"></i><span>PLAY</span></button>
                                     <button className="btn btn-1"><i class="fa-solid fa-play"></i><span>TRAILER</span></button>
                                     <button className="btn btn-2"><i class="fa-solid fa-plus"></i></button>
                                     <button className="btn btn-2"><i class="fa-solid fa-users"></i></button>
                                 </div>

                                 
                                    <p className="sub-title mt-4">{detail.subTitle}</p>

                                    <p className="description mt-4">{detail.description}</p>
                                
                           </div>

                        </div>



                        <div className="col-md-6 mt-5">
                            <h1></h1>
                        </div>
                   </div>
           </div>
        </div>
    )
}

export default Detail;