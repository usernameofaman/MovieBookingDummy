import React from 'react'
import { useRouter } from 'next/router';

export default function book() {
  const router = useRouter();
  const { book } = router.query;
  return (
    <div>{book}</div>
  )
}
