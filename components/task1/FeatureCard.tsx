interface Props {
  title: string
  subtitle: string
  description: string
  color: string
  image: string
  reverse?: boolean
}

export default function FeatureCard({
  title,
  subtitle,
  description,
  color,
  image,
  reverse
}: Props) {
  return (
    <div
      className="feature-card"
      style={{
        backgroundColor: color,
        flexDirection: reverse ? "row-reverse" : "row"
      }}
    >
      <div>
        <img
  src={image}
  alt={title}
  className={reverse ? "feature-img-right" : "feature-img"}
/>

      </div>

      <div className="feature-textbox">
        <div className="Feature-text1">
          <div className="Feature-text1box">
            <h3>{title}</h3>
          </div>

          <div className="Feature-text2box">
            <h4>{subtitle}</h4>
          </div>
        </div>

        <div className="Feature-DescBOX">
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}
