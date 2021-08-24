import React from "react";
import Item from "./Item";



export default function ItemList(props) {
  // console.log(userList)
  return (
    <div style={{ border: "1px solid green" }}>
      {props.userList.map((user) => {
        return <Item key={user.id} {...user} />;
      })}
    </div>
  );
}
