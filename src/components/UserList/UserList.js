import React from "react";
import UserItem from "../UserItem/UserItem";
import styles from "./UserList.module.css";

export default function UserList({ usersArr }) {
    return (
        <ul className={styles.list}>
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
