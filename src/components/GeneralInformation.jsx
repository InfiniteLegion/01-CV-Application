import "../styles/forms.css";
import FormGeneralInformation from "./FormGeneralInformation.jsx";

const GeneralInformation = ({ changePage, generalData, setGeneralData }) => {
  const handleChangePage = (index) => {
    changePage(index);
  };

  const handleSaveData = () => {
    setGeneralData(generalData);
  }

  return (
    <section className="general-information">
      <h2 className="h2-information-page">General Information</h2>

      <p className="information-description">
        Fill fields with your name and contact information
      </p>

      <div className="forms-block">
        <FormGeneralInformation
          generalData={generalData}
          setGeneralData={setGeneralData}
        />

        <div className="btn-block">
          <button className="form-btn" onClick={handleSaveData}>Save</button>
          <button className="form-btn" onClick={() => handleChangePage(1)}>
            Next &#8594;
          </button>
        </div>
      </div>
    </section>
  );
};

export default GeneralInformation;
