import { Home } from "./components/Home";
import { Detail } from "./components/Detail";

const AppRoutes = [
    {
        index: true,
        element: <Home />
    },
    {
        path: '/detail',
        element: <Detail />
    },
];

export default AppRoutes;
