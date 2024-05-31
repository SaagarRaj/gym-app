import Navbar from "@/scenes/navbar";
import { useState } from "react";
function App() {
  const [selectedPage, setSelectedPage] = useState<string>("home");
  return (
    <div className="app bg-gray-20 ">
      <Navbar setSelectedPage={setSelectedPage} selectedPage={selectedPage} />
    </div>
  );
}

export default App;
