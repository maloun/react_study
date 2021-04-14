import React from 'react'
import classes from "./Post.module.css";

const Post = (props) => {
    return (
           <div className={classes.post}>
               <div className={classes.item}>
                   <img src="https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270" alt=""/>
                   {props.message}
                   <div>
                        <div>like {props.likesCount}</div>
                   </div>
               </div>
           </div>
    )
}

export default Post;