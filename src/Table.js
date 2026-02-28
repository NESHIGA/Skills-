import React from "react";
import "./App.js";

function App() {
  return (
    <div className="container">
      <div className="overlay">
        <h1>Difference Between State and Props</h1>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th className="props-heading">PROPS</th>
                <th className="state-heading">STATE</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Data is passed from one component to another(Parent component)</td>
                <td>The Data is passed within the component only</td>
              </tr>
              <tr>
                <td>It is Immutable (Read-only).</td>
                <td>It is Mutable (can be changed).</td>
              </tr>
              <tr>
                <td>Props can be used with state and functional components.</td>
                <td>
                  The state can be used only with the state components/class
                  component (Before 16.0).
                </td>
              </tr>
              <tr>
                <td>Props are read-only.</td>
                <td>The state is both read and write.</td>
              </tr>
              <tr>
                <td>Props are controlled by the Parent.</td>
                <td>State is controlled by the component.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;