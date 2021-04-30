import React from 'react';

const AboutPage = ({ business_name }) => {
  return (

    <body id="page-top" style="background-color:#ebeeff;font-family:karla;width:55%;margin: 0 auto;">
      <br>
      <h2 style="font-family:karla;width:50%;color:#7086FF;text-align:center;margin: 0 auto;">Villagr's Mission</h2><br><a href="https://www.villagr-us.com/#/">Back to Homepage</a>
      <div>
          <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="600" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FdSs0rJgDDpYqgtVMTLmzdB%2FVillagr-eCommerce-Service-Hackathon%3Fnode-id%3D34%253A3131%26viewport%3D509%252C278%252C0.13355758786201477%26scaling%3Dscale-down" allowfullscreen></iframe>
      </div>

      <h5 style="font-family: karla;margin: 0 auto;color:#7086FF;">Explore Prototype Gallery Here</h5>
      <h3 style="font-family: karla;color:#7086FF;"><b>How much does our patronage help a business heal from this pandemic?</b></h3>
      <div style="color:#7086FF;">
          <p>Villagr is a web application that allows users to search and browse local service providers, prioritizing businesses based on each company's critical need, rather than rating or popularity.
          <br></br>
          Villagr ranks the injury a business has sustained from the pandemic using data from the SBA's Economic Injury Disaster Loan Program. All need's are urgent, but the scale of the damage on a specific small business is not always clear and can have many surprises.
          <br></br>
          Villagr brings a user the opporunity to know just how far their business is helping a community recover while offering the convenience of a map based interface. Users can discover how to become Village Champions for their own communities or any place they visit. Our user may even discover a terrific new business to help that they never would have otherwise found.
          <br></br>
          Please explore and get familiar with the filters for all the businesses that Villagr has identified can benefit the most in this recovery. Start the path for becoming your Village Hero.</p>
          <br></br>
      </div>
  
      <h4 style="font-family: karla;color:#7086FF;">View Our Concept Demo Here:</h4>
      <div><a href="https://www.villagr-us.com/#/">Back to Homepage</a></div>
      <br></br>

    </body>
  )
}

export default AboutPage;