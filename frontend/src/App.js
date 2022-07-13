import { Route, Routes } from "react-router-dom";
import Admin from "./pages/admin";
import Home from "./pages/Home";
import User from "./pages/user";
import {useSelector} from 'react-redux'

function App() {
  const userLogin = useSelector(state=>state.user.isLogin)
  const adminLogin = useSelector(state=>state.admin.isLogin)
  return (
    <div className="App w-[100vw] h-[100vh]">
      <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="/user" element={<User/>}/>
        <Route path="/admin" element={<Admin/>}/>

        {/* protected route */}
        {
          userLogin && <>
           
          </>
        }
        {
          adminLogin && <>
          
          </>
        }

        {/* error page */}
        <Route path="*" element={'404'}/>

      </Routes>
    </div>
  );
}

export default App;
