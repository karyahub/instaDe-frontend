import React from "react"
import {motion} from "framer-motion"
import "./Sidebar.scss"
import instadlogo from "../../images/instade_logo.png"

const Sidebar = ({children}) => {
  return (
    <div className="main-container">
        <motion.div animate={{width:"280px"}} className="sidebar">
            <div className="top_section">
                <img src={instadlogo} />
            </div>
            <div className="projects_heading">
                <h1>Projects</h1>
                <hr></hr>
            </div>
            <main>
                {children}
            </main>
            <div className="footer-section">
                <p>Username</p>
            </div>
        </motion.div>
    </div>
  )
}

export default Sidebar