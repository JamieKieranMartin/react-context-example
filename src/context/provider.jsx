import React, { useEffect, useState } from 'react';
import { Context } from './context';
import * as api from './api';

// I would stick signalR connection stuff here
// ...

// Wrapped logic inside here
export const Provider = (props) => {
  const [refresh, setRefresh] = useState(false);
  const [data, setData] = useState([]);

  // useEffect calls whenever `refresh` changes
  useEffect(() => {
    setData([])
    console.log("refreshed!")
  }, [refresh])

  const removeLast = () => {
    // have to spread data into new array so React recognises that it's a new Array
    let old = [...data]
    old.pop()
    setData(old)
  }

  return (
    <Context.Provider
      // Pass values down to the children through the Context.Provider
      value={{
        // clean way to manage value and setState
        data: {
          value: data,
          // adds removeLast() func 
          removeLast,
          // you can then do custom stuff in here
          set: (evt) => setData(old => [...old, evt]),
        },

        // pass api handles through so that you never have to import them elsewhere
        // called like this api._post({ ... })
        api,

        // we don't care about the value of refresh, just the function to refresh, called using refresh()
        refresh: () => setRefresh(!refresh),
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
