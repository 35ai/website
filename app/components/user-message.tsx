import { Message } from 'ai';
import { UserIcon } from '../icons';

export function UserMessage({ message }: { message: Message }) {
  return (
    <div className=' flex gap-2.5 items-start'>
      <div className=' rounded-full border-1 w-8 flex items-center justify-center h-8'>
        <UserIcon />
      </div>
      <div className='flex-1 pt-1 underline decoration-red-600 underline-offset-8 decoration-wavy decoration-1'>
        {message.content}
      </div>
    </div>
  );
}
