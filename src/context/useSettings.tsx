import { useContext } from 'react';
import { createContext, useEffect, useState } from 'react';
import type { FC, ReactNode } from 'react';
import _ from 'lodash';
import { Direction, ThemeName } from 'src/@types/theme';

interface Settings {
  direction?: Direction;
  responsiveFontSizes?: boolean;
  theme?: ThemeName;
}

interface ISettingsContext {
  settings: Settings;
  saveSettings: (update: Settings) => void;
}

interface IProps {
  settings?: Settings;
  children?: ReactNode;
}

const defaultSettings: Settings = {
  direction: 'ltr',
  responsiveFontSizes: true,
  theme: 'light'
};

const SettingsContext = createContext<ISettingsContext>({
  settings: defaultSettings,
  saveSettings: () => {}
});

export const SettingsProvider: FC<IProps> = ({ settings, children }) => {
  const [currentSettings, setCurrentSettings] = useState<Settings>(settings || defaultSettings);

  const restoreSettings = (): Settings | null => {
    let settings = null;

    try {
      const storedData: string | null = window.localStorage.getItem('settings');

      if (storedData) {
        settings = JSON.parse(storedData);
      }
    } catch (err) {
      console.error(err);
      // If stored data is not a strigified JSON this will fail,
      // that's why we catch the error
    }

    return settings;
  };

  const storeSettings = (settings: Settings): void => {
    window.localStorage.setItem('settings', JSON.stringify(settings));
  };

  const handleSaveSettings = (update: Settings = {}): void => {
    const mergedSettings = _.merge({}, currentSettings, update);

    setCurrentSettings(mergedSettings);
    storeSettings(mergedSettings);
  };

  useEffect(() => {
    const restoredSettings = restoreSettings();

    if (restoredSettings) {
      setCurrentSettings(restoredSettings);
    }
  }, []);

  useEffect(() => {
    //@ts-ignore
    document.dir = currentSettings.direction;
  }, [currentSettings]);

  return (
    <SettingsContext.Provider
      value={{
        settings: currentSettings,
        saveSettings: handleSaveSettings
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = (): ISettingsContext => useContext(SettingsContext);
