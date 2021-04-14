import React from 'react'
import classes from './Profile.module.css'
import MyPosts from './MyPosts'

const Profile = () => {
    return (
    <div>
        <div className={classes.item}>
            ava + description
        </div>

        <div className={classes.item}>
            my posts
        </div>

        <MyPosts />
    </div>
    );
}

export default Profile;