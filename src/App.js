import './App.css';
import Header from "./components/Header/Header";
import SimpleBottomNavigation from "./components/MenNav/MenNav";


function App() {
  return (
      <>
        <Header/>
    <div className={'app'}>
      <SimpleBottomNavigation/>
    </div>
      </>
  );
}

export default App;
