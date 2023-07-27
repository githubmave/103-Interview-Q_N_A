// import React from 'react';
// // import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">s
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;



import React from "react";
import QuestionCreate from "./QuestionCreate";
// import QuestionList from "./QuestionList";
import './App.css';

const App = () => {
  return (
    <div className="container">
      <h1>Ask Questions</h1>
      <QuestionCreate/>
      <hr />
      <h1>Questions</h1>
      {/* <QuestionList/> */}
    </div>
  );
};
export default App;