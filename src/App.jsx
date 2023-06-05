import React from "react";
import ReactDOM from "react-dom";
import Profile from "./constructor/fun";
import user from "../src/user.json";


function Users (){
    return (
        <>
            <Profile username={user.username}
                tag={user.tag}
                location={user.location}
                avatar={user.avatar}
                stats={user.stats}
                />
        </>
    )
}

export default Users