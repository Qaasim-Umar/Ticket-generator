import { useState } from "react";
import Form from "./assets/components/Form";
import Ticket from "./assets/components/Ticket";

function App() {
  const [userData, setUserData] = useState(null);

  return (
    <div className="app-container">
   
      {!userData ? (
        <Form setUserData={setUserData} />
      ) : (
        <Ticket userData={userData} setUserData={setUserData} />
      )}
    </div>
  );
}

export default App;
