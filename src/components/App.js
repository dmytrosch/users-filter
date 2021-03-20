import React, { useEffect, useMemo, useRef, useState } from "react";
import SearchBar from "./SearchBar/SearchBar";
import UserList from "./UserList/UserList";
import { v4 as uuid } from "uuid";
import Layout from "./Layout/Layout";

function App() {
    const [allUsers, setAllUsers] = useState([]);
    const [filteredArr, setFilteredArr] = useState([]);
    const [nameFilter, setNameFilter] = useState("");
    const [lastnameFilter, setLastnameFilter] = useState("");
    const [ageFilter, setAgeFilter] = useState("");
    const [isMaleSelected, setMaleSelection] = useState(true);
    const [isFemaleSelected, setFemaleSelection] = useState(true);
    //что-бы не дублировать ключ={значение} при передаче пропсов в компоненте
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
        <Layout>
            <SearchBar
                isFemaleSelected={isFemaleSelected}
                isMaleSelected={isMaleSelected}
                {...searchProps.current}
            />
            {filteredArr.length ? (
                <UserList usersArr={filteredArr} />
            ) : (
                <p>Пользователи отсутствуют</p>
            )}
        </Layout>
    );
}

export default App;
