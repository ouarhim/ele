import { redirect } from 'next/navigation';
import Image from "next/image";

export default function RootPage() {
  // Redirect to the default locale (English)
  redirect('/en');
}
