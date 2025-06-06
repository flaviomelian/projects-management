import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTaskContext } from '../../Context/Context'; // Importamos el contexto
import { createTask, updateTask } from '../../services/services';
import './CreateTaskOK.css'

const CreateTaskOK = () => {

  const navigate = useNavigate();
  const { taskData } = useTaskContext();
  const location = useLocation();
  const isEditMode = location.state;
  const [ devs, setDevs ] = useState('');

  useEffect(() => {
    if (taskData) {
      let devArray = []
      for (let dev of taskData.users) {
        devArray.push(dev)
        devArray.push(' ')
      }
      setDevs(devArray);
    }
  }, [taskData]);

  const handleCreateTask = async () => {
    try {
      await createTask(taskData);
      navigate('/projects'); 
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdateTask = async () => {
    try {
      await updateTask(taskData.id, taskData);
      navigate('/projects'); 
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='create-task-ok'>
      {console.log(taskData)}
      {isEditMode ? (<h1>Confirmar edición de tarea</h1>) : (<h1>Confirmar creación de tarea</h1>)}
      {taskData && (
        <div>
          <p><b>Tarea:</b> {taskData.content}</p>
          <p><b>Prioridad:</b> {taskData.priority}</p>
          <p><b>Dias estimados:</b> {taskData.time}</p>
          <p><b>Proyecto:</b> {taskData.projectName}</p>
          <p><b>Desarrolladores asignados:</b> {devs}</p>
        </div>
      )}
      <div className='confirmation-buttons'>
        <button className="btn sucess" onClick={isEditMode ? handleUpdateTask : handleCreateTask}>Confirmar</button>
        <button className="btn danger" onClick={() => navigate('/kanban')}>Cancelar</button>
      </div>
      
    </div>
  );
};

export default CreateTaskOK;
