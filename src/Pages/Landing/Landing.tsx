import { GoogleLogin } from 'react-google-login';
import { useGoogleLogin } from '../../hooks/useGoogleLogin';
import './Landing.scss';

const Landing = () => {
  const [, setProfile] = useGoogleLogin();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSuccess = (res: any) => {
    setProfile(res.profileObj);
    localStorage.setItem('userInfo', JSON.stringify(res.profileObj));
  };

  const onFailure = (err: string) => {
    console.log('failed:', err);
  };

  const clientId: string | undefined = `${process.env.REACT_APP_CLIENT_ID}`;

  return (
    <div className='m-0 p-0 landing-page'>
      <div className='col-sm-3'>
        <img src={require('../../assets/transparent.png')} alt='logo' />
      </div>
      <div className='heading '>
        <div className='animated-title'>
          <div className='text-top'>
            <div>
              <span>Pic Flash</span>
              <span>Keep Memories</span>
            </div>
          </div>
          <div className='text-bottom'>
            <div>Alive!</div>
          </div>
        </div>
        <div className='btn text-dark login-btn'>
          <span className='pr-4'> Get started </span>
          <GoogleLogin
            clientId={clientId}
            buttonText='Sign in with Google'
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;
