import React from "react";
import styles from "./UserItem.module.css";

export default function UserItem({ name, lastname, age, sex }) {
    return (
        <li className={styles.item}>
            <p>
                {name} {lastname}
            </p>
            <p>Возраст: {age}</p>
            <p> Пол: {sex === "m" ? "М" : "Ж"}</p>
        </li>
    );
}
