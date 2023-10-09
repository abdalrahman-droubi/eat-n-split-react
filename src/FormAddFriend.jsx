import { useState } from "react";
import Button from "./Button";

export default function FormAddFriend({ closeForm, setFrendsData }) {
  const [newFriend, setNewFrend] = useState({
    name: "",
    image: "https://i.pravatar.cc/48",
  });
  const handleChange = (e, value) => {
    setNewFrend((preData) => {
      return { ...preData, [e.target.name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newFriend.name === "") return;
    const id = crypto.randomUUID();
    setFrendsData((prefrindsData) => {
      return [
        ...prefrindsData,
        { ...newFriend, image: `${newFriend.image}?=${id}`, balance: 0, id },
      ];
    });
    closeForm((preState) => !preState);
  };
  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label htmlFor="name">👫 Friend name</label>
      <input
        type="text"
        id="name"
        name="name"
        value={newFriend.name}
        onChange={(e) => handleChange(e, e.target.value)}
      />
      <label>🌄 Image URL</label>
      <input
        type="text"
        name="image"
        value={newFriend.image}
        onChange={(e) => handleChange(e, e.target.value)}
      />
      <Button>Add</Button>
    </form>
  );
}
