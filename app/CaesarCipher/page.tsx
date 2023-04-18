'use client';

import React, { useState } from 'react';

function CaesarCipher() {
  const [message, setMessage] = useState('');
  const [shift, setShift] = useState('');
  const [encryptedMessage, setEncryptedMessage] = useState('');
  const [decryptedMessage, setDecryptedMessage] = useState('');
  
  const handleChange = (setter) => (event) => {
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
        } else if (code >= 97 && code <= 122) {
          return String.fromCharCode(((code - 97 + parsedShift) % 26) + 97);
        } else {
          return char;
        }
      })
      .join('');
    setEncryptedMessage(encrypted);
  };
  
  const decrypt = () => {
    const parsedShift = parseInt(shift);
    const decrypted = encryptedMessage
      .split('')
      .map((char) => {
        const code = char.charCodeAt(0);
        if (code >= 65 && code <= 90) {
          return String.fromCharCode(((code - 65 - parsedShift + 26) % 26) + 65);
        } else if (code >= 97 && code <= 122) {
          return String.fromCharCode(((code - 97 - parsedShift + 26) % 26) + 97);
        } else {
          return char;
        }
      })
      .join('');
    setDecryptedMessage(decrypted);
  };
  
  return (
    <div>
      <input type="text" placeholder="Enter message to encrypt" onChange={handleChange(setMessage)} />
      <input type="text" placeholder="Enter shift value" onChange={handleChange(setShift)} />
      <button onClick={encrypt}>Encrypt</button>
      <p>Encrypted message: {encryptedMessage}</p>
      <input type="text" placeholder="Enter message to decrypt" onChange={handleChange(setEncryptedMessage)} />
      <input type="text" placeholder="Enter shift value" onChange={handleChange(setShift)} />
      <button onClick={decrypt}>Decrypt</button>
      <p>Decrypted message: {decryptedMessage}</p>
    </div>
  );
  
}

export default CaesarCipher;
