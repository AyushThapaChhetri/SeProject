import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div>
        <p>&copy; 2024 Your Website</p>
        <p>Contact us: contact@example.com</p>
        <p>Phone: +1234567890</p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#3A4D39',
    color: '#fff',
    textAlign: 'center',
    padding: '1rem',
    left: '0',
    bottom: '0',
  },
};

export default Footer;
