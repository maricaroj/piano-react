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
  ];

  const handlerClickNote = (nota) => {
    setSonando(nota.nombre)
    const sonido = new Audio(nota.link.default);
    sonido.play();
  };

  // const [click, setClick] = useState(0);
  const [sonando, setSonando] = useState('');

  // const handlerClickCount = () => {
  //   setClick(click + 1);
  // };

  setTimeout(() => {
    setSonando('');
  },300)

  return (
    <div>
      <div className="titulo">
        <h1>Piano con React</h1>
        <h2>Hecho por Mariana</h2>
        <h3 className="esta-sonando">{sonando}</h3>
        {/* <button onClick={handlerClickCount}>Has dado {click} clicks</button> */}
      </div>
      <div className="container">
        {notas.map((nota) => (
          <div key={nota.nombre} className={`nota ${sonando === nota.nombre && 'sonando'}`} onClick={() => handlerClickNote(nota)}>
            {nota.sostenido && <div className="negra"></div>}
            {/* {nota.sostenido ? <div className="negra"></div> : null} */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
