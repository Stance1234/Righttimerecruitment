import React from "react";

interface MobileSideNavProps {
  open: boolean;
  onClose: () => void;
  links: { label: string; href: string }[];
}

const overlayStyle: React.CSSProperties = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  background: "rgba(0,0,0,0.4)",
  zIndex: 1000,
  transition: "opacity 0.3s",
};

const drawerStyle: React.CSSProperties = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "75vw",
  maxWidth: 300,
  height: "100vh",
  background: "#fff",
  boxShadow: "2px 0 8px rgba(0,0,0,0.2)",
  zIndex: 1001,
  transform: "translateX(-100%)",
  transition: "transform 0.3s",
  display: "flex",
  flexDirection: "column",
  padding: "1rem",
};

export const MobileSideNav: React.FC<MobileSideNavProps> = ({
  open,
  onClose,
  links,
}) => {
  return (
    <>
      {open && (
        <div style={overlayStyle} onClick={onClose} />
      )}
      <nav
        style={{
          ...drawerStyle,
          transform: open ? "translateX(0)" : "translateX(-100%)",
        }}
        aria-hidden={!open}
      >
        <button
          style={{
            alignSelf: "flex-end",
            background: "none",
            border: "none",
            fontSize: "1.5rem",
            cursor: "pointer",
          }}
          onClick={onClose}
          aria-label="Close navigation"
        >
          &times;
        </button>
        <ul style={{ listStyle: "none", padding: 0, margin: "2rem 0 0 0" }}>
          {links.map((link) => (
            <li key={link.href} style={{ margin: "1rem 0" }}>
              <a
                href={link.href}
                style={{
                  textDecoration: "none",
                  color: "#222",
                  fontSize: "1.2rem",
                }}
                onClick={onClose}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default MobileSideNav;
