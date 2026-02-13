import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

console.log(
  "%c Hey there, curious developer! 👋",
  "color: #3B82F6; font-size: 20px; font-weight: bold; padding: 8px 0;"
);
console.log(
  "%c Built by Syed Hassan Irfan — React, Three.js, and way too much CSS tweaking.",
  "color: #A1A1AA; font-size: 13px; padding: 2px 0;"
);
console.log(
  "%c Like what you see? Let's build something together → syedhassan.ig@gmail.com",
  "color: #10B981; font-size: 12px; padding: 2px 0;"
);
console.log(
  "%c ⚡ React 19 + Vite 7 + Tailwind v4 + Three.js + Motion",
  "color: #71717A; font-size: 11px; padding: 2px 0;"
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
