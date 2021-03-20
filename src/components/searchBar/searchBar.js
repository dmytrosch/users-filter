import React from "react";

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
                    checked={isMaleSelected}
                    onChange={(event) => setMaleSelection(event.target.checked)}
                />
            </label>
            <label>
                F
                <input
                    type="checkbox"
                    name="f"
                    checked={isFemaleSelected}
                    onChange={(event) =>
                        setFemaleSelection(event.target.checked)
                    }
                />
            </label>
        </div>
    );
}
