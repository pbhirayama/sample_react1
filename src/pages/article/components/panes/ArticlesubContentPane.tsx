type ArticlesubProps = {
  id: string;
  from?: string;
};

export const ArticlesubContentPane = ({ id, from }: ArticlesubProps) => (
  <>
    <h3>This is article {id}</h3>
    {typeof from === "string" && <h4>from:{from}</h4>}
  </>
);
