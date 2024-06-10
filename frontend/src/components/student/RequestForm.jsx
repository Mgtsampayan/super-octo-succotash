import { useState, useContext } from 'react';
import { RequestContext } from '../../context/RequestContext';
import Input from '../common/Input';
import Button from '../common/Button';

const RequestForm = () => {
    const [form, setForm] = useState({ documentType: '', additionalInfo: '' });
    const { createRequest } = useContext(RequestContext);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        createRequest(form);
    };

    return (
        <form onSubmit={handleSubmit}>
            <Input
                type="text"
                name="documentType"
                value={form.documentType}
                onChange={handleChange}
                placeholder="Document Type"
            />
            <Input
                type="text"
                name="additionalInfo"
                value={form.additionalInfo}
                onChange={handleChange}
                placeholder="Additional Information"
            />
            <Button type="submit">Submit Request</Button>
        </form>
    );
};

export default RequestForm;
