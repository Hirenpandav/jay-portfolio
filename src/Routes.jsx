import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
// import ScrollToTop from "components/ScrollToTop";
// import ErrorBoundary from "components/ErrorBoundary";
// Add your imports here



const Routes = () => {
  return (
    <BrowserRouter>
      {/* <ErrorBoundary>
      <ScrollToTop /> */}
      <RouterRoutes>
        {/* Define your routes here */}
        <Route path="/" element={<Homepage />} />
        <Route path="/homepage" element={<Homepage />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} /> */}
      </RouterRoutes>
      {/* </ErrorBoundary> */}
    </BrowserRouter>
  );
};

export default Routes;