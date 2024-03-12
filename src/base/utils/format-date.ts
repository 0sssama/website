const nth = (d: number) => {
  if (d > 3 && d < 21) return 'th';
  switch (d % 10) {
    case 1: {
      return 'st';
    }
    case 2: {
      return 'nd';
    }
    case 3: {
      return 'rd';
    }
    default: {
      return 'th';
    }
  }
};

export const formatDate = (date?: string): string => {
  if (!date) return '';

  const dateObj = new Date(date);

  if (Number.isNaN(dateObj.getTime())) throw new Error('Invalid date');

  return dateObj
    .toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: '2-digit',
    })
    .split(',')
    .join(`${nth(dateObj.getDate())},`);
};
