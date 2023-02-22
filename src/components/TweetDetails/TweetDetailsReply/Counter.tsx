import React, { useEffect } from "react";
import { useState } from "react";

type PropsType = {
  num: number;
};

export const Counter: React.FC<PropsType> = ({ num }) => {
  const [curValue, setCurValue] = React.useState(num);
  const [inputStyle, setInputStyle] = React.useState({});
  const [initial, setInitial] = useState(false);

  useEffect(() => {
    initial && handleValueChange(num);
    setInitial(true);
  }, [num]);

  const handleValueChange = (newValue: number) => {
    setInputStyle({
      transform: newValue > curValue ? "translateY(-100%)" : "translateY(100%)",
      opacity: 0,
    });

    setTimeout(() => {
      setInputStyle({
        transitionDuration: "0s",
        transform:
          newValue > curValue ? "translateY(100%) " : "translateY(-100%)",
        opacity: 0,
      });

      setCurValue(num);

      setTimeout(() => {
        setInputStyle({
          transitionDuration: "0.3s",
          transform: "translateY(0)",
          opacity: 1,
        });
      }, 20);
    }, 250);
  };

  return (
    <span
      {...{
        className: "input",
        style: inputStyle,
        maxlength: 2,
        onChange: (e) => {
          e.preventDefault();
          // handleValueChange(parseInt(e.target.value, 10), true);
        },
        type: "text",
        value: curValue,
      }}
    >
      {curValue}
    </span>
  );
};
