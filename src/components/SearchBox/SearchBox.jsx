import css from "./SearchBox.module.css"
import { useDispatch, useSelector } from "react-redux";


const SearchBox = () => {
    
    // const selector = useSelector(state => state.filter.status );

    return (
        <div className={css.findContact}> 
            <label htmlFor="findContact">Find contacts by name</label>
            <input type="text" id="findContact"  />
        </div>
    )
}
export default SearchBox;