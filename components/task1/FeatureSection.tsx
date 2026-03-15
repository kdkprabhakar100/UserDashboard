import FeatureCard from "./FeatureCard"
import { features } from "./featuresData"
import "./feature.css"

export default function FeatureSection() {
  return (
    <section className="feature-section">

         <div className="feature-note">     
           <h1>
             Note: Hover the component to view the animation & Click the arrow icon
           </h1>
         </div>

        <div className="feature-small">
            <div className="feature-frame">
                <div className="feature-subtitle"> <p >Your SkillShikshya Journey</p></div>

                <div className="feature-title">               
                     <h1 >
                         Step In. Skill Up. Stand Out. 🚀
                    </h1>
                </div>
            </div>

<div className="features-grid" style={{ marginTop: "40px" }}>

  
  <FeatureCard
    title={features[0].title}
    subtitle={features[0].subtitle}
    description={features[0].description}
    color={features[0].color}
    image={features[0].image}
  />

  
    <div>  <FeatureCard
    title={features[1].title}
    subtitle={features[1].subtitle}
    description={features[1].description}
    color={features[1].color}
    image={features[1].image}
    reverse
  />
</div>
  
  <FeatureCard
    title={features[2].title}
    subtitle={features[2].subtitle}
    description={features[2].description}
    color={features[2].color}
    image={features[2].image}
  />

<div>  <FeatureCard
    title={features[3].title}
    subtitle={features[3].subtitle}
    description={features[3].description}
    color={features[3].color}
    image={features[3].image}
    reverse
  /></div>

</div>

      </div>

    </section>
  )
}