import "./FilterMsg.css";

let FilterMsg = (props) => {
    return (
        <div className="filter_option">
            {props.children}
      </div>
    )
}

export default FilterMsg