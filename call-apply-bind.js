// const person={name: "Mohan"}

// function greet(city, country){
//   console.log(`Hi this is ${this.name} from ${city}, ${country}`);
// }

// greet.call(person, "Bangalore", "karnataka");

// greet.apply(person, ["Bangalore", "Karnataka"]);

// const greetBind = greet.bind(person);
// greetBind("Bangalore", "Karnataka");


///////////////////////////////////////////


// class Button extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { count: 0 };
//   }

//   handleClick() {
//     this.setState({ count: this.state.count + 1 });
//   }

//   render() {
//     return (
//       <button onClick={this.handleClick}>
//         Count: {this.state.count}
//       </button>
//     );
//   }
// }

// // Fix 1 — bind in constructor
// constructor(props) {
//   super(props);
//   this.state = { count: 0 };
//   this.handleClick = this.handleClick.bind(this);
// }

// // Fix 2 — arrow function in render
// <button onClick={() => this.handleClick()}>;

// // Fix 3 — define handleClick as arrow function
// handleClick = () => {
//   this.setState({ count: this.state.count + 1 });
// }

//Regular functions — this depends on how it is called
//Arrow functions — this depends on where it is defined

/////////////////////////////////////////


// An object counter with a count of 0 and a start method. 
// Inside start, use setTimeout with an arrow function that logs this.
// count after 1 second. Then call counter.start().


// const counter={
//     count:0,
//     start:function(){
//         setTimeout(()=>{console.log(this.count)},1000)
//     }
// }

// counter.start()