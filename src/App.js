import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our menu</h2>
      <p>
        Authentic Italian cuisine. 6 creative dishes to choose from. All from
        our stone oven, all organic, all delicious.
      </p>
      <ul className="pizzas">
        {pizzaData.map((pizza) => {
          return (
            <>
              {pizza.soldOut ? (
                <li className="pizza sold-out" key={pizza.name}>
                  <img src={pizza.photoName} alt={pizza.name} />
                  <div>
                    <h3>{pizza.name}</h3>
                    <p>{pizza.ingredients}</p>
                    <span className="pizza.sold-out">SOLD OUT</span>
                  </div>
                </li>
              ) : (
                <li className="pizza" key={pizza.name}>
                  <img src={pizza.photoName} alt={pizza.name} />
                  <div>
                    <h3>{pizza.name}</h3>
                    <p>{pizza.ingredients}</p>
                    <span>${pizza.price}</span>
                  </div>
                </li>
              )}
            </>
          );
        })}
      </ul>
    </main>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="order">
        <p>We're open from 12:00 to 22:00. Come visit us or order online.</p>
        <button className="btn">Order</button>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

export default App;
