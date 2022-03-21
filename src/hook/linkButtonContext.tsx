import React, { useContext } from 'react';

export const LinkButtonContext = React.createContext({ lang: 'en' }); 

const Display = () => {
    // lang will be of type string
    const { lang } = useContext(LinkButtonContext);
    return <>
      <p>Your selected language: {lang}</p>
    </>
  }