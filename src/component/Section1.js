import React from 'react'

const Section1 = () => {
  return (
    <div className="section1">
    <div className='container'>
<div className="row justify-content-center mob_row">
    <div className="col-md-3 col-lg-3 col-12 pt-4"> 
    <p className='text-white'>Total Invested</p>
    <img src="Assets/14.svg" alt="" className='img-fluid mb-3 img_sec1'/>
    <p className='mb-0 total'>352556</p>
    <p className='mb-0 matic'>MATIC</p>
    </div>
    <div className="col-md-3 col-lg-3 col-12 pt-4">
    <p className='text-white'>Total Withdraw</p>
    <img src="Assets/05.svg" alt="" className='img-fluid mb-3 img_sec1'/>
    <p className='mb-0 total'>352556</p>
    <p className='mb-0 matic'>MATIC</p>
    </div>
    <div className="col-md-3 col-lg-3 col-12 pt-4">
    <p className='text-white'>Total Reinvested</p>
    <img src="Assets/16.svg" alt="" className='img-fluid mb-3 img_sec1'/>
    <p className='mb-0 total'>352556</p>
    <p className='mb-0 matic'>MATIC</p>
    </div>
    <div className="col-md-3 col-lg-3 col-12">
        <div className="card_sect1">
        <p>WITHDRAWAL</p>
        <p className='mb-0'>352556</p>
    <p className='mb-0' style={{fontSize: '10px', color: 
    '#47525d'}}>MATIC</p>
    <div className=" nav_btn text-center mt-4">
        <button classna="me-3 text-uppercase">Withdraw</button>
        </div>
        </div>
    
    </div>
</div>
    </div>
    </div>
  )
}

export default Section1