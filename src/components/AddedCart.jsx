import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearItems } from "../app/features/cart/cartSlice";

export default function AddedCart() {
  const cart = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearItems());
  };
  return (
    <>
      <div className="mt-28 text-center">
        <h2 className="text-2xl">Cart</h2>
        <button
          className="bg-slate-200 p-2 rounded-lg"
          onClick={handleClearCart}
        >
          Clear cart{" "}
        </button>
        <div className="w-6/12 m-auto">
          <ItemList item={cart} />
        </div>
      </div>
    </>
  );
}
