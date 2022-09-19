import React from "react";

const Section2 = () => {
  return (
    <div className="container-fluid secction2">
      <div className="row">
        <div className="text-center py-5 ">
          <img src="Assets/18.png" alt="" className="world_img" />
        </div>
        <div className="text-center world_para">
          <h1 className="text-uppercase text-center">What is fantom world ?</h1>
          <p className="fantom_para">
            Fantom world is a brand new project, brought to the Fantom Network,
            it's initial launch well be a ROI Dapp, giving investors the
            opportunity to grow <br /> their portfolios by staking their FTM to
            earn ROI throughout the courseof 30 days.
          </p>
          <p className="fantom_para">
            Any ROI Dapp comes with High Risk, however it's earning potential
            for investorsis extremly great. <br />
            Fantom world is designing for investors how want to lowertheir risk,{" "}
            <br />
            but stell earn great rewards. We offer two risk levels which will be{" "}
            <br />
            explained below.
          </p>
        </div>
        <div className="col-lg-6 col-md-6 col-12 p-0">
          <img src="Assets/04.png" alt="" className="w-100 h-100" />
        </div>
        <div className="col-lg-6 col-md-6 col-12 p-0">
          <img src="Assets/03.png" alt="" className="w-100" />
        </div>
      </div>
    </div>
  );
};

export default Section2;
