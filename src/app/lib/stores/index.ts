import React, { createContext, useState, useContext } from 'react';

// Creating contexts
export const ConfigContext = createContext();
export const UserContext = createContext();
export const ThemeContext = createContext();
export const ChatIdContext = createContext();
export const ChatsContext = createContext();
export const ModelsContext = createContext();
export const ModelFilesContext = createContext();
export const PromptsContext = createContext();
export const SettingsContext = createContext();
export const ShowSettingsContext = createContext();

// Creating provider components
export const ConfigProvider = ({ children }) => {
  const [config, setConfig] = useState(undefined);
  return <ConfigContext.Provider value={[config, setConfig]}>{children}</ConfigContext.Provider>;
};

// Repeat the pattern for other contexts...
