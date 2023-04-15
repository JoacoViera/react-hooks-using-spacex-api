import sadFace from '../../images/sad_face.png';

const ErrorPage = (): JSX.Element => {
  return (
    <div>
      <h1>Oops!</h1>
      <img style={{ width: '400px' }} src={sadFace} />

      <h4>Something went wrong</h4>
    </div>
  );
};

export default ErrorPage;
