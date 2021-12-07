// import React from "react";

// export default class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       date: new Date()
//     };
//   }

//   componentDidMount() {
//     const timer = setInterval(() => {
//       this.setState({ date: new Date() });
//     }, 1000);
//     this.setState({ timer });
//   }

//   componentWillUnmount() {
//     clearInterval(this.state.timer);
//   }

//   render() {
//     return <>{this.state.date.toString()}</>;
//   }
// }



import React, { useState, useEffect } from "react";

export default function App() {
  const [date, setDate] = useState(new Date());
  const [timer, setTimer] = useState();

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);
    setTimer(timer);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return <>{date.toString()}</>;
}