import { Htag, Button, Ptag, Tag } from "@/components";

export default function Home() {
  return (
    <main>
      <Htag tag='h1'>text</Htag>
      <Button variant='primary' arrow='right'>button</Button>
      <Button variant='ghost' arrow='right'>button</Button>
      <Ptag size='l'>big</Ptag>
      <Ptag>medium</Ptag>
      <Ptag size='s'>small</Ptag>
      <Tag size='s'>small</Tag>
      <Tag size='m' color='red'>medium</Tag>
      <Tag size='s' href='#' color='primary'>small</Tag>
    </main>
  );
}
