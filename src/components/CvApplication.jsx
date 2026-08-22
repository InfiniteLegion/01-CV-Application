import { useState } from 'react';
import '../styles/cv.css';
import CvApplicationForms from './CvApplicationForms.jsx';
import CvApplicationSideBar from './CvApplicationSideBar.jsx';

const CvApplication = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    
    return (
        <section className="cv-app">
            <CvApplicationSideBar index={activeIndex} onSend={setActiveIndex} />
            <CvApplicationForms activeIndex={activeIndex} changePage={setActiveIndex} />
        </section>
    );
}

export default CvApplication;