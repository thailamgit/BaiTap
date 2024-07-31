import React from 'react';
// Defining our App Component 

const App = () => {
   
  const onInputWord: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(event.target.value);
  }

  return (
    <div>
      <form>
        <label>Enter text</label>
        <input type="text"
              onChange={onInputWord}
        />
      </form>
    </div>
  );

}


// Exporting your Default App Component 
export default App;
