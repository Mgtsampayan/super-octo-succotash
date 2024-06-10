import { useState, useEffect } from 'eact';
import './Cashier.css';

const PaymentVerification = () => {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    // Fetch payments from the server
  }, []);

  const handleVerify = (paymentId) => {
    // Add payment verification logic here
    const verifyPayment = async (paymentId) => {
      const response = await fetch(`/api/verify-payment/${paymentId}`);
      const data = await response.json();
      return data;
    };

    verifyPayment(paymentId).then((verifiedPayment) => {
      const updatedPayments = payments.map((payment) =>
        payment.id === paymentId? verifiedPayment : payment
      );
      setPayments(updatedPayments);
    });
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