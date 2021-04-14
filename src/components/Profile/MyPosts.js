import React from 'react'
import classes from "./Profile.module.css"
import Post from "./Post/Post"

const MyPosts = () => {
    return (
        <div>
            <div>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            <div className={classes.item}>
                <Post message="hello all" likesCount="10" />
                <Post message="hi there" likesCount="20" />
                <Post message="hi everyone" />
                <Post message="hello" />
                <Post message="'sup" />
            </div>
        </div>
    )
}

export default MyPosts;