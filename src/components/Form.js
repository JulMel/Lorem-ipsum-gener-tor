import "./Form.css";
import data from "../data";
import { useState } from "react";

const Form = () => {
  const [count, setCount] = useState(0);
  const [paragraph, setParagraph] = useState([]);
  const [error, setError] = useState("");

  const submitForm = (event) => {
    event.preventDefault();
    const amount = parseInt(count); // Vezmi hodnotu count (obsah inputu) a převeď ji na číslo, a ulož to do amount

    // kontrola krajních hodnot
    if (amount < 1) {
      setError("Zadej alespoň 1 odstavec.");
      setParagraph([]); // vyčisti výstup
      return;
    }

    if (amount > 8) {
      setError("Můžeš vygenerovat maximálně 8 odstavců.");
      setParagraph([]);
      return;
    }

    setError(""); // smažeme případnou starou chybu

    // nastaví paragraph - z dat vezme 0. - amount paragraf
    setParagraph(data.slice(0, amount));
  };

  return (
    <div>
      <section className="form-container">
        <h1>Lorem ipsum generátor</h1>
        <form onSubmit={submitForm}>
          <label htmlFor="paragraphs">Počet odstavců: </label>
          <input
            id="paragraphs"
            type="number"
            onChange={(event) => {
              setCount(event.target.value);
            }}
          />{" "}
          <br />
          <input type="submit" value="Vygenerovat" />
        </form>
      </section>

      {/* Zobrazit chybu, pokud existuje */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <article>
        {paragraph.map((oneParagraph, index) => {
          return <p key={index}>{oneParagraph}</p>;
        })}
      </article>
    </div>
  );
};

export default Form;
