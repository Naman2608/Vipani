import { Link } from "react-router-dom";
import ProductCard from "../components/Product-Card";
const Home = () => {
  const addToCartHandler = () => {};
  return (
    <div className="home">
      <section></section>
      <h1>
        Latest Product
        <Link to="/search" className="findmore">
          More
        </Link>
      </h1>
      <main>
        <ProductCard
          productId="1244"
          name="CP"
          price={3213}
          stock={12}
          photo="https://img.freepik.com/free-vector/virtual-graduation-ceremony_52683-40011.jpg?t=st=1716118168~exp=1716121768~hmac=15ba10e2f448d751f6c22dea00dda8f5fd8e768cda9dcda55f2efca28eb19c55&w=826"
          handler={addToCartHandler}
        />
      </main>
    </div>
  );
};

export default Home;
