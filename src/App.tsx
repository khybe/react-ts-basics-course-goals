// Import the useState hook from React for managing component state
import { useState } from "react";

// Import custom components
import Header from "./components/Header.tsx";
import NewGoal from "./components/NewGoal.tsx";
import CourseGoalList from "./components/CourseGoalList.tsx";

// Import image for the header
import goalsImg from "./assets/goals.jpg";

// Define the shape of a course goal using TypeScript interface
export interface CourseGoal {
  title: string;
  description: string;
  id: number;
}

// Define the main App component with TypeScript function component syntax
const App: React.FC = () => {
  // State hook using TypeScript to manage an array of custom objects representing course goals
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  // Handler for adding a new goal to the list
  const handleAddGoal = (goal: string, summary: string): void => {
    setGoals((prevGoals) => {
      // Create a new goal object with a unique ID
      const newGoal: CourseGoal = {
        id: Math.random(),
        title: goal,
        description: summary,
      };

      // Return a new array with the new goal added to the existing goals
      return [...prevGoals, newGoal];
    });
  };

  // Handler for deleting a goal from the list
  const handleDeleteGoal = (id: number): void => {
    // Filter out the goal with the specified ID from the list
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  };

  // Render the main content of the App
  return (
    <main>
      {/* Header component with an image and title */}
      <Header image={{ src: goalsImg, alt: "A list of goals" }}>
        <h1>Your Course Goals</h1>
      </Header>

      {/* NewGoal component for adding new goals */}
      <NewGoal onAddGoal={handleAddGoal} />

      {/* CourseGoalList component for displaying the list of goals */}
      <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal} />
    </main>
  );
};

export default App;
