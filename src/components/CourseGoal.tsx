import { type ReactNode } from "react";
// Import additional types if using alternative ways
// import { FC, PropsWithChildren } from "react";

// Define the props for the CourseGoal component
interface CourseGoalProps {
  // Unique identifier for the goal
  id: number;
  // Title of the goal
  title: string;
  // Children prop for rendering any valid React content
  children: ReactNode;
  // Callback function to handle goal deletion with TypeScript type for parameters
  onDelete: (id: number) => void;
}

// CourseGoal component for rendering individual course goals
export default function CourseGoal({
  id,
  title,
  children,
  onDelete,
}: CourseGoalProps) {
  return (
    <article>
      <div>
        {/* Display the title of the goal */}
        <h2>{title}</h2>
        {/* Render any additional content passed as children */}
        {children}
      </div>
      {/* Button for deleting the goal with TypeScript type for the parameter */}
      <button onClick={() => onDelete(id)}>DELETE</button>
    </article>
  );
}

// Alternative way, using 'PropsWithChildren' to define our Props Types
// type CourseGoalProps = PropsWithChildren<{ title: string }>;

// Alternative way of Typing Components using FC Type with an Arrow function
// const CourseGoal: FC<CourseGoalProps> = ({ title, children }) => {
//   return (
//     <article>
//       <div>
//         <h2>{title}</h2>
//         {children}
//       </div>
//       <button>DELETE</button>
//     </article>
//   );
// };

// export default CourseGoal;
