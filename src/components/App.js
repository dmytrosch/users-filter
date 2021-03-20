import React, { useEffect, useMemo, useRef, useState } from "react";
import SearchBar from "./searchBar/searchBar";
import { v4 as uuid } from "uuid";

function App() {
    const [allUsers, setAllUsers] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [nameFilter, setNameFilter] = useState("");
    const [lastnameFilter, setLastnameFilter] = useState("");
    const [ageFilter, setAgeFilter] = useState("");
    const [isMaleSelected, setMaleSelection] = useState(false);
    const [isFemaleSelected, setFemaleSelection] = useState(false);
    const filterMethods = useRef({
        setNameFilter,
        setAgeFilter,
        setLastnameFilter,
        setFemaleSelection,
        setMaleSelection,
    });

    useEffect(() => {
        fetch("https://venbest-test.herokuapp.com/")
            .then((response) => response.json())
            .then((data) => {
                const newArr = data.map((el) => {
                    el.id = uuid();
                    return el;
                });
                setAllUsers(newArr);
            });
    }, []);

    const filteredByName = useMemo(
        () =>
            allUsers.filter((user) =>
                user.name.toLowerCase().includes(nameFilter.toLowerCase())
            ),
        [allUsers, nameFilter]
    );
    const filteredByLastname = useMemo(
        () =>
            filteredByName.filter((user) =>
                user.lastname
                    .toLowerCase()
                    .includes(lastnameFilter.toLowerCase())
            ),
        [filteredByName, lastnameFilter]
    );

    return (
        <div>
            <SearchBar {...filterMethods.current} />
            {allUsers && (
                <ul>
                    {allUsers.map((user) => (
                        <li key={user.id}>
                            {user.name} {user.lastname} {user.age} {user.sex}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default App;
