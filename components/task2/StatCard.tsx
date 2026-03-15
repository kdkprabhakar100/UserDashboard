interface Props {
  title: string
  description: string
  number: string
}

export default function StatCard({ title, description, number }: Props) {
  return (
    <div className="stat-card">

        <div>
                <div className="stat-text">
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>

                <h1 className="stat-number">
                   {number}<sup>+</sup>
                </h1>
                </div>

    </div>
  )
}
