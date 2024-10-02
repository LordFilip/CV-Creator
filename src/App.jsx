import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { PageProvider } from "./CV-context";
import Homepage from "./pages/Homepage";
import Createpage from "./pages/Createpage";
import Education from "./components/CreatePageComponents/Education";
import Experience from "./components/CreatePageComponents/Experience";
import PersonalInformations from "./components/CreatePageComponents/PersonalInforamtions";

function App() {
  return (
    <PageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/create" element={<Createpage />}>
            <Route index element={<Navigate to="personalInformations" />} />
            <Route
              path="personalInformations"
              element={<PersonalInformations />}
            />
            <Route path="education" element={<Education />} />
            <Route path="experience" element={<Experience />} />
          </Route>
        </Routes>
      </Router>
    </PageProvider>
  );
}

export default App;
