//import a from "../assets/img/";

export function ImageShow({ feature, index }) {
  const url = "./src/assets/img/" + feature.img;

  const styles = {
    backgroundImage: "url(" + url + ")",
  };
  return (
    <div className="row g-0">
      <div
        className={
          "col-lg-6 text-white showcase-img " + (index % 2 && " order-lg-2")
        }
        style={styles}
      ></div>
      <div
        className={
          "col-lg-6  my-auto showcase-text " + (index % 2 && " order-lg-1")
        }
      >
        <h2>{feature.description.title}</h2>
        <p className="lead mb-0">{feature.description.long}</p>
      </div>
    </div>
  );
}
