import React from "react";
import { useHistory } from "react-router-dom";

export const AboutPage: React.FC = () => {
  const history = useHistory();

  return (
    <>
      <h1>Информация</h1>
      
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque
        sapiente sequi molestias, voluptas exercitationem culpa reprehenderit
        quaerat saepe, laborum hic inventore! Error, deleniti molestiae.
        Molestiae asperiores doloribus fuga aliquid voluptatum!
      </p>

      <button className="btn" onClick={() => history.push("/")}>
        На главную
      </button>
    </>
  );
};
