import React from 'react';
import App from "./App";
import { createRoot } from 'react-dom/client';

const rootElement = document.getElementById("root");
const Root = createRoot(rootElement)
Root.render(<App />)