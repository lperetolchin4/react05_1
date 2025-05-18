// App.js
import React from 'react';

function PersonalInfo() {
  return (
    <div style={{padding: '20px', fontFamily: 'Arial'}}>
      <h1>Личная информация</h1>
      <ul>
        <li><strong>ФИО:</strong> Иванов Иван Иванович</li>
        <li><strong>Телефон:</strong> +7 (123) 456-78-90</li>
        <li><strong>Email:</strong> example@mail.com</li>
      </ul>
    </div>
  );
}

export default PersonalInfo;