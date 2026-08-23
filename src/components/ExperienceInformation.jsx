import "../styles/forms.css";
import FormExperienceInformation from "./FormExperienceInformation.jsx";

const ExperienceInformation = ({ changePage, experienceData, setExperienceData }) => {
  const handleAddForm = () => {
    setExperienceData((prev) => [
      ...prev,
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
  };

  const handleRemoveForm = (id) => {
    setExperienceData((prev) => prev.filter((form) => form.id !== id));
  };

  const handleChangePage = (index) => {
    changePage(index);
  };

  const handleUpdateData = (id, newData) => {
    setExperienceData((prev) =>
      prev.map((form) => (form.id === id ? { ...form, data: newData } : form)),
    );
  }

  const handleSaveData = () => {
    setExperienceData(experienceData);
  }

  return (
    <section className="experience-information">
      <h2 className="h2-information-page">Experience</h2>

      <p className="information-description">
        Fill fields about your work experience information
      </p>

      <div className="forms-block">
        {experienceData.map((form, index) => (
          <div key={form.id}>
            <FormExperienceInformation
              index={index}
              idForm={form.id}
              data={form.data}
              updateData={handleUpdateData}
              {...(experienceData.length > 1 ? {deleteForm: handleRemoveForm} : {})}
            />
          </div>
        ))}

        <div className="btn-block">
          <button className="form-btn" onClick={() => handleChangePage(1)}>
            &larr; Previous
          </button>
          <button className="form-btn" onClick={handleAddForm}>
            Add experience
          </button>
          <button className="form-btn" onClick={handleSaveData}>Save</button>
        </div>
      </div>
    </section>
  );
};

export default ExperienceInformation;
