import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch("https://api.github.com/users/manojraut0803")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     });
  // }, []);

  const data = useLoaderData()

  return (
    <div class="bg-gray-100 flex items-center justify-center  ">
      <div class=" text-center text-white w-1/2 bg-gray-700 p-4 mx-auto ">
        Github Followers: {data.followers}
        <img src={data.avatar_url} alt="git picture" width={300} />
      </div>
    </div>
  );
}

export default Github;

export const githubInfoLoader = async ()=>{
  const response = await fetch("https://api.github.com/users/manojraut0803")
  return response.json()
}