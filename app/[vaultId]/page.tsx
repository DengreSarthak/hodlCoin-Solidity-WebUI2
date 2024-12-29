import InteractionClient from './InteractionClient'

export async function generateStaticParams() {
  return [{ vaultId: 'vaultId' }]
}

// @ts-ignore
export default function VaultPage({
  searchParams,
}: {
  searchParams: { id: string; address: string }
}) {
  return (
    <InteractionClient
      initialChainId={searchParams.id}
      initialAddress={searchParams.address}
    />
  )
}
