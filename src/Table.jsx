import "./App.css";
import { useState } from "react";

function Table() {
  const companies = [
    ["Saab AB", "Stockholm", 1937],
    ["Volvo Group", "Göteborg", 1927],
    ["Sandvik AB", "Stockholm", 1862],
    ["Atlas Copco Group", "Nacka", 1873],
    ["Electrolux AB", "Stockholm", 1919],
    ["Skanska AB", "Stockholm", 1887],
  ];

  const [data, setData] = useState();

  function getData() {
    const tableContent = (
      <table>
        <thead>
          <tr>
            <th>Företag</th>
            <th>Stad</th>
            <th>År</th>
          </tr>
        </thead>
        <tbody>
          {companies.map((company, i) => (
            <tr key={i}>
              <td>{company[0]}</td>
              <td>{company[1]}</td>
              <td>{company[2]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );

    setData(tableContent);
  }

  return (
    <>
      <button onClick={getData}>Klicka Mig</button>
      {data}
    </>
  );
}

export default Table;
