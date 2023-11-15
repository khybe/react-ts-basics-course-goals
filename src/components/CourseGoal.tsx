import { type ReactNode } from "react";

interface CourseGoalProps {
  title: string;
  children: ReactNode;
}

// Alternative way, using 'PropsWithChildren' to define our Props Types
// type CourseGoalProps = PropsWithChildren<{ title: string }>;

export default function CourseGoal({ title, children }: CourseGoalProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button>DELETE</button>
    </article>
  );
}

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
