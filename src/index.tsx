import React from 'react';
import ReactDOM from 'react-dom';
import CurrencyField from './Test';

const App: React.FC = () => {
    return (
        <div>
            <h1>Hello, React with TypeScript!</h1>
            <CurrencyField />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
