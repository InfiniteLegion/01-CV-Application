import { mdiDelete, mdiSchool, mdiTownHall } from "@mdi/js";
import "../styles/forms.css";
import IconModule from "@mdi/react";
import { useState } from "react";

const FormEducationalInformation = ({ index, id, deleteForm }) => {
  const Icon = IconModule.default;
  const [data, setData] = useState({
    place: "",
    degree: "",
    dateStart: "",
    dateEnd: "",
  });

  const handleChange = (field) => (e) => {
    setData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleClear = () => {
    setData({
      place: "",
      degree: "",
      dateStart: "",
      dateEnd: "",
    });
  };

  return (
    <div className="form-wrapper">
      <div className="form-header">
        <h3>Education information {index + 1}</h3>
        <div className="icon-wrapper" onClick={() => deleteForm(id)}>
          <Icon size={1} path={mdiDelete} title="Delete form" />
        </div>
      </div>

      <div className="input-block">
        <p className="input-title">
          Education place name<sup>*</sup>
        </p>
        <div className="input-wrapper">
          <Icon size={1} path={mdiTownHall} />
          <input
            type="text"
            className="form-input"
            placeholder="MIT"
            value={data.place}
            onChange={handleChange("place")}
          />
        </div>
        <p className="input-error hidden"></p>
      </div>

      <div className="input-block">
        <p className="input-title">
          Educational degree<sup>*</sup>
        </p>
        <div className="input-wrapper">
          <Icon size={1} path={mdiSchool} />
          <input
            type="text"
            className="form-input"
            placeholder="Master"
            value={data.degree}
            onChange={handleChange("degree")}
          />
        </div>
        <p className="input-error hidden"></p>
      </div>

      <div className="input-block">
        <p className="input-title">
          Start date<sup>*</sup>
        </p>
        <div className="input-wrapper">
          <input
            type="date"
            className="form-input"
            value={data.dateStart}
            onChange={handleChange("dateStart")}
          />
        </div>
        <p className="input-error hidden"></p>
      </div>

      <div className="input-block">
        <p className="input-title">
          Start end<sup>*</sup>
        </p>
        <div className="input-wrapper">
          <input
            type="date"
            className="form-input"
            value={data.dateEnd}
            onChange={handleChange("dateEnd")}
          />
        </div>
        <p className="input-error hidden"></p>
      </div>

      <button className="form-btn" onClick={handleClear}>
        Clear
      </button>
    </div>
  );
};

export default FormEducationalInformation;