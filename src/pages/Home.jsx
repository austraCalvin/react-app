import React, { useContext, useEffect } from 'react';
import { UserContext } from '../Context/UserGlobal';

const Home = () => {

  const { permission, handlePermission } = useContext(UserContext);

  useEffect(() => {

  }, [permission]);

  // const xhr = new XMLHttpRequest();
  // xhr.open("post", "https://jsonplaceholder.typicode.com/posts");
  // xhr.send(JSON.stringify({userId: 101, id: 102, title: "abc", body: "gdg"}));
  // xhr.addEventListener("load", (e) => {

  //   console.log(e);
  //   console.log(xhr.response);
  //   console.log(xhr.responseType);

  // });

  fetch({
    method: "POST",
    body: {"userId":101,"id":102,"title":"abc","body":"gdg"},
    url: "https://jsonplaceholder.typicode.com/posts"
  });

  return (
    <>
      <div className='ms-2 mt-2'>Home</div>
      <div className="form-check form-switch ms-2 mt-2">
        <input id="permission" name='permission' type="checkbox" className="form-check-input" onChange={handlePermission} checked={permission ? true : false} />
        <label htmlFor="permission" className="form-check-label">permission {permission ? "on" : "off"}</label>
      </div>
    </>
  )
}

export default Home