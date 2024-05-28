import { createContext, useEffect, useState } from "react";

const TextsContext = createContext();

export const TextsProvider = ({ children }) => {
  const [texts, setTexts] = useState(() =>
    localStorage.getItem("texts")
      ? JSON.parse(localStorage.getItem("texts"))
      : []
  );

  useEffect(() => {
    localStorage.setItem("texts", JSON.stringify(texts));
  }, [texts]);

  const onAddText = (text) => {
    setTexts((prevTexts) => [...prevTexts, text]);
  };

  return (
    <TextsContext.Provider value={{ texts, onAddText }}>
      {children}
    </TextsContext.Provider>
  );
};

export default TextsContext;
