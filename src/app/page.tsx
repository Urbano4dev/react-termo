import Form from '@/components/Form/form';
import Input from '@/components/Input/input';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="pt-12 w-[820px] mx-auto h-screen">
      <h1 className="text-center text-8xl font-itim">Termo.io</h1>

      <div className="w-full flex items-center justify-center mt-12 flex-col gap-2">
        <Form></Form>
        <Form></Form>
        <Form></Form>
        <Form></Form>
        <Form></Form>
        <Form></Form>
        <Form></Form>
      </div>
    </div>
  );
}
