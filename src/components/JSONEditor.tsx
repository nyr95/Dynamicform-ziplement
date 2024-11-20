import React, { useState } from 'react';
import ReactJson from 'react-json-view';

interface JSONEditorProps {
  schema: any;
  onChange: (updatedSchema: any) => void;
}

const JSONEditor: React.FC<JSONEditorProps> = ({ schema, onChange }) => {
  const [error, setError] = useState<string | null>(null);

  const handleEdit = (edit: any) => {
    try {
      onChange(edit.updated_src);
      setError(null);
    } catch (e) {
      setError("Invalid JSON format.");
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">JSON Editor</h2>
      <ReactJson
        src={schema}
        onEdit={handleEdit}
        onAdd={handleEdit}
        onDelete={handleEdit}
        theme="monokai"
        name={false}
      />
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default JSONEditor;
