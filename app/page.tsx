'use client';
import React, { useEffect } from 'react';
import { Button, Input, Spinner } from '@nextui-org/react';
import { useChat } from 'ai/react';

export default function Home() {
  const { isLoading, error, messages, input, handleInputChange, handleSubmit } =
    useChat({
      api: 'api/chat',
    });

  useEffect(() => {
    if (error) {
      // toast.error(error.message);
    }
  }, [error]);

  return (
    <>
      {messages.length === 0 && (
        <div className=' mt-24 mb-24 flex flex-col justify-center items-center gap-4 bg-white text-black dark:text-white dark:bg-black'>
          <div className=' text-center text-5xl'>Get your</div>
          <div className=' relative'>
            <div className='  text-center text-5xl md:ml-1 animate-text-gradient font-medium bg-clip-text text-transparent bg-[linear-gradient(45deg,#3b0ef2_0%,#8800d1_100%)] dark:bg-[45deg,#3b0ef2_0%,#8800d1_100%)]'>
              AI Workflow Tools
            </div>
          </div>
          <div className=' text-center text-5xl'>In Seconds</div>
          <div className=' text-center text-2xl'>
            Streamline Your Workflow with Our List of AI tools.
          </div>
          <div className=' text-center text-2xl'>
            Find Your Perfect Solution.
          </div>
        </div>
      )}
      <div className=' bg-white dark:bg-black'>
        {isLoading ? <Spinner /> : null}
        {error ? <div>{error.message}</div> : null}
        {messages.map((message) => (
          <div key={message.id}>
            {message.role === 'user' ? 'User: ' : 'AI: '}
            {message.content}
          </div>
        ))}
      </div>
      {/* <div className=' bg-white dark:bg-black pb-2.5'>
        <form
          onSubmit={handleSubmit}
          className=' w-[600px] mx-auto relative bg-white dark:bg-black'
        >
          <Input
            onChange={handleInputChange}
            id='input'
            value={input}
            name='prompt'
            isClearable
            radius='lg'
            classNames={{
              label: 'text-black/50 dark:text-white/90',
              input: [
                'bg-transparent',
                'text-black/90 dark:text-white/90',
                'placeholder:text-default-700/50 dark:placeholder:text-white/60',
                'pr-[144px]',
              ],
              innerWrapper: 'bg-transparent',
              inputWrapper: [
                'shadow-xl',
                'bg-default-200/50',
                'dark:bg-default/60',
                'backdrop-blur-xl',
                'backdrop-saturate-200',
                'hover:bg-default-200/70',
                'dark:hover:bg-default/70',
                'group-data-[focus=true]:bg-default-200/50',
                'dark:group-data-[focus=true]:bg-default/60',
                '!cursor-text',
                'h-[70px]',
              ],
            }}
            placeholder='Type to search...'
          />

          <Button
            type='submit'
            className=' absolute top-2.5 right-2.5 bg-[#7b0fff] text-lg h-[50px]'
          >
            Generate
            <svg
              width='22'
              height='22'
              viewBox='0 0 20 20'
              fill='red'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M14.1274 1.01957V1.01957C14.4612 3.69008 16.5647 5.79356 19.2352 6.12736V6.12736V6.12736C16.5647 6.46118 14.4612 8.56466 14.1274 11.2352V11.2352V11.2352C13.7936 8.56471 11.6901 6.46117 9.01968 6.12733V6.12733V6.12733C11.6901 5.79355 13.7936 3.69001 14.1274 1.01957V1.01957Z'
                fill='white'
              ></path>
              <path
                d='M4.5689 6.01362V6.01362C4.80125 7.87244 6.2654 9.33656 8.12422 9.5689V9.5689V9.5689C6.2654 9.80126 4.80125 11.2654 4.56889 13.1242V13.1242V13.1242C4.33655 11.2654 2.87245 9.80126 1.01368 9.56889H1.01368V9.56889C2.87245 9.33656 4.33655 7.87239 4.5689 6.01362V6.01362Z'
                fill='white'
              ></path>
              <path
                d='M9.67949 13.0102V13.0102C9.85394 14.4058 10.9532 15.5051 12.3488 15.6795V15.6795V15.6795C10.9532 15.854 9.85394 16.9533 9.67949 18.3489V18.3489V18.3489C9.50504 16.9533 8.4058 15.854 7.01023 15.6795V15.6795V15.6795C8.4058 15.5051 9.50505 14.4058 9.67949 13.0102V13.0102Z'
                fill='white'
              ></path>
            </svg>
          </Button>
        </form>
      </div> */}
    </>
  );
}
