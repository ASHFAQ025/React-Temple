import React from 'react'
import { BsAlarm } from "react-icons/bs";
const Section4 = () => {
  return (
    <div className='container'>
        <div className="row section4">
            <div className="text-center lotery">
            <img src="Assets/07.svg" alt="" className='lottery_img'/>
            <h1 className='text-uppercase'>lotery system</h1>
            <p>Unique Is The Aim Of Our Game!</p>
            <p>Fantom World Has A Lottery System, This Is How </p>
            </div>
            <div className="blue_bg">
                <div className="green_bg">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-12 mob_space">
                        <img src="Assets/06.svg" alt="" />
                         <span className='img_text text-light'>Pooled Percentage</span>
                        </div>
                        <div className="col-lg-5 col-md-5 col-12 mob_space">
                        <img src="Assets/06.svg" alt="" />
                         <span className='img_text text-light'>Previous Reward - 0 Matic (= $0 USD)</span>
                        </div>
                        <div className="col-lg-3 col-md-3 col-12 mob_space">
                         <img src="Assets/21.svg" alt="" />
                         <span className='img_text text-light'>Previous Winner.</span>
                        </div>
                        <p className='mb-0 text-light'>Every Investment In A 12 Hour Period. 0.5% of it will be pooled towards a lottery. at the 
                            end of the lotterys 12 Hours. one <br />
                            wallet will be chosen to win the rewards! the number could be very high and we know we will see
                            Some big wind given <br /> bsck to the community!
                        </p>
                    </div>
                </div>
                <h2 className='text-center text-light my-3'> <BsAlarm  className='me-2' style={{fontSize: '26px'}}/> 11<sub>H</sub> 59<sub>M</sub> 20<sub>S</sub></h2>
            </div>
        </div>

    </div>
  )
}

export default Section4