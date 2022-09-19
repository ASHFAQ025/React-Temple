import React from 'react'
import { BsArrowRight } from "react-icons/bs";
const Section6 = () => {
  return (
    <div className='world_imgl'>
<div className="container">
    <div className="row justify-content-center text-center">
        <h1 className='text-center text-uppercase prof_sec'>referral rewards</h1>
        <p className='text-capitalize text-white text-center py-5'>having a 5 tier system in place offers all investors a chance to get rewards paid directly into their
            wallets by bringing new <br /> users to the platform. we've put this in place to give you benefits of
            bringing friends, family and followers to the <br /> platform. you're giving them the opportunity to earn
            great and sustainable ROI, so you should benefit too!
        </p>
        <div className="col-md-2 mob_space">
        <div className="text-white">
         <h3>Level</h3>
         <h3>1</h3>
         <img src="Assets/12.svg" alt="" className="tablet_img1" />
          <span><BsArrowRight className='arrow_right ms-4'/></span>
         </div>
        </div>
        <div className="col-md-2 mob_space">
        <div className="text-white">
         <h3>Level</h3>
         <h3>2</h3>
        <img src="Assets/08.svg" alt="" className="tablet_img" />
        <span><BsArrowRight className='arrow_right'/></span>
         </div>
        </div>
        <div className="col-md-2 mob_space">
        <div className="text-white">
         <h3>Level</h3>
         <h3>3</h3>
         <img src="Assets/09.svg" alt="" className="tablet_img" />
         <span><BsArrowRight className='arrow_right'/></span>
         </div>
        </div>
        <div className="col-md-2 mob_space">
        <div className="text-white">
         <h3>Level</h3>
         <h3>4</h3>
         <img src="Assets/10.svg" alt="" className="tablet_img" />
         <span><BsArrowRight className='arrow_right'/></span>
         </div>
        </div>
        <div className="col-md-2 mob_space">
        <div className="text-white">
         <h3>Level</h3>
         <h3>5</h3>
         <img src="Assets/11.svg" alt="" className="tablet_img" />
         </div>
        </div>
        <div className="py-5">
        <input type="text" placeholder= ' https://fantomworld.io?ref=0x5C4D5c7eC773801f237fAea2C1D6' className='input_last'/>
        <button className='copy_link'>copy link</button>
        </div>
    </div>
</div>
    </div>
  )
}

export default Section6