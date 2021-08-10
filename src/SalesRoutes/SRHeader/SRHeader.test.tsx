// Generated with util/create-component.js
import React from 'react';
import { render } from '@testing-library/react';

import SRHeader from './SRHeader';
import { SRHeaderProps } from './SRHeader.types';

describe('Test Component', () => {
    let props: SRHeaderProps;

    beforeEach(() => {
        props = {
            title: 'in the kitchen',
            buttons: [],
            eventEmitter: id => id
        };
    });

    const renderComponent = () => render(<SRHeader {...props} />);

    it('should render foo text correctly', () => {
        props.title = 'in the kitchen';
        const { getByTestId } = renderComponent();

        const component = getByTestId('SRHeader');

        expect(component).toHaveTextContent('in the kitchen');
    });
});
