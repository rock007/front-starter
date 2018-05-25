
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import {Main} from './Main';

//ReactDOM.render(React.createElement(Main), document.getElementById('app'));
ReactDOM.render(
    <Main />,
    document.getElementById('app') as HTMLElement
  );