import CourseGoal from "./CourseGoal.tsx";
import { type CourseGoal as CGoal } from "../App.tsx";

// Define the props for the CourseGoalList component
type CourseGoalListProps = {
  // Array of CourseGoal objects from App.tsx with TypeScript type
  goals: CGoal[];
  // Callback function to handle goal deletion with TypeScript type for parameters
  onDeleteGoal: (id: number) => void;
};

// CourseGoalList component for rendering a list of course goals
export default function CourseGoalList({
  goals,
  onDeleteGoal,
}: CourseGoalListProps) {
  return (
    <ul>
      {/* Map through the goals array and render CourseGoal component for each goal */}
      {goals.map((goal) => (
        <li key={goal.id}>
          {/* CourseGoal component with TypeScript types for props */}
          <CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
            {/* Render the description of the goal */}
            <p>{goal.description}</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
  );
}
