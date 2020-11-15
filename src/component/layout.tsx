import { Nav } from 'component/nav';
import { Header } from 'component/header';
import styled from 'styled-components';

type Props = {
  className?: string;
  children: React.ReactNode;
};

const Component: React.FC<Props> = ({ className, children }): JSX.Element => {
  return (
    <div className={className}>
      <Header />
      <Nav />
      {children}
    </div>
  );
};

const StyledLayout = styled(Component)`
  margin: 8px;
`;

export const Layout: React.FC<Props> = (props) => {
  const { children } = props;

  return <StyledLayout>{children}</StyledLayout>;
};
