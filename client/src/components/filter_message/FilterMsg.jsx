import "./FilterMsg.css";

let FilterMsg = (props) => {
  let filterValueChanged = (e) => {
    props.filterValueSelected(e.target.value);
  };

  return (
    <div className="filter_option">
      <select
        onfocus="this.size=10;"
        onblur="this.size=1;"
        onchange="this.size=1; this.blur();"
        name="isAvailable"
        onChange={filterValueChanged}
        id=""
      >
        <option value="all serias">ALL SERIES</option>
        <option value="dance">Dance</option>
        <option value="dark force">Dark Force</option>
        <option value="easter 2021">Easter 2022</option>
        <option value="easter 2022">easter 2022</option>
        <option value="golbal warming">Global Warming</option>
        <option value="golbal warming">creation</option>
        <option value="golbal warming">Depression</option>
        <option value="golbal warming">Intimacy</option>
        <option value="golbal warming">Judgemnet</option>
        <option value="golbal warming">Joy</option>
        <option value="golbal warming">Love</option>
      </select>

      <select name="" id="">
        <option value="all serias">ALL CARTEGORIES</option>
        <option value="dance">Addiction</option>
        <option value="dark force">Anger</option>
        <option value="easter 2021">Bible</option>
        <option value="easter 2022">Celebraion</option>
        <option value="golbal warming">Church Planting</option>
        <option value="golbal warming">creation</option>
        <option value="golbal warming">Depression</option>
        <option value="golbal warming">Intimacy</option>
        <option value="golbal warming">Judgemnet</option>
        <option value="golbal warming">Joy</option>
        <option value="golbal warming">Love</option>
      </select>
      <select name="" id="">
        <option value="all serias">ALL DATE</option>
        <option value="dance">January 2023</option>
        <option value="dark force">December 2022</option>
        <option value="easter 2021">November 2022</option>
        <option value="easter 2022">October 2022</option>
        <option value="golbal warming">September 2022</option>
        <option value="golbal warming">August 2022</option>
        <option value="golbal warming">July 2022</option>
        <option value="golbal warming">June 2022</option>
        <option value="golbal warming">May 2022</option>
        <option value="golbal warming">April 2022</option>
        <option value="golbal warming">March 2022</option>
      </select>

      <select name="" id="">
        <option value="all serias">SPEAKER</option>
        <option value="dance">Addiction</option>
        <option value="dark force">Michael Angelo</option>
        <option value="easter 2021">James Bondo</option>
        <option value="easter 2022">Celebraion</option>
        <option value="golbal warming">Mary Sagblogha</option>
        <option value="golbal warming">Sally Bigmouth</option>
        <option value="golbal warming">Clamp Snaky</option>
      </select>
    </div>
  );
};

export default FilterMsg;
