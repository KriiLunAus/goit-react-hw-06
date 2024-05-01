import css from "./SearchBox.module.css"
const SearchBox = ({ value, onFilter }) => {
    

    return (
        <div className={css.findContact}> 
            <label htmlFor="findContact">Find contacts by name</label>
            <input type="text" id="findContact" value={value} onChange={(evt) => onFilter(evt.target.value)} />
        </div>
    )
}
export default SearchBox;