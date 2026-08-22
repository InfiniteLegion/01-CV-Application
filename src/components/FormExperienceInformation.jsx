import IconModule from '@mdi/react';
import '../styles/forms.css';
import { mdiAccountTie, mdiBriefcase, mdiDelete, mdiMapMarker } from '@mdi/js';
import { useState } from 'react';

const FormExperienceInformation = ({ index, id, deleteForm }) => {
    const Icon = IconModule.default;
    const [data, setData] = useState({
        company: '',
        position: '',
        location: '',
        dateStart: '',
        dateEnd: '',
        responsibilities: ''
    });

    const handleChange = (field) => (e) => {
        setData(prev => ({...prev, [field]: e.target.value}));
    }
    
    const handleClearForm = () => {
        setData({
            company: '',
            position: '',
            location: '',
            dateStart: '',
            dateEnd: '',
            responsibilities: ''
        });
    }

    return (
        <div className="form-wrapper">
            <div className="form-header">
                <h3>Experience information {index + 1}</h3>
                <div className="icon-wrapper" onClick={() => deleteForm(id)}>
                    <Icon size={1} path={mdiDelete} title='Delete form' />
                </div>
            </div>
            
            <div className="input-block">
                <p className="input-title">
                    Company name<sup>*</sup>
                </p>
                <div className="input-wrapper">
                    <Icon size={1} path={mdiBriefcase} />
                    <input type="text" className="form-input"
                        placeholder='Microsoft' value={data.company} 
                        onChange={handleChange('company')} />
                </div>
                <p className="input-error hidden"></p>
            </div>

            <div className="input-block">
                <p className="input-title">
                    Position title<sup>*</sup>
                </p>
                <div className="input-wrapper">
                    <Icon size={1} path={mdiAccountTie} />
                    <input type="text" className="form-input"
                        placeholder='Software Engineer' value={data.position} 
                        onChange={handleChange('position')} />
                </div>
                <p className="input-error hidden"></p>
            </div>

            <div className="input-block">
                <p className="input-title">
                    Location<sup>*</sup>
                </p>
                <div className="input-wrapper">
                    <Icon size={1} path={mdiMapMarker} />
                    <input type="text" className="form-input"
                        placeholder='1 Microsoft Way, Redmond, WA 98052, USA' 
                        value={data.location} onChange={handleChange('location')} />
                </div>
                <p className="input-error hidden"></p>
            </div>

            <div className="input-block">
                <p className="input-title">
                    Date start<sup>*</sup>
                </p>
                <div className="input-wrapper">
                    <input type="date" className="form-input"
                        value={data.dateStart} onChange={handleChange('dateStart')} />
                </div>
                <p className="input-error hidden"></p>
            </div>

            <div className="input-block">
                <p className="input-title">
                    Date end (optional)
                </p>
                <div className="input-wrapper">
                    <input type="date" id={`input-date-end-${index + 1}`} className='form-input' 
                        value={data.dateEnd} onChange={handleChange('dateEnd')} />
                </div>
                <p className="input-error hidden" id={`error-date-end-${index + 1}`}></p>
            </div>

            <div className="input-block">
                <p className="input-title">
                    Main responsibilities<sup>*</sup>
                </p>
                <div className="input-wrapper">
                    <textarea id={`text-responsibilities-${index + 1}`} className='form-input-textarea' 
                        value={data.responsibilities} onChange={handleChange('responsibilities')} />
                </div>
                <p className="input-error hidden" id={`error-responsibilities-${index + 1}`}></p>
            </div>

            <button className="form-btn" onClick={handleClearForm}>Clear</button>
        </div>
    );
}

export default FormExperienceInformation;