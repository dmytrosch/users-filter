import React from "react";
import styles from "./searchBar.module.css";
import { Checkbox } from "pretty-checkbox-react";
import "@djthoms/pretty-checkbox";

export default function SearchBar({
    setNameFilter,
    setAgeFilter,
    setLastnameFilter,
    setFemaleSelection,
    setMaleSelection,
    isFemaleSelected,
    isMaleSelected,
}) {
    return (
        <div className={styles.form}>
            <input
                type="text"
                name="nameFilter"
                className={styles.textInput}
                placeholder="Поиск по имени"
                onChange={(event) => setNameFilter(event.target.value)}
            />
            <input
                type="text"
                name="lastnameFilter"
                className={styles.textInput}
                placeholder="Поиск по фамилии"
                onChange={(event) => setLastnameFilter(event.target.value)}
            />
            <input
                type="number"
                name="ageFilter"
                className={styles.inputAge}
                placeholder="Поиск по возрасту"
                onChange={(event) => setAgeFilter(event.target.value)}
            />
            <div>
                <p className={styles.textSex}>Поиск по полу:</p>
                <Checkbox
                    type="checkbox"
                    name="m"
                    className={styles.checkbox}
                    checked={isMaleSelected}
                    onChange={(event) => setMaleSelection(event.target.checked)}
                >
                    М
                </Checkbox>
                <Checkbox
                    type="checkbox"
                    name="f"
                    checked={isFemaleSelected}
                    onChange={(event) =>
                        setFemaleSelection(event.target.checked)
                    }
                >
                    Ж
                </Checkbox>
            </div>
        </div>
    );
}
