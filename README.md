# React 19 useEffect Unnecessary Re-renders

This repository demonstrates a common issue in React 19 where the `useEffect` hook runs after every render, leading to performance problems.  The provided solution uses `useCallback` to optimize performance.

## Problem

In the `bug.js` file, a simple counter component is created. The `useEffect` hook logs a message to the console after each render. This is inefficient as the log is unnecessary every time the count changes.

## Solution

The `bugSolution.js` file demonstrates the solution, using `useCallback` to memoize the effect and only execute it when necessary. This prevents unnecessary re-renders and enhances performance.
