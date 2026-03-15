import FeatureCard from "./FeatureCard"
import { features } from "./featuresData"
import "./feature.css"

export default function FeatureSection() {
  return (
    <section className="feature-section">

      <div className="feature-note">
        Note: Hover the component to view the animation & Click the arrow icon
      </div>

      <div className="feature-small">

        <div className="feature-frame">

          <div className="feature-subtitle">
            <p>Your SkillShikshya Journey</p>
          </div>

          <div className="feature-title">
            <h1><span>Step</span> In. <span>Skill</span> Up. <span>Stand</span> Out. 🚀</h1>
          </div>

        </div>

        <div className="features-grid">

{features.map((feature, index) => (
  <FeatureCard
    key={index}
    index={index}
    title={feature.title}
    subtitle={feature.subtitle}
    description={feature.description}
    color={feature.color}
    image={feature.image}
  />
))}

        </div>

      </div>

    </section>
  )
}