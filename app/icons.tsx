import React, { SVGProps } from 'react';
export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export const ChevronDown = ({
  fill,
  size,
  height,
  width,
  ...props
}: IconSvgProps) => {
  return (
    <svg
      fill='none'
      height={size || height || 24}
      viewBox='0 0 24 24'
      width={size || width || 24}
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='m19.92 8.95-6.52 6.52c-.77.77-2.03.77-2.8 0L4.08 8.95'
        stroke={fill}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit={10}
        strokeWidth={1.5}
      />
    </svg>
  );
};

export const Lock = ({ fill, size, height, width, ...props }: IconSvgProps) => {
  const color = fill;

  return (
    <svg
      height={size || height || 24}
      viewBox='0 0 24 24'
      width={size || width || 24}
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g transform='translate(3.5 2)'>
        <path
          d='M9.121,6.653V4.5A4.561,4.561,0,0,0,0,4.484V6.653'
          fill='none'
          stroke={color}
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeMiterlimit='10'
          strokeWidth={1.5}
          transform='translate(3.85 0.75)'
        />
        <path
          d='M.5,0V2.221'
          fill='none'
          stroke={color}
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeMiterlimit='10'
          strokeWidth={1.5}
          transform='translate(7.91 12.156)'
        />
        <path
          d='M7.66,0C1.915,0,0,1.568,0,6.271s1.915,6.272,7.66,6.272,7.661-1.568,7.661-6.272S13.4,0,7.66,0Z'
          fill='none'
          stroke={color}
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeMiterlimit='10'
          strokeWidth={1.5}
          transform='translate(0.75 6.824)'
        />
      </g>
    </svg>
  );
};

export const Activity = ({
  fill,
  size,
  height,
  width,
  ...props
}: IconSvgProps) => {
  return (
    <svg
      height={size || height || 24}
      viewBox='0 0 24 24'
      width={size || width || 24}
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g
        fill='none'
        stroke={fill}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit={10}
        strokeWidth={1.5}
      >
        <path d='M6.918 14.854l2.993-3.889 3.414 2.68 2.929-3.78' />
        <path d='M19.668 2.35a1.922 1.922 0 11-1.922 1.922 1.921 1.921 0 011.922-1.922z' />
        <path d='M20.756 9.269a20.809 20.809 0 01.194 3.034c0 6.938-2.312 9.25-9.25 9.25s-9.25-2.312-9.25-9.25 2.313-9.25 9.25-9.25a20.931 20.931 0 012.983.187' />
      </g>
    </svg>
  );
};

export const Flash = ({
  fill = 'currentColor',
  size,
  height,
  width,
  ...props
}: IconSvgProps) => {
  return (
    <svg
      fill='none'
      height={size || height}
      viewBox='0 0 24 24'
      width={size || width}
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M6.09 13.28h3.09v7.2c0 1.68.91 2.02 2.02.76l7.57-8.6c.93-1.05.54-1.92-.87-1.92h-3.09v-7.2c0-1.68-.91-2.02-2.02-.76l-7.57 8.6c-.92 1.06-.53 1.92.87 1.92Z'
        stroke={fill}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit={10}
        strokeWidth={1.5}
      />
    </svg>
  );
};

export const Server = ({
  fill = 'currentColor',
  size,
  height,
  width,
  ...props
}: IconSvgProps) => {
  return (
    <svg
      fill='none'
      height={size || height}
      viewBox='0 0 24 24'
      width={size || width}
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M19.32 10H4.69c-1.48 0-2.68-1.21-2.68-2.68V4.69c0-1.48 1.21-2.68 2.68-2.68h14.63C20.8 2.01 22 3.22 22 4.69v2.63C22 8.79 20.79 10 19.32 10ZM19.32 22H4.69c-1.48 0-2.68-1.21-2.68-2.68v-2.63c0-1.48 1.21-2.68 2.68-2.68h14.63c1.48 0 2.68 1.21 2.68 2.68v2.63c0 1.47-1.21 2.68-2.68 2.68ZM6 5v2M10 5v2M6 17v2M10 17v2M14 6h4M14 18h4'
        stroke={fill}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
      />
    </svg>
  );
};

