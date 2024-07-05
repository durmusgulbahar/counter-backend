import app from './index';

const PORT = process.env.PORT || 4000;

const server = app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

export default server;
