import { Button } from 'ui';
import { Email } from '../../emails/email';
import { sendEmail } from '../../emails/utils';

export default function Page() {
  return (
    <div>
      <h1>Page</h1>
      <form>
        <Button
          formAction={async () => {
            'use server';
            await sendEmail(<Email username='test' />);
          }}
        >
          Send Email
        </Button>
      </form>
      <Email />
    </div>
  );
}
