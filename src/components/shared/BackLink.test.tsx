import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { BackLink } from './BackLink';

describe('BackLink', () => {
  it('calls history.goBack', () => {
    const history = createMemoryHistory();
    jest.spyOn(history, 'goBack');

    const wrapper = render(
      <Router history={history}>
        <BackLink />
      </Router>
    );
    wrapper.getByText('Back').click();
    expect(history.goBack).toHaveBeenCalled();
  });
});
