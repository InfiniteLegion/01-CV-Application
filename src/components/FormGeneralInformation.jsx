import '../styles/forms.css';
import IconModule from '@mdi/react';
import { mdiAccount, mdiEmailOutline, mdiPhone } from '@mdi/js';

const FormGeneralInformation = ({ generalData, setGeneralData }) => {
    const Icon = IconModule.default;
    // const [data, setData] = useState(generalData);

    const handleClear = () => {
        setGeneralData({
            lastName: '',
            firstName: '',
            email: '',
            phone: ''
        });
    }

    const handleChange = (field) => (e) => {
        setGeneralData(prev => ({...prev, [field]: e.target.value}));
    }

    return (
      <div className="form-wrapper">
        <div className="input-block">
          <p className="input-title">
            Last name<sup>*</sup>
          </p>
          <div className="input-wrapper">
            <Icon size={1} path={mdiAccount} />
            <input
              type="text"
              className="form-input"
              placeholder="Doe"
              value={generalData.lastName}
              onChange={handleChange("lastName")}
            />
          </div>
          <p className="input-error hidden"></p>
        </div>

        <div className="input-block">
          <p className="input-title">
            First name<sup>*</sup>
          </p>
          <div className="input-wrapper">
            <Icon size={1} path={mdiAccount} />
            <input
              type="text"
              className="form-input"
              placeholder="Sam"
              value={generalData.firstName}
              onChange={handleChange("firstName")}
            />
          </div>
          <p className="input-error hidden"></p>
        </div>

        <div className="input-block">
          <p className="input-title">
            Email<sup>*</sup>
          </p>
          <div className="input-wrapper">
            <Icon size={1} path={mdiEmailOutline} />
            <input
              type="text"
              className="form-input"
              placeholder="sam.doe.dev@mail.com"
              value={generalData.email}
              onChange={handleChange("email")}
            />
          </div>
          <p className="input-error hidden"></p>
        </div>

        <div className="input-block">
          <p className="input-title">
            Phone Number<sup>*</sup>
          </p>
          <div className="input-wrapper">
            <Icon size={1} path={mdiPhone} />
            <input
              type="text"
              className="form-input"
              placeholder="XXX-XXX-XXXX"
              value={generalData.phone}
              onChange={handleChange("phone")}
            />
          </div>
          <p className="input-error hidden"></p>
        </div>

        <button className="form-btn" onClick={handleClear}>
          Clear
        </button>
      </div>
    );
}

export default FormGeneralInformation;