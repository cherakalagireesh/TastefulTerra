import Item from "./Item";
import ItemsContainer from "../../ui/ItemsContainer";

export default function Items() {
  return (
    <ItemsContainer>
      {Array.from({ length: 13 }).map((index) => {
        return <Item />;
      })}
    </ItemsContainer>
  );
}
