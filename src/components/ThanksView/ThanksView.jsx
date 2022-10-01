import React from 'react';
import './ThanksView.scss';
import icon from '@icons/cheque.png';

function ThanksView() {
  return (
      <div className="thanks">
          <img src={icon} alt="thanks" />
          <h3>Thank you</h3>
          <h4>for your order</h4>
      </div>
  );
}

export default ThanksView;