import { Button } from 'ui';
import { signOut } from '../../../app/app/actions/user';

export default function LogoutButton() {
  const logout = async () => {
    await signOut();
  };
  return (
    <Button onClick={logout} type='button' variant='link'>
      Logout
    </Button>
  );
}
