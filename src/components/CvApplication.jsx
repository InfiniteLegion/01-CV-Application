import { useState } from "react";
import "../styles/cv.css";
import CvApplicationForms from "./CvApplicationForms.jsx";
import CvApplicationSideBar from "./CvApplicationSideBar.jsx";

const CvApplication = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [generalData, setGeneralData] = useState({
    lastName: "",
    firstName: "",
    email: "",
    phone: "",
  });
  const [educationData, setEducationData] = useState([{
    id: crypto.randomUUID(),
    data: {
      place: "",
      degree: "",
      dateStart: "",
      dateEnd: "",
    }
  }]);
  const [experienceData, setExperienceData] = useState([
    {
      id: crypto.randomUUID(),
      data: {
        company: "",
        position: "",
        location: "",
        dateStart: "",
        dateEnd: "",
        responsibilities: "",
      },
    },
  ]);

  return (
    <section className="cv-app">
      <CvApplicationSideBar index={activeIndex} onSend={setActiveIndex} />
      <CvApplicationForms
        activeIndex={activeIndex}
        changePage={setActiveIndex}
        generalData={generalData}
        setGeneralData={setGeneralData}
        educationData={educationData}
        setEducationData={setEducationData}
        experienceData={experienceData}
        setExperienceData={setExperienceData}
      />
    </section>
  );
};

export default CvApplication;
