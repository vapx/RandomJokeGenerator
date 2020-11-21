import React from "react";

export default function Login() {
  return (
    <form>
      <label>
        Email:
        <input type="text" name="name" />
      </label>
      <label>
        Password:
        <input type="text" name="name" />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}
