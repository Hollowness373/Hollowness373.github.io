import React , {useState, useEffect} from 'react'
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Portfolio from "./components/portfolio/Portfolio";
import Contacts from  "./components/contacts/Contacts";
import Footer from "./components/footer/Footer";
import StarsCanvas from './stars/StarsCanvas.tsx';
import HashLoader from 'react-spinners/HashLoader'

const App = () => {

  const [ isLoading, setLoading ] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    },3000)
  }, [])

  return (
    <>
      {isLoading ? 
        <div className='loading-screen'>
          <HashLoader
            color={"#AA7AE7"}
            loading={isLoading}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      :
        <>
          <StarsCanvas />
          <Header />
          <Nav />
          <About />
          <Experience />
          <Portfolio />
          <Contacts />
          <Footer />
        </>
      }
    </>
  )
}

export default App