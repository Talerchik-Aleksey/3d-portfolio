import { useEffect, useState } from "react";
import { useAuthUser } from "react-auth-kit";
import { SearchBar, WorkDetails } from "../../components";
import { Gallery } from "../../components/Gallery/Gallery";

const Works: React.FC = () => {
  const [works, setWorks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const auth = useAuthUser();

  useEffect(() => {
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    fetch(`${backendUrl}/3d-data`)
      .then((res) => res.json())
      .then((data) => {
        setWorks(data);
        setLoading(false);
      });
    alert(auth()?.id);
  }, []);

  const handleSearchQueryChange = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-blue-400 mb-4">3D Designer Works Gallery</h1>
      <SearchBar onSearchQueryChange={handleSearchQueryChange} />
      {loading ? (
        <div className="animate-pulse flex space-x-4">
          <div className="rounded-full bg-slate-700 h-10 w-10"></div>
          <div className="flex-1 space-y-6 py-1">
            <div className="h-2 bg-slate-700 rounded"></div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                <div className="h-2 bg-slate-700 rounded col-span-1"></div>
              </div>
              <div className="h-2 bg-slate-700 rounded"></div>
            </div>
          </div>
        </div>
      ) : (
        <Gallery works={works} searchQuery={searchQuery} />
      )}
    </div>
  );
};

export default Works;
