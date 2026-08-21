import IconModule from '@mdi/react';
import '../styles/forms.css';
import { mdiAccount, mdiEmailOutline, mdiPhone } from '@mdi/js';

const FormGeneralInformation = () => {

    const Icon = IconModule.default;
    
    return (
        <section className="general-information">
            <h2 className='h2-forms'>General Information</h2>

            <p className="form-description">Fill fields with your name and contact information</p>
            
            <div className="form-wrapper">
                <div className="input-block">
                    <p className="input-title">Last name<sup>*</sup></p>
                    <div className="input-wrapper">
                        <Icon size={1} path={mdiAccount} />
                        <input type="text" className='form-input' id='input-last-name' 
                        placeholder='Doe' />
                    </div>
                    <p className="input-error hidden" id='error-last-name'></p>
                </div>

                <div className="input-block">
                    <p className="input-title">First name<sup>*</sup></p>
                    <div className="input-wrapper">
                        <Icon size={1} path={mdiAccount} />
                        <input type="text" className='form-input' id='input-first-name' 
                        placeholder='Sam' />
                    </div>
                    <p className="input-error hidden" id='error-first-name'></p>
                </div>

                <div className="input-block">
                    <p className="input-title">Email<sup>*</sup></p>
                    <div className="input-wrapper">
                        <Icon size={1} path={mdiEmailOutline} />
                        <input type="text" className='form-input' id='input-email' itemType='email' 
                        placeholder='sam.doe.dev@mail.com' />
                    </div>
                    <p className="input-error hidden" id='error-email'>Wrong email</p>
                </div>

                <div className="input-block">
                    <p className="input-title">Phone Number<sup>*</sup></p>
                    <div className="input-wrapper">
                        <Icon size={1} path={mdiPhone} />
                        <input type="text" className='form-input' id='input-phone-number' 
                        placeholder='XXX-XXX-XXXX' />
                    </div>
                    <p className="input-error hidden" id='error-phone'>Wrong phone number</p>
                </div>

                <button className='form-btn'>Save &#8594;</button>
            </div>
        </section>
    );
}

export default FormGeneralInformation;