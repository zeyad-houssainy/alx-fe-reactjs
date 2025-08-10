
function UserProfile() {
  return (
    <div 
      className="user-profile max-w-sm sm:max-w-xs md:max-w-sm mx-auto my-20 sm:p-4 md:p-8 
      bg-gray-100 rounded-lg shadow-lg 
      hover:shadow-xl">
        
      <img src="https://via.placeholder.com/150 " alt="User" 
        className="sm:w-24 sm:h-24 md:w-36 md:h-36 mx-auto rounded-full transition-transform duration-300 ease-in-out hover:scale-110"/>
      <h1 className="my-4 text-blue-800 sm:text-lg md:text-xl hover:text-blue-500">John Doe</h1>
      <p className="text-gray-600 sm:text-sm md:text-base">Developer at Example Co. Loves to write code and explore new technologies.</p>
    </div>
  );
}

export default UserProfile;