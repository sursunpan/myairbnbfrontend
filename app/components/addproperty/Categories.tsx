import Image from "next/image";

interface CategoriesProps {
  dataCategory: string;
  setCategory: (category: string) => void;
}

const Categories: React.FC<CategoriesProps> = ({
  dataCategory,
  setCategory,
}) => {
  return (
    <>
      <div className="pt-3 cursor-pointer pb-6 flex items-center space-x-12">
        <div
          onClick={() => setCategory("Farms")}
          className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${
            dataCategory === "Farms" ? "border-gray-800" : "border-white"
          } opacity-60 hover:border-gray-200 hover:opacity-100`}
        >
          <Image src="/farm.jpg" alt="farm" width={24} height={24} />
          <span className="text-xs">Farms</span>
        </div>

        <div
          onClick={() => setCategory("Earth homes")}
          className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${
            dataCategory === "Earth homes" ? "border-gray-800" : "border-white"
          } opacity-60 hover:border-gray-200 hover:opacity-100`}
        >
          <Image src="/earthhome.jpeg" alt="farm" width={24} height={24} />
          <span className="text-xs">Earth homes</span>
        </div>

        <div
          onClick={() => setCategory("Historical homes")}
          className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${
            dataCategory === "Historical homes"
              ? "border-gray-800"
              : "border-white"
          } opacity-60 hover:border-gray-200 hover:opacity-100`}
        >
          <Image src="/historicalhomes.jpg" alt="farm" width={24} height={24} />
          <span className="text-xs">Historical homes</span>
        </div>

        <div
          onClick={() => setCategory("Amazing pools")}
          className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${
            dataCategory === "Amazing pools"
              ? "border-gray-800"
              : "border-white"
          } opacity-60 hover:border-gray-200 hover:opacity-100`}
        >
          <Image
            src="/amazingpools.jpg"
            alt="amazingpools"
            width={24}
            height={24}
          />
          <span className="text-xs">Amazing pools</span>
        </div>

        <div
          onClick={() => setCategory("Play")}
          className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${
            dataCategory === "Play" ? "border-gray-800" : "border-white"
          } opacity-60 hover:border-gray-200 hover:opacity-100`}
        >
          <Image src="/play.jpg" alt="play" width={24} height={24} />
          <span className="text-xs">Play</span>
        </div>

        <div
          onClick={() => setCategory("Ryokans")}
          className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${
            dataCategory === "Ryokans" ? "border-gray-800" : "border-white"
          } opacity-60 hover:border-gray-200 hover:opacity-100`}
        >
          <Image src="/ryokans.jpg" alt="ryokans" width={24} height={24} />
          <span className="text-xs">Ryokans</span>
        </div>

        <div
          onClick={() => setCategory("Riads")}
          className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${
            dataCategory === "Riads" ? "border-gray-800" : "border-white"
          } opacity-60 hover:border-gray-200 hover:opacity-100`}
        >
          <Image src="/riads.jpeg" alt="riads" width={24} height={24} />
          <span className="text-xs">Riads</span>
        </div>

        <div
          onClick={() => setCategory("Desert")}
          className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${
            dataCategory === "Desert" ? "border-gray-800" : "border-white"
          } opacity-60 hover:border-gray-200 hover:opacity-100`}
        >
          <Image src="/desert.jpg" alt="desert" width={24} height={24} />
          <span className="text-xs">Desert</span>
        </div>
      </div>
    </>
  );
};

export default Categories;
