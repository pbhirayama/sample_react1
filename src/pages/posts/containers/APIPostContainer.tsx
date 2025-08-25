import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { APIPostContentPane } from "../components/panes/APIPostContentPane";

type ApiResponse = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const fetchPosts = async (): Promise<ApiResponse[]> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) throw new Error("Failed to fetch posts");
  return await response.json();
};

export const APIPostContainer = () => {
  //   const fetchData = async (): Promise<ApiResponse[]> => {
  //     const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  //     const data: ApiResponse[] = await response.json();
  //     return data;
  //   }; 実装練習5のやつ
  const {
    data: posts,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });
  //   const [posts, setPosts] = useState<ApiResponse[]>([]); 実装練習5のやつだけど使わないかも？

  //   useEffect(() => {
  //     fetchData().then((data) => {
  //       setPosts(data);
  //     });
  //   }, []); 実装練習5のやつ
  const navi = useNavigate();
  const onClick = (post: ApiResponse) => {
    navi(`/posts/${post.id}`, { state: { current: post } });
  };

  if (isLoading) return <p>読み込み中…</p>;
  if (isError || !posts) return <p>データ取得に失敗しました</p>;

  return <APIPostContentPane posts={posts} onClick={onClick} />;
};
