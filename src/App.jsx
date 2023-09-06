// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
// import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
// import HomePage from "./components/HomePage";
// import AboutPage from "./components/About/AboutPage";
// import ContactPage from "./components/Contac/ContactPage";
// import NotFound from "./components/NotFound";
// import AboutProduct from "./components/About/AboutProduct";
// import AboutUse from "./components/About/AboutUse";
// import AboutIndex from "./components/About/AboutIndex";
// import DemoNavigate from "./components/DemoNavigate";
// import Course from "./components/Course";
// import CourseDetail from "./components/DynamicRouter/CourseDetail";
// import CourseDetailType from "./components/DynamicRouter/CourseDetailType";
// import Admin from "./components/PrivateRouter/Admin";
// import Login from "./components/PrivateRouter/Login";
// import PriveRouter from "./components/PrivateRouter/PriveRouter";
// import Service from "./components/thuchanh2/Service";
// // import About from "./components/thuchannh1/About";
// // import Team from "./components/thuchanh2/Team";
// // import ContactTh2 from "./components/thuchanh2/ContactTh2";
// // import Navbar from "./components/thuchanh2/Navbar";
// // import PortfolioTh2 from "./components/thuchanh2/PortfolioTh2";
// // import AboutTh2 from "./components/thuchanh2/AboutTh2";
// // import Home from "./components/thuchannh1/Home";
// // import About from "./components/thuchannh1/About";
// // import Contact from "./components/thuchannh1/Contact";
// // import Portfolio from "./components/thuchannh1/Portfolio";

// function App() {
//   // const styleNavLink = ({ isActive }) => ({
//   //   color: isActive ? "white" : "black",
//   //   backgroundColor: isActive ? "black" : "white",
//   // });
//   return (
//     <>
//       {/* <ul>
//         <li>
//           <Link to={"/home"}>HomePage</Link>
//         </li>
//         <li>
//           <Link to={"/about"}>About page</Link>
//           <ul>

//             <li>
//               <Link to={"/about/about-product"}>About product</Link>
//             </li>
//             <li>
//               <Link to={"/about/about-user"}>About product</Link>
//             </li>
//           </ul>
//         </li>
//         <li>
//           <Link to={"/contact"}>Contact oage</Link>
//         </li>
//       </ul> */}
//       {/*dùng NavLink  */}
//       {/* <ul>
//         <li>
//           <NavLink to={"/home"} style={styleNavLink}>
//             HomePage
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to={"/about"} style={styleNavLink}>
//             About page
//           </NavLink>
//           <ul>
//             <li>
//               <NavLink to={"/about/about-product"} style={styleNavLink}>
//                 About product
//               </NavLink>
//             </li>
//             <li>
//               <NavLink to={"/about/about-user"} style={styleNavLink}>
//                 About product
//               </NavLink>
//             </li>
//           </ul>
//         </li>
//         <li>
//           <NavLink to={"/contact"} style={styleNavLink}>
//             Contact page
//           </NavLink>
//         </li>
//       </ul>
//       <DemoNavigate /> */}

//       {/* cấu hình các router */}
//       {/* <Routes> */}
//       {/* nhận 2 giá trị  
//           +path: đường dẫn url
//           +element: component tương ứng*/}
//       {/* <Route path="/home" element={<HomePage />}></Route> */}

//       {/* <Route path="/about" element={<AboutPage />}> */}
//       {/* Router index: lấy path của Router cha: path:="/about" */}

//       {/* <Route index element={<AboutIndex />}></Route>
//           <Route path="about-product" element={<AboutProduct />}></Route>
//           <Route path="about-user" element={<AboutUse />}></Route>
//         </Route> */}

//       {/* <Route path="/contact" element={<ContactPage />}></Route> */}
//       {/* Dynamic Router */}
//       {/* <Route path="/course" element={<Course />}></Route> */}
//       {/* <Route path="/course/:id" element={<CourseDetail />}></Route> */}
//       {/* <Route path="/course/:id/:type" element={<CourseDetailType />}></Route> */}
//       {/* prive router */}
//       {/* <Route element={<PriveRouter />}>
//           <Route path="/admin" element={<Admin />}></Route>
//         </Route>
//         <Route path="/login" element={<Login />}></Route> */}

//       {/* router báo lỗi */}
//       {/* <Route path="*" element={<NotFound />}></Route> */}
//       {/* </Routes> */}
//       {/* <div id="content" className="p-4 p-md-5">
//         <nav className="navbar navbar-expand-lg navbar-light bg-light">
//           <div className="container-fluid">
//             <div
//               className="collapse navbar-collapse"
//               id="navbarSupportedContent"
//             >
//               <ul className="nav navbar-nav ml-auto">
//                 <li className="nav-item active">
//                   <NavLink to={"/"} style={styleNavLink}>
//                     Home
//                   </NavLink>
//                 </li>
//                 <li className="nav-item">
//                   <NavLink to={"/about"} style={styleNavLink}>
//                     About
//                   </NavLink>
//                 </li>
//                 <li className="nav-item">
//                   <NavLink to={"/portfolio"} style={styleNavLink}>
//                     Portfolio
//                   </NavLink>
//                 </li>
//                 <li className="nav-item">
//                   <NavLink to={"/contact"} style={styleNavLink}>
//                     Contac
//                   </NavLink>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </nav>
//         <Routes>
//           <Route path="/" element={<Home />}></Route>
//           <Route path="/about" element={<About />}></Route>
//           <Route path="/contact" element={<Contact />}></Route>
//           <Route path="/portfolio" element={<Portfolio />}></Route>
//         </Routes>
//       </div> */}
//       {/* Navigation*/}

//       <Navbar />
//       <Routes>
//         <Route path="/service" element={<Service />}></Route>
//         <Route path="/porfolio" element={<PortfolioTh2 />}></Route>
//         <Route path="/about" element={<AboutTh2 />}></Route>
//         <Route path="/team" element={<Team />}></Route>
//         <Route path="/contact" element={<ContactTh2 />}></Route>
//       </Routes>
//     </>
//   );
// }

// export default App;

import React from 'react'
import { Routes } from 'react-router-dom'

export default function App() {
  return (
    <>
      <Routes>
        
      </Routes>
    </>
  )
}
