import '../styles/forms.css';
import FormGeneralInformation from './FormGeneralInformation.jsx';

const GeneralInformation = ({ changePage }) => {

    const handleChangePage = (index) => {
        changePage(index);
    }
    
    return (
      <section className="general-information">
        <h2 className="h2-information-page">General Information</h2>

        <p className="information-description">
          Fill fields with your name and contact information
        </p>

        <div className="forms-block">
          <FormGeneralInformation />

          <div className="btn-block">
            <button className="form-btn">Save</button>
            <button className="form-btn" onClick={() => handleChangePage(1)}>
              Next &#8594;
            </button>
          </div>
        </div>
      </section>
    );
}

export default GeneralInformation;