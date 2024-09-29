import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1234/Home">
            <img src="https://www.popwebdesign.net/popart_blog/wp-content/uploads/2018/03/reactjs.jpg" width={200} alt="Description"/>
            <div>
              <h5>
                 CS1234 React JS
              </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        {/* Course 3 */}
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/2345/Home">
            <img src="https://www.popwebdesign.net/popart_blog/wp-content/uploads/2018/03/reactjs.jpg" width={200} alt="Description"/>
            <div>
              <h5>CS2345 Node.js</h5>
              <p className="wd-dashboard-course-title">Backend Development</p>
              <button>Go</button>
            </div>
          </Link>
        </div>
        {/* Course 3 */}
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/3456/Home">
            <img src="https://www.popwebdesign.net/popart_blog/wp-content/uploads/2018/03/reactjs.jpg" width={200}  alt="Description" />
            <div>
              <h5>CS3456 Python Programming</h5>
              <p className="wd-dashboard-course-title">Data Science and AI</p>
              <button>Go</button>
            </div>
          </Link>
        </div>
        {/* Course 4 */}
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/4567/Home">
            <img src="https://www.popwebdesign.net/popart_blog/wp-content/uploads/2018/03/reactjs.jpg" width={200} alt="Description" />
            <div>
              <h5>CS4567 Machine Learning</h5>
              <p className="wd-dashboard-course-title">Advanced AI Techniques</p>
              <button>Go</button>
            </div>
          </Link>
        </div>
        {/* Course 5 */}
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/5678/Home">
            <img src="https://www.popwebdesign.net/popart_blog/wp-content/uploads/2018/03/reactjs.jpg" width={200} alt="Description"/>
            <div>
              <h5>CS5678 Data Structures</h5>
              <p className="wd-dashboard-course-title">Algorithms and Problem Solving</p>
              <button>Go</button>
            </div>
          </Link>
        </div>
        {/* Course 6 */}
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/6789/Home">
            <img src="https://www.popwebdesign.net/popart_blog/wp-content/uploads/2018/03/reactjs.jpg" width={200} alt="Description"/>
            <div>
              <h5>CS6789 DevOps</h5>
              <p className="wd-dashboard-course-title">CI/CD and Automation</p>
              <button>Go</button>
            </div>
          </Link>
        </div>
        {/* Course 7 */}
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/7890/Home">
            <img src="https://www.popwebdesign.net/popart_blog/wp-content/uploads/2018/03/reactjs.jpg" alt="Description" width={200}/>
            <div>
              <h5>CS7890 Cloud Computing</h5>
              <p className="wd-dashboard-course-title">Cloud Infrastructure and Services</p>
              <button>Go</button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
