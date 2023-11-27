export default function taskBlock(trueOrFalse) {
  let task = false;
  const task2 = true;

  if (trueOrFalse) {
    task = true;
    // Note: We are not redeclaring task2 with `var` inside the block
    // This ensures that task2 is not overwritten inside the block
  }

  return [task, task2];
}
