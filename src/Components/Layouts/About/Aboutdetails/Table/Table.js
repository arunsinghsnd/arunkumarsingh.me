import React, { Component } from "react";
import Auxilarry from "../../../../../hoc/Auxillary";

class Table extends Component {
  state = {
    data: [
      { id: 1, head: "Name", name: ": Arun Kumar Singh" },
      { id: 2, head: "Age", name: ": 23" },
      { id: 3, head: "Address", name: ": Dhanbad, Jharkhand" },
      { id: 4, head: "Contact", name: ": 8427825355 / 7903500984" },
    ],
  };
  render() {
    return (
      <Auxilarry>
        {this.state.data.map(data => {
          return (
            <tbody key={data.id}>
              <tr>
                <td>{data.head}</td>
                <td>{data.name}</td>
              </tr>
            </tbody>
          );
        })}
      </Auxilarry>
    );
  }
}

export default Table;
