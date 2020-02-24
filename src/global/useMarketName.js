import { useMemo } from 'react'

export function useMarketName(market) {
  const [marketName, marketSuffix] = useMemo(() => market.split('/'), [market])
  return [marketName, marketSuffix]
}
