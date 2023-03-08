export default function Listdo({ tasks }) {
  console.log(tasks);
  return (
    <ul className="mt-8">
      {tasks.map((task) => (
        <li key={task.id} className="flex mb-5 gap-2 items-center">
          <p>{task.text}</p>
          <button className="ml-4 px-4 py-2 bg-sky-200 rounded-xl">Edit</button>
          <button className="px-4 py-2 bg-orange-200 rounded-xl">Delete</button>
        </li>
      ))}
    </ul>
  );
}
