import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col justify-start text-left">
      <h1 className="text-4xl bg-red-500 py-2 px-6 rounded-lg shadow-lg text-white">
        Sample title
      </h1>

      <p className="mt-3 px-10 py-5 text-blue-800 font-light">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente
        asperiores eos numquam quisquam similique nesciunt perferendis, cumque,
        voluptates voluptate totam cupiditate incidunt sed expedita! Expedita
        hic laboriosam ea quos beatae!
      </p>
    </div>
  );
}

export default App;
