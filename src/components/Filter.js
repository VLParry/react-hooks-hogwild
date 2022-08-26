


function Filter({
    isShowingOnlyGreased,
    onUpdateGreasedFilter,
    sortBy,
    onUpdateSort
}) {

    return (
        <div>
            <label>
                show only greased?
                <input
                    type="checkbox"
                    checked={isShowingOnlyGreased}
                    onChange={() => onUpdateGreasedFilter()}
                />
            </label>
            <select value={sortBy} onChange={(e) => onUpdateSort(e.target.value)}>
                {/* need to create a prop in Hoglist to pass down the sort by State and attach it to the dropdown menu here  */}
                <option value="name">Sort by name</option>
                <option value="weight">Sort by weight</option>
            </select>
        </div>
    );
}

export default Filter;