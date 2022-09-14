import app from './app';
import { Constants } from './shared/constants';

const server = app.listen(app.get(Constants.PORT), () => {
  console.log(`Food ordering backend is running at http://localhost:${app.get(Constants.PORT)}`);
});

export default server;
