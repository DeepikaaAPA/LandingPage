export function ReviewCard({ review }) {
  return (
    <div className="col-lg-4">
      <div className="testimonial-item mx-auto mb-5 mb-lg-0">
        <img
          className="img-fluid rounded-circle mb-3"
          src={"./src/assets/img/" + review.pic}
          alt="..."
        />
        <h5>{review.name}</h5>
        <p className="font-weight-light mb-0">{review.review}</p>
      </div>
    </div>
  );
}
