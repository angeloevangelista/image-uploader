import { Switch } from 'react-router-dom';

import RouteWrapper from './Route';

import UploadImage from '../pages/UploadImage';
import ViewImage from '../pages/ViewImage';

const Routes: React.FC = () => {
  return (
    <Switch>
      <RouteWrapper exact path="/" component={UploadImage} />
      <RouteWrapper path="/view" component={ViewImage} />
    </Switch>
  );
};

export default Routes;
