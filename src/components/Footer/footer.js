import React from 'react';
import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="contactInfo">

        <p>Телефон: +7-900-000-00-00</p>
        <p>Email: example@example.com</p>
        <p>Адрес: ул. Пушкина, д. Колотушкина</p>
      </div>
      <div className="copyRight">
        <p>&copy; 2024 Все права защищены</p>
      </div>
    </footer>
  );
}

export default Footer;
