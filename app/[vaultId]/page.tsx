import { notFound } from 'next/navigation'
import InteractionClient from './InteractionClient'

export async function generateStaticParams() {
  return [{ vaultId: 'v' }]
}

export default function VaultPage() {

  return (
    <InteractionClient/>
  )
}
