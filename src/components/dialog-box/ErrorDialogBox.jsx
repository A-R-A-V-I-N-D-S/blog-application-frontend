import React, { useEffect, useState } from "react";
import "./dialog-box.css";

export default function DialogBox(props) {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [3000]);
  return visible && <div className="error-dialog-box">You have not registered with us!</div>;
}
