# aluno: Alysson Rodrigo 
# data : 18/12/24

# utilizando o useEffect


# Atividade 1 Exemplo  
 Modificar o tema do site de acordo com a hora\nNeste exemplo, o tema do site (claro ou escuro) é alterado automaticamente conforme o horário atual.

# código:

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

# Atividade 2 Exemplo  

 Verificar a situação da conexão com a internet\nNeste exemplo, é feito o acompanhamento para saber se o usuário está online ou offline.

 # Código 

 import React, { useState, useEffect } from "react";

const ConnectionStatus = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const updateStatus = () => setIsOnline(navigator.onLine);

    window.addEventListener("online", updateStatus);
    window.addEventListener("offline", updateStatus);

    return () => {
      window.removeEventListener("online", updateStatus);
      window.removeEventListener("offline", updateStatus);
    };
  }, []); // Executa apenas na montagem do componente

  return (
    <div>
      <h1>Status de Conexão: {isOnline ? "Online" : "Offline"}</h1>
    </div>
  );
};
export default ConnectionStatus;