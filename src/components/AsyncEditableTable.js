import React, { useState, useEffect } from 'react';
import './EditableTable.css';

const AsyncEditableTable = ({ fetchData, updateRow, deleteRow }) => {
  const [data, setData] = useState([]);
  const [editIdx, setEditIdx] = useState(-1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    try {
      const result = await fetchData(); // Fetch data from the async function
      setData(result || []);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    setLoading(false);
  };

  const handleEditClick = (index) => {
    setEditIdx(index);
  };

  const handleSaveClick = async () => {
    try {
      setLoading(true);
      const updatedRow = data[editIdx];
      await updateRow(updatedRow); // Call the async update function
      setEditIdx(-1);
      await loadData(); // Reload data after saving
    } catch (error) {
      console.error('Error updating row:', error);
    }
    setLoading(false);
  };

  const handleChange = (e, field, index) => {
    const updatedData = data.map((row, i) =>
      i === index ? { ...row, [field]: e.target.value } : row
    );
    setData(updatedData);
  };

  const handleDeleteClick = async (index) => {
    try {
      setLoading(true);
      const rowId = data[index].id; // Assuming each row has an "id" field
      await deleteRow(rowId); // Call the async delete function
      await loadData(); // Reload data after deletion
    } catch (error) {
      console.error('Error deleting row:', error);
    }
    setLoading(false);
  };

  if (loading) {
    return <div>Loading...</div>; // Show a loading state while data is being fetched
  }

  if (!data || data.length === 0) {
    return <div>No data available</div>; // Handle the case where data is empty or undefined
  }

  return (
    <table className="editable-table">
      <thead>
        <tr>
          {data.length > 0 &&
            Object.keys(data[0]).map((key) => <th key={key}>{key}</th>)}
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            {Object.keys(row).map((field) => (
              <td key={field}>
                {editIdx === index ? (
                  <input
                    type="text"
                    value={row[field]}
                    onChange={(e) => handleChange(e, field, index)}
                  />
                ) : (
                  row[field]
                )}
              </td>
            ))}
            <td>
            <div className="action-buttons">
                {editIdx === index ? (
                  <i className="fas fa-save" onClick={handleSaveClick}></i>
                ) : (
                  <i className="fas fa-edit" onClick={() => handleEditClick(index)}></i>
                )}
                <i className="fas fa-trash" onClick={() => handleDeleteClick(index)}></i>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AsyncEditableTable;