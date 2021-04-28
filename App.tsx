import React from 'react';

import AppProvider from './src/AppProvider';
import App from './src/App';

export default function () {
    return (
        <AppProvider>
            <App />
        </AppProvider>
    );
}
