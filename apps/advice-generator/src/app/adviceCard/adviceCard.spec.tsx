import { render } from '@testing-library/react';

import AdviceCard from './adviceCard';

describe('AdviceCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AdviceCard />);
    expect(baseElement).toBeTruthy();
  });
});
