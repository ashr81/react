'use strict';

const { italic } = require('chalk');

describe('ReactChildren', () => {
  let React;
  let ReactTestUtils;
  let ReactDOM;

  beforeEach(() => {
    jest.resetModules();
    React = require('react');
    ReactTestUtils = require('react-dom/test-utils');
    ReactDOM = require('react-dom');
  });
  it("Works", () => {
    function Dialog({ children }) {
      return (
        <div>
          <div>
            <div>
              <p>{children}</p>
            </div>
            <div>
              <div>
              </div>
            </div>
          </div>
        </div>
      )
    }

    function Button({ children }) {
      return (
        <div>
          <div>
            <button>
              I'm Button {children}
            </button>
          </div>
        </div>
      )
    }
    const App = () => {
      return (
        <div>
          <div>
            <div>
              <Button>
                Hello
              </Button>
            </div>
            <Dialog>
              <div>
                <div>
                  I'm a dialog
                </div>
              </div>
            </Dialog>
          </div>
        </div>
      )
    }
    const container = document.createElement('div')
    ReactDOM.render(<App />, container)

    expect(container.innerHTML).toBe(
      `<button>I'm Button Hello</button><p>I'm a dialog</p>`
    )
  })
});