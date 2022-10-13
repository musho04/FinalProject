import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {getUsers, deleteUsers} from "../features/user/userSlice.js";
import {selecterUser} from "../selectors/userListSelector"
import Button from "../components/Button";


const UserList = () => {
  const dispatch = useDispatch()
  const data = useSelector(selecterUser);

  useEffect(() => {
    dispatch(getUsers())
  }, []);


  const deleteUser = (id) => {
    dispatch(deleteUsers(id))
  };



  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <Link to={`add`} className="button is-success">
          Add New
        </Link>
        <table className="table is-striped is-fullwidth">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Salary</th>
              <th>Section</th>
              <th>Position</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.salary?.amount}</td>
                <td>{user.section?.title}</td>
                <td>{user.position?.title}</td>
                <td>
                  <Link
                    to={`edit/${user.id}`}
                    className="button is-small is-info mr-2"
                  >
                    Edit
                  </Link>
                  {/* <button onClick={() => deleteUser(user.id)} className="button is-small is-danger"  > Delete </button> */}
                  <Button onClick={() => deleteUser(user.id)} nameClass="button is-small is-danger" event="Delete"/>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;
