import { useState } from "react";
import FormAddFriend from "./FormAddFriend";
import FriendsList from "./FriendsList";
import Button from "./Button";
import FormSplitBill from "./FormSplitBill";
const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];
function App() {
  const [openFormAddFriends, setOpenFormAddFriends] = useState(false);
  const [openFormSplitBill, setOpenFormSplitBill] = useState(false);
  const [friendsData, setFrendsData] = useState(initialFriends);
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friendsData={friendsData}
          setOpenFormSplitBill={setOpenFormSplitBill}
          openFormSplitBill={openFormSplitBill}
        />
        {openFormAddFriends && (
          <FormAddFriend
            closeForm={setOpenFormAddFriends}
            setFrendsData={setFrendsData}
          />
        )}
        <Button onClick={() => setOpenFormAddFriends((preState) => !preState)}>
          {openFormAddFriends ? "Close" : "Add friend"}
        </Button>
      </div>
      {openFormSplitBill && (
        <FormSplitBill
          selectedFriend={openFormSplitBill}
          setOpenFormSplitBill={setOpenFormSplitBill}
          setFrendsData={setFrendsData}
        />
      )}
    </div>
  );
}

export default App;
