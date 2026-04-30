const Page1 = () => {
  return (
    <>
      <div className="flex min-h-screen items-center justify-center">
        <div className="flex flex-col items-center gap-15">
          <div className="font-medium">
            表示される数字の内、以下の条件に該当するものをすべて選択し、回答ボタンを押してください
          </div>

          <h1 className="text-2xl font-bold border px-50 py-4">3</h1>

          <div className="p-4 w-110 h-110 flex items-center justify-center">
            <div className="grid grid-cols-2 gap-1 font-medium">
              <button className="border w-50 h-50 hover:bg-red-300">1</button>
              <button className="border w-50 h-50 hover:bg-red-300">2</button>
              <button className="border w-50 h-50 hover:bg-red-300">3</button>
              <button className="border w-50 h-50 hover:bg-red-300">4</button>
            </div>
          </div>

          <button className="text-3xl border px-7 py-3 hover:bg-blue-300">
            回答
          </button>
        </div>
      </div>
    </>
  );
};

export default Page1;
