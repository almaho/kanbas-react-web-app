import { Link } from "react-router-dom";
import { useLocation } from "react-router";

export default function TOC() { const { pathname } = useLocation()
  return (
    <ul className="nav nav-pills">
      <li className="nav-item"><Link to="/Labs" className="nav-link" >Labs</Link></li>
      <li className="nav-item">
        <a id="wd-a1" href="#/Labs/Lab1"
          className={`nav-link ${pathname.includes("Lab1") ? "active" : ""}`}>
          Lab 1
        </a>
      </li>
      <li className="nav-item">
        <a id="wd-a2" href="#/Labs/Lab2"
          className={`nav-link ${pathname.includes("Lab2") ? "active" : ""}`}>
          Lab 2
        </a>
      </li>
      <li className="nav-item">
        <a id="wd-a3" href="#/Labs/Lab3"
          className={`nav-link ${pathname.includes("Lab3") ? "active" : ""}`}>
          Lab 3
        </a>
      </li>
      <li className="nav-item">
        <a id="wd-k" href="#/Kanbas" className="nav-link">
          Kanbas
        </a>
      </li>

      <li className="nav-item">
        <a 
          href="https://github.com/almaho/kanbas-react-web-app" className="nav-link"
          id="wd-github" 
          target="_blank" 
          rel="noreferrer"
        >
          GitHub Repository
        </a>
      </li>
    </ul>
  );
}