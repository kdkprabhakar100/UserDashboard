import CourseCard from "./Coursecard"
import StatCard from "./StatCard"
import "./task2.css"

export default function CourseSection() {
  return (
    <section className="course-section">

      <div className="course-header">

        <div className="course-notebox">
          <p className="course-note">
            Note: Click the cards to view the animation
          </p>
        </div>

        <div className="course-box">
                 
         <div className="course-titlebox">
            <div className="course-titlebox1">
                 <p className="course-subtitle">
                    Explore our classes and master trending skills!
                </p>
            </div>

            <div className="course-titlebox2">
                <h1 className="course-title">
                    Dive Into <span>What’s Hot Right Now!</span> 🔥
                </h1>
            </div>
          
          
            <div className="course-gridbox">
          <div className="course-grid">

           <CourseCard />

            <StatCard
                title="Upcoming Courses"
                description="exciting new courses     waiting to boost your skills."
                number="05"
              />

              <StatCard
               title="Ongoing Courses"
               description="currently happening—don't miss out on the action!"
               number="10"
               />

         </div>
            </div>

        </div>
        </div>

      </div>



    </section>
  )
}
