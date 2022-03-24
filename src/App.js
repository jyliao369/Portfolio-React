import Homepage from "./Homepage";
import Navbar from "./Navbar";
import Footer from "./Footer";

function App() {
  return (
    <div class="outerContainer">
      <Navbar />
      <div className="App">
        <Homepage />
        <Footer />
      </div>
    </div>
  );
}

export default App;
