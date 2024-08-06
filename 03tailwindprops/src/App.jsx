import "./App.css";
import Card from "./components/Card"

function App() {

  let obj = {
    name: "Manoj Raut",
    age: 21
  }

const arr = [1,23, 44, 43]

  return (
    <>
      <h1 className=" text-green-700">Tailwind</h1>
      
      {/* <Card username="abc123" myobj={obj} myarr={arr}/> */}

      <Card username="abc123" profile=" Staff Engineer, Algolia"/>
      <Card username="lasdsd" profile=" software Engineer, lwwed"/>
      <Card username="sdjwwe" profile=" opdd Engineer, sdklw"/>

      
    </>
  );
}

export default App;
