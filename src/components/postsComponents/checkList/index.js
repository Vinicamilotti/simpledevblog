export default function CheckList({ isDone, children }) {
  let emoji;
  if (isDone) {
    emoji = "✅";
  } else {
    emoji = "🔲";
  }
  return (
    <p>
      {emoji} {children}
    </p>
  );
}
