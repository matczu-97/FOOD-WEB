
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import ImproveSkills from "./components/ImproveSkills";

function App() {
  return (
    <div className="App">
     <NavBar/>
     <div className="container main">
      <HeroSection/>
      <ImproveSkills/>
     </div>
     
    </div>
  );
}

export default App;
