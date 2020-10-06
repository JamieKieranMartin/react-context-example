import React, { useContext, useRef } from 'react';
import { Provider, Context } from './context';

function App() {
  // ref allows us to use a reference to a component, if we don't want to manage it's state constantly
  const inputRef = useRef();

  // Use context here
  // This is the `value` inside context/provider.jsx, line 14
  // The default return value from useContext(Context) will be `{}`, which is the value defined inside createContext() in context/context.jsx, line 3
  // This occurs if there is no Provider wrapped anywhere as an ancestor of this function App()
  const { data, api, refresh } = useContext(Context)

  return (
    <div >

      {/* use the data value */}
      <p>
        {JSON.stringify(data.value)}
      </p>

      {/* Look in the console to see that "refreshed" is being logged */}
      <button
        className="App-link"
        // we can pass refresh like this because we don't need to pass it any parameters
        onClick={refresh}
      >
        Refresh
      </button>

      {/* the input, the inputRef attaches itself on mount */}
      <input ref={inputRef} />

      {/* onClick set the data with the current inputRef value */}
      <button onClick={() => data.set(inputRef.current.value)}>
        Add
        </button>

      <button onClick={data.removeLast}>Remove last</button>
    </div>
  );
}


// This wraps the imported Provider around the given Component
const withProviders = (Component) => (props) => (
  <Provider>
    {/* Keep wrapping Providers to add more Contexts */}
    <Component {...props} />
  </Provider>
)

// Wrap Provider around App
// This means anything inside of App() can access the Context
// 
// You can wrap Providers around the entire App to create a "singleton" 
// OR
// wrap it around individual pages (routes) to re-initialise it when each Component mounts
export default withProviders(App);
