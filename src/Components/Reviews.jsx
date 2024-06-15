// import reviews from "../Data/reviews";
import { ReviewCard } from "./ReviewCard";
import { Data } from "../Data/reviews";

export function Reviews() {
  return (
    // <!-- Reviews-->
    <section className="testimonials text-center bg-light">
      <div className="container">
        <h2 className="mb-5">What people are saying...</h2>
        <div className="row">
          {Data.map((review) => (
            <ReviewCard review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}
