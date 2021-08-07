import { act, fireEvent, render } from '@testing-library/react';
import { TicTacToe } from './TicTacToe';

describe('TicTacToe', () => {
  it('renders a blank board', () => {
    const wrapper = render(<TicTacToe />);
    const cells = wrapper.getAllByTestId('cell');
    cells.forEach((cell) => {
      expect(cell.textContent).toBe('');
    });
  });

  it('renders an X on the first cell clicked', () => {
    const wrapper = render(<TicTacToe />);
    const cells = wrapper.getAllByTestId('cell');

    act(() => {
      cells[0].click();
    });
    expect(cells[0].textContent).toBe('X');
  });

  it('renders an O on the second cell clicked', () => {
    const wrapper = render(<TicTacToe />);
    const cells = wrapper.getAllByTestId('cell');

    act(() => {
      cells[0].click();
    });

    act(() => {
      cells[1].click();
    });

    expect(cells[1].textContent).toBe('O');
  });

  it('does not change the value of a cell that has already been played', () => {
    const wrapper = render(<TicTacToe />);
    const cells = wrapper.getAllByTestId('cell');

    act(() => {
      cells[0].click();
    });

    act(() => {
      cells[0].click();
    });

    expect(cells[0].textContent).toBe('X');
  });

  it('displays a winner X once the board has been won by X', () => {
    const wrapper = render(<TicTacToe />);
    const cells = wrapper.getAllByTestId('cell');

    act(() => {
      cells[0].click();
    });

    act(() => {
      cells[1].click();
    });

    act(() => {
      cells[3].click();
    });

    act(() => {
      cells[4].click();
    });

    act(() => {
      cells[6].click();
    });
    act(() => {});

    expect(wrapper.container.textContent).toContain('The Winner is X');
    expect(wrapper.container.textContent).toContain(
      'They won on the first column'
    );
    expect(wrapper.getByTestId('winning-line')).toBeVisible();
  });

  it('displays a winner O once the board has been won by O', async () => {
    const wrapper = render(<TicTacToe />);
    const cells = wrapper.getAllByTestId('cell');

    act(() => {
      cells[0].click();
    });

    act(() => {
      cells[1].click();
    });

    act(() => {
      cells[3].click();
    });

    act(() => {
      cells[4].click();
    });

    act(() => {
      cells[8].click();
    });

    act(() => {
      cells[7].click();
    });

    expect(wrapper.container.textContent).toContain('The Winner is O');
    expect(wrapper.container.textContent).toContain(
      'They won on the second column'
    );
    expect(wrapper.getByTestId('winning-line')).toBeVisible();
  });

  it('displays no winner on a cats game', async () => {
    const wrapper = render(<TicTacToe />);
    const cells = wrapper.getAllByTestId('cell');

    act(() => {
      cells[0].click();
    });

    act(() => {
      cells[1].click();
    });

    act(() => {
      cells[2].click();
    });

    act(() => {
      cells[4].click();
    });

    act(() => {
      cells[3].click();
    });

    act(() => {
      cells[5].click();
    });

    act(() => {
      cells[8].click();
    });

    act(() => {
      cells[6].click();
    });

    act(() => {
      cells[7].click();
    });

    expect(wrapper.container.textContent).toContain(
      "It's a Cat's Game! No Winner!"
    );
    expect(wrapper.queryByTestId('winning-line')).not.toBeInTheDocument();
  });

  it('displays a button to reset the board that resets the board after the game ends', async () => {
    const wrapper = render(<TicTacToe />);
    const cells = wrapper.getAllByTestId('cell');

    act(() => {
      cells[0].click();
    });

    act(() => {
      cells[1].click();
    });

    act(() => {
      cells[2].click();
    });

    act(() => {
      cells[4].click();
    });

    act(() => {
      cells[3].click();
    });

    act(() => {
      cells[5].click();
    });

    act(() => {
      cells[8].click();
    });

    act(() => {
      cells[6].click();
    });

    act(() => {
      cells[7].click();
    });

    const startOver = wrapper.getByText('Start Over');

    expect(startOver).toBeInTheDocument();
    act(() => {
      startOver.click();
    });

    const startOverAfter = wrapper.queryByText('Start Over');

    expect(startOverAfter).not.toBeInTheDocument();

    cells.forEach((cell) => {
      expect(cell.textContent).toBe('');
    });
  });
});
