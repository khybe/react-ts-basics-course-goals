import { useRef, type FormEvent } from "react";

// Define the props for the NewGoal component
type NewGoalProps = {
  // Callback function to handle the addition of a new goal
  onAddGoal: (goal: string, summary: string) => void;
};

// NewGoal component for adding new goals
export default function NewGoal({ onAddGoal }: NewGoalProps) {
  // Refs to store references to input elements with TypeScript types
  const goal = useRef<HTMLInputElement>(null);
  const summary = useRef<HTMLInputElement>(null);

  // Handler for form submission with TypeScript type for the event
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Access entered values from input refs with TypeScript assertion
    const enteredGoal = goal.current!.value;
    const enteredSummary = summary.current!.value;

    // Reset the form
    event.currentTarget.reset();

    // Call the onAddGoal function with TypeScript type for the parameters
    onAddGoal(enteredGoal, enteredSummary);
  }

  // Render the form for adding new goals
  return (
    <form onSubmit={handleSubmit}>
      <p>
        {/* Label and input for the goal with TypeScript type for the ref */}
        <label htmlFor="goal">Your goal</label>
        <input id="goal" type="text" ref={goal} />
      </p>
      <p>
        {/* Label and input for the summary with TypeScript type for the ref */}
        <label htmlFor="summary">Short summary</label>
        <input id="summary" type="text" ref={summary} />
      </p>
      <p>
        {/* Button for submitting the form */}
        <button>Add Goal</button>
      </p>
    </form>
  );
}
