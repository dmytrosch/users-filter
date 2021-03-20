import React, { useEffect, useMemo, useRef, useState } from "react";
import SearchBar from "./SearchBar/SearchBar";
import { v4 as uuid } from "uuid";

function App() {
    const [allUsers, setAllUsers] = useState([]);
    const [filteredArr, setFilteredArr] = useState([]);
    const [nameFilter, setNameFilter] = useState("");
    const [lastnameFilter, setLastnameFilter] = useState("");
    const [ageFilter, setAgeFilter] = useState("");
    const [isMaleSelected, setMaleSelection] = useState(true);
    const [isFemaleSelected, setFemaleSelection] = useState(true);
    const searchProps = useRef({
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
            nameFilter
                ? allUsers.filter((user) =>
                      user.name.toLowerCase().includes(nameFilter.toLowerCase())
                  )
                : allUsers,
        [allUsers, nameFilter]
    );
    const filteredByLastname = useMemo(
        () =>
            lastnameFilter
                ? filteredByName.filter((user) =>
                      user.lastname
                          .toLowerCase()
                          .includes(lastnameFilter.toLowerCase())
                  )
                : filteredByName,
        [filteredByName, lastnameFilter]
    );
    const filteredByAge = useMemo(
        () =>
            ageFilter
                ? filteredByLastname.filter(
                      (user) => user.age === Number(ageFilter)
                  )
                : filteredByLastname,
        [filteredByLastname, ageFilter]
    );
    const filteredBySex = useMemo(() => {
        const arr = filteredByAge.filter((user) => {
            const sex = user.sex;
            if (sex === "m" && isMaleSelected) {
                return true;
            }
            if (sex === "f" && isFemaleSelected) {
                return true;
            }
            return false;
        });
        return arr;
    }, [filteredByAge, isMaleSelected, isFemaleSelected]);

    useEffect(() => {
        setFilteredArr(filteredBySex);
    }, [filteredBySex]);

    return (
        <div>
            <SearchBar
                isFemaleSelected={isFemaleSelected}
                isMaleSelected={isMaleSelected}
                {...searchProps.current}
            />
            {filteredArr && (
                <ul>
                    {filteredArr.map((user) => (
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
