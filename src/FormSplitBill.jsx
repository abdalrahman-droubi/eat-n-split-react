import { useState } from "react";
import Button from "./Button";

function FormSplitBill({
  selectedFriend,
  setFrendsData,
  setOpenFormSplitBill,
}) {
  const [formData, setFormData] = useState({
    bill: "",
    paidByUser: "",
    whoisPaidBill: 1,
  });
  const handleChange = (e, value) => {
    setFormData((preFormData) => {
      return { ...preFormData, [e.target.name]: value };
    });
  };
  const handleSubmit = (e) => {
    console.log(formData);
    if (!formData.bill || !formData.paidByUser) return;
    e.preventDefault();
    const balanceValue = formData.whoisPaidBill
      ? formData.bill - formData.paidByUser
      : -formData.paidByUser;
    setFrendsData((preFrends) => {
      return preFrends?.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + balanceValue }
          : friend
      );
    });
    setOpenFormSplitBill(false);
  };
  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {selectedFriend.name}</h2>

      <label>💰 Bill value</label>
      <input
        type="text"
        name="bill"
        value={formData.bill}
        onChange={(e) => handleChange(e, Number(e.target.value))}
      />

      <label>🧍‍♀️ Your expense</label>
      <input
        type="text"
        name="paidByUser"
        value={formData.paidByUser}
        onChange={(e) => handleChange(e, Number(e.target.value))}
      />

      <label>👫 {selectedFriend.name}'s expense</label>
      <input
        disabled
        type="text"
        value={formData.bill ? formData.bill - formData.paidByUser : ""}
      />

      <label>🤑 Who is paying the bill</label>
      <select
        name="whoisPaidBill"
        onChange={(e) => handleChange(e, Number(e.target.value))}
      >
        <option value={1}>you</option>
        <option value={0}>{selectedFriend.name}</option>
      </select>
      <Button>Split bill</Button>
    </form>
  );
}

export default FormSplitBill;
