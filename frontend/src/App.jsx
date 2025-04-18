
import './App.css'
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {


  return (
    <>
    <Navbar /> { /* This is the header */}
     <main class="min-h-99  mx-auto px-4 py-4 font-primary">
      <Outlet /> {/* We have our app runnning out from here, the routes are rendred out from here  */}
     </main>
    <Footer /> { /* This is the footer */}
    </>
  )
}

export default App
