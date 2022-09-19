import React from "react";
import Navbar1 from "./Navbar1";

const Banner = () => {
  return (
    <div className="banner-img">
      <Navbar1 />
      <div className="container">
        <div className="row">
          <div className="col-lg-9 col-md-7 col-12">
            <div className="fantom_text">
              <h1 className="text-uppercase">fantom network</h1>
              <p className="text-white">
                The Fantom Network is an extremely fast growing Network and FTM
                is <br /> well priced itself, with a lot of room is grow.
              </p>
              <div className=" nav_btn">
                <button className="me-3 text-uppercase">audit</button>
                <button className="text-uppercase">connect</button>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-5 col-12">
            <div className="ul_div">
              <ul className="d-flex list-unstyled">
                <li>
                  <div className="square">
                    <img
                      src="Assets/20.svg"
                      alt=""
                      className="w-50 shape_img"
                    />
                  </div>
                </li>
                <li className="ms-5">
                  <p className="mb-0 text-white">525356210.52</p>
                  <p className="text-muted" style={{ fontSize: "12px" }}>
                    Ref Rewards
                  </p>
                </li>
              </ul>
              <ul className="d-flex list-unstyled">
                <li>
                  <div className="square">
                    <img
                      src="Assets/13.svg"
                      alt=""
                      className="w-50 shape_img"
                    />
                  </div>
                </li>
                <li className="ms-5">
                  <p className="mb-0 text-white">3256</p>
                  <p className="text-muted" style={{ fontSize: "12px" }}>
                    Total User
                  </p>
                </li>
              </ul>
              <ul className="d-flex list-unstyled">
                <li>
                  <div className="square">
                    <img
                      src="Assets/23.svg"
                      alt=""
                      className="w-25 shape_img"
                    />
                  </div>
                </li>
                <li className="ms-5">
                  <p className="mb-0 text-white">525356210.52</p>
                  <p className="text-muted" style={{ fontSize: "12px" }}>
                    Total Stacked
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
