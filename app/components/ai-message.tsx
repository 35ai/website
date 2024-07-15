import { Message } from 'ai';
import { AIIcon } from '../icons';

export function AIMessage({ message }: { message: Message }) {
  return (
    <div className=' flex gap-2.5 items-start'>
      <div className=' rounded-full border-1 w-8 flex items-center justify-center h-8'>
        <AIIcon />
      </div>
      <div className='flex-1 pt-1'>{message.content}</div>
    </div>
  );
}
