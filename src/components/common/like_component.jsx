import React, {useState} from "react";

export default function LikeComponent(props) {
    const [likedClassName] = useState(`fa fa-heart${props.liked ? "" : "-o"}`)
    return (
        <i className={likedClassName} style={{cursor:'pointer'}} onClick={props.onClick} aria-hidden="true"></i>
    );
}