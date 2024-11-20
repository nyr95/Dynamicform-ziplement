import React from 'react';

interface FieldRendererProps {
  field: any;
  register: any;
  errors: any;
}

const FieldRenderer: React.FC<FieldRendererProps> = ({ field, register, errors }) => {
  const error = errors[field.id]?.message;

  return (
    <div>
      <label className="block text-sm font-medium mb-1">{field.label}</label>
      {field.type === 'text' || field.type === 'email' ? (
        <input
          type={field.type}
          placeholder={field.placeholder}
          {...register(field.id, {
            required: field.required ? `${field.label} is required` : false,
            pattern: field.validation?.pattern && {
              value: new RegExp(field.validation.pattern),
              message: field.validation.message
            }
          })}
          className="block w-full border px-3 py-2 rounded"
        />
      ) : null}
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default FieldRenderer;
