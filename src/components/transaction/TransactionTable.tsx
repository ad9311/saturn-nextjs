import { TransactionTableProps } from '@/types'
import React from 'react'

function TransactionTable(props: TransactionTableProps) {
  return (
    <div>{props.type}</div>
  )
}

export default TransactionTable
