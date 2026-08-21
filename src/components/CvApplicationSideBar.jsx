import { useState } from 'react';
import '../styles/cv.css';

const CvApplicationSideBar = ({ onSend }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    
    const handleChangeForm = (target) => {
        if (target.id === 'btn-general') {
            setActiveIndex(0);
            onSend(0);
        } else if (target.id === 'btn-education') {
            setActiveIndex(1);
            onSend(1);
        } else if (target.id === 'btn-experience') {
            setActiveIndex(2);
            onSend(2);
        }
    }
    
    return (
        <section className="cv-app-sidebar">
            <button 
                id='btn-general'
                className={`cv-nav-btn ${activeIndex === 0 ? "active-btn" : ""}`}
                onClick={(e) => handleChangeForm(e.target)}
                >General</button>
            <button 
                id='btn-education'
                className={`cv-nav-btn ${activeIndex === 1 ? "active-btn" : ""}`}
                onClick={(e) => handleChangeForm(e.target)}
                >Education</button>
            <button 
                id='btn-experience'
                className={`cv-nav-btn ${activeIndex === 2 ? "active-btn" : ""}`}
                onClick={(e) => handleChangeForm(e.target)}
                >Experience</button>
        </section>
    );
}

export default CvApplicationSideBar;