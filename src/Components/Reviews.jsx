
import reviews from "../Data/reviews.json"

export function Reviews(){
    return (

        // <!-- Testimonials-->
    <section className="testimonials text-center bg-light">
      <div className="container">
        <h2 className="mb-5">What people are saying...</h2>
        <div className="row">
          <div className="col-lg-4">
            <div className="testimonial-item mx-auto mb-5 mb-lg-0">
              <img
                className="img-fluid rounded-circle mb-3"
                src="./src/assets/img/testimonials-1.jpg"
                alt="..."
              />
              <h5>Margaret E.</h5>
              <p className="font-weight-light mb-0">
                "This is fantastic! Thanks so much guys!"
              </p>
            </div>
          </div>
         
        </div>
      </div>
    </section>
    )
}