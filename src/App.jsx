import Response from "./components/Response";   // ✔ correct

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/citizen" element={<CitizenPortal />} />
        <Route path="/politician" element={<PoliticianPortal />} />
        <Route path="/admin" element={<AdminDashboard />} />

        {/* 🔥 Correct Response Route */}
        <Route path="/response" element={<Response />} />
      </Routes>
    </Router>
  );
}

export default App;
