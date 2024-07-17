import React, { useState, FormEvent } from 'react';


interface EditTaskProps {
  taskDetails: any;
  onUpdate: any;
}

const EditTask: React.FC<EditTaskProps> = ({ taskDetails, onUpdate }) => {
  const [id, setId] = useState<string>(taskDetails.id);
  const [oldStatus, setOldStatus] = useState<string>(taskDetails.status);
  const [title, setTitle] = useState<string>(taskDetails.title);
  const [person, setPerson] = useState<string>(taskDetails.person);
  const [status, setStatus] = useState<string>(taskDetails.status);
  const [description, setDescription] = useState<string>(taskDetails.description);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onUpdate({id, title, person, status, oldStatus, description});
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Edit Task</h1>

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
        <label>Person</label>
        <input
          type="text"
          value={person}
          onChange={(e) => setPerson(e.target.value)}
          required
          name="person"
        />
      </div>

      <div className="inputField">
        <label>Status</label>
        <input
          type="text"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          required
          name="status"
        />
      </div>

      <div className="inputField">
        <label>Description</label>
        <textarea 
          name="description" 
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>


      <button type="button">cancel</button>
      <button type="submit">Update Task</button>
    </form>
  );
};

export default EditTask;