export const TagUser = ({
  fill = 'currentColor',
  size,
  height,
  width,
  ...props
}: IconSvgProps) => {
  return (
    <svg
      fill='none'
      height={size || height}
      viewBox='0 0 24 24'
      width={size || width}
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M18 18.86h-.76c-.8 0-1.56.31-2.12.87l-1.71 1.69c-.78.77-2.05.77-2.83 0l-1.71-1.69c-.56-.56-1.33-.87-2.12-.87H6c-1.66 0-3-1.33-3-2.97V4.98c0-1.64 1.34-2.97 3-2.97h12c1.66 0 3 1.33 3 2.97v10.91c0 1.63-1.34 2.97-3 2.97Z'
        stroke={fill}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit={10}
        strokeWidth={1.5}
      />
      <path
        d='M12 10a2.33 2.33 0 1 0 0-4.66A2.33 2.33 0 0 0 12 10ZM16 15.66c0-1.8-1.79-3.26-4-3.26s-4 1.46-4 3.26'
        stroke={fill}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
      />
    </svg>
  );
};

export const Scale = ({
  fill = 'currentColor',
  size,
  height,
  width,
  ...props
}: IconSvgProps) => {
  return (
    <svg
      fill='none'
      height={size || height}
      viewBox='0 0 24 24'
      width={size || width}
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7ZM18 6 6 18'
        stroke={fill}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
      />
      <path
        d='M18 10V6h-4M6 14v4h4'
        stroke={fill}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
      />
    </svg>
  );
};

export const SearchIcon = ({
  size = 24,
  strokeWidth = 1.5,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden='true'
    fill='none'
    focusable='false'
    height={height || size}
    role='presentation'
    viewBox='0 0 24 24'
    width={width || size}
    {...props}
  >
    <path
      d='M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
    />
    <path
      d='M22 22L20 20'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
    />
  </svg>
);

export const GitHubIcon = ({
  size = 24,
  strokeWidth = 1.5,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    height={height || size}
    viewBox='0 0 24 24'
    width={width || size}
    {...props}
  >
    <path
      clipRule='evenodd'
      d='M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z'
      fill='currentColor'
      fillRule='evenodd'
    ></path>
  </svg>
);

export const SunFilledIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden='true'
    focusable='false'
    height={size || height}
    role='presentation'
    viewBox='0 0 24 24'
    width={size || width}
    {...props}
  >
    <g fill='currentColor'>
      <path d='M19 12a7 7 0 11-7-7 7 7 0 017 7z' />
      <path d='M12 22.96a.969.969 0 01-1-.96v-.08a1 1 0 012 0 1.038 1.038 0 01-1 1.04zm7.14-2.82a1.024 1.024 0 01-.71-.29l-.13-.13a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.984.984 0 01-.7.29zm-14.28 0a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a1 1 0 01-.7.29zM22 13h-.08a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zM2.08 13H2a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zm16.93-7.01a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a.984.984 0 01-.7.29zm-14.02 0a1.024 1.024 0 01-.71-.29l-.13-.14a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.97.97 0 01-.7.3zM12 3.04a.969.969 0 01-1-.96V2a1 1 0 012 0 1.038 1.038 0 01-1 1.04z' />
    </g>
  </svg>
);

export const MoonIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden='true'
    focusable='false'
    height={size || height}
    role='presentation'
    viewBox='0 0 24 24'
    width={size || width}
    {...props}
  >
    <path
      d='M20.742,13.045c-0.677,0.18-1.376,0.271-2.077,0.271c-2.135,0-4.14-0.83-5.646-2.336c-2.008-2.008-2.799-4.967-2.064-7.723 c0.092-0.345-0.007-0.713-0.259-0.965C10.444,2.04,10.077,1.938,9.73,2.034C8.028,2.489,6.476,3.382,5.241,4.616 c-3.898,3.898-3.898,10.243,0,14.143c1.889,1.889,4.401,2.93,7.072,2.93c2.671,0,5.182-1.04,7.07-2.929 c1.236-1.237,2.13-2.791,2.583-4.491c0.092-0.345-0.008-0.713-0.26-0.965C21.454,13.051,21.085,12.951,20.742,13.045z M17.97,17.346c-1.511,1.511-3.52,2.343-5.656,2.343c-2.137,0-4.146-0.833-5.658-2.344c-3.118-3.119-3.118-8.195,0-11.314 c0.602-0.602,1.298-1.102,2.06-1.483c-0.222,2.885,0.814,5.772,2.89,7.848c2.068,2.069,4.927,3.12,7.848,2.891 C19.072,16.046,18.571,16.743,17.97,17.346z'
      fill='currentColor'
    />
  </svg>
);

