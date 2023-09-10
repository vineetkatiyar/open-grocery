import React from 'react'
import img1 from '../../assets/categorySidebar/1.png'
import img2 from '../../assets/categorySidebar/2.png'
import img3 from '../../assets/categorySidebar/3.png'
import img4 from '../../assets/categorySidebar/4.png'
import img5 from '../../assets/categorySidebar/5.png'
import img6 from '../../assets/categorySidebar/6.png'
import img7 from '../../assets/categorySidebar/7.png'
import img8 from '../../assets/categorySidebar/8.png'
import './CategorySidebar.css'

const CategorySidebar = () => {
    const data = [
        {
            id: 1,
            categoryimage: img1,
            categoryname: 'Fruits'
        },
        {
            id: 2,
            categoryimage: img2,
            categoryname: 'Vegetables'
        },
        {
            id: 3,
            categoryimage: img3,
            categoryname: 'Backery'
        },
        {
            id: 4,
            categoryimage: img4,
            categoryname: 'Meat'
        },
        {
            id: 5,
            categoryimage: img5,
            categoryname: 'Home care'
        },
        {
            id: 6,
            categoryimage: img6,
            categoryname: 'Plants'
        },
        {
            id: 7,
            categoryimage: img7,
            categoryname: 'Pet care'
        },
        {
            id: 8,
            categoryimage: img8,
            categoryname: 'Juices'
        }
    ]
    return (
        <div className='categorysidebar'>
            {
                data.map((item) => {
                    return (
                        <div className='category'>
                            <img src={item.categoryimage} alt='categoryimage' />
                            <h3>{item.categoryname}</h3>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CategorySidebar