import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiClient } from "../api/apiClient";

const Page1 = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 3700);

    return () => clearTimeout(timer);
  }, []);

  const handleAnswer = async () => {
    if (selectedPhoto === 3) {
      navigate("/correct");
      await apiClient.countUp("correct");
    } else {
      navigate("/in");
      await apiClient.countUp("incorrect");
    }
  };

  const handleAd = async () => {
    await apiClient.countUp("ad");
    navigate("/ad");
  };

  return (
    <>
      <div className="flex min-h-screen items-center justify-center">
        <div className="flex flex-col items-center gap-5">
          <div className="font-medium">
            表示される数字の内、以下の条件に該当するものを選択し、回答ボタンを押してください
          </div>

          <h1 className="text-2xl font-bold border px-50 py-4">3</h1>

          {showModal && (
            <div className="text-white font-bold text-3xl ">
              <button
                onClick={handleAd}
                className="w-100 h-150 bg-orange-500 flex items-center justify-center"
              >
                AD
              </button>
            </div>
          )}

          <div className="p-4 w-110 h-110 flex items-center justify-center">
            <div className="grid grid-cols-2 gap-1 font-medium">
              <button
                onClick={() => setSelectedPhoto(1)}
                className={`border w-50 h-50  ${
                  selectedPhoto === 1 ? "bg-red-500" : "hover:bg-red-300"
                }`}
              >
                1
              </button>
              <button
                onClick={() => setSelectedPhoto(2)}
                className={`border w-50 h-50  ${
                  selectedPhoto === 2 ? "bg-red-500" : "hover:bg-red-300"
                }`}
              >
                2
              </button>
              <button
                onClick={() => setSelectedPhoto(3)}
                className={`border w-50 h-50  ${
                  selectedPhoto === 3 ? "bg-red-500" : "hover:bg-red-300"
                }`}
              >
                3
              </button>
              <button
                onClick={() => setSelectedPhoto(4)}
                className={`border w-50 h-50  ${
                  selectedPhoto === 4 ? "bg-red-500" : "hover:bg-red-300"
                }`}
              >
                4
              </button>
            </div>
          </div>

          <button
            type="button"
            aria-label="submit-answer"
            onClick={handleAnswer}
            disabled={!selectedPhoto}
            className="text-3xl border px-7 py-3 hover:bg-blue-300"
          >
            回答
          </button>
        </div>
      </div>
    </>
  );
};

export default Page1;