export const MoonFilledIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden='true'
    focusable='false'
    height={size || height}
    role='presentation'
    viewBox='0 0 24 24'
    width={size || width}
    {...props}
  >
    <path
      d='M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z'
      fill='currentColor'
    />
  </svg>
);

export const SettingIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    width={size || width}
    height={size || height}
    viewBox='0 0 24 24'
    fill='none'
    {...props}
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M12.2499 15C10.5959 15 9.24989 13.654 9.24989 12C9.24989 10.346 10.5959 9 12.2499 9C13.9039 9 15.2499 10.346 15.2499 12C15.2499 13.654 13.9039 15 12.2499 15ZM19.7639 12.914C19.4369 12.723 19.2409 12.382 19.2409 12C19.2409 11.618 19.4369 11.277 19.7649 11.087C21.1829 10.262 21.6699 8.43 20.8519 7.001C20.4529 6.307 19.8099 5.811 19.0399 5.604C18.2739 5.401 17.4739 5.507 16.7879 5.906C16.4639 6.096 16.0769 6.096 15.7509 5.907C15.4209 5.718 15.2239 5.375 15.2239 4.992C15.2239 3.343 13.8899 2 12.2499 2C10.6089 2 9.27489 3.343 9.27489 4.992C9.27489 5.376 9.07789 5.718 8.74789 5.908C8.42389 6.094 8.03689 6.096 7.71289 5.906C7.02489 5.507 6.22589 5.399 5.45789 5.605C4.68789 5.812 4.04589 6.308 3.64789 7.002C2.82989 8.431 3.31789 10.263 4.73589 11.086C5.06289 11.276 5.25789 11.618 5.25789 12C5.25789 12.382 5.06289 12.724 4.73589 12.913C3.31789 13.738 2.82989 15.571 3.64789 16.999C4.04589 17.692 4.68789 18.188 5.45689 18.395C6.22389 18.6 7.02489 18.494 7.71289 18.095C8.03589 17.905 8.42289 17.905 8.74789 18.092C9.07789 18.282 9.27489 18.624 9.27489 19.008C9.27489 20.657 10.6089 22 12.2499 22C13.8899 22 15.2239 20.657 15.2239 19.008C15.2239 18.625 15.4209 18.282 15.7509 18.093C16.0759 17.905 16.4629 17.905 16.7879 18.095C17.4749 18.494 18.2749 18.598 19.0399 18.396C19.8099 18.189 20.4529 17.693 20.8519 16.999C21.6699 15.571 21.1829 13.739 19.7639 12.914Z'
      fill='currentColor'
    ></path>
  </svg>
);

export const UserIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    fill='none'
    height={size || height}
    viewBox='0 0 24 24'
    width={size || width}
    {...props}
  >
    <g fill='currentColor'>
      <path d='m11.9968 15.1747c-4.31304 0-7.99704.68-7.99704 3.4 0 2.721 3.661 3.425 7.99704 3.425 4.313 0 7.997-.679 7.997-3.4s-3.66-3.425-7.997-3.425z' />
      <path d='m11.9967 12.5838c2.938 0 5.292-2.355 5.292-5.29198 0-2.937-2.354-5.292-5.292-5.292-2.93699 0-5.29199 2.355-5.29199 5.292 0 2.93698 2.355 5.29198 5.29199 5.29198z' />
    </g>
  </svg>
);

export const AIIcon = ({
  size = 20,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    fill='none'
    height={size || height}
    viewBox='0 0 1024 1024'
    width={size || width}
    {...props}
  >
    <path fill="currentColor" d="M576 85.333333c0 18.944-8.234667 35.968-21.333333 47.701334V213.333333h213.333333a128 128 0 0 1 128 128v426.666667a128 128 0 0 1-128 128H256a128 128 0 0 1-128-128V341.333333a128 128 0 0 1 128-128h213.333333V133.034667A64 64 0 1 1 576 85.333333zM0 426.666667h85.333333v256H0v-256z m1024 0h-85.333333v256h85.333333v-256zM384 618.666667a64 64 0 1 0 0-128 64 64 0 0 0 0 128z m320-64a64 64 0 1 0-128 0 64 64 0 0 0 128 0z" p-id="6972"></path>
  </svg>
);
