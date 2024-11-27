import { infoCreations } from "../../utils/CreationsInfo";
import '../../scss/components/Creations.scss'

function Creations() {

  return (
    <section className="content__creations">
      <h2>Our Creations</h2>
      {
        infoCreations.map((item, i) => (
          <div className="content__creations-info" key={i}>
            <img src={item.imgMobile} alt={item.title} />
            <p>{item.title}</p>
          </div>
        ))
      }
      <div className="content__creations-link">
        <a href="#">See all</a>
      </div>
    </section>
  )
}

export { Creations };