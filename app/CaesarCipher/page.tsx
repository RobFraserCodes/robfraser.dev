'use client';

import React, { useState } from 'react';

function CaesarCipher() {
  const [message, setMessage] = useState('');
  const [shift, setShift] = useState(0);
  const [encryptedMessage, setEncryptedMessage] = useState('');
  const [decryptedMessage, setDecryptedMessage] = useState('');

  const handleChange = (setter: React.Dispatch<React.SetStateAction<string>>) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setter(event.target.value);
  };

  const encrypt = () => {
    const parsedShift = parseInt(shift);
    const encrypted = message
      .split('')
      .map((char) => {
        const code = char.charCodeAt(0);
        if (code >= 65 && code <= 90) {
          return String.fromCharCode(((code - 65 + parsedShift) % 26) + 65);
        }
        if (code >= 97 && code <= 122) {
          return String.fromCharCode(((code - 97 + parsedShift) % 26) + 97);
        }
        return char;
      })
      .join('');
    setEncryptedMessage(encrypted);
  };
  
  const decrypt = () => {
    const decrypted = message
      .split('')
      .map((char) => {
        const code = char.charCodeAt(0);
        if (code >= 65 && code <= 90) {
          return String.fromCharCode(((code - 65 - parseInt(shift, 10) + 26) % 26) + 65);
        }
        if (code >= 97 && code <= 122) {
          return String.fromCharCode(((code - 97 - parseInt(shift, 10) + 26) % 26) + 97);
        }
        return char;
      })
      .join('');
    setDecryptedMessage(decrypted);
  };
  
  
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-8">Caesar Cipher</h1>
      <h3>A wee demo site to encrypt and decrypt messages.</h3>
      <div className="w-96 bg-white rounded-lg p-6 shadow-lg">
        <input
          type="text"
          value={message}
          onChange={handleChange(setMessage)}
          className="w-full px-3 py-2 mb-4 border rounded-lg focus:outline-none focus:ring focus:border-blue-300 text-slate-900"
          placeholder="Enter message"
        />
        <input
          type="number"
          value={shift}
          onChange={handleChange(setShift)}
          className="w-full px-3 py-2 mb-4 border rounded-lg focus:outline-none focus:ring focus:border-blue-300 text-slate-900"
          placeholder="Enter shift"
        />
        <button
          onClick={encrypt}
          className="w-full mb-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Encrypt
        </button>
        <div className="mb-4 text-slate-900">{encryptedMessage}</div>
        <button
          onClick={decrypt}
          className="w-full mb-4 px-4 py-2 bg-green-500 text-white font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
        >
          Decrypt
        </button>
        <div className='text-slate-900'>{decryptedMessage}</div>
      </div>
    </div>
  );
}

export default CaesarCipher;
