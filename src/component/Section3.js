import React from "react";

const Section3 = () => {
  return (
    <div className="container">
      <div className="row">
        <h1 className="text-center text-uppercase prof_sec">profit plans</h1>
        <div className="col-lg-6 col-md-6 col-12 card_center">
          <div className="card bg-dark profit_card">
            <div className="row">
              <h5 className="text-white text-uppercase text-center mb-5">
                7% Daily profit
              </h5>
              <div className="col-sm-6">
                <p className="text-secondary text-uppercase day">Days</p>
                <p className="text-white">01</p>
                <p className="text-secondary">Total Return</p>
                <p className="text-white">107 %</p>
              </div>
              <div className="col-sm-6">
                <p className="text-secondary text-uppercase day">
                  you will get % per day
                </p>
                <p className="text-secondary pt-4">Withdrawal</p>
                <p className="text-white">Anytime</p>
              </div>
              <p className="text-white text-center day">Enter Amount</p>
              <input type="text" className="form-control input_text mb-3" placeholder="0.0"/>
              <button className="form-control text-uppercase stake_btn"> stake matic</button>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-12 card_center">
          <div className="card bg-dark profit_card">
            <div className="row">
              <h5 className="text-white text-uppercase text-center mb-5">
              locked 14% daily profit
              </h5>
              <div className="col-sm-6">
                <p className="text-secondary text-uppercase day">Days</p>
                <p className="text-white">01</p>
                <p className="text-secondary">Total Return</p>
                <p className="text-white">114 %</p>
              </div>
              <div className="col-sm-6">
                <p className="text-secondary text-uppercase day">
                  you will get % per day
                </p>
                <p className="text-secondary pt-4">Withdrawal</p>
                <p className="text-white">After 30 days</p>
              </div>
              <p className="text-white text-center day">Enter Amount</p>
              <input type="text" className="form-control input_text mb-3" placeholder="0.0"/>
              <button className="form-control text-uppercase stake_btn"> stake matic</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
