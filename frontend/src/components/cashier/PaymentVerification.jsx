import React, { useState, useEffect } from 'react';
import './Cashier.css';

const PaymentVerification = () => {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    // Fetch payments from the server
  }, []);

  const handleVerify = (paymentId) => {
    // Add payment verification logic here
  };

  return (
    <div className="payment-verification">
      <h2>Payment Verification</h2>
      <ul>
        {payments.map((payment) => (
          <li key={payment.id}>
            {payment.studentCode} - {payment.amount}
            <button onClick={() => handleVerify(payment.id)}>Verify</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PaymentVerification;
