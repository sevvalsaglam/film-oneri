import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/home");
  };

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
        <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 space-y-6">
          <input
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-4 rounded-xl bg-white/20 text-white text-xl placeholder-white/70 outline-none"
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-4 rounded-xl bg-white/20 text-white text-xl placeholder-white/70 outline-none"
          />
          <button
            onClick={handleSubmit}
            className="w-full p-4 bg-black/40 text-white rounded-xl text-xl hover:bg-black/50 transition-colors"
          >
            Giriş Yap
          </button>
        </div>
      </div>
    </div>
  );
}

