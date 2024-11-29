import { infoCreations } from "../../utils/CreationsInfo";
import '../../scss/components/Creations.scss'
import { Link } from "./Link";

function Creations() {

  return (
    <section className="content__creations">
      <div className="content__creations-title">
        <h2>Our Creations</h2>
        <Link />

      </div>
      <div className="content__creations-grid">
        {
          infoCreations.map((item, i) => (
            <figure className="content__creations-info" key={i}>
              <img className="img--mobile" src={item.imgMobile} alt={item.title} />
              <img className="img--desktop" src={item.imgDesktop} alt={item.title} />
              <p>{item.title}</p>
            </figure>
          ))
        }
      </div>
      <div className="content__creations-link">
        <Link />
      </div>
    </section>
  )
}

export { Creations };