import { useState } from "react";

function Color() {
  const [color, setColor] = useState("white");
  return (
    <>
      <div
        style={{
          backgroundColor: color,
          paddingBottom: "50px",
          paddingTop: "50px",
          borderRadius: "10px"
        }}
      >
        <button
          onClick={() => setColor("blue")}
          type="button"
          className="btn btn-primary"
          style={{marginLeft:"15px", marginRight: "7px" }}
        >
          Blue
        </button>
        <button
          onClick={() => setColor("grey")}
          type="button"
          className="btn btn-secondary"
          style={{ marginRight: "7px" }}
        >
          Gray
        </button>
        <button
          onClick={() => setColor("green")}
          type="button"
          className="btn btn-success"
          style={{ marginRight: "7px" }}
        >
          Green
        </button>
        <button
          onClick={() => setColor("red")}
          type="button"
          className="btn btn-danger"
          style={{ marginRight: "7px" }}
        >
          Red
        </button>
        <button
          onClick={() => setColor("yellow")}
          type="button"
          className="btn btn-warning"
          style={{ marginRight: "7px" }}
        >
          Yellow
        </button>
        <button
          onClick={() => setColor("lightBlue")}
          type="button"
          className="btn btn-info"
          style={{ marginRight: "7px" }}
        >
          Light Blue
        </button>
        <button
          onClick={() => setColor("black")}
          type="button"
          className="btn btn-dark"
          style={{ marginRight: "7px" }}
        >
          Black
        </button>
      </div>
    </>
  );
}

export default Color;
