import '../styles/cv.css';
import EducationInformation from './EducationInformation.jsx';
import ExperienceInformation from './ExperienceInformation.jsx';
import GeneralInformation from './GeneralInformation.jsx';

const CvApplicationForms = ({ activeIndex, changePage }) => {
    return (
        <section className='cv-app-forms'>
            {
                activeIndex === 0 ? <GeneralInformation changePage={changePage} /> :
                activeIndex === 1 ? <EducationInformation changePage={changePage} /> :
                activeIndex === 2 ? <ExperienceInformation changePage={changePage} /> : null
            }
        </section>
    );
}

export default CvApplicationForms;