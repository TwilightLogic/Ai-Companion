import { Companion } from '@prisma/client';
import Image from 'next/image';

// 每个元素都是 Companion 类型的对象，并且必须包含 _count 属性，该属性的值是一个具有 message 属性的数字对象。
interface CompanionProps {
  data: (Companion & { _count: { message: number } })[];
}

export const Companions = ({ data }: CompanionProps) => {
  if (data.length === 0) {
    return (
      <div className='pt-10 flex flex-col items-center justify-center space-y-3'>
        <div className='relative w-60 h-60'>
          <Image fill className='grayscale' alt='empty' src='/empty.png' />
        </div>
      </div>
    );
  }

  return <div>123</div>;
};
