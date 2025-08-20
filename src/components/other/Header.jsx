import React from "react";
import { setLocalStorage } from "../../utils/LocalStorage";

const Header = (props) => {
  // console.log(data)
  // const [username, setusername] = useState("");

  // if (!data) {
  //   setusername("Admin");
  // } else {
  //   setusername(data.firstName);
  // }

  const logOutUser = () => {
    localStorage.setItem('loggedInUser','');
    
    // go to home page after logout
    // window.location.reload()
    props.changeUser('')
  }

  return (
    <div className="flex items-center justify-between mb-2 text-black">
      <h1 className="text-5xl font-bold">
        hii <br /> <span className="text-2xl">{props.data?.firstName} 👋</span>
      </h1>
      {/* {data?.firstName} */}
      <button onClick={logOutUser} className="bg-red-500 px-3 py-1 rounded-2xl hover:bg-red-600">
        Log out
      </button>
    </div>
  );
};

export default Header
