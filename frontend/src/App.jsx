import { Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import InternDashboard from "./pages/InternDashboard";
import AddIntern from "./pages/AddIntern";

function App() {
  return (
    <>
      <Toaster />

      <Routes>
        {/* Root path opens Intern Dashboard */}
        <Route path="/" element={<InternDashboard />} />

        {/* Dashboard page */}
        <Route path="/intern-dashboard" element={<InternDashboard />} />

        {/* Add Intern Form page */}
        <Route path="/add-intern" element={<AddIntern />} />
      </Routes>
    </>
  );
}

export default App;
