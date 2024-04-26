import React from 'react'
import Logo from "../Logo/Logo"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  return (
        <div className="col-12 d-lg-flex justify-content-between col-lg-10 m-auto">
            <div className="col-5 d-flex align-items-center">
          <ul  className="d-flex align-items-center ps-0 mt-3"
            style={{ listStyle: "none", fontWeight: "400" }}
          >
            <li className="dropdown">
              <button
                className="btn"
                type="button"
                id="languageDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                EN
              </button>
              {/* <ul className="dropdown-menu" aria-labelledby="languageDropdown">
                {i18n.language === "ar" && (
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={changeLanguageEn}
                    >
                      EN
                    </button>
                  </li>
                )}
                {i18n.language === "en" && (
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={changeLanguageAr}
                    >
                      AR
                    </button>
                  </li>
                )}
              </ul> */}
            </li>
          </ul>
   


          <div className="position-relative col-12 col-lg-6 ms-3">
          <input
            type="email"
            placeholder="search"
            className="col-12 ps-2 py-1"
            style={{color:"#9098b1",borderRadius:"5px",border:"1px solid #9098b1"}}
            />
            <p style={{position:"absolute", top:"5px", right:"12px"}}>f</p>
        </div>
        </div>

        <div className="col-2 d-flex mt-2 flex-column align-items-center">
          
              <Logo />
              <h3
                className="mt-1 mx-3"
                style={{ color: "#22262A", fontWeight: "700", fontSize:"20px" }}
              >
                E-Comm
              </h3>
          </div>

          <div className='col-5 d-flex align-items-center justify-content-between'>
          <ul
              className="d-flex justify-content-end align-items-center mt-3 col-10"
              style={{ listStyle: "none", fontWeight: "500" }}
            >
              <li>
                <h6
                  className="text-decoration-none border py-2 px-4 rounded-3 me-1"
                >
                  Sign In
                </h6>
              </li>
              <li>
                <h6
                  className="text-decoration-none border ms-3 py-2 px-4 rounded-3"
                >
                  Sign Up
                </h6>
              </li>
            </ul>
            <div>
              <h1>5</h1>
            </div>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
        </div>
  )
}

export default Navbar