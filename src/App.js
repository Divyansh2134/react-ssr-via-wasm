import React from 'react';

function App(props) {
  const {title, description} = props.data ;

  return (
    <div className="App">
      <p>{title}</p>
      <p>{description}</p>

    </div>
  );
}

export default App;
