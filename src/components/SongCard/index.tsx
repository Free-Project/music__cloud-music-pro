import { Card, Typography } from "@douyinfe/semi-ui";
import classNames from "classnames";
import CoverImage from "../CoverImage";

const { Title, Text } = Typography;

interface ISongCardProps {
  coverImgUrl?: string;
  songName?: string;
  className?: string;
  artistsName?: string;
  onClick?: () => void;
}

function SongCard(props: ISongCardProps) {
  const { coverImgUrl, songName, className, artistsName, onClick } = props;
  return (
    <div className={classNames("song-card", className)} onClick={onClick}>
      <Card
        className={classNames("w-56 dark:bg-zinc-800")}
        shadows="always"
        bordered={false}
        cover={<CoverImage src={`${coverImgUrl}?param=224y224`} />}
      >
        <Title heading={5} ellipsis={{ showTooltip: true }}>
          {songName}
        </Title>
        {artistsName && <Text>{artistsName}</Text>}
      </Card>
    </div>
  );
}

export default SongCard;
