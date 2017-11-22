import { AccessToken } from 'react-native-fbsdk'

export const getFbToken = async () => {
  const data = await AccessToken.getCurrentAccessToken();
  return data ? data.accessToken.toString() : undefined;
}