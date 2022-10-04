import { useChangeAuthSubpage } from 'components/Auth/hooks';
import { Navigate } from 'react-router-dom';

export type ProtectedRouteProps = {
  isAuthenticated: boolean;
  authenticationPath: string;
  outlet: JSX.Element;
};

export default function ProtectedRoute({
  isAuthenticated,
  authenticationPath,
  outlet,
}: ProtectedRouteProps) {
  const authSubpageActions = useChangeAuthSubpage();

  if (isAuthenticated) {
    return outlet;
  } else {
    authSubpageActions.openLogin();
    return <Navigate to={{ pathname: authenticationPath }} />;
  }
}
