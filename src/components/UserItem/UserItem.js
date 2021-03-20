import React from "react";

export default function UserItem({ name, lastname, age, sex }) {
    return (
        <li>
            {name} {lastname} {age} {sex}
        </li>
    );
}
