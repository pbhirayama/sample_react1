type APIPostsubProps = {
  title: string;
  body: string;
};

export const APIPostsubContentPane = ({ title, body }: APIPostsubProps) => (
  <>
    <h2>{title}</h2>
    <tr />
    <p>{body}</p>
  </>
);
