import React, { useState, useEffect } from "react";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const hour = new Date().getHours();
    setTheme(hour >= 18 || hour < 6 ? "dark" : "light");
  }, []); // Executa apenas na montagem do componente

  return (
    <div className={`theme-${theme}`}>
      <h1>O tema atual é {theme}</h1>
    </div>
  );
};

export default ThemeSwitcher;
