
import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (

<body className="w3-light-grey">

<div className="w3-bar w3-white w3-large">
  <a href="#" className="w3-bar-item w3-button w3-red w3-mobile"><i className="fa fa-bed w3-margin-right"></i>Go Places </a>
  <a href="#rooms" className="w3-bar-item w3-button w3-mobile">Places</a>
  <a href="#about" className="w3-bar-item w3-button w3-mobile">Journey</a>
  <a href="#contact" className="w3-bar-item w3-button w3-right w3-light-grey w3-mobile">Book Now</a>
</div>

<header className="w3-display-container w3-content headerContainer" >
  <img className="w3-image headerImage" src="images/hotel.jpg"/ >
  <div className="w3-display-left w3-padding w3-col l6 m8">
    <div className="w3-container w3-red">
      <h2><i className="fa fa-bed w3-margin-right"></i>What you want to search?</h2>
    </div>
    <div className="w3-container w3-white w3-padding-16">
      <form action="/action_page.php" target="_blank">
        <div className="w3-row-padding commonMargin" >
          <div className="w3-full w3-margin-bottom">
            <input className="w3-input w3-border" type="text" placeholder="Stores, Beaches, ATM" name="CheckIn" required/>
          </div>
        </div>
        <div className="w3-row-padding commonMargin8">
          <div className="w3-full w3-margin-bottom">
            <label><i className="fa fa-male"></i> Radius</label>
            <input className="w3-input w3-border" type="number" value="1" name="Adults" min="1" max="6"/>
          </div>
        </div>
        <button className="w3-button w3-dark-grey" type="submit"><i className="fa fa-search w3-margin-right"></i> Search places</button>
      </form>
    </div>
  </div>
</header>


<div className="w3-content contentContainer" >

  <div className="w3-container w3-margin-top" id="rooms">
    <h3>Suggestions!!!</h3>
    <p>We have suggested things based on your preference and past searches</p>
  </div>



  <div className="w3-row-padding w3-padding-16">

    <div className="w3-third w3-margin-bottom">
      <img src="images/room_single.jpg" className ="fullWidth"/>
      <div className="w3-container w3-white">
        <h3>Beaches</h3>
      </div>
    </div>

    <div className="w3-third w3-margin-bottom">
      <img src="images/room_double.jpg" className ="fullWidth"/>
      <div className="w3-container w3-white">
        <h3>Restaurant</h3>
      </div>
    </div>

    <div className="w3-third w3-margin-bottom">
      <img src="images/room_deluxe.jpg" className ="fullWidth"/>
      <div className="w3-container w3-white">
        <h3>Bars</h3>
      </div>
    </div>

    <div className="w3-third w3-margin-bottom">
      <img src="images/room_deluxe.jpg" className ="fullWidth"/>
      <div className="w3-container w3-white">
        <h3>Hotels</h3>
      </div>
    </div>

    <div className="w3-third w3-margin-bottom">
      <img src="images/room_deluxe.jpg" className ="fullWidth"/>
      <div className="w3-container w3-white">
        <h3>Parks</h3>
      </div>
    </div>

    <div className="w3-third w3-margin-bottom">
      <img src="images/room_deluxe.jpg" className ="fullWidth"/>
      <div className="w3-container w3-white">
        <h3>Stores</h3>
      </div>
    </div>



  </div>

  <div className="w3-row-padding" id="about">
    <div className="w3-col l4 m7">
      <h3>About</h3>
      <h6>We are commited to provide the best searches for places around you. Our algorithm focuses on providing the best experience
      to the people no matter what they searches and how they searches</h6>
    </div>
  </div>


  <div className="w3-panel w3-red w3-leftbar w3-padding-32">
    <h6><i className="fa fa-info w3-deep-orange w3-padding w3-margin-right"></i> On demand, we can offer playstation, babycall, children care, dog equipment, etc.</h6>
  </div>

  <div className="w3-container">
    <h3>Our Recommendation for you... </h3>
    <h6>You can find anything  anywhere in the world:</h6>
  </div>

  <div className="w3-row-padding w3-padding-16 w3-text-white w3-large">
    <div className="w3-half w3-margin-bottom">
      <div className="w3-display-container">
        <img src="images/cinqueterre.jpg"  className = "fullWidth"/>
        <span className="w3-display-bottomleft w3-padding">Cinque Terre</span>
      </div>
    </div>
    <div className="w3-half">
      <div className="w3-row-padding commonMargin" >
        <div className="w3-half w3-margin-bottom">
          <div className="w3-display-container">
            <img src="images/newyork2.jpg"  className = "fullWidth"/>
            <span className="w3-display-bottomleft w3-padding">New York</span>
          </div>
        </div>
        <div className="w3-half w3-margin-bottom">
          <div className="w3-display-container">
            <img src="images/sanfran.jpg"  className = "fullWidth"/>
            <span className="w3-display-bottomleft w3-padding">San Francisco</span>
          </div>
        </div>
      </div>
      <div className="w3-row-padding commonMargin" >
        <div className="w3-half w3-margin-bottom">
          <div className="w3-display-container">
            <img src="images/pisa.jpg"  className = "fullWidth"/>
            <span className="w3-display-bottomleft w3-padding">Pisa</span>
          </div>
        </div>
        <div className="w3-half w3-margin-bottom">
          <div className="w3-display-container">
            <img src="images/paris.jpg" className = "fullWidth"/>
            <span className="w3-display-bottomleft w3-padding">Paris</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


<footer className="w3-padding-32 w3-black w3-center w3-margin-top">
  <h5>Find Us On</h5>
  <div className="w3-xlarge w3-padding-16">
    <i className="fa fa-facebook-official w3-hover-opacity"></i>
    <i className="fa fa-instagram w3-hover-opacity"></i>
    <i className="fa fa-snapchat w3-hover-opacity"></i>
    <i className="fa fa-pinterest-p w3-hover-opacity"></i>
    <i className="fa fa-twitter w3-hover-opacity"></i>
    <i className="fa fa-linkedin w3-hover-opacity"></i>
  </div>
</footer>


</body>



        )
  }
})
