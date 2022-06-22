// import React, {useState} from "react";
// import * as FaIcons from "react-icons/fa";
// import {Link} from "react-router-dom"
//
//
// const Burger = () => {
//     const [sidebar, setSidebar] = useState(false);
//
//     function showSideMenu() {
//         setSidebar(!sidebar);
//     }
//     return (
//         <div>
//             <>
//                 <div className="navbar1a">
//                     <div to="#" className="menu-bars" onClick={showSideMenu}>
//                         <FaIcons.FaBars className="menu-icon"/>
//                     </div>
//                     <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
//                         <ul className="nav-menu-items">
//
//                             <li>
//                                 <Link href={"/"}>
//                                     <a>
//                                         Домой
//                                     </a>
//                                 </Link>
//
//                             </li>
//
//                             <li>
//                                 <Link href={"/rates"}>
//                                     <a>
//                                         Тарифы
//                                     </a>
//                                 </Link>
//
//                             </li>
//                             <li>
//                                 <Link href={"/#services"}>
//                                     <a>
//                                         Услуги
//                                     </a>
//                                 </Link>
//                             </li>
//                             <li>
//                                 <Link href={"/#description"}>
//                                     <a>
//                                         Контакты
//                                     </a>
//                                 </Link>
//                             </li>
//
//                         </ul>
//
//                     </nav>
//                 </div>
//             </>`
//         </div>
//     );
// };
//
// export default Burger;