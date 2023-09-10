import React from 'react'
import './HomeCategory.css'
import img1 from '../../assets/images/1.png'
import img2 from '../../assets/images/2.png'
import img3 from '../../assets/images/3.png'
import img4 from '../../assets/images/4.png'

const HomeCategory = () => {
  return (
    <div className='homeCategories'>
        <div className='container'>
            <img src={img1} alt='img1'/>
            <div className='content'>
                <h1>Fresh Vegetables at your doorstep</h1>
                <p>Shop Vegetables Now</p>
            </div>
        </div>
        <div className='container'>
            <img src={img2} alt='img1'/>
            <div className='content'>
                <h1>Fresh Fruits at your doorstep</h1>
                <p>Shop Fruits Now</p>
            </div>
        </div>
        <div className='container'>
            <img src={img3} alt='img1'/>
            <div className='content'>
                <h1>Meat at your doorstep</h1>
                <p>Shop Meat Now</p>
            </div>
        </div>
        <div className='container'>
            <img src={img4} alt='img1'/>
            <div className='content'>
                <h1>Plants at your doorstep</h1>
                <p>Shop Plants Now</p>
            </div>
        </div>
    </div>
  )
}

export default HomeCategory
