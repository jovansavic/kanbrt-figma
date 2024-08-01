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

        <button type="button" className="danger small" onClick={()=>{
          parent.postMessage({ pluginMessage: { type: 'deleteTask', data: {id, title, person, status, oldStatus, description} } }, '*');
        }}>Delete</button>

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
        <button type="submit" className="primary">Update Task</button>
      </div>
    </form>
  );
};

export default EditTask;
