import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

interface FormField {
  id: string;
  type: string;
  label: string;
  required?: boolean;
  placeholder?: string;
  options?: { value: string; label: string }[];
  validation?: { pattern: string; message: string };
}

interface FormSchema {
  formTitle: string;
  formDescription: string;
  fields: FormField[];
}

interface FormGeneratorProps {
  schema: FormSchema;
}

const FormGenerator: React.FC<FormGeneratorProps> = ({ schema }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit: SubmitHandler<any> = (data) => {
    console.log("Form Submission Data:", data);
    alert("Form submitted successfully!");
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">{schema.formTitle}</h1>
      <p className="text-gray-600 mb-4">{schema.formDescription}</p>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {schema.fields.map((field) => {
          // Render different field types
          switch (field.type) {
            case "text":
            case "email":
              return (
                <div key={field.id}>
                  <label htmlFor={field.id} className="block font-medium mb-1">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    id={field.id}
                    placeholder={field.placeholder}
                    {...register(field.id, { required: field.required })}
                    className="w-full border p-2 rounded"
                  />
                  {errors[field.id] && (
                    <p className="text-red-500 text-sm">
                      {field.validation?.message || `${field.label} is required`}
                    </p>
                  )}
                </div>
              );

            case "textarea":
              return (
                <div key={field.id}>
                  <label htmlFor={field.id} className="block font-medium mb-1">
                    {field.label}
                  </label>
                  <textarea
                    id={field.id}
                    placeholder={field.placeholder}
                    {...register(field.id, { required: field.required })}
                    className="w-full border p-2 rounded"
                  ></textarea>
                  {errors[field.id] && (
                    <p className="text-red-500 text-sm">
                      {`${field.label} is required`}
                    </p>
                  )}
                </div>
              );

            case "select":
              return (
                <div key={field.id}>
                  <label htmlFor={field.id} className="block font-medium mb-1">
                    {field.label}
                  </label>
                  <select
                    id={field.id}
                    {...register(field.id, { required: field.required })}
                    className="w-full border p-2 rounded"
                  >
                    <option value="">Select an option</option>
                    {field.options?.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  {errors[field.id] && (
                    <p className="text-red-500 text-sm">
                      {`${field.label} is required`}
                    </p>
                  )}
                </div>
              );

            case "radio":
              return (
                <div key={field.id}>
                  <p className="block font-medium mb-1">{field.label}</p>
                  {field.options?.map((option) => (
                    <label key={option.value} className="block">
                      <input
                        type="radio"
                        value={option.value}
                        {...register(field.id, { required: field.required })}
                        className="mr-2"
                      />
                      {option.label}
                    </label>
                  ))}
                  {errors[field.id] && (
                    <p className="text-red-500 text-sm">
                      {`${field.label} is required`}
                    </p>
                  )}
                </div>
              );

            default:
              return null; // Handle unsupported types
          }
        })}

        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormGenerator;
