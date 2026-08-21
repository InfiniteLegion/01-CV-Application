import '../styles/cv.css';
import FormEducationInformation from './FormEducationInformation.jsx';
import FormExperienceInformation from './FormExperienceInformation.jsx';
import FormGeneralInformation from './FormGeneralInformation.jsx';

const CvApplicationForms = ({ activeIndex }) => {
    return (
        <section className='cv-app-forms'>
            {
                activeIndex === 0 ? <FormGeneralInformation /> :
                activeIndex === 1 ? <FormEducationInformation /> :
                activeIndex === 2 ? <FormExperienceInformation /> : null
            }
        </section>
    );
}

export default CvApplicationForms;