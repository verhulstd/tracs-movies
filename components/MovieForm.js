import React, { useState } from "react";
export default function MovieForm({ getMovies }) {
  const [value, setValue] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        getMovies(value);
        setValue("");
      }}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}

//import React, { Component } from "react";
//
// export default class MovieForm extends Component {
//   state = {
//     searchField: "",
//   };
//   changeHandler = (e) => {
//     this.setState({
//       ...this.state,
//       searchField: e.target.value,
//     });
//   };
//   render() {
//     return (
//       <form>
//         <input
//           type="text"
//           value={this.state.searchField}
//           onChange={this.changeHandler}
//         />
//         <button type="submit">Search</button>
//       </form>
//     );
//   }
// }
