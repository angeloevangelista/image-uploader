import { Switch } from 'react-router-dom';

import RouteWrapper from './Route';

import SelectFile from '../pages/SelectFile';

const Routes: React.FC = () => {
  return (
    <Switch>
      <RouteWrapper exact path="/" component={SelectFile} />
    </Switch>
  );
};

export default Routes;
