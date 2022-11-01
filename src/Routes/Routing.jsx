import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Home from '../Pages/Home';
import Details from '../Pages/detail/Details';
import Catalog from '../Pages/Catalog';

const Routing = () => {
    return (
        <Switch>
            <Route
                path='/:category/search/:keyword'
                component={Catalog}
            />
            <Route
                path='/:category/:id'
                component={Details}
            />
            <Route
                path='/:category'
                component={Catalog}
            />
            <Route
                path='/'
                exact
                component={Home}
            />
        </Switch>
    );
}

export default Routing;



















// import React from 'react';
// import {Route, Routes, Link, Router} from 'react-router-dom';
// import Home from '../Pages/Home';
// import Details from '../Pages/Details';
// import Catalog from '../Pages/Catalog';

// const Routing=()=> {
//     return (
//         <div>
//           <nav>
//             <ul>
//               <li>
//                 <Link to="/">Home</Link>
//               </li>
//               <li>
//                 <Link to="/Catalog"></Link>
//               </li>
//               <li>
//                 <Link to="/Details"></Link>
//               </li>
//             </ul>
//           </nav>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/:category/search/:keyword" element={<Catalog />} />
//             <Route path="/:category" element={<Catalog />} />
//             <Route path="/:category/:id" element={<Details />} />
//             <Route path="/" element={<Home />} />
//           </Routes>
//         </div>
//     );
//   }


// export default Routing;



