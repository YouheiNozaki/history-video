import styled from 'styled-components';

import { EffectLink } from 'components/atoms/EffectLink';

type Props = {
  className?: string;
};

const Component: React.FC<Props> = ({
  className,
}): JSX.Element => {
  return (
    <div className={className}>
      <EffectLink text="一覧" url="/" />
      <EffectLink text="世界史" url="/" />
      <EffectLink text="サイトについて" url="/about" />
    </div>
  );
};

const StyledComponent = styled(Component)`
  display: flex;
  justify-content: space-around;
  & a {
    width: 100%;
    padding-left: 40px;
  }
`;

export const Nav: React.FC<Props> = (props) => {
  const { children } = props;

  return <StyledComponent>{children}</StyledComponent>;
};
