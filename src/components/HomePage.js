import React from 'react'
import Product from './Product'

function HomePage() {
  return (
    <div className='home'>
     <img className='home__image' src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt='home_image'></img>
     <div className='home__row'>
     <Product id={1} title='Atomic Habits. Tiny Changes, Remarkable Results' price={78} rating={5} image='https://m.media-amazon.com/images/I/81YkqyaFVEL._AC_UF1000,1000_QL80_.jpg'></Product>
     <Product id={1} title='Atomic Habits. Tiny Changes, Remarkable Results' price={78} rating={5} image='https://m.media-amazon.com/images/I/81YkqyaFVEL._AC_UF1000,1000_QL80_.jpg'></Product>
     </div>
     <div className='home__row'>
     <Product id={1} title='Atomic Habits. Tiny Changes, Remarkable Results' price={78} rating={5} image='https://m.media-amazon.com/images/I/81YkqyaFVEL._AC_UF1000,1000_QL80_.jpg'></Product>
     <Product id={1} title='Atomic Habits. Tiny Changes, Remarkable Results' price={78} rating={5} image='https://m.media-amazon.com/images/I/81YkqyaFVEL._AC_UF1000,1000_QL80_.jpg'></Product>
     <Product id={1} title='Atomic Habits. Tiny Changes, Remarkable Results' price={78} rating={5} image='https://m.media-amazon.com/images/I/81YkqyaFVEL._AC_UF1000,1000_QL80_.jpg'></Product>
     </div>
     <div className='home__row'>
     <Product id={1} title='Atomic Habits. Tiny Changes, Remarkable Results' price={78} rating={5} image='https://m.media-amazon.com/images/I/81YkqyaFVEL._AC_UF1000,1000_QL80_.jpg'></Product>
    
     </div>
    </div>
  )
}

export default HomePage
