import cssmodule from "../../styles/local.module.scss";

import Menu from "../../components/menu";

export async function generateStaticParams() {
  return ["one", "two"];
}

export default function Page({ params }: { params: { number: string } }) {
  return (
    <>
      <Menu items={[`${params.number == "one" ? "two" : "one"}`]} />
      <h1 className={"titleGlobal" + " " + cssmodule["titleLocal"]}>Page {params.number}</h1>
      <div>{`Page ${params.number} `.repeat(100000)}</div>
    </>
  );
}
