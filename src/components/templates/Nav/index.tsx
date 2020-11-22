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
      <EffectLink text="一覧" url="/posts" />
      <EffectLink text="世界史" url="/posts" />
      <EffectLink text="日本史" url="/posts" />
      {/* <Link href="/posts">
        <a href="/posts">一覧</a>
      </Link>
      <Link href="/posts">
        <a href="/posts">世界史</a>
      </Link>
      <Link href="/posts">
        <a href="/posts">日本史</a>
      </Link> */}
    </div>
  );
};

const StyledComponent = styled(Component)`
  display: flex;
  justify-content: space-around;
  & a {
    width: 100%;
  }
`;

export const Nav: React.FC<Props> = (props) => {
  const { children } = props;

  return <StyledComponent>{children}</StyledComponent>;
};
