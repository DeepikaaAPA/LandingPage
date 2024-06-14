export function FeatureCard({ feature }) {
  return (
    <div className="col-lg-4">
      <div className="features-icons-item mx-auto mb-0 mb-lg-3">
        <div className="features-icons-icon d-flex">
          <i className={feature.icon + " m-auto text-primary"}></i>
        </div>
        <h3>{feature.name}</h3>
        <p className="lead mb-0">{feature.description.short}</p>
      </div>
    </div>
  );
}
