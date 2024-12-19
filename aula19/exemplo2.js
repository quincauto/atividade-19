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