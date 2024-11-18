import { useContext } from 'react';
import { IMG_CDN_URL } from '../Constant';
import 'react-loading-skeleton/dist/skeleton.css';
import UserContext from '../Utils/UserContext';
import { StarIcon } from '@heroicons/react/24/solid';


const RestaurantCard = ({
  name, avgRating, cuisines,
  cloudinaryImageId,
  locality,
  sla,
  costForTwo,
  offer
}) => {
  const { user } = useContext(UserContext);
  const { deliveryTime } = sla;

  return (
    <div className="card w-[280px] h-[380px] bg-white rounded-lg shadow-md m-3 overflow-hidden relative border border-gray-200 hover:shadow-lg transition-shadow">
      {/* Image */}
      <div className="relative">
        <img
          src={IMG_CDN_URL + cloudinaryImageId}
          alt={name}
          className="w-full h-[160px] object-cover"
        />
        {offer && (
          <div className="absolute top-2 left-2 bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded">
            {offer}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="px-4 py-3">
        {/* Restaurant Name */}
        <h2 className="font-bold text-lg truncate">{name}</h2>

        {/* Rating with Icon */}
        <div className="flex items-center gap-2 mt-2">
  <StarIcon className="h-5 w-5 text-yellow-500" />
  <span className="text-gray-800 font-medium text-sm">{avgRating}</span>
</div>

        {/* Locality and Delivery Time */}
        <div className="flex justify-between items-center text-sm text-gray-600 mt-2">
          <p className="truncate">{locality}</p>
          <span>{deliveryTime} mins</span>
        </div>

        {/* Cuisines */}
        <p className="mt-2 text-sm text-gray-700 truncate">
          {cuisines.slice(0, 4).join(", ")}
        </p>

        {/* Cost for Two */}
        <div className="text-sm text-gray-800 font-medium mt-2">
          ₹{costForTwo} for two
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
