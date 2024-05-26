import React from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import "./orderSuccess.css";
import { Typography } from "@material-ui/core";
import { removeItemsFromCart } from "../../actions/cartAction";
import { Link } from "react-router-dom";

const OrderSuccess = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  useEffect(() => {
    if (cartItems && cartItems.length > 0) {
      cartItems.forEach((item) => {
        dispatch(removeItemsFromCart(item.product));
      });
    }
  }, [dispatch, cartItems]);

  return (
    <div className="orderSuccess">
      <CheckCircleIcon />

      <Typography>Your Order has been Placed successfully </Typography>
      <Link to="/orders">View Orders</Link>
    </div>
  );
};

export default OrderSuccess;
