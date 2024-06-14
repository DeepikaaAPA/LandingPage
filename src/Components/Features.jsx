import featuresList from "../Data/Features.json";
import { FeatureCard } from "./FeatureCard";
import { ImageShow } from "./ImageShow";
export function Features() {
  return (
    <>
      <section className="features-icons bg-light text-center">
        <div className="container">
          <div className="row">
            {featuresList.map((feature) => (
              <FeatureCard feature={feature} />
            ))}
          </div>
        </div>
      </section>
      {/* <!-- Image Showcases--> */}
      <section className="showcase">
        <div className="container-fluid p-0">
          {featuresList.map((feature, index) => (
            <ImageShow feature={feature} index={index} />
          ))}
        </div>
      </section>
    </>
  );
}
