//import a from "../assets/img/";

export function ImageShow({ feature, index }) {
  const url = feature.img;

  const styles = {
    backgroundImage: "url(" + url + ")",
  };
  return (
    <div className="row g-0">
      <div
        //   {/*insert order class only for odd indexed items as we want to alternate the order for every row */}
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
