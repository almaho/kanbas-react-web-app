import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2>
      <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          
          {/* Course 1 */}
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                    to="/Kanbas/Courses/1234/Home">
                <img src="https://www.popwebdesign.net/popart_blog/wp-content/uploads/2018/03/reactjs.jpg"  
                     width="100%" height={160} alt="React JS" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS1234 React JS
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Full Stack Software Developer
                  </p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </Link>
            </div>
          </div>

          {/* Course 2 */}
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                    to="/Kanbas/Courses/2345/Home">
                <img src="https://www.popwebdesign.net/popart_blog/wp-content/uploads/2018/03/reactjs.jpg"  
                     width="100%" height={160} alt="Node.js" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS2345 Node.js
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Backend Development
                  </p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </Link>
            </div>
          </div>

          {/* Course 3 */}
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                    to="/Kanbas/Courses/3456/Home">
                <img src="https://www.popwebdesign.net/popart_blog/wp-content/uploads/2018/03/reactjs.jpg"  
                     width="100%" height={160} alt="Python Programming" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS3456 Python Programming
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Data Science and AI
                  </p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </Link>
            </div>
          </div>

          {/* Course 4 */}
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                    to="/Kanbas/Courses/4567/Home">
                <img src="https://www.popwebdesign.net/popart_blog/wp-content/uploads/2018/03/reactjs.jpg"  
                     width="100%" height={160} alt="Machine Learning" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS4567 Machine Learning
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Advanced AI Techniques
                  </p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </Link>
            </div>
          </div>

          {/* Course 5 */}
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                    to="/Kanbas/Courses/5678/Home">
                <img src="https://www.popwebdesign.net/popart_blog/wp-content/uploads/2018/03/reactjs.jpg"  
                     width="100%" height={160} alt="Data Structures" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS5678 Data Structures
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Algorithms and Problem Solving
                  </p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </Link>
            </div>
          </div>

          {/* Course 6 */}
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                    to="/Kanbas/Courses/6789/Home">
                <img src="https://www.popwebdesign.net/popart_blog/wp-content/uploads/2018/03/reactjs.jpg"  
                     width="100%" height={160} alt="DevOps" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS6789 DevOps
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    CI/CD and Automation
                  </p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </Link>
            </div>
          </div>

          {/* Course 7 */}
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                    to="/Kanbas/Courses/7890/Home">
                <img src="https://www.popwebdesign.net/popart_blog/wp-content/uploads/2018/03/reactjs.jpg"  
                     width="100%" height={160} alt="Cloud Computing" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS7890 Cloud Computing
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Cloud Infrastructure and Services
                  </p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
