import Image from "next/image";
import { PropertyType } from "./PropertyList";
import { useRouter } from "next/navigation";
import FavoriteButton from "../FavoriteButton";

interface PropertyProps {
  property: PropertyType;
  markFavorite?: (is_favorite: boolean) => void;
}

const PropertyListItem: React.FC<PropertyProps> = ({
  property,
  markFavorite,
}) => {
  const router = useRouter();
  return (
    <div
      className="cursor-pointer"
      onClick={() => router.push(`/properties/${property.id}`)}
    >
      <div className="relative overflow-hidden aspect-square rounded-xl">
        <Image
          src={property.image_url}
          alt="pharog"
          width={768}
          height={768}
          layout="responsive"
          className="hover:scale-110 object-cover transition h-full w-full"
        />
        {markFavorite && (
          <FavoriteButton
            id={property.id}
            is_favorite={property.is_favorite}
            markFavorite={(is_favorite) => markFavorite(is_favorite)}
          />
        )}
      </div>
      <div className="mt-2">
        <p className="text-lg font-semibold">{property.title}</p>
      </div>

      <div className="mt-2">
        <p className="text-sm text-gray-500">
          <strong>{property.price_per_night}</strong> night
        </p>
      </div>
    </div>
  );
};

export default PropertyListItem;
