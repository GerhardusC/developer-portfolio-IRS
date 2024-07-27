import React, { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client'

const App = () => {
    return <div>
        hello
    </div>
}

const root = createRoot(document.getElementById('root')!);
root.render(
    <StrictMode>
        <App />
    </StrictMode>
);