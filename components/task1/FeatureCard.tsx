interface Props {
  title: string
  subtitle: string
  description: string
  color: string
  image: string
  index: number
}

export default function FeatureCard({
  title,
  subtitle,
  description,
  color,
  image,
  index
}: Props) {
  return (
    <div
      className="feature-card"
      style={{ backgroundColor: color }}
    >
      <img
        src={image}
        alt={title}
        className={`feature-img feature-img-${index}`}
      />

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