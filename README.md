# Dynamic Form Generator

A real-time dynamic form generator built using React, TypeScript, and Tailwind CSS. This application takes a JSON schema as input and generates a form dynamically based on the provided schema. It includes features like form validation, error handling, and real-time updates.

## Features

- **Real-Time Form Generation**: As you edit the JSON schema on the left, the form is updated in real-time on the right.
- **JSON Schema Validation**: Displays error messages if the provided JSON is invalid.
- **Form Validation**: The form dynamically validates user inputs based on the schema's rules.
- **Mobile-Responsive**: The layout adjusts for smaller screens with a split-screen view on larger screens and stacked views on smaller ones.
- **Tailwind CSS Styling**: Fully styled using Tailwind CSS for a clean and responsive UI.

## Tech Stack

- **React 18+**: For building the interactive UI.
- **TypeScript**: For type safety and development reliability.
- **Tailwind CSS**: For responsive and customizable styling.
- **React Hook Form**: For form management and validation.
- **JSON Editor**: For editing JSON schemas.
- **Playwright**: For end-to-end testing.
- **Jest**: For unit and integration testing.

## Setup Instructions

### 1. Clone the repository

bash
git clone https://github.com/your-username/dynamic-form-generator.git
cd dynamic-form-generator
2. Install Dependencies
Run the following command to install all the required dependencies:

bash
Copy code
npm install
3. Run the Development Server
To start the development server and view the application, run:

bash
Copy code
npm start
Open your browser and visit http://localhost:3000 to see the application in action.

Example JSON Schema
You can use the following JSON schema as an example to see how the dynamic form is generated:

json
Copy code
{
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
      "id": "timeline",
      "type": "select",
      "label": "Project Timeline",
      "required": true,
      "options": [
        { "value": "immediate", "label": "Immediate (within 1 month)" },
        { "value": "short", "label": "Short-term (1-3 months)" },
        { "value": "medium", "label": "Medium-term (3-6 months)" },
        { "value": "long", "label": "Long-term (6+ months)" }
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
You can copy and paste this JSON schema into the JSON editor on the left side, and the form will dynamically generate based on this schema.

Testing
1. Run Unit Tests (Jest)
To run the unit tests, use the following command:

bash
Copy code
npm test
This will run the tests in watch mode, so it will rerun tests as you make changes.

2. Run End-to-End Tests (Playwright)
For end-to-end testing, you can run:

bash
Copy code
npx playwright test
This will run the Playwright tests to ensure that the application behaves as expected in a real-world scenario.

Deployment
the project is deployed on vercel:https://dynamicform-ziplement.vercel.app/

Contributing
Contributions are welcome! If you find any bugs or would like to suggest improvements, please feel free to open an issue or submit a pull request.

License
This project is open-source and available under the MIT License.

Acknowledgments
React: JavaScript library for building user interfaces.
TypeScript: A strongly typed programming language built on JavaScript.
Tailwind CSS: A utility-first CSS framework.
React Hook Form: A library for handling forms in React with less re-rendering.
Playwright & Jest: For testing and ensuring app stability.
vbnet
Copy code

### Key Sections Explained:
- **Tech Stack**: Lists all technologies and libraries used in the project.
- **Setup Instructions**: Guides users on how to set up the project locally.
- **Example JSON Schema**: Provides an example schema that can be used to test the dynamic form generation.
- **Testing**: Explains how to run unit tests and end-to-end tests.
- **Deployment**: Instructions on how to deploy the app to platforms like Vercel or Netlify.
- **Contributing**: Encourages others to contribute to the project.

This file can be used directly as your `README.md` for the GitHub repository.







