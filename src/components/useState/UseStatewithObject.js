import React, {useState} from "react";

export default function UseStatewithObject() {
  const [name, setName] = useState({
    firstName: "",
    lastName: "",
  });
  return (
      <>
    <form>
      <input
        type="text"
        value={name.firstName}
        onChange={(e) =>
          setName({
              ...name,
            firstName: e.target.value,
          })
        }
      />
      <input
        type="text"
        value={name.lastName}
        onChange={(e) =>
          setName({
              ...name,
            lastName: e.target.value,
          })
        }
      />
    </form>
    {name.firstName} <br/>
    {name.lastName}  <br/>
    <h2>{JSON.stringify(name)}</h2>
    </>
  );
}
