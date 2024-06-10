import { useEffect, useState } from 'react';
import './Cashier.css';

const PaymentHistory = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    // Fetch payment history from the server
    fetch('/api/payment-history')
      .then(response => response.json())
      .then(data => {
        setHistory(data);
      })
      .catch(error => {
        console.error('Error fetching payment history:', error);
      });
  }, []);

  return (
    <div className="payment-history">
      <h2>Payment History</h2>
      <ul>
        {history.map((payment) => (
          <li key={payment.id}>
            {payment.studentCode} - {payment.amount} - {payment.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PaymentHistory;