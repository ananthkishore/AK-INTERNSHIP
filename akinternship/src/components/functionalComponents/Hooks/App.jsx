import Home from "../home";
import About from "../about";
import Gallery from "./components/FunctionalComponents/Gallery";
import UseRef from "./useRef";
import Contact from "../contact";
import Navbar from "../navBar";
import UseState from "./useState";
import SignUp from "./components/FunctionalComponents/SignIn";
import SignUp from "../signUp";
import Login from "../login";
import UseEffect from "./useEffect";
import UseMemo from "./useMemo";
import UseEffectApi from "./useEffectApi";
import UseEffectAPIimage from "./useEffectApiimage";
import UseCallback from "./useCallback";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactLifecycleMethods from "./components/classComponents/ReactLifeCycleMethods";
import Student from "./components/FunctionalComponents/Hooks/Student";
import Memo from "./components/FunctionalComponents/Memoization/Memo";
import FunctionInsideClass from "./components/classComponents/FunctionInsideClass";
import LazyLoadingWithSuspense from "./components/FunctionalComponents/Memoization/LazyLoadingWithSuspense";
import UseLocalStorage from "./components/FunctionalComponents/Hooks/UseLocalStorage";
import DarkModeToggle from "./components/FunctionalComponents/Hooks/CustomHooks/DarkModeToggle";



function App() {
return (
<BrowserRouter>
<Navbar />
<Routes>
<Route path="/" element={<Home />}></Route>
<Route path="/About" element={<About />}></Route>
<Route
path="/Gallery"
element={<Gallery image="SECE logo" page="Gallery" />}
></Route>
<Route path="/Contact" element={<Contact />}></Route>
<Route path="/use-state" element={<Contact />}></Route>
<Route path="/Signup" element={<SignUp />}></Route>
<Route path="/react-lifecycle-methods" element={<ReactLifecycleMethods />}></Route>
<Route path="/UseState" element={<UseState />}></Route>
<Route path="/UseEffect" element={<UseEffect />}></Route>
<Route path="/use-effectapi" element={<UseEffectApi />}></Route>
<Route path="/use-ref" element={<UseRef />}></Route>
<Route path="/use-memo" element={<UseMemo />}></Route>
<Route path="/Login" element={<Login />}></Route>
<Route path="/useimg" element={<UseEffectAPIimage />}></Route>
<Route path="/use-call" element={<UseCallback />}></Route>
<Route path="/use-context" element={<Student />}></Route>
<Route path="/memo" element={<Memo/>}></Route>
<Route path="/lazy" element={<LazyLoadingWithSuspense/>}></Route>
<Route path="/use-custom" element={<UseLocalStorage/>}></Route>
<Route path="/hoc" element={<HoC />}></Route>
<Route path="/function-class" element={<FunctionInsideClass />} />
<Route path="/custom-hooks2" element={<DarkModeToggle />} />
</Routes>
</BrowserRouter>
);
}

export default App;