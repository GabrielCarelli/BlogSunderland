import { Card, CardContent } from "@/components/ui/card";
import { simpleBlogCard } from "./lib/interface";
import { client, urlFor } from "./lib/sanity";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

async function getData() {
  const query = `
   *[_type =='blog'] | order(_createdAt desc){
    title,
      smalldescription,
      "currentSlug": slug.current,
      titleImage,
     }`;
  const data = await client.fetch(query);
  return data;
}

export default async function Home() {
  const data: simpleBlogCard[] = await getData();
  console.log(data);
  return (
    <div className="tw-grid tw-grid-cols-1 tw-mt-5 tw-gap-5">
      {data.map((post, idx) => {
        return (
          <Card key={idx}>
            <Image
              src={urlFor(post.titleImage).url()}
              alt="Imagem"
              width={500}
              height={500}
              className="tw-rounded-t-lg tw-h-[200px] tw-object-cover"
            />
            <CardContent className="tw-mt-5">
              <h1 className="tw-text-xl tw-font-extrabold">{post.title}</h1>
              <p className="tw-line-clamp-3 tw-text-sm tw-mt-2">
                {post.smalldescription}
              </p>
              <Button asChild className="tw-w-full tw-mt-7">
                <Link href={`/blog/${post.currentSlug}`}>Ver Noticia</Link>
              </Button>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
