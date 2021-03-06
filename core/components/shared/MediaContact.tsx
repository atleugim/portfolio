import {
  EMAIL_URL,
  GITHUB_URL,
  INSTAGRAM_URL,
  TWITTER_URL,
} from "@/utils/vars";
import GitHub from "./icons/GitHub";
import Instagram from "./icons/Instagram";
import Mail from "./icons/Mail";
import Twitter from "./icons/Twitter";

const MediaContact = () => {
  return (
    <div className="fixed bottom-0 flex justify-between px-4 animate-slideInUp">
      <div className="flex flex-col items-center justify-end space-y-5 dark:text-light text-primary-dark text-opacity-80">
        <Mail size="1.3em" link={EMAIL_URL} />
        <GitHub size="1.3em" link={GITHUB_URL} />
        <Instagram size="1.4em" link={INSTAGRAM_URL} />
        <Twitter size="1.3em" link={TWITTER_URL} />
        <div className="w-[1px] h-32 bg-primary dark:bg-light bg-opacity-70" />
      </div>
    </div>
  );
};

export default MediaContact;
