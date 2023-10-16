/**
 * Validates an ID string.
 * @param id The ID string to validate.
 * @returns True if the ID is valid, false otherwise.
 */
export function validateId(id: string): boolean {
  if (!id) {
    return true;
  }

  if (id.length > 25) {
    return false;
  }

  return true;
}
