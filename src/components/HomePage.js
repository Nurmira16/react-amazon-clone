import React from 'react'
import Product from './Product'

function HomePage() {
  return (
    <div className='home'>
     <img className='home__image' src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt='home_image'></img>
     <div className='home__row'>
     <Product id={1} title='Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones ' price={13.99} rating={5} image='https://m.media-amazon.com/images/I/81YkqyaFVEL._AC_UF1000,1000_QL80_.jpg'></Product>
     <Product id={2} title='MageGee Portable 60% Mechanical Gaming Keyboard, MK-Box LED Backlit Compact 68 Keys Mini Wired Office Keyboard with Red Switch for Windows Laptop PC Mac - Black/Grey' price={29.99} rating={4} image='https://m.media-amazon.com/images/I/618zZ7u3sUL._AC_UF894,1000_QL80_.jpg'></Product>
     </div>
     <div className='home__row'>
     <Product id={3} title='LOVECASA White and Gold Dinnerware Sets, Stoneware Dish Set for 4, 16 Piece Kitchen Plates and Bowls Sets' price={119.99} rating={4} image='https://m.media-amazon.com/images/I/71TJrYmtR7L.jpg'></Product>
     <Product id={4} title='TP-Link Deco AX3000 WiFi 6 Mesh System - Covers up to 4500 Sq.Ft, Replaces Wireless Router and Extender, 3 Gigabit Ports per Unit, Supports Ethernet Backhaul (Deco X55, 2-Pack)' price={138.50} rating={5} image='https://m.media-amazon.com/images/I/41DFQxGBlhL._AC_SX466_.jpg'></Product>
     <Product id={5} title='HP 14" HD Laptop Newest Stream, Intel Celeron Quad-Core Processor, 8GB DDR4 RAM, 64GB eMMC, 1 Year Office 365, WiFi, Bluetooth, HDMI, Webcam, USB Type-A&C w/GM Accessory' price={219.99} rating={4} image='https://m.media-amazon.com/images/I/413eiUutzJL._AC_.jpg'></Product>
     </div>
     <div className='home__row'>
     <Product id={6} title='TP-Link AX1800 WiFi 6 Router (Archer AX21) – Dual Band Wireless Internet Router, Gigabit Router, Easy Mesh, Works with Alexa - A Certified for Humans Device' price={74.99} rating={5} image='https://m.media-amazon.com/images/I/51NPaIorJiL._AC_SX466_.jpg'></Product>
    
     </div>
    </div>
  )
}

export default HomePage
