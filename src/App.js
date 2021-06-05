import {useState} from 'react';
import "./App.sass";

function App() {

  const notas = [
    {
      nombre: "Do",
      link: require("./notes/do.wav"),
      sostenido: true,
    },
    {
      nombre: "Re",
      link: require("./notes/re.wav"),
      sostenido: true,
    },
    {
      nombre: "Mi",
      link: require("./notes/mi.wav"),
    },
    {
      nombre: "Fa",
      link: require("./notes/fa.wav"),
      sostenido: true,
    },
    {
      nombre: "Sol",
      link: require("./notes/sol.wav"),
      sostenido: true,
    },
    {
      nombre: "La",
      link: require("./notes/la.wav"),
      sostenido: true,
    },
    {
      nombre: "Si",
      link: require("./notes/si.wav"),
    },
    {
      nombre: "Do-Octava",
      link: require("./notes/do-octave.wav")
    }
  ];

  const sostenidas = [
    {
      nombre:"Do-sostenido",
      link: require("./sostenidos/do-sost.wav")
    },
    {
      nombre:"Re-sostenido",
      link: require("./sostenidos/re-sost.wav")
    },
    {
      nombre:"Fa-sostenido",
      link: require("./sostenidos/fa-sost.wav")
    },
    {
      nombre:"Sol-sostenido",
      link: require("./sostenidos/sol-sost.wav")
    },
    {
      nombre:"La-sostenido",
      link: require("./sostenidos/la-sost.wav")
    }
  ];

  const handlerClickNote = (nota) => {
    setSonando(nota.nombre)
    const sonido = new Audio(nota.link.default);
    sonido.play();
  };

  const handlerClickSost = (sostenida) => {
      setSonando(sostenida.nombre)
      const sonido = new Audio(sostenida.link.default);
      sonido.play();
  };

  const [sonando, setSonando] = useState('');

  setTimeout(() => {
    setSonando('');
  },350)

  return (
    <div>
      <div className="titulo">
        <h1>Piano con React</h1>
        <h2>Hecho por Mariana</h2>
        <h3 className="esta-sonando">{sonando}</h3>
      </div>
      <div className="container">
        {notas.map((nota) => (
          <div key={nota.nombre} className={`nota ${sonando === nota.nombre && 'sonando'}`} onClick={() => handlerClickNote(nota)}>
            {/* {nota.sostenido && <div className="negra" onClick={() => handlerClickSost(sostenidas)}></div>} */}
            {/* {nota.sostenido ? <div className="negra"></div> : null} */}
          </div>
        ))}
        <div className="container-negras">
        {sostenidas.map(sostenida => (
          <div key={sostenida.nombre} id={sostenida.nombre} className={`negra ${sonando === sostenida.nombre && 'sonando2'}`} onClick={() => handlerClickSost(sostenida)}></div>
        ))}
        </div>
      </div>
    </div>
  );
}

export default App;
