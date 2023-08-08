import Contact from "./Contact";

function App() {
  return (
    <div className="App">
      <Contact
        img="cat.png"
        name="Mr Wiskers"
        phone="123456789"
        email="mr.wiskers@catnip.meow"
      />
      <Contact
        img="dog.png"
        name="Mr Doggo"
        phone="987654321"
        email="mr.doggo@bone.woof"
      />
      <Contact
        img="kitty.png"
        name="Ms Kitty"
        phone="123456789"
        email="ms.kitty@catnip.meow"
      />
      <Contact
        img="cranky.png"
        name="Mr Cranky"
        phone="123456789"
        email="mr.cranky@catnip.meow"
      />
    </div>
  );
}

export default App;
