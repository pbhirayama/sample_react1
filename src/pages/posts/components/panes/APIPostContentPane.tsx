type ApiResponse = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type APIPostProps = {
  posts: ApiResponse[];
  onClick: (post: ApiResponse) => void;
};

export const APIPostContentPane = ({ posts, onClick }: APIPostProps) => (
  <>
    {posts.map((post) => (
      <div key={post.id} onClick={() => onClick(post)} style={{ cursor: "pointer" }}>
        <h2>{post.title}</h2>
        <tr />
        <p>{post.body}</p>
      </div>
    ))}
  </>
);
