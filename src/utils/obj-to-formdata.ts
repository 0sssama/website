export const objToFormData = (obj: Record<string, unknown>): FormData => {
  const formData = new FormData();

  Object.entries(obj).forEach(([key, value]) => {
    if (Array.isArray(value)) value.forEach((val) => formData.append(key, val));
    else if (value?.constructor.name === 'Object') formData.append(key, JSON.stringify(value));
    else formData.append(key, String(value));
  });

  return formData;
};
