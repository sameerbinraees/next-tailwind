import { Disclosure, Transition } from '@headlessui/react';

export default function FAQ(params) {
  const data = [
    {
      question: 'Is team pricing available?',
      answer: 'Yes! You can purchase a license that you can share with your entire team.',
    },
    {
      question: 'Some other question?',
      answer: 'Yes! You can purchase a license that you can share with your entire team.',
    },
    {
      question: 'Is team pricing available?',
      answer: 'Yes! You can purchase a license that you can share with your entire team.',
    },
    {
      question: 'Is team pricing available?',
      answer: 'Yes! You can purchase a license that you can share with your entire team.',
    },
    {
      question: 'Is team pricing available?',
      answer: 'Yes! You can purchase a license that you can share with your entire team.',
    },
    {
      question: 'Is team pricing available?',
      answer: 'Yes! You can purchase a license that you can share with your entire team.',
    },
  ];
  return (
    <div className='bg-slate-200 h-screen text-black'>
      <div className='flex flex-col justify-center items-center	mt-10 mb-10'>
        {data.map((el, i) => {
          return (
            <Disclosure key={i}>
              {({ open }) => (
                <>
                  <Disclosure.Button className='bg-white w-[50%] p-3 rounded hover:bg-slate-100'>
                    <p>
                      Is team pricing available?
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                        className={
                          open
                            ? 'float-right w-6 h-6 rotate-180 transform duration-200'
                            : 'float-right w-6 h-6 transform duration-200'
                        }
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M19.5 8.25l-7.5 7.5-7.5-7.5'
                        />
                      </svg>
                    </p>
                  </Disclosure.Button>
                  {/* <Transition
                className='w-[50%] flex flex-col justify-center items-center p-3 rounded'
                enter='transition duration-300 linear'
                enterFrom='transform -translate-y-5 opacity-0'
                enterTo='transform scale-100 opacity-100'
                leave='transition duration-200 linear'
                leaveFrom='transform translate-y-5 opacity-0'
                leaveTo='transform duration-200 -translate-y-5 opacity-0'
              > */}
                  <Disclosure.Panel className='w-[50%] flex flex-col justify-center items-center p-3 rounded'>
                    Yes! You can purchase a license that you can share with your entire team.
                  </Disclosure.Panel>
                  {/* </Transition> */}
                </>
              )}
            </Disclosure>
          );
        })}
      </div>
      <div className='w-full px-4 pt-16'></div>
    </div>
  );
}
