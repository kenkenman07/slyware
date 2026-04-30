import { Link } from "react-router-dom";

const Start = () => {
  return (
    <>
      <div className="flex min-h-screen items-center justify-center">
        <div className="flex flex-col items-center gap-20">
          <h1 className="text-2xl font-bold">スタートページ</h1>

          <Link to="/1" className="border p-4 hover:bg-red-300">
            回答ページへ
          </Link>
        </div>
      </div>
    </>
  );
};

export default Start;
