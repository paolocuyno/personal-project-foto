import React from "react";
import './About.css'
import about from '../../assets/about.jpg'

const About = () => {
  return (
    <div className="about">
      <h2>About Us</h2>
      <div className="img"><img src={about} alt='about image'/></div>
      <p>
        FOTO is a photo sharing site that was created for the purpose of photographers sharing their images that they have proudly shot and edited while also being a source of inspiration for staging shots, learning new techniques as well as finding some great locations to shoot visually stunning photos. 
      </p>
      <p>
        The platform was created to build a community of photographers who can come together with the common of interest of being the best photographer they can be. 
      </p>

      <p>In a world where social media is often inundated with unwanted ads, FOTO sets itself apart by being the go-to platform for both aspiring and professional photographers alike to form friendships through the connection of their mutual interest of photography.  </p>

      <p>With the 'Category' feature, community members will be able to find images that are most relevant to the category that they are most interested in seeing on their feed while also allowing users to edit the category of each image should they feel that it would fit another category better. </p>


    </div>
  );
};

export default About;