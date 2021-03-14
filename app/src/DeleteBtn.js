import React from "react";

function DeleteBtn({ onClick }) {
  return (
    <div>
      <button onClick={onClick} className="bg-yellow-500 py-2 px-5 shadow">
        Delete
      </button>
    </div>
  );
}

export default DeleteBtn;
