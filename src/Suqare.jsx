import React from "react";

// class Square extends Component {
//   render() {
//     return (
//       <button
//         className="square"
//         onClick={() => {
//           // console.log(this.state.value, "You clicked");
//           this.props.onClick();
//         }}
//       >
//         {this.props.value}
//       </button>
//     );
//   }
// }

// export default Square;
function Square(props) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}

export default Square;
