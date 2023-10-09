import Button from "./Button";

function FriendsList({ friendsData, setOpenFormSplitBill, openFormSplitBill }) {
  const handleOpenSplitForm = (selectedFriend) => {
    setOpenFormSplitBill((preId) =>
      preId?.id === selectedFriend.id ? false : selectedFriend
    );
  };
  return (
    <ul>
      {friendsData?.map((friend) => {
        return (
          <li className="" key={friend.id}>
            <img src={friend.image} />
            <h3> {friend.name}</h3>
            <p
              className={
                friend.balance > 0 ? "green" : friend.balance < 0 ? "red" : ""
              }
            >
              {friend.balance > 0
                ? `${friend.name} owes you ${friend.balance}€`
                : friend.balance < 0
                ? `You owe ${friend.name} ${Math.abs(friend.balance)}€`
                : `You and ${friend.name} are even`}
            </p>
            <Button onClick={() => handleOpenSplitForm(friend)}>
              {openFormSplitBill?.id === friend.id ? "Close" : "Select"}
            </Button>
          </li>
        );
      })}
    </ul>
  );
}

export default FriendsList;
