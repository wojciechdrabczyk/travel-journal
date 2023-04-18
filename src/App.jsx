import { Navbar } from "./Navbar";
import { Card } from "./Card";
import data from "./data";

export const App = () => {
  const cards = data.map((item) => {
    return <Card key={item.id} {...item} />;
  });

  return (
    <div>
      <Navbar />
      <section className="cards--list">{cards}</section>
    </div>
  );
};
