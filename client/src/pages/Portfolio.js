import React from "react";
// import Header from "../components/Header";
// import Footer from "../components/Footer";

var portfolios = [
    {
        name: "Java Script",
        link: "https://enadan.github.io/homework3/",
        github: "https://github.com/enadan/homework3",
        image: "homework3.png"
    },
    {
        name: "Day Palnner",
        link: "https://enadan.github.io/homework5/",
        github: "https://github.com/enadan/homework5",
        image: "homework5.png"
    },
    {
        name: "Weather Dashboard",
        link: "https://enadan.github.io/homework6/",
        github: "https://github.com/enadan/homework6",
        image: "homework6.png"
    },
    {
        name: "Express",
        link: "https://mysterious-eyrie-75080.herokuapp.com/",
        github: "https://github.com/enadan/homework11",
        image: "homework11.png"
    },
    {
        name: "MVC",
        link: "https://rocky-reef-43190.herokuapp.com/",
        github: "https://github.com/enadan/homework12",
        image: "homework12.png"
    },
    {
        name: "Fitness Tracker",
        link: "https://shrouded-wave-23683.herokuapp.com/",
        github: "https://github.com/enadan/homework13",
        image: "homework13.png"
    },
    {
        name: "Online/Offline Budget Trackers",
        link: "https://obscure-waters-53360.herokuapp.com/",
        github: "https://github.com/enadan/homework18",
        image: "homework18.png"
    },
];

function Portfolio() {


    function populatePortfolios() {
        var html = [];

        for (var i = 0; i < portfolios.length; i++) {
            var portfolio = portfolios[i];
            html.push(
                <div class="card col-5 py-4 mr-auto border-0">
                    <img src={"assets/images/" + portfolio.image} class="card-img-top"/>
                    <div class="card-body bg-info w-auto text-center">
                        
                    <h5 class="card-title">
                        <a target="_blank" href={portfolio.link} class="text-white">
                        {portfolio.name}
                        </a>
                    </h5>
                    <h6>
                    <a target="_blank" href={portfolio.github} class="text-white">
                        Github
                        </a>
                    </h6>
                    </div>
                </div>);
        }
        return html;        
    }

  return (
    <div class="container">
    <div class="jumbotron mt-4 bg-white">
        <h1 class="display-6 text-info">Portfolio</h1>
        <hr class="my-4"/>
        <div class="container">
            <div class="row">
                {populatePortfolios()}
            </div>
        </div>
    </div>

</div>

  );
}

export default Portfolio;
