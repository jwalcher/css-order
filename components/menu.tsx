import Link from "next/link";

const Menu: React.FC<{ items: string[] }> = (props) => {
  return (
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      {props.items.map((item) => (
        <li>
          <Link href={`/${item}`}>{item}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Menu;
