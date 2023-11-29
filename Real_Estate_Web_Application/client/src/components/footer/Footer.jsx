import React from 'react'
import classes from './footer.module.css'

const Footer = () => {
  return (
    <footer>
      <div className={classes.wrapper}>
        <div className={classes.col}>
          <h2>Regarding of this app </h2>
          <p>
          This real estate software is revolutionizing the way that people look for properties. It makes looking for the perfect house or investment easier and is designed with ease in mind. From the convenience of your smartphone, peruse a large database of listings, use exact filters to choose properties that meet your requirements, and take virtual tours of the properties. Keep favorites for later and be notified when prices or listings change. Sellers may simply track leads, communicate with possible purchasers, and sell their homes. This real estate software simplifies the property journey and improves the real estate experience, making it a vital tool for sellers and buyers alike.
          </p>
        </div>
        <div className={classes.col}>
          <h2>Contact US</h2>
          <span>Phone: +555 129 456</span>
          <span>website: www.RealEestateRover.com</span>
          <span>gmail: realestaterover@gmail.com</span>
        </div>
        <div className={classes.col}>
          <h2>Location</h2>
          <span>Continent: Europe</span>
          <span>Country: Germany</span>
          <span>Current Location: Munich</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer