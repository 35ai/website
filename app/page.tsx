'use client';
import React, { useEffect, useRef } from 'react';
import { Button, Input } from '@nextui-org/react';
import { useChat } from 'ai/react';
import { UserMessage } from './components/user-message';
import { AIMessage } from './components/ai-message';
import { StopIcon } from './icons';

export default function Home() {
  const {
    isLoading,
    error,
    stop,
    messages,
    input,
    handleInputChange,
    handleSubmit,
  } = useChat({
    api: 'api/chat',
  });

  useEffect(() => {
    if (error) {
      // toast.error(error.message);
    }
  }, [error]);

  const chatRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTo({
        top: chatRef.current.offsetHeight,
        behavior: "smooth",
      })
    }
  }, [messages])
 
  return (
    <div className='h-[calc(100vh-64px)] flex flex-col relative'>
      <div ref={chatRef} className=' bg-white dark:bg-black flex-1 p-6 gap-6 flex flex-col overflow-y-auto no-scrollbar'>
        {error ? <div>{error.message}</div> : null}
        {messages.map((message) => (
          <div key={message.id}>
            {message.role === 'user' ? (
              <UserMessage message={message}></UserMessage>
            ) : (
              <AIMessage message={message}></AIMessage>
            )}
          </div>
        ))}
      </div>
      {isLoading ? (
        <div
          className=' absolute bottom-28 left-1/2 bg-default/70 border-1 rounded-full px-5 py-1 flex items-center gap-2.5 -ml-[52px] cursor-pointer hover:bg-default'
          onClick={stop}
        >
          <StopIcon />
          <div>Stop</div>
        </div>
      ) : null}
      <div className=' bg-white dark:bg-black pb-6'>
        <form
          onSubmit={handleSubmit}
          className=' mx-6 relative bg-white dark:bg-black'
        >
          <Input
            onChange={handleInputChange}
            id='input'
            value={input}
            name='prompt'
            isClearable
            radius='lg'
            className='bg-gradient-to-r from-[#ff4593] from-10% via-[#ffe713] via-33%  to-[#17d7ff] to-100% overflow-hidden rounded-2xl p-0.5'
            classNames={{
              label: 'text-black/50 dark:text-white/90',
              input: [
                'bg-transparent',
                'text-black/90 dark:text-white/90',
                'placeholder:text-default-700/50 dark:placeholder:text-white/70',
              ],
              innerWrapper: 'bg-transparent',
              inputWrapper: [
                'shadow-xl',
                'bg-default',
                'dark:bg-black',
                'backdrop-blur-xl',
                'backdrop-saturate-200',
                'hover:bg-default-200/90',
                'dark:hover:bg-default/70',
                'group-data-[focus=true]:bg-default-200/90',
                'dark:group-data-[focus=true]:bg-default/60',
                '!cursor-text',
                'h-[64px]',
                'pr-[120px]'
              ],
            }}
            placeholder='Type to search...'
          />

          <Button
            type='submit'
            className=' absolute top-2 right-2.5 text-white bg-black text-lg h-[50px]'
          >
            Send
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
      </div>
    </div>
  );
}
