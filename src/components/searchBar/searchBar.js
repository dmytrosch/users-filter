import React from "react";

export default function SearchBar({
    setNameFilter,
    setAgeFilter,
    setLastnameFilter,
    setFemaleSelection,
    setMaleSelection,
}) {
    return (
        <div>
            <input
                type="text"
                name="nameFilter"
                onChange={(event) => setNameFilter(event.target.value)}
            />
            <input
                type="text"
                name="lastnameFilter"
                onChange={(event) => setLastnameFilter(event.target.value)}
            />
            <input
                type="number"
                name="ageFilter"
                onChange={(event) => setAgeFilter(event.target.value)}
            />
            <label>
                M
                <input
                    type="checkbox"
                    name="m"
                    onChange={(event) => setMaleSelection(event.target.checked)}
                />
            </label>
            <label>
                F
                <input
                    type="checkbox"
                    name="f"
                    onChange={(event) =>
                        setFemaleSelection(event.target.checked)
                    }
                />
            </label>
        </div>
    );
}
