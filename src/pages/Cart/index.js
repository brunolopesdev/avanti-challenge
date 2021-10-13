import { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import DataContext from "../../Context/index";
import "./index.scss";

export const Cart = () => {
  const { cart, getTotalSum, setQuantity, removeFromCart, clearCart } =
    useContext(DataContext);

  return (
    <section className="cart__container">
      <article className="cart__products">

        {cart.map((product, idx) => (
          <div className="products" key={idx}>

            <h3>{product.name}</h3>

            <h4>$ {product.sellingPrice}</h4>

            <label htmlFor="Quantidade">Quantidade:</label>

            <input
              value={product.available}
              onChange={(e) => setQuantity(product, parseInt(e.target.value))}
            />

            <img src={product.imageURL} alt={product.name} />

            <button
              className="remove__button"
              onClick={() => removeFromCart(product.id)}>
              <AiFillDelete />
            </button>

          </div>
        ))}

        {cart.length > 0 && (
          <>
            <div className="totalSum">Total: $ {getTotalSum()}</div>
            <div className="buttons">
              <button className="checkout__button">Finalizar a Compra</button>
              <button className="clear__cart" onClick={clearCart}>
                Limpar Carrinho
              </button>
            </div>
          </>
        )}

      </article>
    </section>
  );
};
