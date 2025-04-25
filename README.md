# React Lab
- Course Code : BCSL657B
- Credits : 1

## Course Outcomes:
* Illustrate React basics and state components.
* Develop React applications that utilize component composition, passing data through props.
* Use dynamic state updates, event handling, and custom logic to increment, decrement, and reset state values.
* Implement forms in React that collect and validate user input.
* Demonstrate interaction with external APIs, dynamic content generation and manage state in real-time applications.

## Lab Experiments

1. Use create-react-app to set up a new project. Edit the App.js file to include a stateful component with useState.
Add an input field and a element that displays text based on the input. Dynamically update the content
as the user types.

2. Develop a React application that demonstrates the use of props to pass data from a parent component to child
components. The application should include the parent component named App that serves as the central container
for the application. Create two separate child components, Header: Displays the application title or heading. Footer:
Displays additional information, such as copyright details or a tagline. Pass data (e.g., title, tagline, or copyright
information) from the App component to the Header and Footer components using props. Ensure that the content
displayed in the Header and Footer components is dynamically updated based on the data received from the parent
component.

3. Create a Counter Application using React that demonstrates state management with the useState hook. Display the
current value of the counter prominently on the screen. Add buttons to increase and decrease the counter value.
Ensure the counter updates dynamically when the buttons are clicked. Use the useState hook to manage the
counter's state within the component. Prevent the counter from going below a specified minimum value (e.g., 0).
Add a "Reset" button to set the counter back to its initial value. Include functionality to specify a custom increment
or decrement step value.

4. Develop a To-Do List Application using React functional components that demonstrates the use of the useState
hook for state management. Create a functional component named ToDoFunction to manage and display the todo list.
Maintain a list of tasks using state. Provide an input field for users to add new tasks. Dynamically render
the list of tasks below the input field. Ensure each task is displayed in a user-friendly manner. Allow users to
delete tasks from the list. Mark tasks as completed or pending, and visually differentiate them.

5. Develop a React application that demonstrates component composition and the use of props to pass data. Create
two components: FigureList: A parent component responsible for rendering multiple child components.
BasicFigure: A child component designed to display an image and its associated caption. Use the FigureList
component to dynamically render multiple BasicFigure components. Pass image URLs and captions as props from
the FigureList component to each BasicFigure component. Style the BasicFigure components to display the image
and caption in an aesthetically pleasing manner. Arrange the BasicFigure components within the FigureList in a
grid or list format. Allow users to add or remove images dynamically. Add hover effects or animations to the
images for an interactive experience.

6. Design and implement a React Form that collects user input for name, email, and password. Form Fields are
Name, Email, Password. Ensure all fields are filled before allowing form submission.Validate the email field to
ensure it follows the correct email format (e.g., example@domain.com). Optionally enforce a minimum password
length or complexity. Display error messages for invalid or missing inputs. Provide visual cues (e.g., red borders)
to highlight invalid fields. Prevent form submission until all fields pass validation. Log or display the entered data
upon successful submission (optional). Add a "Show Password" toggle for the password field. Implement clientside
sanitization to ensure clean input.

7. Develop a React Application featuring a ProfileCard component to display a user's profile information, including
their name, profile picture, and bio. The component should demonstrate flexibility by utilizing both external CSS
and inline styling for its design. Display the following information: Profile picture, User's name, A short bio or
description Use an external CSS file for overall structure and primary styles, such as layout, colors, and typography.
Apply inline styles for dynamic or specific styling elements, such as background colors or alignment. Design the
ProfileCard to be visually appealing and responsive. Ensure the profile picture is displayed as a circle, and the
name and bio are appropriately styled. Add hover effects or animations to enhance interactivity. Allow the
background color of the card to change dynamically based on a prop or state

8. Develop a Reminder Application that allows users to efficiently manage their tasks. The application should include
the following functionalities: Provide a form where users can add tasks along with due dates. The form includes
task name,Due date,An optional description. Display a list of tasks dynamically as they are added. Show relevant
details like task name, due date, and completion status. Include a filter option to allow users to view all Tasks and
Display all tasks regardless of status. Show only tasks marked as completed. Show only tasks that are not yet
completed.

9. Design a React application that demonstrates the implementation of routing using the react-router-dom
library. The application should include the Navigation Menu: Create a navigation bar with links to three
distinct pages, Home, About, Contact. Develop separate components for each page (Home, About, and
Contact) with appropriate content to differentiate them. Configure routes using react-router-dom to render
the corresponding page component based on the selected link. Use BrowserRouter and Route components
for routing. Highlight the active link in the navigation menu to indicate the current page

10. Design a React application featuring a class-based component that demonstrates the use of lifecycle
methods to interact with an external API. The component should fetch and update data dynamically based
on user interactions or state changes. Use the componentDidMount lifecycle method to fetch data from an
API when the component is initially rendered. Display the fetched data in a structured format, such as a table
or list. Use the componentDidUpdate lifecycle method to detect changes in the component's state or props.
Trigger additional API calls to update the displayed data based on user input or actions (e.g., filtering,
searching, or pagination). Implement error handling to manage issues such as failed API requests or empty
data responses. Display appropriate error messages to the user when necessary. Allow users to perform
actions like filtering, searching, or refreshing the data. Reflect changes in the displayed data based on these
interactions.
