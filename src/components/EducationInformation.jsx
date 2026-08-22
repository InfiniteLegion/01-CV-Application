import { useState } from 'react';
import '../styles/forms.css';
import FormEducationalInformation from './FormEducationalInformation.jsx';

const EducationInformation = ({ changePage }) => {
    const [forms, setForms] = useState([{ id: crypto.randomUUID() }]);

    const handleAddForm = () => {
        setForms(prev => [...prev, {id: crypto.randomUUID()}]);
    }

    const handleRemoveForm = (id) => {
        setForms(prev => prev.filter(form => form.id !== id));
    }
    
    const handleChangePage = (index) => {
        changePage(index);
    }
    
    return (
        <section className="educational-informantion">
            <h2 className='h2-information-page'>Education</h2>

            <p className="information-description">
                Fill fields about your education information
            </p>

            <div className="forms-block">
                {forms.map((form, index) => (
                    <div key={form.id}>
                        <FormEducationalInformation index={index} id={form.id} deleteForm={handleRemoveForm} />
                    </div>
                ))}

                <div className="btn-block">
                    <button className="form-btn" onClick={() => handleChangePage(0)}>&larr; Previous</button>
                    <button className='form-btn' onClick={handleAddForm}>Add education</button>
                    <button className='form-btn'>Save</button>
                    <button className='form-btn' onClick={() => handleChangePage(2)}>Next &rarr;</button>
                </div>
            </div>
        </section>
    );
}

export default EducationInformation;