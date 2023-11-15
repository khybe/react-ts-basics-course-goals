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
