import React from 'react'

type Props = {}

const ConnectWallet = (props: Props) => {

  return (
    <>
      {/* @ts-expect-error msg */}
      <appkit-button />
    </>
  )
}

export default ConnectWallet