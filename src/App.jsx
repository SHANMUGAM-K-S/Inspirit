// import React from 'react'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Navbar from './components/Navbar'
// import Section1 from './components/Section1'
// import Section2 from './components/Section2'
// import Careers from './components/Careers'

// const App = () => {
//   return (
//     <div>
//       <BrowserRouter>
//         <Navbar />
//         <Routes>
//           <Route path='/' element={[<Section1 />, <Section2 />]} />
//           <Route path='/career' element={[<Section1 />, <Careers />]} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   )
// }

// export default App


import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Section2 from './components/Section2'
import Careers from './components/Careers'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ServiceHomePage from './components/ServicesHomePage'
import MechanicalServices from './components/MechanicalServices'
import SoftwareServices from './components/SoftwareServices'
import AutomotiveServices from './components/AutomotiveServices'
import About from './components/About'
import ScrollToTop from './components/ScrollToTop'

import 'react-phone-number-input/style.css';



const App = () => {
  return (
    <div>

      <BrowserRouter>
        <ScrollToTop />
        <Navbar />

        <Routes>
          <Route path='/' element={<Section2 />} />
          <Route path='/career' element={<Careers />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/service' element={<ServiceHomePage />} />
          <Route path='/MechanicalServices' element={<MechanicalServices />} />
          <Route path='/SoftwareServices' element={<SoftwareServices />} />
          <Route path='/AutomotiveServices' element={<AutomotiveServices />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
