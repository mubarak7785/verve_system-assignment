import "./Home.css";

export const Home = () => {
  return (
    <div>
      <div className="main_Task">
      <div>
          <h2>ADD NEW TASK</h2>
        </div>
        <div>
          <p>Task Name</p>
          <input type="text" placeholder="Name" />
        </div>
        <div>
          <p>Description</p>
          <textarea name="Enter the Task" id="" cols="30" rows="5"></textarea>
        </div>
        <div>
          <p>Date</p>
          <input type="date" placeholder="Enter the task" />
        </div>
        <div>
          <p>Status</p>
          <select name="" id="">
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
          </select>
        </div>
        <div>
            <button>Add</button>
        </div>
      </div>
    </div>
  );
};
