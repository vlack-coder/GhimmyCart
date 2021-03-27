import { AiOutlineShoppingCart } from "react-icons/ai";

import CustomIcon from "../custom-icon/custom-icon.component";
import "./header.styles.scss";
import { Link, useHistory } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { AppStateTypes } from "../../redux/root.reducer";
import { selectCartItemCount } from "../../redux/cart/cart.selector";
import { connect, useSelector } from "react-redux";
import LogoImage from "../../assets/images/large-remove.png";

import React from "react";


const Header: React.FC = () => {
  const history = useHistory();
  const cartItemsCount = useSelector(selectCartItemCount);
  return (
    <header className="header">
      <Link to="/">
        <div className="fleks">
          <div className="header__logo">
            <img src={LogoImage} alt="Brand logo" />
          </div>
          {/* <h3>shopping made easy...</h3> */}
        </div>
      </Link>

      <CustomIcon count={cartItemsCount} onClick={() => history.push(`/cart`)}>
        <AiOutlineShoppingCart />
      </CustomIcon>
    </header>
  );
};

export default Header;
