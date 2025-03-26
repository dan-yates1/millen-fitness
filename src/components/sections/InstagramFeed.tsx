import Image from 'next/image';
import Link from 'next/link';
import Section from '../ui/Section';
import Button from '../ui/Button';

const InstagramFeed = () => {
  // Using the same image multiple times as requested
  const posts = [
    { id: 1, imageUrl: '/instagram/insta-post-1.jpeg', postUrl: 'https://www.instagram.com/p/DFV9VtTOVJi/' },
    { id: 2, imageUrl: '/instagram/insta-post-1.jpeg', postUrl: 'https://www.instagram.com/p/DFV9VtTOVJi/' },
    { id: 3, imageUrl: '/instagram/insta-post-1.jpeg', postUrl: 'https://www.instagram.com/p/DFV9VtTOVJi/' },
    { id: 4, imageUrl: '/instagram/insta-post-1.jpeg', postUrl: 'https://www.instagram.com/p/DFV9VtTOVJi/' },
  ];

  const profileUrl = 'https://www.instagram.com/millenfitness/';

  return (
    <Section
      id="instagram"
      title="Follow Me on Instagram"
      subtitle="Check out my latest posts for tips, motivation, and updates"
      dark // Assuming a dark background like the blog section
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {posts.map((post) => (
          <Link key={post.id} href={post.postUrl} target="_blank" rel="noopener noreferrer">
            <div className="relative aspect-square overflow-hidden rounded-lg shadow-md hover:opacity-90 transition-opacity">
              <Image
                src={post.imageUrl}
                alt={`Instagram post ${post.id}`}
                layout="fill"
                objectFit="cover"
              />
            </div>
          </Link>
        ))}
      </div>

      <div className="text-center">
        <Button href={profileUrl} variant="secondary" external={true}> {/* Use external prop */}
          Visit Instagram Profile
        </Button>
      </div>
    </Section>
  );
};

export default InstagramFeed;
