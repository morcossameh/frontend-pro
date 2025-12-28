import List from "./List/list";

function App() {
  const carBrands = [
    { id: 1, name: "Toyota", valuation: 64.7 },
    { id: 2, name: "Mercedes", valuation: 53 },
    { id: 3, name: "Hyundai", valuation: 46.3 },
    { id: 4, name: "Tesla", valuation: 43 },
    { id: 5, name: "BMW", valuation: 42.5 },
    { id: 6, name: "Porsche", valuation: 41.1 },
    { id: 7, name: "Mitsubishi", valuation: 40.35 },
    { id: 8, name: "Volkswagen", valuation: 31.5 },
    { id: 9, name: "Honda", valuation: 28.3 },
    { id: 10, name: "Ford", valuation: 22.9 },
  ];

  const fashionBrands = [
    { id: 1, name: "Louis Vuitton", valuation: 41.6 },
    { id: 2, name: "Nike", valuation: 37.6 },
    { id: 3, name: "Chanel", valuation: 29.6 },
    { id: 4, name: "Hermès", valuation: 27.0 },
    { id: 5, name: "Gucci", valuation: 16.4 },
    { id: 6, name: "Zara", valuation: 16.2 },
    { id: 7, name: "Adidas", valuation: 15.0 },
    { id: 8, name: "Uniqlo", valuation: 12.8 },
    { id: 9, name: "Dior", valuation: 12.5 },
    { id: 10, name: "Cartier", valuation: 12.1 },
  ];

  return (
    <>
      {carBrands.length > 0 && <List title={"Car Brands"} items={carBrands} />}
      {fashionBrands.length > 0 && <List title={"Fashion Brands"} items={fashionBrands} />}
    </>
  );
}

export default App;
