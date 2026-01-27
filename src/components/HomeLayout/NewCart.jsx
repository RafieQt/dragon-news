import { CiShare2 } from "react-icons/ci";
import { FaRegBookmark } from "react-icons/fa";
import { Link } from "react-router";

const NewCart = ({ news }) => {
  const {
    title,
    rating,
    total_view,
    author,
    thumbnail_url,
    details,
    id
  } = news;

  return (
    <div className="">
      <div className="max-w-full bg-white rounded-2xl shadow-md overflow-hidden">

        {/* Author Section */}
        <div className="flex justify-between p-4 bg-base-200 mb-3">
          <div className="flex items-center gap-3 ">
            <img
              src={author.img}
              alt={author.name}

              className="w-10 h-10 rounded-full object-cover"
            />

            <div>
              <h4 className="text-sm font-semibold text-gray-800">
                {author.name}
              </h4>
              <p className="text-xs text-gray-500">
                {new Date(author.published_date).toDateString()}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <FaRegBookmark />
            <CiShare2 />
          </div>
        </div>

        {/* Title */}
        <h2 className="px-4 text-xl font-bold text-gray-900 leading-snug">
          {title}
        </h2>

        {/* Thumbnail */}
        <div className="px-4 mt-3">
          <img
            src={thumbnail_url}
            alt={title}
            className="w-full h-56 object-cover rounded-xl"
          />
        </div>

        {/* Details */}
        <p className="px-4 mt-4 text-sm text-gray-600 leading-relaxed line-clamp-3">
          {details}
        </p>

        {/* Read More */}
        <div className="px-4 mt-2">
          <Link to={`news-details/${id}`} className="text-orange-500 text-sm font-semibold hover:underline">
            Read More
          </Link>
        </div>
        <hr className="border-base-200 w-[85%] mx-auto mt-2" />

        {/* Footer */}
        <div className="flex items-center justify-between px-4 py-4">

          {/* Rating */}
          <div className="flex items-center gap-1 text-orange-500">
            {Array.from({ length: rating.number }).map((_, i) => (
              <span key={i}>★</span>
            ))}
            <span className="ml-2 text-sm text-gray-700">
              {rating.number}
            </span>
          </div>

          {/* Views */}
          <div className="flex items-center gap-1 text-gray-500 text-sm">
            <span>👁</span>
            <span>{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCart;
