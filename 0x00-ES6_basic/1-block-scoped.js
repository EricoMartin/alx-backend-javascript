export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  /* eslint-disable no-unused-vars */
  if (trueOrFalse) {
    const task = false;
    const task2 = true;
  }

  /* eslint-enable no-unused-vars */
  return [task, task2];
}
