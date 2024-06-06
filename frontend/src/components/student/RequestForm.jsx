import React, { useState } from 'react';
import Button from '../common/Button';
import Input from '../common/Input';
import './Student.css';

const RequestForm = () => {
    const [documentType, setDocumentType] = useState('');
    const [additionalInfo, setAdditionalInfo] = useState('');

    const handleRequest = (e) => {
        e.preventDefault();
        // Add your request logic here
    };

    return (
        <div className="request-form">
            <h2>Request Document</h2>
            <form onSubmit={handleRequest}>
                <Input
                    type="text"
                    value={documentType}
                    onChange={(e) => setDocumentType(e.target.value)}
                    placeholder="Document Type"
                />
                <Input
                    type="text"
                    value={additionalInfo}
                    onChange={(e) => setAdditionalInfo(e.target.value)}
                    placeholder="Additional Information"
                />
                <Button type="submit">Submit Request</Button>
            </form>
        </div>
    );
};

export default RequestForm;
