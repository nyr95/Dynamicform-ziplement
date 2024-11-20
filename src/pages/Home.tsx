import React, { useState } from 'react';
import JSONEditor from '../components/JSONEditor.tsx';
import FormGenerator from '../components/FormGenerator.tsx';

const initialSchema ={
    "formTitle": "Project Requirements Survey",
    "formDescription": "Please fill out this survey about your project needs",
    "fields": [
      {
        "id": "name",
        "type": "text",
        "label": "Full Name",
        "required": true,
        "placeholder": "Enter your full name"
      },
      {
        "id": "email",
        "type": "email",
        "label": "Email Address",
        "required": true,
        "placeholder": "you@example.com",
        "validation": {
          "pattern": "^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$",
          "message": "Please enter a valid email address"
        }
      },
      {
        "id": "companySize",
        "type": "select",
        "label": "Company Size",
        "required": true,
        "options": [
          { "value": "1-50", "label": "1-50 employees" },
          { "value": "51-200", "label": "51-200 employees" },
          { "value": "201-1000", "label": "201-1000 employees" },
          { "value": "1000+", "label": "1000+ employees" }
        ]
      },
      {
        "id": "industry",
        "type": "radio",
        "label": "Industry",
        "required": true,
        "options": [
          { "value": "tech", "label": "Technology" },
          { "value": "healthcare", "label": "Healthcare" },
          { "value": "finance", "label": "Finance" },
          { "value": "retail", "label": "Retail" },
          { "value": "other", "label": "Other" }
        ]
      },
      {
        "id": "comments",
        "type": "textarea",
        "label": "Additional Comments",
        "required": false,
        "placeholder": "Any other details you'd like to share..."
      }
    ]
  }
  

  
  const Home: React.FC = () => {
    const [schema, setSchema] = useState(initialSchema);
  
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        <div>
          <JSONEditor schema={schema} onChange={setSchema} />
        </div>
        <div>
          <FormGenerator schema={schema} />
        </div>
      </div>
    );
  };
  
  export default Home;
