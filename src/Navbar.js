import React from 'react';

const Navbar = ({ mobileMode, setMobileMode }) => {
  return (
    <div style={styles.navbar}>
      <button 
        onClick={() => setMobileMode(false)} 
        style={{ ...styles.button, ...(mobileMode ? styles.mobileFont : {}) }}
      >
        Computer
      </button>
      <button 
        onClick={() => setMobileMode(true)} 
        style={{ ...styles.button, ...(mobileMode ? styles.mobileFont : {}) }}
      >
        Mobile
      </button>
    </div>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px',
    backgroundColor: '#333',
    color: '#fff',
  },
  button: {
    background: 'transparent',
    border: 'none',
    color: '#fff',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
  },
  mobileFont: {
    fontSize: '11px', // 30% smaller than the original 16px font size
  },
  activeButton: {
    backgroundColor: '#555',
    border: 'none',
    color: '#fff',
    padding: '10px 20px',
    cursor: 'pointer',
  },
};

export default Navbar;
