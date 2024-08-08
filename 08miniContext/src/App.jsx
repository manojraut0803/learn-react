import Login from "./Components/Login";
import Profile from "./Components/Profile";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <h3 style={{ textAlign: "center" }}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis
        dolorum inventore illo, vitae natus do
      </h3>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
