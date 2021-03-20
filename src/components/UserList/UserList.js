import React from "react";
import UserItem from "../UserItem/UserItem";

export default function UserList({ usersArr }) {
    return (
        <ul>
            {usersArr.map((user) => (
                <UserItem
                    key={user.id}
                    name={user.name}
                    lastname={user.lastname}
                    age={user.age}
                    sex={user.sex}
                />
            ))}
        </ul>
    );
}
