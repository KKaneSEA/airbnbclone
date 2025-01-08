import React from "react";
import { removeUser } from "@/utils/actions";

function DeleteButton({ id }: { id: string }) {
  const removeUserWithId = removeUser.bind(null, id);
  return (
    <form action={removeUserWithId}>
      <input type="hidden" name="id" value="shakeAndBake" />
      <button
        type="submit"
        className="bg-red-500 text-white text-xs rounded p-2"
      >
        Delete
      </button>
    </form>
  );
}

export default DeleteButton;
