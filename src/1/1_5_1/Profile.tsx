import { getImageUrl } from "./util";

type AvatarProps = {
  id: string;
  width: number;
  height: number;
  alt?: string;
};

type ProfileProps = {
  name: string;
  profession: string;
  awards: string[];
  discovered: string;
  avatar: AvatarProps;
};

export default function Profile({
  name,
  profession,
  awards,
  discovered,
  avatar
}: ProfileProps) {
  return (
    <section className="profile">
      <h2>{name}</h2>
      <img
        className="avatar"
        src={getImageUrl(avatar.id)}
        alt={avatar.alt || name}
        width={avatar.width}
        height={avatar.height}
      />
      <ul>
        <li>
          <b>Profession: </b>
          {profession}
        </li>
        <li>
            <b>Awards: {awards.length}</b>{" "}
            ({awards.join(", ")})
        </li>
        <li>
          <b>Discovered: </b>
          {discovered}
        </li>
      </ul>
    </section>
  );
}