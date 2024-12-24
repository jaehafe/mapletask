import { buttonVariants } from '@/components/ui/button';
import { siteConfig } from '@/config/site';
import { cn, sortPosts } from '@/lib/utils';
import { posts } from '#site/content';
import Link from 'next/link';
import { PostItem } from '@/components/post-item';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AppleIcon } from 'lucide-react';
import Image from 'next/image';
import calertLogo from '@/public/static/calendar-with-day.svg';
import bridelessLogo from '@/public/static/bridgeless-logo.svg';

export default function Home() {
  const latestPosts = sortPosts(posts).slice(0, 5);
  return (
    <>
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:mt-10 lg:py-32">
        <div className="container flex flex-col gap-4 text-center">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-balance">
            mapletask
          </h1>
          <div className="flex flex-col gap-4 justify-center sm:flex-row">
            <Link
              href="/blog"
              className={cn(buttonVariants({ size: 'lg' }), 'w-full sm:w-fit')}
            >
              Latest Posts
            </Link>
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className={cn(
                buttonVariants({ variant: 'outline', size: 'lg' }),
                'w-full sm:w-fit'
              )}
            >
              GitHub
            </Link>
          </div>
        </div>
      </section>

      <section className="container max-w-4xl mx-auto px-4 mb-20">
        <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-5xl font-black text-center">
          Release Apps
        </h2>

        <div className="text-center mb-8">
          <Image
            src={calertLogo}
            alt="Calert Logo"
            width={100}
            height={100}
            className="mx-auto mb-4"
          />
          <h2 className="text-3xl font-bold mb-2">Calert</h2>
          <p className="text-muted-foreground">
            우리만의 캘린더, 함께하고 싶은 순간을 한곳에
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Card className="w-full sm:w-1/2">
            <CardHeader>
              <CardTitle className="text-xl">App Store</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center gap-4">
              <Image
                src={calertLogo}
                alt="Calert App on Apple Store"
                width={160}
                height={160}
                className="rounded-md"
              />
              <Link
                href="https://apps.apple.com/kr/app/calert/id6737229946"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants({ variant: 'default' }), 'w-full')}
              >
                Download Now
              </Link>
            </CardContent>
          </Card>
          <Card className="w-full sm:w-1/2">
            <CardHeader>
              <CardTitle className="text-xl">Google Play</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center gap-4">
              <Image
                src={calertLogo}
                alt="Calert App on Google Play"
                width={160}
                height={160}
                className="rounded-md"
              />
              <button
                className={cn(
                  buttonVariants({ variant: 'secondary' }),
                  'w-full'
                )}
                disabled
              >
                Coming Soon
              </button>
            </CardContent>
          </Card>
        </div>

        {/*
         */}
        {/* <div className="text-center mt-8 mb-8">
          <h2 className="text-3xl font-bold mb-2">Bridgeless</h2>
          <p className="text-muted-foreground">
            언어를 넘어, 문화를 나누는 특별한 순간
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Card className="w-full sm:w-1/2">
            <CardHeader>
              <CardTitle className="text-xl">App Store</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center gap-4">
              <Image
                src={bridelessLogo}
                alt="Bridgeless App on Apple Store"
                width={160}
                height={160}
                className="rounded-md"
              />
              <button
                className={cn(
                  buttonVariants({ variant: 'secondary' }),
                  'w-full'
                )}
                disabled
              >
                Coming Soon
              </button>
            </CardContent>
          </Card>
          <Card className="w-full sm:w-1/2">
            <CardHeader>
              <CardTitle className="text-xl">Google Play</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center gap-4">
              <Image
                src={bridelessLogo}
                alt="Bridgeless App on Google Play"
                width={160}
                height={160}
                className="rounded-md"
              />
              <button
                className={cn(
                  buttonVariants({ variant: 'secondary' }),
                  'w-full'
                )}
                disabled
              >
                Coming Soon
              </button>
            </CardContent>
          </Card>
        </div> */}
      </section>

      <section className="container max-w-4xl mx-auto px-4 mb-20">
        <div className="text-center mb-8">
          <Image
            src={bridelessLogo}
            alt="Calert Logo"
            width={100}
            height={100}
            className="mx-auto mb-4"
          />
          <h2 className="text-3xl font-bold mb-2">Bridgeless</h2>
          <p className="text-muted-foreground">
            언어를 넘어, 문화를 나누는 특별한 순간
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Card className="w-full sm:w-1/2">
            <CardHeader>
              <CardTitle className="text-xl">App Store</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center gap-4">
              <Image
                src={bridelessLogo}
                alt="Calert App on Apple Store"
                width={160}
                height={160}
                className="rounded-md"
              />
              <button
                className={cn(
                  buttonVariants({ variant: 'secondary' }),
                  'w-full'
                )}
                disabled
              >
                Coming Soon
              </button>
            </CardContent>
          </Card>
          <Card className="w-full sm:w-1/2">
            <CardHeader>
              <CardTitle className="text-xl">Google Play</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center gap-4">
              <Image
                src={bridelessLogo}
                alt="Calert App on Google Play"
                width={160}
                height={160}
                className="rounded-md"
              />
              <button
                className={cn(
                  buttonVariants({ variant: 'secondary' }),
                  'w-full'
                )}
                disabled
              >
                Coming Soon
              </button>
            </CardContent>
          </Card>
        </div>

        {/*
         */}
        {/* <div className="text-center mt-8 mb-8">
          <h2 className="text-3xl font-bold mb-2">Bridgeless</h2>
          <p className="text-muted-foreground">
            언어를 넘어, 문화를 나누는 특별한 순간
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Card className="w-full sm:w-1/2">
            <CardHeader>
              <CardTitle className="text-xl">App Store</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center gap-4">
              <Image
                src={bridelessLogo}
                alt="Bridgeless App on Apple Store"
                width={160}
                height={160}
                className="rounded-md"
              />
              <button
                className={cn(
                  buttonVariants({ variant: 'secondary' }),
                  'w-full'
                )}
                disabled
              >
                Coming Soon
              </button>
            </CardContent>
          </Card>
          <Card className="w-full sm:w-1/2">
            <CardHeader>
              <CardTitle className="text-xl">Google Play</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center gap-4">
              <Image
                src={bridelessLogo}
                alt="Bridgeless App on Google Play"
                width={160}
                height={160}
                className="rounded-md"
              />
              <button
                className={cn(
                  buttonVariants({ variant: 'secondary' }),
                  'w-full'
                )}
                disabled
              >
                Coming Soon
              </button>
            </CardContent>
          </Card>
        </div> */}
      </section>

      <section className="container max-w-4xl py-6 lg:py-10 flex flex-col space-y-6">
        <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-5xl font-black text-center">
          Latest Posts
        </h2>
        <ul className="flex flex-col">
          {latestPosts.map((post) => (
            <li key={post.slug} className="first:border-t first:border-border">
              <PostItem
                slug={post.slug}
                title={post.title}
                description={post.description}
                date={post.date}
                tags={post.tags}
              />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

// import { buttonVariants } from '@/components/ui/button';
// import { siteConfig } from '@/config/site';
// import { cn, sortPosts } from '@/lib/utils';
// import { posts } from '#site/content';
// import Link from 'next/link';
// import { PostItem } from '@/components/post-item';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { AppleIcon } from 'lucide-react';

// export default function Home() {
//   const latestPosts = sortPosts(posts).slice(0, 5);
//   return (
//     <>
//       <section className="space-y-6 pb-8 pt-6 md:pb-12 md:mt-10 lg:py-32">
//         <div className="container flex flex-col gap-4 text-center">
//           <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-balance">
//             mapletask
//           </h1>
//           <div className="flex flex-col gap-4 justify-center sm:flex-row">
//             <Link
//               href="/blog"
//               className={cn(buttonVariants({ size: 'lg' }), 'w-full sm:w-fit')}
//             >
//               Latest Posts
//             </Link>
//             <Link
//               href={siteConfig.links.github}
//               target="_blank"
//               rel="noreferrer"
//               className={cn(
//                 buttonVariants({ variant: 'outline', size: 'lg' }),
//                 'w-full sm:w-fit'
//               )}
//             >
//               GitHub
//             </Link>
//           </div>
//         </div>
//       </section>

//       <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-5xl font-black text-center mb-5">
//         Release Apps
//       </h2>

//       <div className="flex justify-center flex-col sm:flex-row gap-6 px-4 mb-20">
//         <Card className="w-full sm:w-72">
//           <CardHeader>
//             <CardTitle className="flex items-center justify-between">
//               <span>Apple Store</span>
//               <AppleIcon className="h-6 w-6" />
//             </CardTitle>
//           </CardHeader>
//           <CardContent>
//             <Link
//               href="https://apps.apple.com/kr/app/calert/id6737229946"
//               target="_blank"
//               rel="noopener noreferrer"
//               className={cn(buttonVariants({ variant: 'default' }), 'w-full')}
//             >
//               Download Now
//             </Link>
//           </CardContent>
//         </Card>
//         <Card className="w-full sm:w-72">
//           <CardHeader>
//             <CardTitle className="flex items-center justify-between">
//               <span>Google Play</span>
//               <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
//                 <path d="M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 0 1 0 2.594zM1.337.924a1.486 1.486 0 0 0-.112.568v21.017c0 .217.045.419.124.6l11.155-11.087L1.337.924zm12.207 10.065l3.258-3.238L3.45.195a1.466 1.466 0 0 0-.946-.179l11.04 10.973zm0 2.067l-11 10.933c.298.036.612-.016.906-.183l13.324-7.54-3.23-3.21z" />
//               </svg>
//             </CardTitle>
//           </CardHeader>
//           <CardContent>
//             <button
//               className={cn(buttonVariants({ variant: 'secondary' }), 'w-full')}
//               disabled
//             >
//               Coming Soon
//             </button>
//           </CardContent>
//         </Card>
//       </div>
//       <section className="container max-w-4xl py-6 lg:py-10 flex flex-col space-y-6">
//         <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-5xl font-black text-center">
//           Latest Posts
//         </h2>
//         <ul className="flex flex-col">
//           {latestPosts.map((post) => (
//             <li key={post.slug} className="first:border-t first:border-border">
//               <PostItem
//                 slug={post.slug}
//                 title={post.title}
//                 description={post.description}
//                 date={post.date}
//                 tags={post.tags}
//               />
//             </li>
//           ))}
//         </ul>
//       </section>
//     </>
//   );
// }
