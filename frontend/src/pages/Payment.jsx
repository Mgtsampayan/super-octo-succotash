import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

const Payment = () => {
  const { user } = useContext(AuthContext);
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    // Fetch payments for the logged-in student
    if (user) {
      axios.get(`/api/payments/${user.studentcode}`)
        .then(response => setPayments(response.data))
        .catch(error => console.error(error));
    }
  }, [user]);

  return (
    <div>
      <h2>Payments</h2>
      <ul>
        {payments.map(payment => (
          <li key={payment.payment_id}>{payment.amount} - {payment.payment_date}</li>
        ))}
      </ul>
    </div>
  );
};

export default Payment;
