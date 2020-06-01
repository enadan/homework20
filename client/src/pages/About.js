import React from "react";

import Jumbotron from 'react-bootstrap/Jumbotron';

function About() {
  return (
    <div class="container">
        <Jumbotron className="mt-4 bg-white">
        <h1 class="display-6 text-info">About me</h1>
        <hr class="my-4"/>
        <div class="container">
            <div class="row">
                <img src="assets/images/stp.JPG" class="img-fluid float col-6" alt="About"/>
                <p class="float-right col-6">
                    I'm Jonathon Lee, family man with 2 kids and a beautiful wife, and enthusiastic road biker and
                    mechanic. Current
                    occupation is Financial Advisor working for Merrill Lynch, and looking to pile up knowldege in
                    coding with hope of getting into tech field in a near future.
                </p>
            </div>
        </div>
        </Jumbotron>
    </div>

  );
}

export default About;
