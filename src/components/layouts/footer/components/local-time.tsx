'use client';

import { useEffect, useState } from 'react';

import { formatLocalTime } from '@/base/utils/format-local-time';

export default function LocalTime() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(formatLocalTime(new Date()));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <p className="text-center text-xs text-zinc-500 md:text-right">Local Current Time: {time ?? ''}</p>;
}
