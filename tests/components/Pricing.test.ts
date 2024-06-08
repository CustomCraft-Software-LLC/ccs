import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

const MyComponent: React.FC = () => {
    return <div>Hello, World!</div>;
};

test('renders the component', () => {
    const { getByText } = render(<MyComponent />);
    expect(getByText('Hello, World!')).toBeInTheDocument();
});