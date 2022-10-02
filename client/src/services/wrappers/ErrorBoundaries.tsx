import { Component, PropsWithChildren, ReactNode } from 'react';
import SomethingWentWrong from '../../pages/ErrorPages/SomethingWentWrongPage';

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = PropsWithChildren<{}>;
type State = { isError?: boolean };

export class ErrorBoundaries extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isError: false,
    };
  }

  static getDerivedStateFromError(): State {
    return { isError: true };
  }

  componentDidCatch(error: Error): void {
    console.log('Error boundaries catch an error: ', error.name, error.message);
  }

  render(): ReactNode {
    const { isError } = this.state;
    if (isError) {
      return <SomethingWentWrong />;
    }
    const { children } = this.props;
    return children;
  }
}
