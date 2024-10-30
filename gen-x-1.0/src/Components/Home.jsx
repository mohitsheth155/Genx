import React, { useContext } from 'react';
import { ThemeContext } from './ContextComp/ThemeContext';

const Home = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
if (theme === 'light' ) {
  console.log(" @@@ light");
  
} else {
  
  console.log(" @@@ dark");
}
  return (
    <div style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff' }}>
      <h1>{theme === 'light' ? 'Light Theme' : 'Dark Theme'}</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default Home;
