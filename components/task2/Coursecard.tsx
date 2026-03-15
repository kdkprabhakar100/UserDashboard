import Image from "next/image"

export default function Coursecard() {
  return (
    <div className="course-card">

      <div className="course-top">
        View all Courses →
      </div>

      <div className="course-icons">
        <Image src="/5.png" alt="react" width={75} height={75} style={{ transform: "rotate(16.67 deg)" }}/>
        <Image src="/6.png" alt="social" width={70.24} height={75} style={{ transform: "rotate(-7.22 deg)" }}/>
        <Image src="/7.png" alt="vue" width={55.75} height={75} style={{ transform: "rotate(8.97 deg)" }}/>
        <Image src="/8.png" alt="design" width={75} height={75} style={{ transform: "rotate(-12.61 deg)" }}/>
      </div>

      <div className="course-bottom">
        <h1>23<sup>+</sup></h1>

        <div className="course-bottom1">
          <h3>All Courses</h3>
          <p>courses you're powering through right now.</p>
        </div>
      </div>

    </div>
  )
}
