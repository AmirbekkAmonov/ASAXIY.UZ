import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

function MyPhoneInput() {
    const [phone, setPhone] = useState('');

    return (
        <div className='input-phone'>
            <p id='phone'>Telefon</p>
            <PhoneInput
                country={'uz'}
                value={phone}
                onChange={setPhone}
                masks={{ uz: '(..) ...-..-..' }}
            />
        </div>
    );
}

export default MyPhoneInput;
