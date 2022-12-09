import React, { useEffect, useState } from "react";
import arrowIcon from "@/assets/icons/arrow.svg";
import seacrhIcon from "@/assets/icons/search.svg";

const Header = () => {
  const [leftNavOpen, setLeftNavOpen] = useState(false);
  const [rightNavOpen, setRightNavOpen] = useState(false);

  const onAcmeClick = () => {
    setRightNavOpen(false);
    setLeftNavOpen(!leftNavOpen);
  };

  const handleClick = () => {
    setLeftNavOpen(false);
    setRightNavOpen(!rightNavOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest(".header__dropdown") ||
        target.closest(".header__right") ||
        target.closest(".header__nav")
      ) {
        return;
      }
      setLeftNavOpen(false);
      setRightNavOpen(false);
    };

    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  return (
    <header className="header">
      <div className="header__left">
        <div className="header__logo"></div>
        <div className="header__dropdown" onClick={onAcmeClick}>
          <h3 className="header__title">Acme Inc</h3>
          <img className="header__dropdown-icon" src={arrowIcon} alt="" />
        </div>
        <div className="header__divider"></div>

        <nav className={`header__nav nav ${leftNavOpen && "nav--active"}`}>
          <ul className="nav__links">
            <li className="nav__link-item">
              <a href="/" className="nav__link">
                Home
              </a>
            </li>
            <li className="nav__link-item">
              <a href="/" className="nav__link">
                Invoices <span className="nav__badge">32</span>
              </a>
            </li>
            <li className="nav__link-item">
              <a href="/" className="nav__link">
                Vendors
              </a>
            </li>
            <li className="nav__link-item">
              <a href="/" className="nav__link">
                Insights
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="header__right">
        <div className="header__search">
          <img className="header__search-icon" src={seacrhIcon} alt="" />

          <input
            type="text"
            className="header__search-input"
            placeholder="Ask Ray..."
          />

          <span className="header__search-hint">CMD+K</span>
        </div>

        <nav className={`header__nav nav ${rightNavOpen && "nav--active"}`}>
          <ul className="nav__links">
            <li className="nav__link-item">
              <a href="/" className="nav__link">
                Logs
              </a>
            </li>
            <li className="nav__link-item">
              <a href="/" className="nav__link">
                Liquidity
              </a>
            </li>
            <li className="nav__link-item">
              <a href="/" className="nav__link">
                Policies
              </a>
            </li>
          </ul>
        </nav>

        <div className="header__user" onClick={handleClick}>
          <div className="header__user-avatar"></div>
          <img className="header__dropdown-icon" src={arrowIcon} alt="" />
        </div>
      </div>
    </header>
  );
};

export default Header;
