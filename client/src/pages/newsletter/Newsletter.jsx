import React from 'react'
import "./Newsletter.css"

const Newsletter = () => {
  return (
    <div>
     

        <div className="border">
            <section className="news-letter" id="News-letter">
                <div className="news ">
                <div className="container">
                    <h1 className="news-heading">Subscribe For More updates from Artisan Studios</h1>
                    <form action="https://formsubmit.co/vaibdix1@gmail.com" method="POST">
                    <input type="email"name="data" required placeholder="Enter your email address" />
                    <button className="bt">Subscribe</button>
                    </form>
                </div>
                </div>
            </section>
        </div>

    </div>
  )
}

export default Newsletter