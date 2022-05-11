import { AuthEventData, CognitoUserAmplify } from "@aws-amplify/ui";
import { Authenticator } from "@aws-amplify/ui-react";

const withAuthenticator =
  <OriginalProps extends Record<string, unknown>>(
    children: (props: AuthenticatorProps & OriginalProps) => JSX.Element
  ): ((props: OriginalProps) => JSX.Element) =>
  (props) =>
    (
      <Authenticator>
        {({ signOut, user }) => children({ user, signOut, ...props })}
      </Authenticator>
    );

export interface AuthenticatorProps {
  user?: CognitoUserAmplify | undefined;
  signOut?: ((data?: AuthEventData | undefined) => void) | undefined;
}

export default withAuthenticator;
