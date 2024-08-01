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
    <form onSubmit={handleSubmit}>
      <h1>Add New Task</h1>

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

      <div className='formFooter'>
        <button type="button" className="secondary">cancel</button>
        <button type="submit" className="primary">Create Task</button>
      </div>
    </form>
  );
};

export default CreateTask;
