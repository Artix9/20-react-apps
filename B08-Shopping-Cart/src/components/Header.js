import React, { useRef, useState } from "react";
import CartIcon from "../supermarket.svg";
import useOnClickOutside from "use-onclickoutside";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);

  // close the modal if we click outside of it
  useOnClickOutside(modalRef, () => setIsOpen(false));

  return (
    <header>
      <div className="container">
        <div className="cart-button">
          <button onClick={() => setIsOpen((isOpen) => !isOpen)}>
            <img src={CartIcon} width="30" />({0})
          </button>

          {/* show a modal */}
          <div
            className="cart-modal"
            style={{ display: isOpen ? "block" : "none" }}
            ref={modalRef}
          >
            cart goes here
          </div>
        </div>
      </div>
    </header>
  );
}
