import { createBrowserRouter } from 'react-router-dom';
import Root from '../layout/root';
import About from '../pages/about/About';
import NotFound from '../pages/notfound/NotFound';
import Home from '../pages/home/Home';
import ConsultoriaTD from '../pages/consultoriaTD/ConsultoriaTD';
import Sipa from '../pages/SIPA/Sipa';
import BusinessI from '../pages/businessI/BusinessI';


const router = createBrowserRouter([
   {
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'consultoriatransformaciondigital',
        element: <ConsultoriaTD />,
      },
      {
        path: 'sipa',
        element: <Sipa />,
      },
      {
        path: 'businessintellence',
        element: <BusinessI />,
      },
    ]

    }
]);

export default router;
