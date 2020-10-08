import React, {useState} from "react";

export default function LikeComponent(props) {
    const[likedClassName,_]=useState(`fa fa-heart${props.liked?"-o":""}`)
    // const likeClass=()=>{
    //     let likeClassName ="fa fa-heart"
    //     console.log("liked",props.liked);
    //     if(props.liked){
    //         likeClassName=likeClassName+"-0";
    //     }
    //     return likeClassName;
    // }
    return (
        <button className="btn">
            <i className={likedClassName} aria-hidden="true"></i>
        </button>
    );
}