import React from "react"
import { Link } from "react-router-dom"

const Navbar = ({ country, setCountry }) => {
  const settingCountry = (e) => {
    setCountry(e.target.value)
    //* Saving user selected country in local storage for next visit
    localStorage.setItem("country", e.target.value)
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <div className="container">
        <Link
          className="navbar-brand"
          to="entertainment"
        >
          NewsMonkey
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mb-2 mb-lg-0 me-5">
            <li className={`nav-item`}>
              <Link
                className="nav-link"
                to="business"
              >
                Business
              </Link>
            </li>
            <li className={`nav-item`}>
              <Link
                className="nav-link"
                to="general"
              >
                General
              </Link>
            </li>
            <li className={`nav-item`}>
              <Link
                className="nav-link"
                to="health"
              >
                Health
              </Link>
            </li>
            <li className={`nav-item`}>
              <Link
                className="nav-link"
                to="science"
              >
                Science
              </Link>
            </li>
            <li className={`nav-item`}>
              <Link
                className="nav-link"
                to="sports"
              >
                Sports
              </Link>
            </li>
            <li className={`nav-item`}>
              <Link
                className="nav-link"
                to="technology"
              >
                Technology
              </Link>
            </li>
          </ul>
          <select
            className="form-select"
            value={country}
            onChange={settingCountry}
          >
            <option value="ae">United Arab Emirates</option>
            <option value="ar">Argentina</option>
            <option value="at">Austria</option>
            <option value="au">Australia</option>
            <option value="be">Belgium</option>
            <option value="bg">Bulgaria</option>
            <option value="br">Brazil</option>
            <option value="ca">Canada</option>
            <option value="ch">Switzerland</option>
            <option value="cn">China</option>
            <option value="co">Colombia</option>
            <option value="cu">Cuba</option>
            <option value="cz">Czech Republic</option>
            <option value="de">Germany</option>
            <option value="eg">Egypt</option>
            <option value="fr">France</option>
            <option value="gb">United Kingdom</option>
            <option value="gr">Greece</option>
            <option value="hk">Hong Kong</option>
            <option value="hu">Hungary</option>
            <option value="id">Indonesia</option>
            <option value="ie">Ireland</option>
            <option value="il">Israel</option>
            <option value="in">India</option>
            <option value="it">Italy</option>
            <option value="jp">Japan</option>
            <option value="kr">South Korea</option>
            <option value="lt">Lithuania</option>
            <option value="lv">Latvia</option>
            <option value="ma">Morocco</option>
            <option value="mx">Mexico</option>
            <option value="my">Malaysia</option>
            <option value="ng">Nigeria</option>
            <option value="nl">Netherlands</option>
            <option value="no">Norway</option>
            <option value="nz">New Zealand</option>
            <option value="ph">Philippines</option>
            <option value="pl">Poland</option>
            <option value="pt">Portugal</option>
            <option value="ro">Romania</option>
            <option value="rs">Serbia</option>
            <option value="ru">Russia</option>
            <option value="sa">Saudi Arabia</option>
            <option value="se">Sweden</option>
            <option value="sg">Singapore</option>
            <option value="si">Slovenia</option>
            <option value="sk">Slovakia</option>
            <option value="th">Thailand</option>
            <option value="tr">Turkey</option>
            <option value="tw">Taiwan</option>
            <option value="ua">Ukraine</option>
            <option value="us">United States</option>
            <option value="ve">Venezuela</option>
            <option value="za">South Africa</option>
          </select>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
