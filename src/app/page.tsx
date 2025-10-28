import Form from '@/components/Form/form';
import Input from '@/components/Input/input';
import { CircleQuestionMarkIcon, Cog, House } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div className="pt-12 w-[820px] mx-auto h-screen">
        <header>
          <div className=" w-full fixed top-18 right-15 flex gap-15 justify-end">
            <House className="size-15" />
            <Cog className="size-15" />
          </div>
          <h1 className="text-center text-8xl font-itim">Termo.io</h1>
        </header>
        <div className="w-full flex items-center justify-center mt-12 flex-col gap-2">
          <Form></Form>
          <Form></Form>
          <Form></Form>
          <Form></Form>
          <Form></Form>
          <Form></Form>
        </div>
      </div>
      <CircleQuestionMarkIcon className="absolute bottom-12 left-15 size-12" />
    </>
  );
}
