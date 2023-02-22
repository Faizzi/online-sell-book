import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Protected = (props) => {
  const navigate = useNavigate();
  const { Comp, dir } = props;
  useEffect(() => {
    const userEmail = localStorage.getItem("userEmail");
    if (!userEmail) {
      navigate("/");
    } else {
      navigate(dir);
    }
  }, []);
  return (
    <React.Fragment>
      <Comp />
    </React.Fragment>
  );
};

export default Protected;
