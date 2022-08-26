import HogTile from "./HogTile"
import Filter from "./Filter";

import hogs from "../porkers_data";
import { useState } from "react";

function HogList() {
    const [isShowingOnlyGreased, setIsShowingOnlyGreased] = useState(true)
    const [sortBy, setSortBy] = useState("name")// show hogs sorted by name initally but also be able to sort by weight

    //our original data will stay untouhched, we are just applying different filters to the data before the user sees it

    //best practice to use filter before sort because sort is destructive. when you use it on the filtered array, it is working off the copy filter made. 

    const filteredHogs = hogs.filter((hog) => {
        if (isShowingOnlyGreased) {
            //if isShowingOnlyGreased is true, return only hogs that are greased
            return hog.greased
        } else {
            //otherwise return all the hogs, write true bc its just going to use the filter to return every element into a new array
            return true
        }
    })

    const sortedHogs = filteredHogs.sort((hogA, hogB) => {
        if (sortBy === "name") {
            return hogA.name.localeCompare(hogB.name)
        } else {
            return hogA.weight - hogB.weight
        }
    })

    const hogTiles = sortedHogs.map((hog) => {
        return <HogTile key={hog.name} hog={hog} />
    });

    function handleUpdateGreasedFilter() {
        setIsShowingOnlyGreased(!isShowingOnlyGreased)
    }
    //this function handleUpdateSort lets us pass the value up when the value of the dropdown is changed. need to pass the value to pass into the setSortBy state
    function handleUpdateSort(newSort) {
        setSortBy(newSort)
    }

    return (
        <div>
            <Filter
                isShowingOnlyGreased={isShowingOnlyGreased}
                onUpdateGreasedFilter={handleUpdateGreasedFilter}

                sortBy={sortBy}
                onUpdateSort={handleUpdateSort}
            />
            {hogTiles}
        </div>
    );
}

export default HogList