import { useSelector } from "react-redux";
import twitterLogo from "../assets/Twitter-Logo-2012.png";
import twitterAvi from "../assets/twitter-avi.png";

export const Sidebar = () => {
  const user = useSelector((state) => state.user.value);
  // state.user.value --> "user" samain dengan yg ada di store.js
  // console.log(user);

  const sidebarItems = [
    { icon: "mr-4 pl-3 text-2xl ri-home-7-line", sectionName: "Home" },
    { icon: "mr-4 pl-3 text-2xl ri-search-line", sectionName: "Explore" },
    {
      icon: "mr-4 pl-3 text-2xl ri-notification-2-line",
      sectionName: "Notifications",
    },
    { icon: "mr-4 pl-3 text-2xl ri-message-2-line", sectionName: "Messages" },
    { icon: "mr-4 pl-3 text-2xl ri-user-line", sectionName: "Profile" },
  ];

  return (
    <div className="col-span-1 flex flex-col py-6 pl-20 h-screen">
      <img src={twitterLogo} alt="" className="w-12" />
      <div className="flex flex-col flex-grow justify-between gap-1 mt-6 ">
        {/* DI MAPPING AJA ! declare const dulu */}
        <div>
          {sidebarItems.map((item) => (
            <div className="flex items-center text-lg hover:rounded-full hover:bg-gray-100 py-2.5 pr-4 w-max">
              <i className={`${item.icon}`}></i>
              <span className="text-md">{item.sectionName}</span>
            </div>
          ))}
        </div>

        <div className="flex">
          <img
            src={twitterAvi}
            alt=""
            className="flex self-center h-10 mr-4 rounded-full"
          />
          <div className="flex flex-col justify-around mr-14">
            <span className="font-bold">{user.name}</span>
            <span className="text-gray-500">{user.email}</span>
          </div>
          <button className="hover:bg-gray-100 rounded-full px-3">
            <i className="ri-more-fill flex items-center text-xl"></i>
          </button>
        </div>
      </div>
    </div>
  );
};
