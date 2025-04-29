const HooksDocs = {
  useState: {
    description:
      "useState is a Hook that allows you to have state variables in functional components. We use it to store and update values over time (like a counter, form input, etc.).",
    code: `
const [count, setCount] = useState(0);

return (
  <div>
    <p>Count: {count}</p>
    <button onClick={() => setCount(count + 1)}>Increment</button>
  </div>
);
    `,
    link: "https://react.dev/reference/react/useState",
  },
  useEffect: {
    description:
      "useEffect is a Hook that allows you to perform side effects (like fetching data, setting up subscriptions, or timers) in functional components. We use it to perform actions after render.",
    code: `
const [data, setData] = useState(null);

useEffect(() => {
  const timer = setTimeout(() => {
    setData("Fetched Data");
  }, 2000);
  return () => clearTimeout(timer);
}, []);

return (
  <div>
    <p>Data: {data ? data : "Loading..."}</p>
  </div>
);
    `,
    link: "https://react.dev/reference/react/useEffect",
  },
  useContext: {
    description:
      "useContext is a Hook that lets you subscribe to React context without introducing nesting. We use it to access global data easily.",
    code: `
const MyContext = createContext();

const MyComponent = () => {
  return (
    <MyContext.Provider value="Hello from Context!">
      <ContextComponent />
    </MyContext.Provider>
  );
};

const ContextComponent = () => {
  const value = useContext(MyContext);
  return <p>{value}</p>;
};
    `,
    link: "https://react.dev/reference/react/useContext",
  },
  useReducer: {
    description:
      "useReducer is a Hook that is usually preferable to useState when you have complex state logic. We use it when the state depends on previous state or when it's too complex for multiple useState calls.",
    code: `
const initialState = { count: 0 };
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

const [state, dispatch] = useReducer(reducer, initialState);

return (
  <div>
    <p>Count: {state.count}</p>
    <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
    <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
  </div>
);
    `,
    link: "https://react.dev/reference/react/useReducer",
  },
  useCallback: {
    description: "useCallback is a Hook that returns a memoized version of a callback function that only changes if dependencies change. We use it to prevent unnecessary re-renders of child components.",
    code: `
const [count, setCount] = useState(0);
const increment = useCallback(() => setCount(count + 1), [count]);

return (
  <div>
    <p>Count: {count}</p>
    <button onClick={increment}>Increment</button>
  </div>
);
    `,
    link: "http://react.dev/reference/react/useCallback",
  },
  useMemo: {
    description: "useMemo is a Hook that memoizes a computed value (result of a function) and recalculates it only when dependencies change. We use it to optimize performance for expensive calculations.",
    code: `
const [count, setCount] = useState(0);
const doubleCount = useMemo(() => count * 2, [count]);

return (
  <div>
    <p>Count: {count}</p>
    <p>Double Count: {doubleCount}</p>
    <button onClick={() => setCount(count + 1)}>Increment</button>
  </div>
);
    `,
    link: "https://react.dev/reference/react/useMemo",
  },
  useRef: {
    description:
      "useRef is a Hook that Provides a mutable object that persists across renders without causing re-renders. We use it to directly access DOM elements or store any mutable value (like timers).",
    code: `
const inputRef = useRef(null);
const focusInput = () => {
  inputRef.current.focus();
};

return (
  <div>
    <input ref={inputRef} type="text" />
    <button onClick={focusInput}>Focus Input</button>
  </div>
);
    `,
    link: "https://react.dev/reference/react/useRef",
  },
  useImperativeHandle: {
    description:
      "useImperativeHandle is a Hook that customizes the instance value that is exposed when using `ref` with `forwardRef`. We use it to control what values/methods parent components can call on child refs.",
    code: `
const inputRef = useRef(null);
const FancyInput = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    }
  }));
  return <input ref={inputRef} type="text" />;
});
const inputElement = useRef(null);

return (
  <div>
    <FancyInput ref={inputElement} />
    <button onClick={() => inputElement.current.focus()}>Focus Input</button>
  </div>
);
    `,
    link: "https://react.dev/reference/react/useImperativeHandle",
  },
  useLayoutEffect: {
    description:
      "useLayoutEffect is a Hook that is identical to useEffect, but it fires synchronously after all DOM mutations.  We use it when we need to read layout from the DOM and re-render synchronously before the browser paints.",
    code: `
const [color, setColor] = useState('red');
useLayoutEffect(() => {
  document.body.style.backgroundColor = color;
}, [color]);

return (
  <div>
    <button onClick={() => setColor('blue')}>Blue</button>
    <button onClick={() => setColor('red')}>Red</button>
  </div>
);
    `,
    link: "https://react.dev/reference/react/useLayoutEffect",
  },
  useDebugValue: {
    description:
      "useDebugValue is a Hook that can be used to display a label for custom hooks in React DevTools. We use it to make debugging custom hooks easier.",
    code: `
function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = useState(null);
  useDebugValue(isOnline ? 'Online' : 'Offline');
  useEffect(() => {
    const timeout = setTimeout(() => setIsOnline(true), 1000);
    return () => clearTimeout(timeout);
  }, []);
  return isOnline;
}

const isOnline = useFriendStatus(1);

return (
  <div>
    <p>Friend is {isOnline ? 'Online' : 'Offline'}</p>
  </div>
);
    `,
    link: "https://react.dev/reference/react/useDebugValue",
  },
  useId: {
    description: "useId is a Hook that generates a unique ID that stays the same across server and client renders (SSR safe). We use it for accessibility attributes like id-for, labels, etc.",
    code: `
const id = useId();

return (
  <div>
    <label htmlFor={id}>Label</label>
    <input id={id} type="text" />
  </div>
);
    `,
    link: "https://react.dev/reference/react/useId",
  },
  useTransition: {
    description:
      "useTransition is a Hook that lets you update the state without blocking the UI. We use it to keep the UI responsive during expensive state updates (like filtering a big list).",
    code: `
const [isPending, startTransition] = useTransition();
const [count, setCount] = useState(0);

const handleClick = () => {
  startTransition(() => {
    setCount(count + 1);
  });
};

return (
  <div>
    <p>Count: {count}</p>
    <button onClick={handleClick}>Increment</button>
    {isPending && <p>Loading...</p>}
  </div>
);
    `,
    link: "https://react.dev/reference/react/useTransition",
  },
  useDeferredValue: {
    description:
      "useDeferredValue is a Hook that lets you defer re-rendering a non-urgent part of the UI. We use it to prioritize urgent UI updates while still updating slow parts later.",
    code: `
const [value, setValue] = useState('');
const deferredValue = useDeferredValue(value);

return (
  <div>
    <input value={value} onChange={(e) => setValue(e.target.value)} />
    <p>Deferred Value: {deferredValue}</p>
  </div>
);
    `,
    link: "https://react.dev/reference/react/useDeferredValue",
  },
  useSyncExternalStore: {
    description:
      "useSyncExternalStore is a Hook that lets you subscribe to an external store. We use it to make sure external state updates are consistent and synchronous with rendering.",
    code: `
const store = {
  state: 0,
  listeners: new Set(),
  subscribe(listener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  },
  increment() {
    this.state++;
    this.listeners.forEach(listener => listener());
  }
};

const useStore = () => {
  return useSyncExternalStore(
    store.subscribe.bind(store),
    () => store.state
  );
};

const state = useStore();

return (
  <div>
    <p>State: {state}</p>
    <button onClick={() => store.increment()}>Increment</button>
  </div>
);
    `,
    link: "https://react.dev/reference/react/useSyncExternalStore",
  },

};

export default HooksDocs;