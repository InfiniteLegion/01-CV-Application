import "../styles/forms.css";
import FormEducationalInformation from "./FormEducationalInformation.jsx";

const EducationInformation = ({ changePage, educationData, setEducationData }) => {

  const handleAddForm = () => {
    setEducationData((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        data: {
          place: "",
          degree: "",
          dateStart: "",
          dateEnd: "",
        },
      },
    ]);
  };

  const handleRemoveForm = (id) => {
    setEducationData((prev) => prev.filter((form) => form.id !== id));
  };

  const handleChangePage = (index) => {
    changePage(index);
  };

  const handleUpdateData = (id, newData) => {
    setEducationData((prev) =>
      prev.map((form) => (form.id === id ? { ...form, data: newData } : form)),
    );
  }
  
  const handleSaveData = () => {
    setEducationData(educationData);
  }

  return (
    <section className="educational-informantion">
      <h2 className="h2-information-page">Education</h2>

      <p className="information-description">
        Fill fields about your education information
      </p>

      <div className="forms-block">
        {educationData.map((form, index) => (
          <div key={form.id}>
            <FormEducationalInformation
              index={index}
              idForm={form.id}
              data={form.data}
              updateData={handleUpdateData}
              {...(educationData.length > 1 ? {deleteForm: handleRemoveForm} : {})}
            />
          </div>
        ))}

        <div className="btn-block">
          <button className="form-btn" onClick={() => handleChangePage(0)}>
            &larr; Previous
          </button>
          <button className="form-btn" onClick={handleAddForm}>
            Add education
          </button>
          <button className="form-btn" onClick={handleSaveData}>Save</button>
          <button className="form-btn" onClick={() => handleChangePage(2)}>
            Next &rarr;
          </button>
        </div>
      </div>
    </section>
  );
};

export default EducationInformation;
