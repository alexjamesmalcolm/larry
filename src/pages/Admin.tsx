import { Authenticator, Button } from "@aws-amplify/ui-react";

const Admin = () => (
  <Authenticator>
    {({ user, signOut }) => {
      const email = user?.attributes?.email;
      return (
        <div>
          <p>Hello {email}</p>
          <Button onClick={signOut}>Sign Out</Button>
        </div>
      );
    }}
  </Authenticator>
);

export default Admin;
