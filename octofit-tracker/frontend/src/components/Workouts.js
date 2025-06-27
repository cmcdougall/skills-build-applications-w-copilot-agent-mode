import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

function Workouts() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetch('https://effective-funicular-gxj5rvg4rxwc977j-8000.app.github.dev/api/workouts/')
      .then(response => response.json())
      .then(data => setWorkouts(data));
  }, []);

  return (
    <div>
      <h1 className="text-danger">Workouts</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {workouts.map(workout => (
            <tr key={workout.id}>
              <td>{workout.id}</td>
              <td>{workout.name}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Workouts;
