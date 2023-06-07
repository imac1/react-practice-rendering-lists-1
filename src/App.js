/*
  Instructions
    See the comment in List
*/

import * as React from "react";

class List extends React.Component {
  render() {
    // Render a list using the "friends" being passed in.

    return <ul></ul>;
  }
}

export default function App() {
  return (
    <List
      friends={[
        { id: 893, name: "Mikenzi" },
        { id: 871, name: "Cash" },
        { id: 982, name: "Steven" },
        { id: 61, name: "Kimmy" },
        { id: 117, name: "Doug" }
      ]}
    />
  );
}
