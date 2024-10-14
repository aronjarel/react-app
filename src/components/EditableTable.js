import React, { useState, useContext } from 'react';
import { GlobalStateContext } from './GlobalStateProvider';
import './EditableTable.css';

const EditableTable = ({ data, onEdit, onDelete }) => {
  const [editIdx, setEditIdx] = useState(-1);
  const [editedRow, setEditedRow] = useState({});

  const handleEditClick = (index) => {
    setEditIdx(index);
    setEditedRow({ ...data[index] }); // Initialize editedRow with the current row data
  };

  const handleSaveClick = async () => {
    try {
      await onEdit(editedRow); // Call the onEdit function with the updated row
      setEditIdx(-1);
    } catch (error) {
      console.error('Error saving row:', error);
    }
  };

  const handleChange = (e, field) => {
    setEditedRow({ ...editedRow, [field]: e.target.value });
  };

  const handleDeleteClick = async (id) => {
    try {
      await onDelete(id); // Call the onDelete function with the row ID
    } catch (error) {
      console.error('Error deleting row:', error);
    }
  };

  if (data.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <table className="editable-table">
      <thead>
        <tr>
          {Object.keys(data[0]).map((key) => (
            <th key={key}>{key}</th>
          ))}
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={row.Id || index}>
            {Object.keys(row).map((field) => (
              <td key={`${row.Id}-${field}`}>
                {editIdx === index ? (
                  <input
                    type="text"
                    value={editedRow[field] || ''}
                    onChange={(e) => handleChange(e, field)}
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
                <i className="fas fa-trash" onClick={() => handleDeleteClick(row.Id)}></i>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EditableTable;
