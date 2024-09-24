import InstagramEmbed from "../components/InstagramEmbed";
import { NewWindowPopup } from "../components/NewWindowPopup";
export const MainPage = () => {
  return (
    <>
      <div>Main</div>
      <NewWindowPopup content={"https://www.youtube.com/embed/dQw4w9WgXcQ"} />
      <InstagramEmbed />
    </>
  );
};
