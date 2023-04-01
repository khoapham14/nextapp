import * as React from "react";
import PocketBase from "pocketbase";
import Link from "next/link";

export interface CodeComponent {
  id: string;
  title: string;
  code: any;
  author: string;
  source: string;
  created: string;
}

const pb = new PocketBase("http://127.0.0.1:8090");

async function getComponents() {
  const res = await pb.collection("components").getFullList(200);
  return res;
}

export default async function ComponentsPages() {
  const components = await getComponents();
  console.log(components);

  return (
    <div>
      <h1>Components</h1>
      <div>
        {components.map((component) => {
          return (
            <Component
              key={component.id}
              id={component.id}
              title={component.title}
              author={component.author}
              source={component.source}
              code={component.code}
              created={component.created}
            />
          );
        })}
      </div>
    </div>
  );
}

function Component(component: CodeComponent) {
  const { id, title, code, author, source, created } = component || {};

  return (
    <Link href={`/notes/${id}`}>
      <div>
        <h2>{title}</h2>
        <h3>{author}</h3>
        <h3>{source}</h3>
        <h3>{created}</h3>
        <h5>{code}</h5>
      </div>
    </Link>
  );
}
