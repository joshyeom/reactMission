import React, { useState } from 'react';
import { RecoilRoot } from 'recoil';
import { render } from 'react-dom';
import { Helmet } from 'react-helmet';
import App from './App.tsx';
import Info from './Info.tsx'; // Info 컴포넌트를 import합니다.

const Root = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const handleThemeToggle = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <React.StrictMode>
      <RecoilRoot>
        <Helmet>
          <html data-theme={isDarkTheme ? 'dark' : 'light'} className={isDarkTheme ? 'dark' : ''} />
        </Helmet>
        <App handleThemeToggle={handleThemeToggle} />
      </RecoilRoot>
    </React.StrictMode>
  );
};

render(
  <Root />,
  document.getElementById('root')
);