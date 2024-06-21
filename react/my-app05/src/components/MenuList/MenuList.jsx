import "./MenuList.css";
import { MenuListItem } from "../MenuListItem/MenuListItem";

export function MenuList(props) {
  const menus = [
    "기분이 좋아요.",
    "기분이 정말 좋아요!",
    "기분이 최고에요!",
    "기분이 미쳤어요~",
  ];

  return (
    <ul className="container-list">
      {menus.map((moodEl) => {
        return (
          <MenuListItem
            key={moodEl}
            clickEvent={props.onItemClick}
            mood={moodEl}
          />
        );
      })}
    </ul>
  );
}
