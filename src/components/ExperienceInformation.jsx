import { useState } from "react";
import "../styles/forms.css";
import FormExperienceInformation from "./FormExperienceInformation.jsx";

const ExperienceInformation = ({ changePage }) => {
  const [forms, setForms] = useState([{ id: crypto.randomUUID() }]);

  const handleAddForm = () => {
    setForms((prev) => [...prev, { id: crypto.randomUUID() }]);
  };

  const handleRemoveForm = (id) => {
    setForms((prev) => prev.filter((form) => form.id !== id));
  };

  const handleChangePage = (index) => {
    changePage(index);
  };

  return (
    <section className="experience-information">
      <h2 className="h2-information-page">Experience</h2>

      <p className="information-description">
        Fill fields about your work experience information
      </p>

      <div className="forms-block">
        {forms.map((form, index) => (
          <div key={form.id}>
            <FormExperienceInformation
              index={index}
              id={form.id}
              deleteForm={handleRemoveForm}
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
          <button className="form-btn">Save</button>
        </div>
      </div>
    </section>
  );
};

export default ExperienceInformation;
