import React, { useState } from 'react';
import NavigationMenu from './components/NavigationMenu';

function App() {
  const [selectedMenuItem, setSelectedMenuItem] = useState('Home');

  const handleSelectMenuItem = (menuItem) => {
    setSelectedMenuItem(menuItem);
  };

  return (
    <div className="app">
      <NavigationMenu onSelectMenuItem={handleSelectMenuItem} />
    </div>
  );
}

export default App;