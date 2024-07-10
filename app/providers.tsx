'use client'

import { NextUIProvider } from '@nextui-org/react';
import { useRouter } from 'next/navigation'

export function Providers({ children }: { children: React.ReactNode }) {
    const router = useRouter();

    return (
        <NextUIProvider navigate={router.push}>
            {children}
            <div className=" text-center p-4">
                <a href="https://beian.miit.gov.cn/" target="_blank">京ICP备2022010315号-3</a>
            </div>
        </NextUIProvider>
    )
}