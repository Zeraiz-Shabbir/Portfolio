import React, { useState, useEffect } from 'react';
import './SettingsDialog.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const themes = [
  { name: 'Classic', primaryColor: '#F8F8F8', secondaryColor: '#333333', accentColor: '#FF6F61' },
  { name: 'Evening Dusk', primaryColor: '#2C3E50', secondaryColor: '#ECF0F1', accentColor: '#E74C3C' },
  { name: 'Coastal Mist', primaryColor: '#E3EEF3', secondaryColor: '#34495E', accentColor: '#2A9D8F' },
  { name: 'Warm Stone', primaryColor: '#E5D4C0', secondaryColor: '#4A4031', accentColor: '#D2691E' },
  { name: 'Soft Dawn', primaryColor: '#FFF9E6', secondaryColor: '#3A3A3A', accentColor: '#88B04B' },
];

const SettingsDialog = ({ onClose, onChangeTheme }) => {
  const [selectedTheme, setSelectedTheme] = useState(null); // Initialize with null

  useEffect(() => {
    const savedTheme = document.cookie.split('; ').find(row => row.startsWith('theme='));
    if (savedTheme) {
      const themeName = savedTheme.split('=')[1];
      const theme = themes.find(t => t.name === themeName) || themes[0];
      setSelectedTheme(theme);
      updateTheme(theme); // Update theme immediately after setting
    } else {
      setSelectedTheme(themes[0]); // Set default theme if no cookie found
      updateTheme(themes[0]);
    }
  }, []);

  const updateTheme = (theme) => {
    document.documentElement.style.setProperty('--primary-color', theme.primaryColor);
    document.documentElement.style.setProperty('--secondary-color', theme.secondaryColor);
    document.documentElement.style.setProperty('--accent-color', theme.accentColor);
  };

  const handleThemeChange = (theme) => {
    setSelectedTheme(theme);
  };

  const handleConfirm = () => {
    if (selectedTheme) {
      onChangeTheme(selectedTheme.name); // Call the passed function to change the theme
      updateTheme(selectedTheme); // Update the CSS variables here
    }
    onClose(); // Close the dialog after confirming
  };

  // If selectedTheme is null (not initialized), show a loading state
  if (!selectedTheme) {
    return null; // Prevent any UI from rendering until the theme is loaded
  }

  return (
    <>
      <div className="settings-backdrop" onClick={onClose}></div>
      <div className="settings-dialog">
        <div className="settings-dialog-content">
          <h2>Choose a Theme</h2>
          <div className="theme-options">
            {themes.map((theme) => (
              <div
                key={theme.name}
                className={`theme-option ${selectedTheme.name === theme.name ? 'selected' : ''}`}
                onClick={() => handleThemeChange(theme)}
                style={{ backgroundColor: theme.primaryColor, color: theme.secondaryColor }}
                data-theme={theme.name}
              >
                <div className="theme-preview" style={{ backgroundColor: theme.primaryColor }} />
                <div className="theme-name">{theme.name}</div>
                <div className="theme-colors">
                  <span style={{ backgroundColor: theme.primaryColor }} className="color-box" />
                  <span style={{ backgroundColor: theme.secondaryColor }} className="color-box" />
                  <span style={{ backgroundColor: theme.accentColor }} className="color-box" />
                </div>
              </div>
            ))}
          </div>
          <div className="dialog-buttons">
            <div className="icon-wrapper cancel-icon" onClick={onClose}>
              <FontAwesomeIcon icon={faTimesCircle} />
            </div>
            <div className="icon-wrapper confirm-icon" onClick={handleConfirm}>
              <FontAwesomeIcon icon={faCheckCircle} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingsDialog;
