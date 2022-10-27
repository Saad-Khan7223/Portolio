import Designs from './components/Designs/Designs';
import Nav from './components/Nav/Nav';
import Project from './components/Projects/Project';
import Services from './components/Services/Services';
import Uppersec from './components/Upper/Uppersec';
function App() {
  return (
    <div className='dark:bg-gray-900 text-white'>
    <Nav/>
    <Uppersec/>
    <Services/>
    <Project/>
    <Designs/>
    </div>
  );
}

export default App;
