import React, { useState, FormEvent } from 'react';


interface CreateTaskProps {
  onCreate: any;
}

const CreateTask: React.FC<CreateTaskProps> = ({ onCreate }) => {
  const [title, setTitle] = useState<string>("");
  const [person, setPerson] = useState<string>("");
  const [status, setStatus] = useState<string>("1");
  const [description, setDescription] = useState<string>("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onCreate({title, person, status, description});
  };

  return (
    <form className='taskForm' onSubmit={handleSubmit}>
<div className="mainWrap">
    <div className="col-wrap">
        <div className="inputField">
          <label>Task Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            name="title"
          />
        </div>
        <div className="inputField">
          <label>Description</label>
          <textarea 
            name="description"
            className='taskDescription'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
      </div>

      <div className="col-wrap statusPerson">
        <div className="inputField">
          <label>Status</label>
          <select name="status" value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="1">Open</option>
            <option value="2">In Progress</option>
            <option value="3">In Review</option>
            <option value="4">Done</option>
          </select>
          {/* <input
            type="text"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            required
            name="status"
          /> */}
        </div>
        <div className="inputField">
          <label>Person</label>
          <input
            type="text"
            value={person}
            onChange={(e) => setPerson(e.target.value)}
            required
            name="person"
          />
        </div>
      </div>
      </div>
      <div className='formFooter'>
        {/* <button type="button" className="secondary">cancel</button> */}
        <button type="submit" className="primary">Create Task</button>
      </div>
    </form>
  );
};

export default CreateTask;
