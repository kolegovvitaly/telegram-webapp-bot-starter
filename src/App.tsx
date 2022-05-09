import { useContext } from "react";
import { webAppContext } from "./contexts/appContext";

function App() {
  const app = useContext(webAppContext);
  console.log(app);

  const sendData = () => {
    app.sendData("this is data");
  };

  return (
    <div className="App">
      {app.version ? (
        <div className="layout">
          <button onClick={sendData}>click me</button>
          <p>initDataUnsafe</p>
          <code>{JSON.stringify(app.initDataUnsafe, null, 2)}</code>
        </div>
      ) : (
        "loading"
      )}
    </div>
  );
}

export default App;
