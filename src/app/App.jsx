import About from "../component/about/About.jsx";
import Contact from "../component/contact/Contact.jsx";
import Service from "../component/service/Service.jsx";
import Home from "../component/home/Home.jsx";
import { Routes, Route } from "react-router-dom";
import SignIn from "../component/auth/SignIn.jsx";
import Login from "../component/auth/Login.jsx";
import Plan from "../component/plans/Plans.jsx";


function App() {

  return (
    <div>

       <Routes>
           <Route path='/' element={<Home />} />
           <Route path='/about' element={<About />} />
           <Route path='/contact' element={<Contact />} />
           <Route path='/service' element={<Service />} />
           <Route path='/signIn' element={<SignIn />} />
           <Route path='/login' element={<Login />} />
           <Route path='/plan' element={<Plan />} />
       </Routes>



    </div>
  )
}

export default App
