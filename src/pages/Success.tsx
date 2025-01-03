import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

export default function Success() {
  const navigate = useNavigate();

  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center p-6"
      style={{
        backgroundImage: "url('/movie-posters-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full max-w-lg">
        <Header />
        <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 text-center">
          <img 
            src="/placeholder.svg" 
            alt="Success" 
            className="w-48 h-48 mx-auto mb-8 rounded-xl"
          />
          <button
            onClick={() => navigate("/home")}
            className="bg-black/40 text-white px-12 py-3 rounded-xl text-xl hover:bg-black/50 transition-colors"
          >
            Ana Sayfaya Dön
          </button>
        </div>
      </div>
    </div>
  );
}

