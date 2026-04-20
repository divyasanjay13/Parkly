import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './component/homepage/Homepage';
import WorksPage from './component/Workpage/WorksPage.jsx';
import RentSpace from './component/RentSpace/RentSpace.jsx';
import Business from './component/Business/Business.jsx';



function App() {
  return (
    <div>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/how-it-works/overview/" element={<WorksPage />} />
      <Route path="/how-it-works/rent-out-your-driveway" element={<RentSpace />} />
      <Route path="/business-solutions" element={<Business />} />
      </Routes>
      </div>
  );  
}

export default App;