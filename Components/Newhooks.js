// import { useEffect } from "react";

// const Newhooks = () => {
//   useEffect(() => {
//     const id = setInterval(() => {
//       console.log("Shiva IS Coding");
//     }, 1000);

//     // ✅ Cleanup function (no JSX)
//     return () => {
//       clearInterval(id);
//     };
//   }, []);

//   return <></>;
// };

// React Lifecycle methods

// import React from "react";

// class Newhook extends React.Component{

   

// constructor(props){
//     super(props);

//     this.state = {
            
//         gitData:null,
            
//         }
            
//     }

//     componentDidMount() {

//         console.log("Component is Mount")
        
//     }

// componentDidUpdate() {
    
//     console.log("Comp is updated");
        
// }
    
//     componentWillUnmount() {

//             console.log("Comp is unmounted");
//     }
    
//     render() {
//     }
// }


// export default Newhook;


import React from "react";

class Newhook extends React.Component {

  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log("1️⃣ constructor");
  }

  componentDidMount() {
    console.log("3️⃣ componentDidMount");
  }

  componentDidUpdate() {
    console.log("5️⃣ componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("6️⃣ componentWillUnmount");
  }

  render() {
    console.log("2️⃣ / 4️⃣ render");
    return (
      <div>
        <h2>Count: {this.state.count}</h2>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increase
        </button>
      </div>
    );
  }
}

export default Newhook;
