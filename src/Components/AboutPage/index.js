import React from 'react';

const AboutPage = ({ business_name }) => {
  return (

    <div>
      <br/>
      <h1 style={{fontFamily: "karla", width: "50%", color: "#7086FF", textAlign: "center", margin: "0 auto"}}>Villagr's Mission</h1><br/>
      <p>How much will a customer help local businesses recover from this pandemic?</p><br/>
      
      <video src="../../public/demo_video.mp4" controls style={{width: "800px"}}></video>
      
      <br/>
      <div style={{width: "80%", textAlign: "left", margin: "0 auto"}}>
        <p>Villagr is a web application that allows users to search and browse local service providers, prioritizing businesses based on each company's critical need, rather than rating or popularity.</p>
        <br/>
        <p>Villagr ranks the injury a business has sustained from the pandemic using data from the SBA's Economic Injury Disaster Loan Program. All need's are urgent, but the scale of the damage on a specific small business is not always clear and can have many surprises.</p>
        <br/>
      </div>
      <div>
          <iframe title={"Prodict Demo"} style={{border: "1px solid rgba(0, 0, 0, 0.1)", height: "600px", width: "800px"}} src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FdSs0rJgDDpYqgtVMTLmzdB%2FVillagr-eCommerce-Service-Hackathon%3Fnode-id%3D34%253A3131%26viewport%3D509%252C278%252C0.13355758786201477%26scaling%3Dscale-down" allowfullscreen>
          </iframe>
      </div>
      <h5 style={{fontFamily: "karla", margin: "0 auto", color: "#7086FF", }}>Gallery</h5>
      <br/>
      <div style={{width: "80%", textAlign: "left", margin: "0 auto"}}>
        {/* <div style={{color: "#7086FF"}}> */}
        <p>Villagr brings a user the opporunity to know just how far their business is helping a community recover while offering the convenience of a map based interface. Users can discover how to become Village Champions for their own communities or any place they visit. Our user may even discover a terrific new business to help that they never would have otherwise found.
        <br/>
        <br/>
        Please explore and get familiar with the filters for all the businesses that Villagr has identified can benefit the most in this recovery. Start the path for becoming your Village Hero.</p>
        <br/>
      </div>
      <br/>
    </div>

  )
}

export default AboutPage;