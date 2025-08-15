// StatusCircle.jsx
import React from "react";

const StatusCircle = ({ image, name, onClick }) => {
  return (
    <div style={styles.container} onClick={onClick}>
      <div style={styles.circle}>
        <img src={image} alt={name} style={styles.image} />
      </div>
      <p style={styles.name}>{name}</p>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    cursor: "pointer",
    margin: "0 10px",
  },
  circle: {
    width: 70,
    height: 70,
    borderRadius: "50%",
    border: "3px solid #25D366", // WhatsApp green
    padding: "3px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#fff",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: "50%",
    objectFit: "cover",
  },
  name: {
    fontSize: "12px",
    marginTop: "5px",
    color: "#333",
    textAlign: "center",
  },
};

export default StatusCircle;
