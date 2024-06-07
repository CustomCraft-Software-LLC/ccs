import Pricing from '../../packages/components/src/components/Mui/Pricing/Pricing';
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Pricing', () => {
    test('Pricing', () => {
        render(<Pricing />);
    });

});