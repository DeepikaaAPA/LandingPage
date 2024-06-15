import reviews from "../Data/reviews.json";
import { ReviewCard } from "./ReviewCard";

export function Reviews() {
  return (
    // <!-- Reviews-->
    <section className="testimonials text-center bg-light">
      <div className="container">
        <h2 className="mb-5">What people are saying...</h2>
        <div className="row">
          {reviews.map((review) => (
            <ReviewCard review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}
