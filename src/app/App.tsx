import { FC } from 'react';
import { HashRouter} from 'react-router-dom';
import { Provider } from 'react-redux';

import { Routes } from './routes';
import { store } from './store';


const App: FC = () =>
    <Provider store={store}>
        <HashRouter basename="/">
                <Routes />
        </HashRouter>
    </Provider>;

export default App;
