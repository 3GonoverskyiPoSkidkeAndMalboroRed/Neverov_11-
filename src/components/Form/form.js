/* eslint-disable */
import React, { useState } from 'react';
import Info from '../Information/Info.js'
import './form.css';
import {
  validateDateOfBirth, validateFullName, validatePhoneNumber, validateEmail, validateFutureDate,
} from './utils.js';

function MainForm() {
  const [fullName, setFullName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [futureDate, setFutureDate] = useState('');
  const [fullNameError, setFullNameError] = useState('');
  const [dateOfBirthError, setDateOfBirthError] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [futureDateError, setFutureDateError] = useState('');

  const handleFullNameChange = (value) => {
    setFullName(value);
    if (value.trim() === '') {
      setFullNameError('ФИО не может быть пустым');
    } else if (!validateFullName(value)) {
      setFullNameError('Пожалуйста, введите корректное ФИО (хотя бы два слова кириллицей)');
    } else {
      setFullNameError('');
    }
  };

  const handleDateOfBirthChange = (value) => {
    setDateOfBirth(value);
    if (value.trim() === '') {
      setDateOfBirthError('Дата рождения не может быть пустой');
    } else {
      setDateOfBirthError('');
    }
  };

  const formatPhoneNumber = (value) => {
    const cleaned = (`${value}`).replace(/\D/g, '');
    const match = cleaned.match(/^(7|8)?(\d{3})(\d{3})(\d{2})(\d{2})$/);
    if (match) {
      const intlCode = (match[1] ? '+7' : '');
      return [intlCode, match[2], match[3], match[4], match[5]].filter(Boolean).join('-');
    }
    return value;
  };

  const handlePhoneNumberChange = (value) => {
    const cleaned = value.replace(/[^0-9+-]/g, ''); // only allow digits, +, and -
    const formattedValue = formatPhoneNumber(cleaned);
    setPhoneNumber(formattedValue);
  
    if (value.trim() === '') {
      setPhoneNumberError('Номер телефона не может быть пустым');
    } else {
      setPhoneNumberError('');
    }
  };

  const handleEmailChange = (value) => {
    setEmail(value);
    if (value.trim() === '') {
      setEmailError('Email не может быть пустым');
    } else if (!validateEmail(value)) {
      setEmailError('Пожалуйста, введите корректный адрес электронной почты (латиницей, с @ и .)');
    } else {
      setEmailError('');
    }
  };

  const handleFutureDateChange = (value) => {
    setFutureDate(value);
    if (value.trim() === '') {
      setFutureDateError('Дата не может быть пустой');
    } else if (!validateFutureDate(value)) {
      setFutureDateError('Пожалуйста, введите дату, которая как минимум следующий день от текущего');
    } else {
      setFutureDateError('');
    }
  };
  

  const handleBlur = (e) => {
    const { id, value } = e.target;
    switch (id) {
      case 'fullName':
        handleFullNameChange(value);
        break;
      case 'dateOfBirth':
        handleDateOfBirthChange(value);
        break;
      case 'phoneNumber':
        handlePhoneNumberChange(value);
        break;
      case 'email':
        handleEmailChange(value);
        break;
      case 'futureDate':
        handleFutureDateChange(value);
        break;
      default:
        break;
    }
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const hasErrors = [
      fullNameError,
      dateOfBirthError,
      phoneNumberError,
      emailError,
      futureDateError,
    ].some((error) => error !== '');

    if (hasErrors) {
      alert('Пожалуйста, исправьте ошибки в форме перед отправкой');
      return;
    }

    const formData = {
      fullName,
      phoneNumber,
      futureDate,
    };

    alert(`Вы отправили форму с данными:\n` +
      `ФИО: ${formData.fullName}\n` +
      `Номер телефона: ${formData.phoneNumber}\n` +
      `Дата и время: ${formData.futureDate}`);
  };


  return (
    <main className="main">
      <form onSubmit={handleSubmit} className="form">
        <h1>Бронирование</h1>
        <div className="formGroup">
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => handleFullNameChange(e.target.value)}
            onBlur={handleBlur}
            placeholder="Имя Фамилия"
            required
          />
          <label htmlFor="fullName" className="label sr-only">ФИО</label>
          {fullNameError && <p className="error">{fullNameError}</p>}
        </div>

        <div className="formGroup">
          <input
            type="text"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => handlePhoneNumberChange(e.target.value)}
            onBlur={handleBlur}
            placeholder="+7-XXX-XXX-XX-XX"
            required
          />
          <label htmlFor="phoneNumber" className="label sr-only">Номер телефона</label>
          {phoneNumberError && <p className="error">{phoneNumberError}</p>}
        </div>
        <div className="formGroup">
          <input
            type="datetime-local"
            id="futureDate"
            value={futureDate}
            onChange={(e) => handleFutureDateChange(e.target.value)}
            onBlur={handleBlur}
            required
          />
          <label htmlFor="futureDate" className="label sr-only">Выбор дату и времени</label>
          {futureDateError && <p className="error">{futureDateError}</p>}
        </div>
        <button type="submit">Отправить</button>
      </form>
    </main>
  );
}

export default MainForm;
