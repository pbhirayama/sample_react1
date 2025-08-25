import { Button1 } from "../../../../parts/Button";

type HomePageProps = {
  onClick: () => void;
};

export const HomeContentPane = ({ onClick }: HomePageProps) => (
  <>
    <h1>Here is home!</h1>
    <Button1 onClick={onClick} title='to index' />
  </>
);
