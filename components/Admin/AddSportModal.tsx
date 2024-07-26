import React, { useState, ChangeEvent } from 'react';
import axiosInstance from '../../lib/axiosConfig';

interface FormData {
  name: string;
  description: string;
  date: string;
  duration: number;
  sportCoach: string;
  capacity: number;
  accredited: boolean;
  place: string;
  semesterId: string;
}

interface AddSportModalProps {
  onClose: () => void;
  onAdd: () => void;
}

function AddSportModal({ onClose, onAdd }: AddSportModalProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    description: '',
    date: new Date().toISOString(),
    duration: 60,
    sportCoach: '',
    capacity: 25,
    accredited: false,
    place: '',
    semesterId: 'd964622c-1eea-4353-a901-b1076f37c317', // Add semesterId here
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const target = e.target as HTMLInputElement;
    const name = target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      formData.date += 'Z';
      const response = await axiosInstance.post(
        'http://localhost:5000/api/Sport/CreateSport',
        formData
      );
      if (response.status === 200) {
        alert('Successfully added');
        onAdd();
      } else {
        throw new Error('Failed to add sport');
      }
    } catch (error) {
      alert('Oops, something went wrong');
      console.error('Error adding sport:', error);
    } finally {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
      <div
        className="relative top-20 mx-auto p-5 w-96 shadow-menu rounded-long bg-background dark:bg-dark-background"
        onClick={e => e.stopPropagation()}
      >
        <h2 className="text-elements font-bold text-font dark:text-dark-font mb-4">
          Add New Sport
        </h2>
        <form>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border rounded p-1 w-full mb-2 bg-secondary-background dark:bg-dark-secondary-background text-placeholder dark:text-dark-placeholder"
            placeholder="Enter sport name"
            required
          />
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="border rounded p-1 w-full mb-2 bg-secondary-background dark:bg-dark-secondary-background text-placeholder dark:text-dark-placeholder"
            placeholder="Description"
            required
          />
          <input
            type="datetime-local"
            name="date"
            value={formData.date.split('.')[0]} // ISO string without milliseconds
            onChange={handleChange}
            className="border rounded p-1 w-full mb-2 bg-secondary-background dark:bg-dark-secondary-background text-placeholder dark:text-dark-placeholder"
            required
          />
          <input
            type="number"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            className="border rounded p-1 w-full mb-2 bg-secondary-background dark:bg-dark-secondary-background text-placeholder dark:text-dark-placeholder"
            placeholder="Duration (in minutes)"
            required
          />
          <input
            type="text"
            name="sportCoach"
            value={formData.sportCoach}
            onChange={handleChange}
            className="border rounded p-1 w-full mb-2 bg-secondary-background dark:bg-dark-secondary-background text-placeholder dark:text-dark-placeholder"
            placeholder="Sport Coach ID"
            required
          />
          <input
            type="number"
            name="capacity"
            value={formData.capacity}
            onChange={handleChange}
            className="border rounded p-1 w-full mb-2 bg-secondary-background dark:bg-dark-secondary-background text-placeholder dark:text-dark-placeholder"
            placeholder="Capacity"
            required
          />
          <label className="flex items-center space-x-2 mb-2 bg-secondary-background dark:bg-dark-secondary-background text-placeholder dark:text-dark-placeholder">
            <input
              type="checkbox"
              name="accredited"
              checked={formData.accredited}
              onChange={handleChange}
            />
            <span>Accredited</span>
          </label>
          <input
            type="text"
            name="place"
            value={formData.place}
            onChange={handleChange}
            className="border rounded p-1 w-full mb-2 bg-secondary-background dark:bg-dark-secondary-background text-placeholder dark:text-dark-placeholder"
            placeholder="Place"
            required
          />
          <button
            type="button"
            className="mt-4 px-4 py-2 bg-gray-500 text-button-font dark:text-dark-button-font rounded hover:bg-gray-700 mr-30"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            type="button"
            className="mt-4 px-4 py-2 bg-accent text-button-font dark:text-dark-button-font dark:bg-dark-accent dark:hover:bg-dark-hovered-accent rounded hover:bg-hovered-accent"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddSportModal;
