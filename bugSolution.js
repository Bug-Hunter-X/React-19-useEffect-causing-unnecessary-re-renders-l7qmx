```javascript
import { useState, useCallback, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  const logCount = useCallback(() => {
    console.log('Component rendered with count:', count);
  }, [count]); // Only run when count changes

  useEffect(() => {
    logCount();
  }, [logCount]); // Only run when logCount changes

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default MyComponent;
```