'use client';

import { useEffect } from 'react';

interface LocaleAttributesProps {
  locale: string;
  direction: string;
  fontClass: string;
}

export default function LocaleAttributes({ locale, direction, fontClass }: LocaleAttributesProps) {
  useEffect(() => {
    // Set HTML attributes
    document.documentElement.lang = locale;
    document.documentElement.dir = direction;
    document.documentElement.className = `${fontClass} ${direction}`;
  }, [locale, direction, fontClass]);

  return null;
}
