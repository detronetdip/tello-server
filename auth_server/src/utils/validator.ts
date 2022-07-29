export function validateUserName(input: string): boolean {
  const regex = /[^a-zA-Z-]/i;
  return !regex.test(input);
}
export function validateEmail(input) {
  const r = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/;
  return r.test(input);
}
