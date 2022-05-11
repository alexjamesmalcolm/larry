import { Button } from "@aws-amplify/ui-react";
import withAuthenticator, {
  AuthenticatorProps,
} from "../components/withAuthenticator";

const Admin = ({ signOut, user }: AuthenticatorProps): JSX.Element => {
  const email = user?.attributes?.email;
  return (
    <div>
      <p>Hello {email}</p>
      <Button onClick={signOut}>Sign Out</Button>
    </div>
  );
};

export default withAuthenticator(Admin);
