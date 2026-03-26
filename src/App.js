import Navbar from './components/Navbar';
import ProfileSection from './components/ProfileSection';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="app__main">
        <ProfileSection />
      </main>
    </div>
  );
}

export default App;
