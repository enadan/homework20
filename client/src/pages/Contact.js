import React from "react";
// import Header from "../components/Header";
// import Footer from "../components/Footer";

function Contact() {
  return (
    <div class="container">
    <div class="jumbotron mt-4 bg-white">
        <h1 class="display-6 text-info">Contact</h1>
        <hr class="my-4"/>

        <form>
            <div class="form-group">
                <label for="exampleFormControlInput1">Name</label>
                <input type="name" class="form-control" id="exampleFormControlInput1" placeholder="enter your name"/>
            </div>

            <div class="form-group">
                <label for="exampleFormControlInput1">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1"
                    placeholder="name@example.com"/>
            </div>

            <div class="form-group">
                <label for="exampleFormControlTextarea1">Message</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
            </div>

            <button type="submit" class="btn btn-primary bg-info">Submit</button>
        </form>
    </div>
    </div>

  );
}

export default Contact;
