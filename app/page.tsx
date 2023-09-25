import cssmodule from "../styles/local.module.scss";

import Menu from "../components/menu";

export default function HomePage() {
  return (
    <>
      <Menu items={["one", "two"]} />
      <h1 className={"titleGlobal" + " " + cssmodule["titleLocal"]}>Home page</h1>
      <div>{`Buffalo buffalo `.repeat(100000)}</div>
    </>
  );
}
