import { GlobalStyle } from "styles/GlobalStyle";
import WordCard from "./WordCard/WordCard";

function App() {
  return (
    <>
      <GlobalStyle />
      <div
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          marginTop: "-100px",
        }}
      >
        <WordCard />
      </div>
    </>
  );
}

export default App;
