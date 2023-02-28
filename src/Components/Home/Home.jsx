import { useEffect, useState } from "react";
import "./Home.css";

export const Home = () => {
  const [taskdata, setTaskdata] = useState({
    date: "",
    detail: "",
    name: "",
    status: "",
  });
  const [tdata, setTdata] = useState([]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setTaskdata({ ...taskdata, [id]: value });
  };

  
    
  
 

  const addData = (e) => {
    const newTask = { ...taskdata };
    setTdata([...tdata, newTask]);
    setTaskdata({
      date: "",
      detail: "",
      name: "",
      status: "",
    });
  };

  useEffect(() => {
    console.log(tdata);
    localStorage.setItem("verve_form_data", JSON.stringify(tdata));
  }, [tdata]);

  return (
    <div className="cont">
      <div className="main_Task">
        <div>
          <h2 className="h2">ADD NEW TASK</h2>
        </div>
        <div>
          <p>Task Name</p>
          <input
            type="text"
            id="name"
            value={taskdata.name}
            onChange={handleChange}
            placeholder="Name"
          />
        </div>
        <div>
          <p>Description</p>
          <textarea
            name="Enter the Task"
            id="detail"
            value={taskdata.detail}
            onChange={handleChange}
            cols="30"
            rows="5"
          ></textarea>
        </div>
        <div>
          <p>Date</p>
          <input
            type="date"
            id="date"
            value={taskdata.date}
            onChange={handleChange}
            placeholder="Enter the task"
          />
        </div>
        <div>
          <p>Status</p>
          <select
            name=""
            id="status"
            value={taskdata.status}
            onChange={handleChange}
          >
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
          </select>
        </div>
        <div>
          <button onClick={addData}>Add</button>
        </div>
      </div>
      <div className="display_task">
        <div>
          <h2 className="h2">TASK DETAILS</h2>
        </div>
        <div className="first">
          <p>Task Name</p>
          <p>Discription</p>
          <p>Date</p>
          <p>status</p>
        </div>
        {tdata.map((e) => {
          return (
            <div className="first">
              <p>{e.name}</p>
              <p>{e.detail}</p>
              <p>{e.date}</p>
              <p>{e.status}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
