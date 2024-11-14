import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Minesweeper Game</h1>
      <div style={styles.buttonContainer}>
        <Link to="/rules">
          <button style={styles.button}>Rule</button>
        </Link>
        <Link to="/game/easy">
          <button style={styles.button}>Easy</button>
        </Link>
        <Link to="/game/medium">
          <button style={styles.button}>Medium</button>
        </Link>
        <Link to="/game/hard">
          <button style={styles.button}>Hard</button>
        </Link>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  },
  title: {
    marginBottom: '10px',
    marginTop: '-300px',
    fontSize: '36px',
    fontWeight: 'bold',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    marginTop: '20px',
  },
  button: {
    padding: '15px 30px',
    fontSize: '20px',
  },
};

export default Home;
