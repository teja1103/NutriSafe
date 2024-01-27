// import { ReactNode } from 'react';

// export default function PageWrapper({ children }: { children: ReactNode }) {
//   return (
//     <div className="flex flex-col pt-2 px-4 space-y-2 bg-afcca9 flex-grow pb-4">
//       {children}
//     </div>
//   );
// }



import { ReactNode } from 'react';

export default function PageWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col pt-2 px-4 space-y-2 bg-e-brown flex-grow pb-4">
      {children}
    </div>
  );
}
