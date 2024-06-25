import * as React from "react";
import { useState } from "react";

interface NavbarProps {
  links: { name: string; url?: string }[];
}

const Navbar: React.FC<NavbarProps> = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const styles: { [key: string]: React.CSSProperties } = {
    navbar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "#333",
      padding: "1rem",
      color: "white",
    },
    navbarItem: {
      color: "white",
      textDecoration: "none",
      padding: "0.5rem 1rem",
    },
    navbarBurger: {
      cursor: "pointer",
      display: "none",
    },
    navbarBurgerSpan: {
      display: "block",
      width: "25px",
      height: "2px",
      backgroundColor: "white",
      margin: "4px",
    },
    navbarMenu: {
      display: "flex",
    },
    navbarMenuActive: {
      display: "block",
    },
    navbarStart: {
      display: "flex",
      flexDirection: "row",
      width: "100%",
    },
  };

  const navbarBurgerStyle = isOpen
    ? { ...styles.navbarBurger, display: "block" }
    : styles.navbarBurger;
  const navbarMenuStyle = isOpen
    ? { ...styles.navbarMenu, ...styles.navbarMenuActive }
    : styles.navbarMenu;

  return (
    <nav style={styles.navbar}>
      <div>
        <a href="#" style={styles.navbarItem}>
          Brand
        </a>
        <div style={navbarBurgerStyle} onClick={toggleMenu}>
          <span style={styles.navbarBurgerSpan}></span>
          <span style={styles.navbarBurgerSpan}></span>
          <span style={styles.navbarBurgerSpan}></span>
        </div>
      </div>
      <div style={navbarMenuStyle}>
        <div style={styles.navbarStart}>
          {links.map((link, index) => (
            <a key={index} href={link.url} style={styles.navbarItem}>
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
