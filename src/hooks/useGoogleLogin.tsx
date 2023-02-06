import { gapi } from 'gapi-script';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Profile } from '../utils/types';

export function useGoogleLogin() {
  const [profile, setProfile] = useState<Profile| null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: process.env.REACT_APP_CLIENT_ID,
        scope: '',
      });
    };
    gapi.load('client:auth2', initClient);
  });

  useEffect(() => {
    if (profile) {
      console.log(profile)
      return navigate('/users');
    }
  }, [profile]);

  return [profile, setProfile] as const;
}
