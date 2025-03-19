import { buttonVariants } from '@/components/ui/button';
import { siteConfig } from '@/config/site';
import { cn, sortPosts } from '@/lib/utils';
import { posts } from '#site/content';
import Link from 'next/link';
import { PostItem } from '@/components/post-item';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import CalertLogo from '../assets/images/calert/calendar-with-day.svg';
import BridelessLogo from '../assets/images/bridgeless/bridgeless.png';

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
            src={CalertLogo}
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
                src={CalertLogo}
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
                src={CalertLogo}
                alt="Calert App on Google Play"
                width={160}
                height={160}
                className="rounded-md"
              />
              <Link
                href="https://play.google.com/store/apps/details?id=com.calert&hl=ko"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants({ variant: 'default' }), 'w-full')}
              >
                Download Now
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="container max-w-4xl mx-auto px-4 mb-20">
        <div className="text-center mb-8">
          <Image
            src={BridelessLogo}
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
                src={BridelessLogo}
                alt="Calert App on Apple Store"
                width={160}
                height={160}
                className="rounded-md"
              />
              <Link
                href="https://apps.apple.com/kr/app/bridgeless/id6740178723"
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
                src={BridelessLogo}
                alt="Calert App on Google Play"
                width={160}
                height={160}
                className="rounded-md"
              />
              <Link
                href="https://play.google.com/store/apps/details?id=com.bridgeless"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants({ variant: 'default' }), 'w-full')}
              >
                Download Now
              </Link>
            </CardContent>
          </Card>
        </div>
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
