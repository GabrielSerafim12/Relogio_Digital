import { useState, useEffect } from "react";

function RelogioDigital() {
  const [hora, setHora] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const intervalo = setInterval(() => {
      setHora(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <div>
      <h2>Relógio Digital</h2>
      {<p>{hora}</p>}
    </div>
  );
}

export default RelogioDigital;
