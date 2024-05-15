
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import ImproveSkills from "./components/ImproveSkills";
import QuoteSection from "./components/QuoteSectio";
import ChiefsSection from "./components/ChiefsSection";


function App() {
  return (
    <div className="App">
     <NavBar/>
     <div className="container main">
      <HeroSection/>
      <ImproveSkills/>
      <QuoteSection/>
      <ChiefsSection/>
     </div>
     
    </div>
  );
}

export default App;
