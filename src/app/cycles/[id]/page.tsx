import CycleInfo from '@/components/cycle';
import prisma from '@/db';
import { notFound } from 'next/navigation';
import React from 'react';

async function getCycleById(id: number) {
  return await prisma.cycle.findUnique({
    where: { id },
    include: { Expenses: true, Incomes: true },
  });
}

async function Cycle({ params }: { params: { id: string } }) {
  const cycle = await getCycleById(Number.isNaN(Number(params.id))  ? 0 : Number(params.id));
  if (cycle) {
    return <CycleInfo cycle={cycle} />;
  }

  notFound();
}

export default Cycle;
