import React, { useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import SingleBanner from '../../components/Banner/SingleBanner'
import Footer1 from '../../components/Footer/Footer1'
import Footer2 from '../../components/Footer/Footer2'
import contact from '../../assets/images/contact.jpg'
import './ExtraPages.css'

const Contact = () => {


    useEffect(() => {
        window.scrollTo(0,0)
      }, [])
    return (
        <div className='extrapage'>
            <Navbar reloadNavbar={false}/>
            <SingleBanner
                bannerimage={contact}
            />

            <form className='extrapageform'>
                <div className='fromgroup'>
                    <label htmlFor="">Name</label>
                    <input type="text" />
                </div>

                <div className='fromgroup'>
                    <label htmlFor="">Email</label>
                    <input type="email" />
                </div>

                <div className='fromgroup'>
                    <label htmlFor="">Message</label>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>

                <button>Submit</button>
            </form>

            <Footer1 />
            <Footer2 />
            Contact</div>
    )
}

export default Contact