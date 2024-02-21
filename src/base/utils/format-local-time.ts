export const formatLocalTime = (date?: Date | string): string => {
  const dateObj = new Date(date || new Date());

  return dateObj.toLocaleTimeString('en-US', {
    second: '2-digit',
    minute: '2-digit',
    hour: '2-digit',
  });
};
