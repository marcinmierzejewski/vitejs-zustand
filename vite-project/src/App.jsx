// cd my-project
// npm install
// npm run dev
import "./App.css";
import { create } from "zustand";

const useCarrots = create((set) => ({
  orange: 0,
  violet: 0,
  increaseOrange: () => set((state) => ({ orange: state.orange + 1 })),
  increaseViolet: () => set((state) => ({ violet: state.violet + 1 })),
}));

function Counter() {
  const { orange, violet, increaseOrange, increaseViolet } = useCarrots();
  return (
    <div className="counter">
      <h1>CARROTS</h1>
      <div>
        <h3>Owned</h3>
        <div className="ownedItem">Orange: <span>{orange} </span></div>
        <div className="ownedItem">Violet: <span>{violet} </span></div>
      </div>
      <div class="buyWrapper">
        <h3>Buy</h3>
        <div class="buyItem">
          <span className="buyName">Orange</span>
          <button onClick={increaseOrange}>+ 1</button>
        </div>
        <div class="buyItem">
          <span className="buyName">Violet</span>
          <button onClick={increaseViolet}>+ 1</button>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;
