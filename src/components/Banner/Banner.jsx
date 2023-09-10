import React from 'react'
import Slider from 'react-slick'
import './Banner.css'

const BannerSlider = () => {
    const data = [
        {
            id: 1,
            image: "https://images.pexels.com/photos/3962286/pexels-photo-3962286.jpeg?auto=compress&cs=tinysrgb&w=600",
            title: 'Fresh Vegetables & Fruits at your doorstep',
            description: 'We deliver fresh vegetables & fruits at your doorstep',
            button: 'htttps://www.google.com'
        },
        {
            id: 2,
            image: "https://images.pexels.com/photos/8805175/pexels-photo-8805175.jpeg?auto=compress&cs=tinysrgb&w=600",
            title: 'Fresh Vegetables & Fruits at your doorstep',
            description: 'Cherries and berries. Sweet peaches and nectarines. Summer baking season is here, and I couldn’t be more delighted.',
            button: 'htttps://www.google.com'
        }
    ]


    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };


    return (
        <div className='bannerslider'>
            <Slider className='bannerslider' {...settings}>
                {
                    data.map(item => {
                        return (
                            <div className='imagecont' key={item.id}>
                                <img src={item.image} alt='noimg' />
                                <div className='content'>
                                    <h1>{item.title}</h1>
                                    <span>{item.description}</span>
                                    <button>Shop More</button>
                                </div>
                            </div>
                        )
                    })
                }
            </Slider>
        </div>
    )
}

export default BannerSlider